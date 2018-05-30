import {PipeTransform, Pipe} from '@angular/core';

/**
 * boolean类型pipe
 *
 * @example
 * ```html
 * <td>{{enabled | _yn}}</td>
 * ```
 */
@Pipe({name: 'ncYn'})
export class NcYNPipe implements PipeTransform {
  transform(value, yes: string, no: string): string {
    if (value || value === true) {
      return (yes || '是');
    } else {
      return (no || '否');
    }
  }
}

