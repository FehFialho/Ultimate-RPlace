import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { PixelApi } from '../../domain/pixel.api';
import { Pixel } from '../../domain/interfaces/PixelInterface';

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.html',
  styleUrl: './canvas-page.css',
})

export class CanvasPage {

  constructor (private pixelApi: PixelApi, private cdr: ChangeDetectorRef) {}

  gridSize = 33;
  pixels: Pixel[][] = [];

  ngOnInit() {
    let lines: Pixel[][] = [];
    for (let x = 0; x < 100; x++) {
        let row: Pixel[] = []
        for (let y = 0; y < 100; y++) {
          row = [...row, {
            x: x,
            y: y,
            color: "white"
          }]
        }
      lines = [...lines, row];
      this.pixels = lines;
    }
    this.loadData();

  }

  loadData() {
    this.pixelApi.getPixels().subscribe(res => {
      this.pixels = this.pixels.map((row, x) => {
        return row.map((pixel, y) => {
          const exists = res.find(p => p.x == x && p.y === y)
          return exists ? exists : pixel;
        })
      })
      console.log(this.pixels);
      this.cdr.detectChanges()
    })
  }

  selectedColor = "#000000";
  pallet: string[] = ["#000000", "#000000", "#000000","#000000","#000000", "#000000", "#000000","#000000"]

  paintPixel(x: number, y: number) {
    this.pixels[y][x].color = this.selectedColor;
  }

  getColor(event: any) {
    this.selectedColor = event.target.value
  }

  cleanCanvas(){
  }


  isPressed = false;
  visited = new Set<string>();

  // mouseDown(x: number, y: number) {
  //   this.isPressed = true;
  //   this.action(x, y);
  // }

  // mouseMove(x: number, y: number) {
  //   if (!this.isPressed) return;

  //   const key = `${x},${y}`;
  //   if (this.visited.has(key)) return;

  //   this.action(x, y);
  // }

  // mouseUp() {
  //   this.isPressed = false;
  //   this.visited.clear();
  // }

  // action(x: number, y: number) {
  //   this.paintPixel(x, y);
  //   this.visited.add(`${x},${y}`);
  // }
}
