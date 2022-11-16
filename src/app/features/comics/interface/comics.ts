export interface IComics {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: string;
    thumbnail: string;
    comics: [];
    stories: [];
    events: [];
    series: [];
}