import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddStudentPage } from '../add-student/add-student';
import { EditStudentPage } from '../edit-student/edit-student';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  students = [
    'Pokémon Yellow',
    'Super Metroid',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
