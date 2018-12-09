import { MatSidenav } from '@angular/material';
import { Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  @ViewChild('sideNav') public sideNav: MatSidenav;
  isHandset:boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.isHandset = result.matches
        return result.matches
      })
    );


  constructor(private breakpointObserver: BreakpointObserver, public navigation: NavigationService) {
  }
  
  scrollTo(view):void{

    if(this.isHandset){
      this.sideNav.close();
    }

    return this.navigation.scrollTo(view);
  }
}
