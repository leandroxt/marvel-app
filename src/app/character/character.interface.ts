interface IThumbnail {
  path: string;
  extension: string;
}

export interface ICharacter {
  id: number;
  name: string;
  description?: string;
  thumbnail?: IThumbnail;
}

interface ICharacterResponseDataItems {
  results: ICharacter[];
}

export interface ICharacterResponseData {
  data: ICharacterResponseDataItems;
}
