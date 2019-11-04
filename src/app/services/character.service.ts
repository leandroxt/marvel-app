import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import md5 from 'blueimp-md5';

import { environment as env } from '../../environments/environment';
import { ICharacterResponseData, ICharacter } from '../character/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private getServiceParams(): string[] {
    const ts: number = (new Date()).getTime();
    const publicKey: string = env.publicKey;
    const privateKey: string = env.privateKey;
    const hash: number = md5(`${ts}${privateKey}${publicKey}`);

    return [ts.toString(), publicKey, hash.toString()];
  }

  public fetch(): Observable<ICharacterResponseData> {
    const [ts, publicKey, hash] = this.getServiceParams();
    const params = `?limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    return this.http.get<ICharacterResponseData>(`${env.baseUrl}${env.endpoints.characters}${params}`);
  }

  public fetchDetails(id: number): Observable<ICharacterResponseData> {
    const [ts, publicKey, hash] = this.getServiceParams();
    const params = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const path = `/${id}`;

    return this.http.get<ICharacterResponseData>(`${env.baseUrl}${env.endpoints.characters}${path}${params}`);
  }
}
