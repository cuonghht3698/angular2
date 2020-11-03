import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'angular';
  data = ['H','E','L','L','O','--','T','Ú'];
  color1;
  color2;
  color3;
  color4;
  color5;
  color6;
  color7;
  color8;
  color9;
  ngOnInit(): void {




    setInterval(()=>{
      this.color1 = this.getRandomColor();
      this.color2 = this.getRandomColor();
      this.color3 = this.getRandomColor();
      this.color4 = this.getRandomColor();
      this.color5 = this.getRandomColor();
      this.color6 = this.getRandomColor();
      this.color7 = this.getRandomColor();
      this.color8 = this.getRandomColor();
      this.color9 = this.getRandomColor();
    },1000)

  }

  getRandomColor2() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

   getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
