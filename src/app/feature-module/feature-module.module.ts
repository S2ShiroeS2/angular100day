import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureChildComponent } from './feature-child/feature-child.component';

@NgModule({
  declarations: [
    FeatureChildComponent //<-- Khai báo
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureChildComponent //<-- Export để sử dụng được ở Module khác
  ]
})
export class FeatureModuleModule { }
