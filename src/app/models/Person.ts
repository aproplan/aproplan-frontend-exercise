import { Country } from './Country';
import { Profession } from './profession';

export interface Person {
  SpellCheckLanguage: null;
  Code: string;
  Name: string;
  Language: Profession;
  LanguageCode: string;
  Country: Country;
  Email: string;
  Phones: null;
  Emails: null;
  Id: string;
  EntityVersion: number;
  EntityCreationDate: string;
  EntityModificationDate: string;
  ModifiedProperties: null;
  EntityCreationUser: string;
  Deleted: boolean;
}
