import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  items: any[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {},{},{},{},{}
    ]
  }

}
