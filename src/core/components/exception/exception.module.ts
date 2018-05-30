import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NcExceptionComponent} from './exception.component';

const ZORRO_MODULES = [NgZorroAntdModule];
const COMPONENTS = [NcExceptionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ...ZORRO_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class NcExceptionModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NcExceptionModule, providers: []};
  }
}
