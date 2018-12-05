import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor() { }

  getProjects(){
    return [
      {
        title:'hello',
        description:`<span>hello_desc</span>`,
        type: 'iframe',
        iframe:'https://mock-cms.herokuapp.com/'
      }
    ]
  }
}
