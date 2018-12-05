import { MatSidenav} from '@angular/material';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isHandset:boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.isHandset = result.matches
        return result.matches
      })
    );


  constructor(private breakpointObserver: BreakpointObserver, private navigation: NavigationService) {
  }

  scrollTo(view, nav):void{
    if(nav && this.isHandset){
      nav.close();
    }

    return this.navigation.scrollTo(view);
  }
}
