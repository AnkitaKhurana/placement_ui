import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentPage } from '../student/student';
import { CompanyPage } from '../company/company';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
 	
  }
  loadManageStudent(){
  	this.navCtrl.push(StudentPage);
  }
  loadManageCompany(){
  	this.navCtrl.push(CompanyPage);
  }
}
