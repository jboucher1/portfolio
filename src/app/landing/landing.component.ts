import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private ele: ElementRef) { }

  ngOnInit() {
  }


}
