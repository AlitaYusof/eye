import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.page.html',
  styleUrls: ['./seach.page.scss'],
})
export class HomePage {
  searchQuery: string = "";
  items: string[];
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

   if(val && val.trim() !=""){
     this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
  }
}
