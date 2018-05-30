import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NcRejectModalComponent} from './reject-modal.component';

const ZORRO_MODULES = [NgZorroAntdModule];
const COMPONENTS = [NcRejectModalComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...ZORRO_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})

export class NcRejectModalModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NcRejectModalModule, providers: []};
  }
}
