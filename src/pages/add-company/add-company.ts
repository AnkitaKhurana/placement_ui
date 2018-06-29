import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-company',
  templateUrl: 'add-company.html',
})
export class AddCompanyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCompanyPage');
  }
  onAddCompany(value : {c_id:number, name:string, role:string,studentsRequired:number,package:number}){
  	const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
     this.httpClient.post('http://localhost:3456/api/company/add', value, httpOptions)
     .subscribe(
       (res) => {
         console.log(res);
         this.navCtrl.pop();
       },
       err => {
         console.log(err.error.message);
         const toast = this.toastCtrl.create({
           message: err.error.message,
           duration: 3000
         });
         toast.present();
       },
       );
  }

}
