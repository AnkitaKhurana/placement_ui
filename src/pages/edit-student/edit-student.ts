import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { RegisterStudentPage } from '../register-student/register-student';

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
   companies = [];
   constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,public toastCtrl: ToastController) {
   }
   ionViewWillEnter(){
     this.rollno = this.navParams.get('data').rollno;
     this.name = this.navParams.get('data').name;
     this.department = this.navParams.get('data').department;
     this.cgpa = this.navParams.get('data').cgpa;
     if(this.navParams.get('data').companiesRegistered.length>0)
     this.companies = this.returnCompanyNames(this.navParams.get('data').companiesRegistered); 
     else 
     this.companies = ['Student not yet Registered for any Company'];
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
   registerToCompany(){
         this.navCtrl.push(RegisterStudentPage,{rollno:this.rollno});
   }
   returnCompanyNames(objectIds){
     var c =[];
     for(let i in objectIds)
     {        this.httpClient.get('http://localhost:3456/api/company/object/'+objectIds[i])
    .subscribe(res => c.push(res.name))
     }
     return c;
   }

 }
