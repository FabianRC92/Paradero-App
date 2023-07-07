import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { LocationService } from '../services/location.service';
import { Paradero, Properties } from '../types/paradero.type';
import { ModalComponent } from '../modal/modal.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Mapboxgl from 'mapbox-gl';
import { IMap } from '../interface/map.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, IMap {
  @ViewChild('mapDiv', { static: true }) mapDiv!: ElementRef;

  private toggle: boolean = true;

  public map!: mapboxgl.Map;
  public locations!: any;

  constructor(
    private locationService: LocationService,
    private modalService: NgbModal
  ) {}

  ngAfterViewInit(): void {
    this.loadMap();
  }

  ngOnInit(): void {
    this.getLocation();
  }

  /**
   * call service for get stop locations
   */
  public getLocation(): void {
    this.locationService.getLocation().subscribe({
      next: (data: Paradero[]) => {
        this.locations = data;
        this.loadMarkers(this.locations.features);
      },
      error: (data) => {
        this.locations = data;
      },
    });
  }

  /**
   * create instance of mapbox and show it.
   */
  public loadMap(): void {
    Mapboxgl.accessToken = this.mapKey;

    this.map = new Mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.coordinatesMap[0], this.coordinatesMap[1]],
      zoom: 13,
    }).setStyle('mapbox://styles/mapbox/dark-v11');
  }

  /**
   * create and show markers on map
   * @param features array of features
   */
  public loadMarkers(features: any[]): void {
    for (const feature of features) {
      const el = document.createElement('div');
      el.className = 'marker';
      el.addEventListener('click', () => {
        this.openModal(feature.properties);
      });

      if (this.map) {
        new Mapboxgl.Marker(el)
          .setLngLat(feature.geometry.coordinates)
          .addTo(this.map);
      }
    }
  }

  /**
   * show modal with description of marks
   * @param properties object with properties
   */
  public openModal(properties: Properties): void {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg',
      modalDialogClass: 'dark-modal',
    });
    modalRef.componentInstance.paradero = properties;
  }

  /**
   * hide or show markers on map
   */
  public toggleMarkers(): void {
    let markers = document.getElementsByClassName(
      'marker'
    ) as HTMLCollectionOf<HTMLElement>;

    this.toggle = !this.toggle;
    const visibility = this.toggle ? 'visible' : 'hidden';

    for (const element of markers) {
      element.style.visibility = visibility;
    }
  }

  get mapKey() {
    return this.locationService.getMapKey();
  }

  get coordinatesMap() {
    return this.locationService.getCoordinatesMap();
  }
}
