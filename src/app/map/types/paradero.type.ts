export type Paradero = {
  type: string;
  id: number;
  geometry: Geometry;
  properties: Properties;
};

export type Geometry = {
  type: string;
  coordinates: number[];
};

export type Properties = {
  OBJECTID: number;
  ID: number;
  TIPO: string;
  N_RUTAS: number;
  ADMINISTRA: string;
  UBICACION: string;
  FOTOS: string;
  ESTADO_DE_SENAL: string | null;
  ESTADO_DE_DEMARCA: string | null;
  ESTADO_DE_CASETA: string | null;
  TIPO_CASETA: string | null;
  DANOS: string | null;
  OBSERVACIONES: string | null;
};
