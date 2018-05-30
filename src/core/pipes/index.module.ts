import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NcMoneyPipe} from './src/money.pipe';
import {NcYNPipe} from './src/yn.pipe';

const COMPONENTS = [];
const ZORRO_MODULES = [];
const PIPES = [NcMoneyPipe, NcYNPipe];

@NgModule({
  imports: [CommonModule, RouterModule, ...ZORRO_MODULES],
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES],
})
export class NzPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NzPipeModule,
      providers: [],
    };
  }
}
