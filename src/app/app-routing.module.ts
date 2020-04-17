import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DiscogsComponent } from './discogs/discogs.component'
const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'news', component: NewsComponent},
  {path:'discogs', component: DiscogsComponent}
];
@NgModule({
  imports: 
    [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
