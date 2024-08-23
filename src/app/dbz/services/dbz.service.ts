import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import {v4 as uuid} from 'uuid'
@Injectable({
  providedIn:'root'
})
export class DbzService{
  public characters:Character[] = [
    {
      id:uuid(),
      name:'Krillin',
      power: 123321
    },{
      id:uuid(),
      name:'Goku',
      power:1111111
    },{
      id:uuid(),
      name:'Vegeta',
      power:456456
    }
  ];
  onNewCharacter( character:Character):void{
    const newCharacter:Character={
      id:uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }
  // onDeleteCharacter(index:number):void{
  //   let indexToRemove = index;
  //   this.characters.splice(indexToRemove,1)
  // }
  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
