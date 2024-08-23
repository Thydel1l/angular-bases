
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',

})
export class FormComponentDBZ {

  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter();


  public character:Character = {
    name: '',
    power: 0
  }
  emitCharacter():void{

    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    console.log('Character after emitting:', this.character);
    this.character = { name: '', power: 0 };

  }
}


