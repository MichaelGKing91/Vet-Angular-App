import { Component, Input } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vet Shop';

  // Members for accessing text boxes in form
  @Input() addPetName: string = '';
  @Input() addPetSpecies: string = '';
  @Input() addPetAge: number = 0;

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
        name: this.addPetName,
        species: this.addPetSpecies,
        age: Number(this.addPetAge)
      }
    );
  }

  removePet(){
    this.allpets.pop();
  }

  removeThePet(thePet: Pet){
    // This function will move a specific pet
    for(let i = 0; i < this.allpets.length; i++){
      if(this.allpets[i] == thePet){
        // Find it


        // Delete it - to remove we use splice
        this.allpets.splice(i,1);
        return;
      }
    }
  }

  printAllPets(){
    console.log(this.allpets);
  }

}
