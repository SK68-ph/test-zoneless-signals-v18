import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  protected number: WritableSignal<number> = signal(0);
  
  constructor() { }

  getNumber() {
    return this.number();
  }
  
  incrementNumber() {
    this.number.update((num) => num + 1);
  }

  setNumber(num: number) {
    this.number.set(num);
  }
}
