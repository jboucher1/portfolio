import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry} from '@angular/material';
import { Component } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/github-logo.svg')
    );
  }


}
