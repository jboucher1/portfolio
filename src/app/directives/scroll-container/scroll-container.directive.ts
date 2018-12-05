import { Directive, ElementRef, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, delay } from 'lodash';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Location } from '@angular/common';


@Directive({
  selector: '[scrollContainer]'
})
export class ScrollContainerDirective implements AfterViewInit {

  scrollY = fromEvent(this.element.nativeElement, 'scroll');
  elements: any = {};
  current: any = {};
  currentPath: string;

  constructor(private element: ElementRef, private router: Router, private navigation: NavigationService, private location: Location) {
    this.scrollY.subscribe(event => this.setURL())
  }

  ngAfterViewInit(): void {
    delay(() => {
      this.setObjects();
      this.setScrollTo()
    }, 100);
  }

  setScrollTo() {
    let currentRoute = this.formatPath(this.router.url);
    this.navigation.scrollTo(currentRoute)
  }

  setURL() {
    this.setObjects();
    let currentRoute = this.formatPath(this.router.url);

    if(currentRoute.indexOf('#') !== -1 || !currentRoute){
     return this.router.navigate([], {fragment: this.currentPath})
    }
    return this.router.navigate([currentRoute])
    
  }

  setObjects() {
    let currentScrollY = this.element.nativeElement.scrollTop + (this.element.nativeElement.clientHeight / 2);

    map(this.element.nativeElement.querySelectorAll('[inview]'), (el) => {
      let start = el.offsetTop;
      let end = start + el.firstChild.clientHeight;
      let path: string = this.formatPath(el.attributes.inview.value)
      let current = currentScrollY >= start && currentScrollY <= end;

      if (current) {
        this.current = {};
        this.currentPath = path
        this.current[path] = { start, end, current, path }
      };

      this.elements[path] = { start, end, current, path };
    });

    this.navigation.scrollElement = this.element.nativeElement;
    this.navigation.elements = this.elements;
    this.navigation.currentPath = this.currentPath;
    this.navigation.current = this.current;
  };

  // validateView(): boolean {
  //   let currentRoute = this.formatPath(this.router.url);

  //   if (currentRoute === this.currentPath) {
  //     return false;
  //   }
  //   let paths = map(this.router.config, (route) => this.formatPath(route.path))
  //   return paths.indexOf(this.currentPath) !== -1;
  // }

  formatPath(path: string): string {
    return path.replace('/', '').toLowerCase();
  }

}