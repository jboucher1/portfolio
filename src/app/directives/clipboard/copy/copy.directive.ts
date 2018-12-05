import { Directive, HostListener, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material';

@Directive({
  selector: '[copy]'
})
export class CopyDirective {

  @Input('copy') copy: string;

  constructor(
    private clipboard: ClipboardService,
    private snackbar: MatSnackBar
  ) { }

  @HostListener('click')
  onclick(): void {
    this.clipboard.copyFromContent(this.copy)
    this.snackbar.open(`"${this.copy}" has been copyied to your clipboard.`, '', {
      duration: 2000
    });
  };

}
