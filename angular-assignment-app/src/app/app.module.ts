import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from './app-root/app-root.component';
import { AppRouterModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
