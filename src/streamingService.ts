import { Movie, Show } from "./show";

export class StreamingService {
    readonly name: string;
    readonly shows: Show[];
    readonly viewsByShowNames: Map<string, number>;
    private static numberOfShows: number = 10;

    constructor(name: string, shows: Show[]) {
        this.name = name;
        this.shows = shows;
        this.viewsByShowNames = new Map (shows.map(show => [show.name, 0]));
    };

    addShow(show: Show) {
        this.shows.push(show);
        this.viewsByShowNames.set(show.name, 0);
    }

    getMostViewedShowsOfYear(year: number): Show[] {       
        let filteredShowsByYear = this.shows
        .filter((show) => show.releaseDate === year)
        .sort((firstShow , secondShow) => firstShow.getDuration() - secondShow.getDuration());
        
        if (filteredShowsByYear.length > StreamingService.numberOfShows) {
            return filteredShowsByYear.slice(0, StreamingService.numberOfShows);
        } else {
            return filteredShowsByYear;
        }     
    };

    getMostViewedShowsOfGenre(genre: string): Show[]{
        let filteredShowsByGenre = this.shows
        .filter((show) => show.genre === genre);
        
        if (filteredShowsByGenre.length > StreamingService.numberOfShows) {
            return filteredShowsByGenre.slice(0, StreamingService.numberOfShows);
        } else {
            return filteredShowsByGenre;
        }
    };
}