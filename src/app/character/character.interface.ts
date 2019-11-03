export interface ICharacter {
  id: number;
  name: string;
}

interface ICharacterResponseDataItems {
  results: ICharacter[];
}

export interface ICharacterResponseData {
  data: ICharacterResponseDataItems;
}
