import { Component, OnInit } from '@angular/core';
import { ICharacter } from './character.interface';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {

  characters: ICharacter[];
  isFetching = true;
  fetchError = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.fetch().subscribe(({ data: { results } }) => {
      this.fetchError = false;
      this.isFetching = false;

      this.characters = results
        .map(character => ({
          id: character.id,
          name: character.name
        }));
    },
      () => {
        this.fetchError = true;
        this.isFetching = false;
      });
  }

}
