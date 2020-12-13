import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() img: string;
    @Input() title: string;
    @Input() url: string;

    constructor() {
      console.log(this.img);
      console.log(this.title);
      console.log(this.url);
    }

    ngOnInit() {
    }

}
