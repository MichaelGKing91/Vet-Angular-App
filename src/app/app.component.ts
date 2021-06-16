import { Component } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vet Shop';
  
  /*testpet: Pet = {
    name: 'Donald Duck',
    species: 'Rat',
    age: 12
  };
  testpet2: Pet = {
    name: 'Mickey Mouse',
    species: 'Rat',
    age: 12
  };*/

  allpets: Pet[] = [
    {
      name: 'Donald Duck',
      species: 'Cat',
      age: 12
    },
    {
      name: 'Mickey Mouse',
      species: 'Cat',
      age: 12
    },
    {
      name: 'Nelly',
      species: 'Dog',
      age: 9
    }
  ];
  addPet(){
    this.allpets.push(
      {
        name: 'Sally',
        species: 'frog',
        age: 3
      }
    );
  }

  removePet(){
    this.allpets.pop();
  }

}
