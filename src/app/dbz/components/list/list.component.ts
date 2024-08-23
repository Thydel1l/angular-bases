import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponentDBZ {
  @Input()
  public characterlist:Character[]=
  [{
      name: 'trunks',
      power:11

    }]
  @Output()
  onDeleteID: EventEmitter <string> = new EventEmitter();
  onDeleteCharacter(id?:string):void{
    console.log(id)
    if(!id)return;
    this.onDeleteID.emit(id);
  }

}
