import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  Direction: any;
  Duration: any;
  showBorder = false;
  div!: HTMLElement[];
  colors = ['#FF69B4', '#008000', '#FFC080', '#6495ED'];
  j = 0;
  intervalId: any;

  ngOnInit(): void {
    this.getValues;
    this.ApplyClass();
  }

  ngOnDestroy() {
    // clearInterval(this.intervalId);
  }

  getValues() {
    if (sessionStorage.length >= 0) {
      this.Duration = sessionStorage.getItem('Duration');
      this.Direction = sessionStorage.getItem('Direction');
    }
  }
  direction(directionCode: any) {
    switch (directionCode) {
      case 1: // anticlock
        break;
      case 2: //Left to right only
        break;
      case 3: //right to left only
        break;
      case 4: //down then up only
        break;
      case 5: //up then down only
        break;
      case 6: //clockwise
        setInterval(() => this.ApplyClass(), 3000);
        break;

      default:
        break;
    }
  }
  ApplyClass() {
    // or
    const divs = document.querySelector('.container');

    setInterval(() => {
      divs?.childNodes.forEach((element, i) => {
        // debugger;
        this.j = i;
        (element as HTMLElement).style.backgroundColor = 'red';
        (element as HTMLElement).classList.add('class', 'green');
      });
    }, 10000);
  }
}
// let i = 0;
// setInterval(() => {
//   if (i < divs.length) {
//     divs[i].style.backgroundColor = colors[i];
//     i++;
//   } else {
//     i = 0;
//   }
// }, 2000);
