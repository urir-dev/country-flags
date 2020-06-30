export interface Tri {
  name: string;

}
export interface Language {
 iso639_1: string;
 iso639_2: string;
 name: string;
 nativeName: string;
}

export interface Country {
    numericCode: string;
    name: string;
    languages: Array<Language>;
    capital: string;
    population: number;
    flag: string;
  }
