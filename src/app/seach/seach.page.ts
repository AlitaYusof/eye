import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-seach',
  templateUrl: './seach.page.html',
  styleUrls: ['./seach.page.scss'],
})

export class SeachPage implements OnInit {
  constructor(public navCtrl: NavController) {
  }
  pushPage(){
    this.navCtrl.navigateRoot('/tabs/(home:home)');
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  searchQuery: string = "";
  items: string[];
  slides: any[];
  initailizeItems() {
    this.items = [
      'AAA',
      'BBB',
      'CCC',
      'EEE',
      'FFF',
      'GGG',
      'HHH',
      'II',
      'JJJ',
      'KKKK',
      'LLLL',
      'MMMM',
      'NNNN',
      'OOOO',
      'PPPP',
      'QQQ',
      'RRRR',
      'ZZZ'
    ]
  }

  onInput(ev: any) {
    this.initailizeItems();


    let val = ev.target.value;

    if (val && val.trim() != "") {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.items = null;
    }
  }
  mySlideOptions() {

    this.slides = [{
      MediaUrl: 'img/ems.jpg'
    },
    {
      MediaUrl: 'img/logistic.png'
    }]
  }
}