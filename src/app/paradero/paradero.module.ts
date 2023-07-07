import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class ParaderoModule {}
