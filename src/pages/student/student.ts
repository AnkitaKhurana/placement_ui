import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddStudentPage } from '../add-student/add-student';
import { EditStudentPage } from '../edit-student/edit-student';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})


export class StudentPage {
  students = <any>[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient) {
  }
  ionViewWillEnter(){
    this.httpClient.get('http://localhost:3456/api/student/all')
    .subscribe(res => this.students=res);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  loadAddStudent(){
  	this.navCtrl.push(AddStudentPage);
  }
  studentSelected(student){
    this.navCtrl.push(EditStudentPage, {
      data: student
    })
  }
}
