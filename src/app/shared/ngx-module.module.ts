import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ] ,
  exports: [
    ButtonsModule,
    BsDatepickerModule,
    DatepickerModule,
    PaginationModule,
    AlertModule,
    PopoverModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: []
})
export class NgxModuleModule {}
