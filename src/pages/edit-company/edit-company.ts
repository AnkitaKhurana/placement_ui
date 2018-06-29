import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-company',
  templateUrl: 'edit-company.html',
})
export class EditCompanyPage {
  c_id:number;
  name:string;
  role:string;
  studentsRequired:number;
  package:number;
  students =[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,public toastCtrl: ToastController) {
  }
  ionViewWillEnter(){
    this.c_id= this.navParams.get('data').c_id;
    this.name = this.navParams.get('data').name;
    this.role = this.navParams.get('data').role;
    this.studentsRequired = this.navParams.get('data').studentsRequired;
    this.package = this.navParams.get('data').package;
    if(this.navParams.get('data').studentsRegistered.length>0)
      this.students = this.returnStudentNames(this.navParams.get('data').studentsRegistered);
    else
      this.students =['No Student Registered Yet'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }
  onEditCompany(value : {c_id:number, name:string, role:string,studentsRequired:number,package:number}){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.httpClient.put('http://localhost:3456/api/company/edit/'+value.c_id, value, httpOptions)
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
  returnStudentNames(objectIds){
    let s: string[] = [];
    for(let i in objectIds)
      {        this.httpClient.get('http://localhost:3456/api/student/object/'+objectIds[i])
    .subscribe(res => s.push(res['name']))
  }
  return s;
}
}
