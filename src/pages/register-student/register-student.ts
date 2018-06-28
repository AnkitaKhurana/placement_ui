import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-student',
  templateUrl: 'register-student.html',
})
export class RegisterStudentPage {

  allCompanies =[];
  registered =[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,public toastCtrl: ToastController) {
  }
  ionViewWillEnter(){
    this.httpClient.get('http://localhost:3456/api/company/all')
    .subscribe(res => this.allCompanies=res);
  }
  addToList(event,company)
  {
     if(event.checked==true)
     {this.registered.push(company);}
     else 
     {
       const index: number = this.registered.indexOf(company);
        if (index !== -1) {
            this.registered.splice(index, 1);
        }        
     }
  }
  register()
  {
    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
     this.httpClient.put('http://localhost:3456/api/student/'+this.navParams.data.rollno+'/edit/companies', this.registered, httpOptions)
     .subscribe(
       (res) => {
         console.log(res);
       },
       err => {
         const toast = this.toastCtrl.create({
           message: err.error.message,
           duration: 3000
         });
         toast.present();
       }
       );
      this.navCtrl.popToRoot();
  
   }
  
}
