import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-add-student',
   templateUrl: 'add-student.html',
 })
 export class AddStudentPage {

   constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,public toastCtrl: ToastController) {
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad AddStudentPage');
   }
   onAddStudent(value : {name:string, department:string,rollno:number,cgpa:number}){
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
     this.httpClient.post('http://localhost:3456/api/student/add', value, httpOptions)
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
