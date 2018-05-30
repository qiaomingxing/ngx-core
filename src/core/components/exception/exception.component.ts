import {Component, Input} from '@angular/core';

@Component({
  selector: 'nc-exception',
  template: `
    <div class="nc-exception">
      <div class="exception-content">
        <img class="imgException" [src]="exception.imgUrl" [alt]="_type">
        <div>
          <h3 class="title">{{exception.title}}</h3>
          <p class="description">{{exception.description}}
            <ng-container *ngIf="_type!=='empty'">
              ，请<a class="action" href="javascript:history.back();">返回上一页</a>
              或<a class="action" [routerLink]="['/home/dashboard']">返回首页</a>继续浏览网站
            </ng-container>
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./style/index.less']
})
export class NcExceptionComponent {
  _type = '404';
  exceptionList = {
    '403': {title: '抱歉，您无权限～', description: '您无权限访问该页面', imgUrl: 'assets/images/exception/403.png'},
    '404': {title: '抱歉，你访问的页面不存在～', description: '您要找的页面没有找到', imgUrl: 'assets/images/exception/404.png'},
    '500': {title: '抱歉，服务器出错了～', description: '服务器出错了', imgUrl: 'assets/images/exception/500.png'},
    'empty': {title: '抱歉，页面暂无内容～', description: '页面暂无内容，请查看其他页面', imgUrl: 'assets/images/exception/empty.png'}
  };
  exception = this.exceptionList['404'];

  @Input()
  set type(value: '403' | '404' | '500' | 'empty') {
    this._type = value;
    this.exception = this.exceptionList[value];
  }

}
