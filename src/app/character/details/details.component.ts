import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { ICharacter } from '../character.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  character: ICharacter = { id: 0, name: '' };
  isFetching = true;
  fetchError = false;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterService.fetchDetails(params.id)
        .subscribe(({ data: { results } }) => {
          this.fetchError = false;
          this.isFetching = false;

          if (results.length < 1) {
            this.fetchError = true;
            return;
          }

          const character = results[0];
          this.character = {
            id: character.id,
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail
          };
        },
          () => {
            this.fetchError = true;
            this.isFetching = false;
          });

    });
  }

  back() {
    this.router.navigate(['/']);
  }

}
