import { NgModule } from '@angular/core';

import { CounterComponet } from './counter.component';

@NgModule({

  exports: [
    CounterComponet
  ]
    ,
  declarations: [
    CounterComponet],

})
export class CounterModule { }
