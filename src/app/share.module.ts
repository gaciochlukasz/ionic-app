import { StatusPipe } from './pipes/status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatusPipe],
  exports: [StatusPipe]
})
export class ShareModule { }
