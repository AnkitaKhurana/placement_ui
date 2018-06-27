import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStudentPage } from '../register-student/register-student';

/**
 * Generated class for the EditCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-company',
  templateUrl: 'edit-company.html',
})
export class EditCompanyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }
  loadRegisterStudent(){
    this.navCtrl.push(RegisterStudentPage);
  }
}
