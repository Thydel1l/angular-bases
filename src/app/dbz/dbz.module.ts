import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { DbzComponent } from './pages/main-page-component';

import { ListComponentDBZ } from './components/list/list.component';
import { FormComponentDBZ } from './components/form/form.component';


@NgModule({
  exports:[
    DbzComponent,
  ],
  declarations: [
    DbzComponent,
    ListComponentDBZ,
    FormComponentDBZ,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
