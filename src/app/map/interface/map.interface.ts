import { Paradero, Properties } from "../types/paradero.type";

export interface IMap {
  getLocation(): void;
  loadMap(): void;
  loadMarkers(features: Paradero[]): void;
  openModal(properties: Properties): void;
  toggleMarkers(): void;
}
