import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdmindashPage } from '../pages/admindash/admindash';
import { AdminPage } from '../pages/admin/admin';
import { AdminviewmanagementPage } from '../pages/adminviewmanagement/adminviewmanagement';
import { AdminviewhodsPage } from '../pages/adminviewhods/adminviewhods';
import { AdminviewstaffsPage } from '../pages/adminviewstaffs/adminviewstaffs';
import { AdminviewstudentsPage } from '../pages/adminviewstudents/adminviewstudents';
import { AdminviewparentsPage } from '../pages/adminviewparents/adminviewparents';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdmindashPage,
    AdminPage,
    AdminviewmanagementPage,
    AdminviewhodsPage,
    AdminviewstaffsPage,
    AdminviewstudentsPage,
    AdminviewparentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdmindashPage,
    AdminPage,
    AdminviewmanagementPage,
    AdminviewhodsPage,
    AdminviewstaffsPage,
    AdminviewstudentsPage,
    AdminviewparentsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
