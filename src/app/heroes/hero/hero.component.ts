import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = `Ironman`;
  public age: number = 41;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getMeDescription():String{
    return `${this.name} - ${this.age}`;
  }
  changedHero(newname:string):void{
    this.name = newname
  }

  changedAge(newAge:number):void{
    this.age = newAge
  }

  changedAgeN():void{
    this.age = 45
  }
  resetForm():void{
    this.name = `Ironman`;
    this.age=41;
  }
}
