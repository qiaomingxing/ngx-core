import {NgModule, ModuleWithProviders} from '@angular/core';
import {NcUploadWallModule} from './upload-wall/upload-wall.module';
import {NcRejectModalModule} from './reject-modal/reject-modal.module';
import {NcExceptionModule} from './exception/exception.module';

const MODULES = [NcUploadWallModule, NcRejectModalModule, NcExceptionModule];

@NgModule({
  imports: [
    NcUploadWallModule.forRoot(),
    NcRejectModalModule.forRoot(),
    NcExceptionModule.forRoot()
  ],
  exports: MODULES,
})
export class NcComponentsRootModule {
}

@NgModule({exports: MODULES})
export class NcComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NcComponentsRootModule};
  }
}
