import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Observable } from "rxjs";
import { Pixel } from './interfaces/PixelInterface';

@Injectable({
  providedIn: 'root',
})

export class PixelApi extends Api{

  public getPixels = () : Observable<Pixel[]> => {
    return this.client.get<Pixel[]>(`${this.URL}/pixel`).pipe();
  }

  public updatePixel = (data: Pixel) : Observable<void> => {
    return this.client.post<void>(`${this.URL}/pixel`, data).pipe();
  }

}
