import { Component } from '@angular/core';

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.html',
  styleUrl: './canvas-page.css',
})
export class CanvasPage {
  gridSize = 21;
  pixels = Array.from({ length: this.gridSize * this.gridSize }, () => ({
  color: 'white'
  }));

  selectedColor = "#c49c9c";

  paintPixel(index: number) {
    this.pixels[index].color = this.selectedColor;
    console.log('clicou no pixel', index);
  }

  getColor(event: any) {
    console.log(event.target.value)
    this.selectedColor = event.target.value
  }
}
