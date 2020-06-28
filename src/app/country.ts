export interface Language {
  name: string;
}

export interface Country {
    numericCode: string;
    name: string;
    languages: Language[];
    capital: string;
    population: number;
    flag: string;
  }
