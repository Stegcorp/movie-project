import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';


import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from './http.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MovieModule} from './modules/movie/movie.module';
import {PopularComponent} from './components/popular/popular.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainLayoutComponent,
        PopularComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MovieModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
