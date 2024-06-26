import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  Duration = [5, 10, 15];
  Direction = [
    { key: 1, value: 'Anti-ClockWise' },
    { key: 2, value: 'Left-Right' },
    { key: 3, value: 'Right-Left' },
    { key: 4, value: 'Down-Up' },
    { key: 5, value: 'Up-Down' },
    { key: 6, value: 'ClockWise' },
  ];
  signalInput!: FormGroup;
  ShowTraffic = false;
  DurationData = '0';
  DirectionCode = '-1';
  myInputMessage: string = 'I am the parent component';
  @Input() myinputMsg: string | undefined;
  constructor(protected form: FormBuilder, protected route: Router) {
    this.signalInput = this.form.group({
      FDuration: ['', Validators.required],
      FDirection: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  Onsubmit(input: FormGroup) {
    if (!input.errors) {
    }
  }

  ChangeDirection(e: Event) {
    this.signalInput.value.FDirection = (e.target as HTMLSelectElement).value;
    this.DirectionCode = this.signalInput.value.FDirection;
    sessionStorage.setItem('Direction', this.DirectionCode);
  }
  ChangeDuration(e: any) {
    this.signalInput.value.FDuration = e.target.value;
    this.DurationData = this.signalInput.value.FDuration;
    sessionStorage.setItem('Duration', this.DurationData);
  }

  ShowTrafficSignal() {
    // this.route.navigate(['TraficSignal']);
  }
}
