var express = require("express");
var app=express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/new_domino_db');

var MongoSchema = new mongoose.Schema({
    email:{type: String, required:true,unique:true, minlength:4},
    password:{type:String,required:true,minlength:8},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    wins:{type:Number,default:0},
    loses:{type:Number,default:0},
    total_points_scored:{type:Number,default:0},
    game_played:{type:Number,default:0},
    hand:{type:Array,default:[]}
    },
    {timestamps:true}
)

mongoose.model("Users",MongoSchema);

var Users = mongoose.model('Users');
var $ = require('jquery');


var DominoSchema= new mongoose.Schema({
    head:{type:Number},
    tail:{type:Number},
    points:{type:Number}
})

mongoose.model("Dominos",DominoSchema);
var Dominos = mongoose.model('Dominos')




app.use(express.static(__dirname+'/public/dist/public'))

var bodyParser= require("body-parser");



var path =require("path");

app.use(bodyParser.json());

var socket= require('socket.io');
const server=app.listen(8000);
var io = socket(server);
console.log("listening on port 8000") 


var loggedUsers=[];
var gameUsers=0;
var allDominos=[];
var table=[];


io.on('connection',(socket)=>{
    // console.log("starting server ")
    socket.on('new_user',function(data){
        // console.log(data)
        loggedUsers.push(data)
        io.emit('loggedUsers',loggedUsers);
    })
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    socket.on('new_game',function(data){
        console.log("creating a new game for ",data.first_name)
        gameUsers+=1;
        var tempUser=data;
        // console.log("temp user",tempUser.first_name)
        // console.log("players ",gameUsers)
        Dominos.find({},function(err,data){
            if(err){
                console.log("Error loading dominos in socket")
                
            }
            else{
                if(allDominos.length==0){

                    // console.log("looping in all Dominos")
                    for(var bone of data){
                        allDominos.push(bone)
                    }
                    
                }
                shuffle(allDominos);
                console.log('waiting for other player to join')
                if(gameUsers<=2){
                    // console.log("game is ready to start two players logged in")
                // console.log("bones",allDominos)
                var tempHand=[]
                    for(var j=0;j<7;j++){
                    tempHand.push(allDominos.pop())
                    console.log("left in deck",allDominos.length)
                    
                    }
                    tempUser.hand=tempHand;
                    // console.log("user ",tempUser.first_name," loadded hand and ready to play")
                    // console.log("user hand",tempUser.hand)
                    socket.emit('load_user',tempUser)
                gameUsers=0;
                tempHand=[];
                tempUser=null
                    
            }
            }
        })
        
    })

    socket.on('drawing one bone',function(data){
        data.push(allDominos.pop())
        console.log("left in deck",allDominos.length)
        if(allDominos.length==0){
            io.sockets.emit("empty deck");
        }
        socket.emit('receiving new hand',data);
    })



    socket.on('userHand',function(data){
        socket.broadcast.emit('opHand',data);
    })


    socket.on('table',function(data){
        // console.log('possible table ',data)
        socket.broadcast.emit('newTable',data)
    })
    
    socket.on('noBone',function(data){
        // console.log('possible table ',data)
        socket.broadcast.emit('nextPlayer',data)
    })

    



})// on connection

// creating session
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.get('/api/getAllUsers',function(req,res){
    Users.find({},function(err,users){
        if(err){
            res.json({msg:"error grabbing all users"})
        }
        else{
            res.json({msg:"sending all users",data:users})
        }
    })
})

app.get('/api/createDominos',function(req,res){
    // Dominos.create({head:0,tail:0,points:0})
    Dominos.count({},function(err,data){
        //console.log("database count ",data)
        if(data<1){
            //console.log("database is empty creating dominos")
            // var dominos=[]
            for(var i =0 ;i<7;i++){
               Dominos.create({head:i,tail:i,points:i+i})
                for(var j=i+1;j<7;j++){
                    Dominos.create({head:i,tail:j,points:i+j})
                }
            }
            // console.log("created domino, ",dominos)
            // console.log(dominos.length)
            Dominos.find({},function(err,deck){
                if(err){
                    res.json({msg:"error loading dominos"})
                }
                else{

                    res.json({msg:"created deck ",data:deck})
                }
            })



        }
        else{
            //console.log("database is not empty continue to game")
            Dominos.find({},function(err,deck){
                if(err){
                    res.json({msg:"error loading dominos"})
                }
                else{

                    res.json({msg:"deck exist ",data:deck})
                }
            })
        }
    })
})

app.get('/api/isLogged',function(req,res){
    //console.log('got inside isLogged function')
    // console.log("printing what is in session",req.session)
    if(req.session.email){
      //  console.log("logged in user",req.session.name)
        Users.findOne({email:req.session.email},function(err,user){
            if(err){
                res.json({msg:"error finding user in log in session"})
            }
            else{
                // console.log("sending data to home:",user)
                res.json({msg:"user logged in",user:user})
            }
        })
    }
    else{
       // console.log("No user logged in!")
    }
})



app.post('/api/signUp',function(req,res){

    // console.log('trying to signUp in database',req.body)
    Users.create(req.body,function(err,user){
        if(err){
            res.json({msg:"e"})
        }
        else{
            Users.find({},function(err,users){
                if(err){
                    res.json({msg:"error reloading all users"})
                }
                else{
                    req.session.id=user._id;
                    req.session.email=user.email;
                    res.json({msg:"success added user",data:users})

                }
            })
        }
    })
   
})


app.get('/api/logout',function(req,res){
    // console.log("loging out")
    req.session.destroy();
    res.json({msg:"logged out session is empty"})
})

app.post('/api/login',function(req,res){
    // console.log('trying to login in database',req.body)
    Users.findOne({email:req.body.email,password:req.body.password},function(err,user){
        if(err){
            res.json({msg:"Error loging user"})

        }
        else{

            if(user){
                // console.log("user logging in ",user)
                req.session.id=user._id;
                req.session.email=user.email;
                req.session.name=user.first_name+" "+user.last_name
                res.json({msg:"user logged in",user:user})
                

            }
            else{
                res.json({msg:"e"})
            }
        }
    })
})



// redirect to home
app.all("*",(req,res,)=>{
    res.sendFile(path.resolve('./public/dist/public/index.html'))    
})


// app.listen(8000,function(){
//     console.log("listining on port 8000")
// })