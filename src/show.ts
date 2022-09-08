export abstract class Show {
    readonly name: string;
    readonly genre: string;
    readonly releaseDate: number;

    constructor(name: string, genre: string, releaseDate: number, protected duration: number) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.duration = duration;
    };

    abstract getDuration(): number;
}

export class Movie extends Show {
    getDuration(): number {
        return this.duration;
    };
};
export class Episode extends Show {
    getDuration(): number {
        return this.duration;
    };
};
export class Series extends Show {
    readonly episodes: Episode[];
    
    constructor(episodes: Episode[], name: string, genre: string, releaseDate: number) {
        super(name, genre, releaseDate, episodes.map(show => show.getDuration()).reduce((prev, next) => prev + next))
        this.episodes = episodes
    }

    getEpisodes(): Episode[] {
        return this.episodes
    };

    getDuration(): number {
        return this.duration
    };
};