import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from './../test/test';
import { Materialize } from 'materialize-css';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTestPagina(){
    this.navCtrl.push(TestPage);
  }

}
