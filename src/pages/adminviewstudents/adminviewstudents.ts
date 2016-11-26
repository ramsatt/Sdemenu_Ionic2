import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Adminviewstudents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adminviewstudents',
  templateUrl: 'adminviewstudents.html'
})
export class AdminviewstudentsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AdminviewstudentsPage Page');
  }

}
