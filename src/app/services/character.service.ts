import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import md5 from 'blueimp-md5';

import { environment as env } from '../../environments/environment';
import { ICharacterResponseData } from '../character/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  public fetch(): Observable<ICharacterResponseData> {
    const ts: number = (new Date()).getTime();
    const publicKey: string = env.publicKey;
    const privateKey: string = env.privateKey;
    const hash: number = md5(`${ts}${privateKey}${publicKey}`);
    const params = `?limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    return this.http.get<ICharacterResponseData>(`${env.baseUrl}${env.endpoints.characters}${params}`);
  }
}
