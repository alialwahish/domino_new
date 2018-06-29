import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RegisterComponent } from './register/register.component';
import { LeadrBoardComponent } from './leadr-board/leadr-board.component';
import { GameComponent } from './game/game.component';




const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"home"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashBoard',component:DashBoardComponent},
  {path:'register',component:RegisterComponent},
  {path:'board',component:LeadrBoardComponent},
  {path:'game',component:GameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
