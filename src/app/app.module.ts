import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StudentPage } from '../pages/student/student';
import { CompanyPage } from '../pages/company/company';
import { AddStudentPage } from '../pages/add-student/add-student';
import { EditStudentPage } from '../pages/edit-student/edit-student';
import { AddCompanyPage } from '../pages/add-company/add-company';
import { EditCompanyPage } from '../pages/edit-company/edit-company';
import { RegisterStudentPage } from '../pages/register-student/register-student';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentPage,
    CompanyPage,
    AddStudentPage,
    EditStudentPage,
    AddCompanyPage,
    EditCompanyPage,
    RegisterStudentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentPage,
    CompanyPage,
    AddStudentPage,
    EditStudentPage,
    AddCompanyPage,
    EditCompanyPage,
    RegisterStudentPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
