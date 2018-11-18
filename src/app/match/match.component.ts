import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  private ctx: CanvasRenderingContext2D;
  private width: any;
  private spriteNumber: number;
  private pt: number;

  constructor(private http: HttpClient) { }
  canvas: any;
  private height: any;
  private  spriteWidth: number;
  private frame: number;
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async ngOnInit() {
    this.frame = 0;
    this.canvas = document.getElementById('field');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width, this.height = this.canvas.height;
    this.spriteNumber = 20;
    this.spriteWidth = this.width / this.spriteNumber;
    this.pt = this.spriteWidth / 5;
    setInterval(async () => {
      const data =  await this.http.get('/matches/match?frame=' + this.frame).toPromise();
      if (!data) {
        await this.sleep(10000);
        this.frame = 0;
      }
      this.frame++;
      this.drawField(data);
    }, 1000);
  }
   getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  drawPixel (pointX, pointY, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(Math.ceil(pointX), Math.ceil(pointY), this.pt, this.pt);
  }
  drawField(data) {
    for (let i = 0; i < this.spriteNumber; i++) {
      for (let j = 0; j < this.spriteNumber; j++) {
        switch (data[i][j].background) {
          case 'wall': {
            this.drawWall(i  *   this.spriteWidth, j  *   this.spriteWidth);
            break;
          }
          case 'stand': {
              this.drawStandart(i * this.spriteWidth, j * this.spriteWidth);
          }
        }
        switch (data[i][j].person) {
          case 'player': {
            this.drawPlayer(i  *   this.spriteWidth, j  *   this.spriteWidth, data[i][j].color);
            break;
          }
        }
      }
    }
  }
  drawSand (startX, startY)  {
   this.drawPixel(startX     , startY     , '#BEA100');
   this.drawPixel(startX + this.pt , startY     , '#BEA100');
   this.drawPixel(startX + this.pt * 2 , startY     , '#947D00');
   this.drawPixel(startX + this.pt * 3, startY     , '#DAB900');
   this.drawPixel(startX + this.pt * 4, startY     , '#DAB900');
   this.drawPixel(startX     , startY + this.pt , '#DAB900');
   this.drawPixel(startX + this.pt , startY + this.pt , '#947D00');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt , '#BEA100');
   this.drawPixel(startX + this.pt * 3, startY + this.pt , '#DAB900');
   this.drawPixel(startX + this.pt * 4, startY + this.pt , '#BEA100');
   this.drawPixel(startX     , startY + this.pt * 2 , '#947D00');
   this.drawPixel(startX + this.pt , startY + this.pt * 2 , '#BEA100');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 2 , '#DAB900');
   this.drawPixel(startX + this.pt * 3, startY + this.pt * 2 , '#BEA100');
   this.drawPixel(startX + this.pt * 4, startY + this.pt * 2 , '#947D00');
   this.drawPixel(startX     , startY + this.pt * 3, '#BEA100');
   this.drawPixel(startX + this.pt , startY + this.pt * 3, '#BEA100');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 3, '#BEA100');
   this.drawPixel(startX + this.pt * 3, startY + this.pt * 3, '#947D00');
   this.drawPixel(startX + this.pt * 4, startY + this.pt * 3, '#DAB900');
   this.drawPixel(startX     , startY + this.pt * 4, '#947D00');
   this.drawPixel(startX + this.pt , startY + this.pt * 4, '#DAB900');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 4, '#DAB900');
   this.drawPixel(startX + this.pt * 3, startY + this.pt * 4, '#BEA100');
   this.drawPixel(startX + this.pt * 4, startY + this.pt * 4, '#DAB900');
  }
  drawSwamp (startX, startY) {
   this.drawPixel(startX                 , startY                , '#35bd00');
   this.drawPixel(startX                 , startY + this.pt  , '#35bd00');
   this.drawPixel(startX                 , startY + this.pt * 2, '#195700');
   this.drawPixel(startX                 , startY + this.pt * 3, '#268700');
   this.drawPixel(startX                 , startY + this.pt * 4, '#268700');
   this.drawPixel(startX + this.pt   , startY                , '#268700');
   this.drawPixel(startX + this.pt   , startY + this.pt  , '#195700');
   this.drawPixel(startX + this.pt   , startY + this.pt * 2, '#35bd00');
   this.drawPixel(startX + this.pt   , startY + this.pt * 3, '#268700');
   this.drawPixel(startX + this.pt   , startY + this.pt * 4, '#35bd00');
   this.drawPixel(startX + this.pt * 2 , startY                , '#195700');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt  , '#35bd00');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 2, '#268700');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 3, '#35bd00');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 4, '#195700');
   this.drawPixel(startX + this.pt * 3 , startY                , '#35bd00');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt  , '#35bd00');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 2, '#35bd00');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 3, '#195700');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 4, '#268700');
   this.drawPixel(startX + this.pt * 4 , startY                , '#195700');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt  , '#268700');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 2, '#268700');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 3, '#35bd00');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 4, '#268700');
  }
  drawStandart (startX, startY)  {
   this.drawPixel(startX                 , startY                , '#3c5c3c');
   this.drawPixel(startX                 , startY + this.pt  , '#273c27');
   this.drawPixel(startX                 , startY + this.pt * 2, '#1f2f1f');
   this.drawPixel(startX                 , startY + this.pt * 3, '#3c5c3c');
   this.drawPixel(startX                 , startY + this.pt * 4, '#273c27');
   this.drawPixel(startX + this.pt   , startY                , '#1f2f1f');
   this.drawPixel(startX + this.pt   , startY + this.pt  , '#3c5c3c');
   this.drawPixel(startX + this.pt   , startY + this.pt * 2, '#273c27');
   this.drawPixel(startX + this.pt   , startY + this.pt * 3, '#1f2f1f');
   this.drawPixel(startX + this.pt   , startY + this.pt * 4, '#3c5c3c');
   this.drawPixel(startX + this.pt * 2 , startY                , '#273c27');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt  , '#1f2f1f');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 2, '#3c5c3c');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 3, '#273c27');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 4, '#1f2f1f');
   this.drawPixel(startX + this.pt * 3 , startY                , '#3c5c3c');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt  , '#273c27');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 2, '#1f2f1f');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 3, '#3c5c3c');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 4, '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY                , '#1f2f1f');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt  , '#3c5c3c');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 2, '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 3, '#1f2f1f');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 4, '#273c27');
  }
  drawForest (startX, startY) {
   this.drawPixel(startX                 , startY                , '#273c27');
   this.drawPixel(startX                 , startY + this.pt  , '#273c27');
   this.drawPixel(startX                 , startY + this.pt * 2, '#273c27');
   this.drawPixel(startX                 , startY + this.pt * 3, '#273c27');
   this.drawPixel(startX                 , startY + this.pt * 4, '#273c27');
   this.drawPixel(startX + this.pt   , startY                , '#273c27');
   this.drawPixel(startX + this.pt   , startY + this.pt  , '#3c5c3c');
   this.drawPixel(startX + this.pt   , startY + this.pt * 2, '#273c27');
   this.drawPixel(startX + this.pt   , startY + this.pt * 3, '#273c27');
   this.drawPixel(startX + this.pt   , startY + this.pt * 4, '#273c27');
   this.drawPixel(startX + this.pt * 2 , startY                , '#3c5c3c');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt  , '#3c5c3c');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 2, '#614c1f');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 3, '#614c1f');
    this.drawPixel(startX + this.pt  *  2 , startY + this.pt * 4, '#273c27');
    this.drawPixel(startX + this.pt  *  3 , startY                , '#273c27');
    this.drawPixel(startX + this.pt * 3 , startY + this.pt  , '#3c5c3c');
    this.drawPixel(startX + this.pt * 3 , startY + this.pt * 2, '#273c27');
    this.drawPixel(startX + this.pt * 3 , startY + this.pt * 3, '#273c27');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 4, '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY                , '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt  , '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 2, '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 3, '#273c27');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 4, '#273c27');
  }
  drawWall (startX, startY)  {
   this.drawPixel(startX                 , startY                , '#0c0c0c');
   this.drawPixel(startX                 , startY + this.pt  , '#2f2f2f');
   this.drawPixel(startX                 , startY + this.pt * 2, '#0c0c0c');
   this.drawPixel(startX                 , startY + this.pt * 3, '#0c0c0c');
   this.drawPixel(startX                 , startY + this.pt * 4, '#0c0c0c');
   this.drawPixel(startX + this.pt   , startY                , '#0c0c0c');
   this.drawPixel(startX + this.pt   , startY + this.pt  , '#5e5e5e');
   this.drawPixel(startX + this.pt   , startY + this.pt * 2, '#5e5e5e');
   this.drawPixel(startX + this.pt   , startY + this.pt * 3, '#2f2f2f');
   this.drawPixel(startX + this.pt   , startY + this.pt * 4, '#0c0c0c');
   this.drawPixel(startX + this.pt * 2 , startY                , '#0c0c0c');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt  , '#5e5e5e');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 2, '#0c0c0c');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 3, '#5e5e5e');
   this.drawPixel(startX + this.pt * 2 , startY + this.pt * 4, '#0c0c0c');
   this.drawPixel(startX + this.pt * 3 , startY                , '#0c0c0c');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt  , '#0c0c0c');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 2, '#2f2f2f');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 3, '#5e5e5e');
   this.drawPixel(startX + this.pt * 3 , startY + this.pt * 4, '#0c0c0c');
   this.drawPixel(startX + this.pt * 4 , startY                , '#0c0c0c');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt  , '#0c0c0c');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 2, '#0c0c0c');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 3, '#0c0c0c');
   this.drawPixel(startX + this.pt * 4 , startY + this.pt * 4, '#0c0c0c');
  }
  drawBase (startX, startY, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(startX, startY,  this.pt * 5, this.pt * 5);
  }

  private drawPlayer(startX: number, startY: number, color: string) {
    this.drawPixel(startX                 , startY + this.pt * 2, color );
    this.drawPixel(startX + this.pt   , startY + this.pt  , color );
    this.drawPixel(startX + this.pt   , startY + this.pt * 2, color );
    this.drawPixel(startX + this.pt   , startY + this.pt * 3, color );
    this.drawPixel(startX + this.pt * 2 , startY                , color );
    this.drawPixel(startX + this.pt * 2 , startY + this.pt  , color );
    this.drawPixel(startX + this.pt * 2 , startY + this.pt * 2, color );
    this.drawPixel(startX + this.pt * 2 , startY + this.pt * 3, color );
    this.drawPixel(startX + this.pt * 2 , startY + this.pt * 4, color );
    this.drawPixel(startX + this.pt * 3 , startY + this.pt  , color );
    this.drawPixel(startX + this.pt * 3 , startY + this.pt * 2, color );
    this.drawPixel(startX + this.pt * 3 , startY + this.pt * 3, color );
    this.drawPixel(startX + this.pt * 4 , startY + this.pt * 2, color );
  }
}
