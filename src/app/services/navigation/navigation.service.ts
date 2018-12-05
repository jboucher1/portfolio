import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  scrollY:number;
  currentPath: string;
  current: Object;
  elements: Object;
  scrollElement: any;

  constructor(private router: Router) {}

  scrollTo(path){
    console.log(path)
    if(!path) return;
    if(path.indexOf('#') !== -1) {
      path = path.replace('#', '');
    }
    let start = this.elements[path].start;

    this.scrollElement.scrollTo({top: start, behavior: "smooth"})
  }
}
