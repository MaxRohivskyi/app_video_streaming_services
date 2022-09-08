import { Show } from './show';
import {StreamingService} from './streamingService';

export class Subscription {
    readonly streamingService: StreamingService;

    constructor(streamingService: StreamingService){
        this.streamingService = streamingService;
    }

    watch(showName: string){
        let counter = this.streamingService.viewsByShowNames.get(showName);
        if (typeof counter === "number" ) {
            this.streamingService.viewsByShowNames.set(showName, counter + 1)
        };
    };

    getRecommendationTrending(): Show[] {
        let randomShowOfYear = this.streamingService.getMostViewedShowsOfYear(2021);
        return randomShowOfYear;
    }

    getRecommendationByGenre(genre: string): Show[]{
        let showOfGenre = this.streamingService.getMostViewedShowsOfGenre(genre);
        return showOfGenre;
    }
}