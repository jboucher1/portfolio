import { ProjectListService } from './../services/project/project-list.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor(public projects$: ProjectListService) {
    this.projects$.getProjects().subscribe(projects => this.projects = projects)
  }

  ngOnInit() {

  }
}
