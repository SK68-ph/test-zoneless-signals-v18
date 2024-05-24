import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject, signal } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <p>componentA works!</p>
    <p>Number: {{ numService.getNumber() }}</p>
  
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ComponentAComponent { 
  protected numService = inject(MainService);

  constructor() {
    console.log('ComponentAComponent constructor');
    
    setInterval(() => {
      this.numService.incrementNumber();
    }, 200);
  }

}
