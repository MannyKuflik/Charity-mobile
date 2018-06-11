import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import {HttpModule} from '@angular/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage} from '../pages/registration/registration'; 
import { ProfilePage } from '../pages/profile/profile';
import { CharityListPage } from '../pages/charity-list/charity-list';
import { CharityProfilePage } from '../pages/charity-profile/charity-profile';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { DonationsPage } from '../pages/donations/donations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    CharityListPage,
    CharityProfilePage,
    RegistrationPage,
    PortfolioPage,
    DonationsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    CharityListPage,
    CharityProfilePage,
    RegistrationPage,
    PortfolioPage,
    DonationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
