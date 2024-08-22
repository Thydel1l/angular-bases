import { Component } from "@angular/core";

@Component({
  selector:`app-counter`,
  template: `
     <h3>{{counter}}</h3>
    <button (click)="increaseBy(-1)"> -1 </button>
    <button (click)="reset()"> Reset </button>
    <button (click)="increaseBy(1)"> +1 </button>
  `
})
export class CounterComponet{
    public counter:number = 0
    increaseBy(sumador:number):void{
        this.counter += sumador;
    }
    reset(){
      this.counter = 0;
    }
}
