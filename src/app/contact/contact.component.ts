import { ClipboardService } from 'ngx-clipboard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email:string = 'mailto:boucherjess@gmail.com?Subject="Hi, i found your email on your website"'
  github:string = 'https://github.com/jboucher1'

  constructor(private clipboard : ClipboardService) { }

  ngOnInit() {
  }

}
