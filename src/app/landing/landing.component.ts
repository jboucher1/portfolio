import { NavigationService } from './../services/navigation/navigation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent{

  constructor(public navigation:NavigationService) { }
}
