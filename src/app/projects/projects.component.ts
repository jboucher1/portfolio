import { ProjectListService } from './../services/project/project-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public projects: ProjectListService) { }

  ngOnInit() {
  }
}
