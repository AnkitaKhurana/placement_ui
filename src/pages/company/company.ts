import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCompanyPage } from '../add-company/add-company';
import { EditCompanyPage } from '../edit-company/edit-company';

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  companies = [
    'Pokémon Yellow',
    'Super Metroid',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }
  companySelected(company){
    this.navCtrl.push(EditCompanyPage, {
      data: company
    })
  }
  loadAddCompany(){
  	this.navCtrl.push(AddCompanyPage);
  }
}
