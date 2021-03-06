import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface project {
  id: string,
  title: string,
  description: string,
  type: string,
  github: string,
  iframe: string

}

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {


  constructor() {
  }

  getProjects() {
    return of(
      [{
          id: '1',
          title: 'hello',
          description: `<span>hello_desc</span>`,
          type: 'iframe',
          github: 'https://github.com/jboucher1/cms',
          iframe: 'https://cms.bouchdesigns.com'
        },
        {
          id: '2',
          title: 'Svgs',
          description: `<span>hello_desc</span>`,
          type: 'iframe',
          github: 'https://github.com/jboucher1/random-svgs',
          iframe: 'https://svg.bouchdesigns.com'
        }]
    )
  }
}
