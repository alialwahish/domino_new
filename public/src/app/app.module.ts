import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';


import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeadrBoardComponent } from './leadr-board/leadr-board.component';
import { GameComponent } from './game/game.component';



const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    LoginComponent,
    RegisterComponent,
    LeadrBoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SocketIoModule.forRoot(config),
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
