import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./dashboard/home/home.component";
import { NewsfeedComponent } from "./dashboard/newsfeed/newsfeed.component";
import { PostComponent } from "./dashboard/post/post.component";
import { PosttrackerComponent } from "./dashboard/posttracker/posttracker.component";

const pathConfiguration:Routes=[
    //{path:"", pathMatch:"full", redirectTo:"app-home"},
    {path:"app-home",component:HomeComponent, children:[
        {path:"post", component:PostComponent},
        {path:"posttracker", component:PosttrackerComponent},
        {path:"newsfeed", component:NewsfeedComponent}
    ]}
]

@NgModule({
    imports:[RouterModule.forRoot(pathConfiguration)],
    exports:[RouterModule]
})
export class AppRouterModule
{

}