import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {

  // Holds each instance of pet
  @Input() thispet: Pet = { name: '', species: '', age: 0 };
  
  @Output() remove: EventEmitter<Pet> = new EventEmitter<Pet>();

  deleteMe(){
    // Call the removeThePet function in the parent component
    this.remove.emit(this.thispet);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
