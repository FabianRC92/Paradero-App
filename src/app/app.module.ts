import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { ParaderoModule } from './paradero/paradero.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MapModule, ParaderoModule, NgbModule],
  providers: [NgbTooltipConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
