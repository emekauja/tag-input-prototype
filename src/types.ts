export type Spacecraft = {
  uid: string;
  name: string;
  registry?: string;
  status: string;
  dateStatus: string;
  spacecraftClass?: {
    uid: string;
    name: string;
  };
  owner?: {
    uid: string;
    name: string;
  };
  operator?: {
    uid: string;
    name: string;
  };
};

export type Animal = {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
};

export type Comics = {
  uid: string;
  title: string;
  publishedYear?: number;
  publishedMonth?: number;
  publishedDay?: number;
  coverYear?: number;
  coverMonth?: number;
  coverDay?: number;
  stardateTo?: number;
  yearFrom?: number;
  yearTo?: number;
  photonovel: boolean;
  adaptation: boolean;
};

export type Book = {
  uid: string;
  title: string;
  publishedYear: number;
  publishedMonth: number;
  publishedDay: number;
  numberOfPages: number;
  stardateFrom?: number;
  stardateTo?: number;
  yearFrom?: number;
  yearTo: boolean;
  referenceBook: boolean;
  biographyBook: boolean;
  rolePlayingBook: boolean;
  anthology: boolean;
  novelization: boolean;
  audiobook: boolean;
  audiobookAbridged: boolean;
  audiobookPublishedYear?: number;
  audiobookPublishedMonth?: number;
  audiobookPublishedDay?: number;
  audiobookRunTime?: number;
  productionNumber?: number;
  ebook: boolean;
};

export type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

export type StapiItemKeys = 'spacecraft' | 'comics' | 'animal' | 'book';
export type StapiItemKeysPlural =
  | 'spacecrafts'
  | 'comics'
  | 'animals'
  | 'books';

type StapiItems = {
  spacecraft: Spacecraft[];
  comics: Comics[];
  animal: Animal[];
  book: Book[];
};

// Generic for get data type
export type IData = {
  [K in keyof StapiItems]: StapiItems[K];
} & { page: Page };

export type Item = Spacecraft | Animal | Comics | Book;

export type MenuObj = {
  spacecraft: { key: StapiItemKeys; datavalue: StapiItemKeysPlural };
  animal: { key: StapiItemKeys; datavalue: StapiItemKeysPlural };
  comics: { key: StapiItemKeys; datavalue: StapiItemKeysPlural };
  book: { key: StapiItemKeys; datavalue: StapiItemKeysPlural };
};
