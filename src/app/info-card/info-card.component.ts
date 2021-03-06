import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent{
  @Input('logo') logo :string;
  @Input('title') title :string;
  @Input('subTitle') subTitle :string;
  @Input('commits') commits :string;
  @Input('linesAdded') linesAdded :string;
  @Input('linesRemoved') linesRemoved :string;

  constructor() { }

  getLogo(){
    return {
      backgroundImage:`url(${this.logo})`
    }
  }

}
