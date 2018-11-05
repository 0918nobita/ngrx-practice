import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
