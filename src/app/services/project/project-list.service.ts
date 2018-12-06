import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor() { }

  getProjects(){
    return [
      {
        id:'1',
        title:'hello',
        description:`<span>hello_desc</span>`,
        type: 'iframe',
        github:'https://github.com/jboucher1/cms',
        iframe:'https://cms.bouchdesigns.com'
      },
      {
        id:'2',
        title:'Svgs',
        description:`<span>hello_desc</span>`,
        type: 'iframe',
        github:'https://github.com/jboucher1/random-svgs',
        iframe:'https://svg.bouchdesigns.com'
      }
    ]
  }
}
