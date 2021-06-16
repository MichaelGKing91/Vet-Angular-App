import { Component,Input,OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {

  @Input() thispet: Pet = { name: '', species: '', age: 0 };
  constructor() { }

  ngOnInit(): void {
  }

}
