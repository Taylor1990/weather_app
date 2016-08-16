export interface City {
  id: number;
  name: string;
  img: string;
  humidity?: number;
  pressure?: number;
  temp?: number;
  temp_max?: number;
  temp_min?: number;
  clouds?: string;
  wind?: number;
}
