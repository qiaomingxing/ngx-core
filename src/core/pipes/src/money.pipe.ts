import {PipeTransform, Pipe} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {BasePipe} from '../../base/src/base.pipe';

/**
 * 金钱格式转换
 *
 * @example
 * ```html
 * <td [innerHTML]='enabled | money'></td>
 * ```
 */
@Pipe({name: 'ncMoney'})
export class NcMoneyPipe extends BasePipe implements PipeTransform {
  constructor(public sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  transform(value, isBadge = false): string {
    if (isBadge) {
      const resultHtml = '<sapn class="money">' + '¥' + this.toRound(value) + '</sapn>';
      return this.safeHtml(resultHtml);
    }
    return this.toRound(value).toString();
  }

  /**
   * 强制保留到小数点后两位
   */
  toDecimal(param): any {
    if (isNaN(parseFloat(param))) {
      return '0.00';
    }
    const f_x = Math.round(param * 100) / 100;
    let s_x = f_x.toString();
    let pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0';
    }
    return s_x;
  }

}
