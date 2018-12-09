import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './main/main.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ScrollContainerDirective } from './directives/scroll-container/scroll-container.directive';
import { HeaderComponent } from './header/header.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { AllComponent } from './project-views/all/all.component';
import { CmsComponent } from './project-views/cms/cms.component';
import { WebsitesComponent } from './project-views/websites/websites.component';
import { SvgComponent } from './project-views/svg/svg.component';
import { ComponentsComponent } from './project-views/components/components.component';
import { CopyDirective } from './directives/clipboard/copy/copy.directive';
import { SafePipe } from './pipes/safe/safe.pipe';
import { ProjectIframeComponent } from './project-iframe/project-iframe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
    MainComponent,
    ScrollContainerDirective,
    HeaderComponent,
    InfoCardComponent,
    AllComponent,
    CmsComponent,
    WebsitesComponent,
    SvgComponent,
    ComponentsComponent,
    CopyDirective,
    SafePipe,
    ProjectIframeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ScrollDispatchModule,
    ClipboardModule,
    MatSnackBarModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
