import {DomSanitizer} from '@angular/platform-browser';

export class BasePipe {
  constructor(public sanitizer: DomSanitizer) {
  }

  public safeHtml(content): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  public toRound(num, length: number = 2): number {
    if (isNaN(parseFloat(num))) {
      return 0;
    }
    length = length ? length : 0;
    if (length <= 0) {
      return Math.round(num);
    }
    num = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
    return num;
  }

}
