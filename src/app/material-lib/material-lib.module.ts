import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ANGULAR MATERIAL IMPORT
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';


const MaterialModuleComponents = [
  MatSliderModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];

@NgModule({
  imports: [CommonModule, MaterialModuleComponents],
  exports: [MaterialModuleComponents],
})
export class MaterialLibModule {}
