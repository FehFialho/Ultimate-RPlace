export interface Pixel {
  id?: string;
  x: number;
  y: number;
  lastChange?: Date;
  color: string;
  user?: {
    id: string;
    username: string;
  }
}
