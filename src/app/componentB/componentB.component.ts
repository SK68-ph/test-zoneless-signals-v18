import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <p>componentB works!</p>
    <p>Number: {{ num() }}</p>
    <button (click)="setToZero()">Set to 0</button>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ComponentBComponent { 
  protected numService = inject(MainService);
  protected calc = computed(() => this.numService.getNumber() * 2)

  constructor() {
    console.log('ComponentBComponent constructor');
  }

  setToZero(){
    this.numService.setNumber(0);
  }

  num(){
    return this.calc();
  }
}
