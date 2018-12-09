import { ProjectListService } from './../services/project/project-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Location } from '@angular/common';

@Component({
  selector: 'project-iframe',
  templateUrl: './project-iframe.component.html',
  styleUrls: ['./project-iframe.component.scss']
})
export class ProjectIframeComponent implements OnInit {
  params: Params;
  project;
  constructor(private route: ActivatedRoute, private projects$: ProjectListService, private router: Router, private location : Location) {
    this.route.params.subscribe(params => {
      this.params = params;
      if (params.id) {
        this.projects$.getProjects()
          .pipe(map(projs => projs.filter(proj => proj.id === params.id)[0]))
          .subscribe(val => this.project = val)
      }
    });
  }

  ngOnInit() {
    console.log(this.router, this.location)

  }

  back(){
    return this.location.back()
  }


}
