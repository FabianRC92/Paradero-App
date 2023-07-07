import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MapComponent } from './map/map.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [MapComponent, ModalComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MapComponent],
})
export class MapModule {}
