import { Component } from '@angular/core';
import { SideBarType } from '../types/sidebar.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public arraySidebar: SideBarType[] = [
    {
      pathImage: 'assets/images/sidebar/layers.svg',
      tooltip: '',
    },
    {
      pathImage: 'assets/images/navbar/info.svg',
      tooltip: 'Incidentes',
    },
    {
      pathImage: 'assets/images/navbar/police.svg',
      tooltip: 'Agentes',
    },
    {
      pathImage: 'assets/images/navbar/car.svg',
      tooltip: 'Ambiental',
    },
    {
      pathImage: 'assets/images/map-bus-stop.svg',
      tooltip: 'Aforo',
    },
    {
      pathImage: 'assets/images/admin.svg',
      tooltip: 'PMV',
    },
  ];
}
