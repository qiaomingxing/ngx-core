import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NcUploadWallComponent} from './upload-wall.component';

const ZORRO_MODULES = [NgZorroAntdModule];
const COMPONENTS = [NcUploadWallComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ...ZORRO_MODULES],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})

export class NcUploadWallModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NcUploadWallModule, providers: []};
  }
}
