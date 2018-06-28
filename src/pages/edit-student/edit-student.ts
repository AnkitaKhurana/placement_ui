import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EditStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-edit-student',
   templateUrl: 'edit-student.html',
 })
 export class EditStudentPage {
   rollno : number;
   name : string;
   department: string;
   cgpa : number;
   companies = ['No Company Registered Yet'];
   constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,public toastCtrl: ToastController) {
   }
   ionViewWillEnter(){
     this.rollno = this.navParams.get('data').rollno;
     this.name = this.navParams.get('data').name;
     this.department = this.navParams.get('data').department;
     this.cgpa = this.navParams.get('data').cgpa;
     if(this.navParams.get('data').companiesRegistered.length>0)
     this.companies = this.navParams.get('data').companiesRegistered;     
   }
   ionViewDidLoad() {
     console.log('ionViewDidLoad EditStudentPage');
   }
   onEditStudent(value : {name:string, department:string,rollno:number,cgpa:number}){
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
     this.httpClient.put('http://localhost:3456/api/student/edit/'+value.rollno, value, httpOptions)
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
       this.navCtrl.pop();    
   }
 }
