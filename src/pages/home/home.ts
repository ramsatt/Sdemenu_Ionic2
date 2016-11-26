import { Component} from '@angular/core';

import { NavController } from 'ionic-angular';
import { AdmindashPage } from '../admindash/admindash';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  public login(username: string, password: string)
  {
    if(username == 'admin' && password == 'admin@123')
    {
      this.navCtrl.push(AdmindashPage, {

      });
    }
  }

}
