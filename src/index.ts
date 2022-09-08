import { Episode, Movie, Series, Show } from './show';
import { StreamingService } from './streamingService';
import { Subscription } from './subscription';
import {User} from './user';

// created list of shows on streaming service
let showsYoutube = [
    new Movie('YoutubeMovie1', 'Comedy', 2021, 120),
    new Movie('YoutubeMovie2', 'Thriller', 2021, 100),
    new Episode('YoutubeEpisode2', 'Horror', 2021, 115),
    new Series(
        [new Episode('YoutubeEpisode1', 'Comedy', 2022, 110),
        new Episode('YoutubeEpisode3', 'Comedy', 2022, 45)
    ], 'YoutubeSeries1', 'Comedy', 2022)
];

let showsNetflix = [
    new Movie('NetflixMovie1', 'Comedy', 2010, 120),
    new Movie('NetflixMovie2', 'Horror', 2012, 110),
    new Movie('NetflixMovie3', 'Horror', 2021, 130),
    new Episode('NetflixEpisode2', 'Horror', 2012, 90),
    new Series(
        [new Episode('NetflixEpisode1', 'Comedy', 2011, 45),
        new Episode('NetflixEpisode3', 'Comedy', 2013, 45),
        new Episode('NetflixEpisode4', 'Comedy', 2013, 45)
    ], 'NetflixSeries1', 'Comedy', 2014)
];

let showsMegogo = [
    new Movie('MegogoMovie1', 'Comedy', 1990, 120),
    new Movie('MegogoMovie2', 'Horror', 2010, 120),
    new Movie('MegogoMovie3', 'Cartoon', 2021, 110),
    new Movie('MegogoMovie4', 'Horror', 2011, 130),
    new Episode('MegogoEpisode2', 'Horror', 2001, 45),
    new Series(
        [new Episode('MegogoEpisode1', 'Comedy', 2002, 100),
        new Episode('MegogoEpisode3', 'Comedy', 2002, 100),
        new Episode('MegogoEpisode4', 'Cartoon', 2002, 90)
    ], 'MegogoSeries1', 'Comedy', 2014)
];

let showsRocu = [
    new Movie('RocuMovie1', 'Comedy', 2021, 120),
    new Movie('RocuMovie2', 'Horror', 2005, 110),
    new Movie('RocuMovie3', 'Horror', 2021, 100),
    new Movie('RocuMovie4', 'Thriller', 2011, 100),
    new Episode('RocuEpisode2', 'Horror', 2011, 45),
    new Series(
        [new Episode('RocuEpisode1', 'Comedy', 2022, 45),
        new Episode('RocuEpisode3', 'Comedy', 2022, 45),
        new Episode('RocuEpisode4', 'Comedy', 2022, 60)
    ], 'RocuSeries1', 'Comedy', 2022)
];

// created subscribed streaming service
let streamingService: StreamingService = new StreamingService('Youtube', showsYoutube);
let streamingService1: StreamingService = new StreamingService('Netflix', showsNetflix);
let streamingService2: StreamingService = new StreamingService('Megogo', showsMegogo);

// created avaliable subscribe on streaming service
let subscription: Subscription = new Subscription(streamingService);
let subscription1: Subscription = new Subscription(streamingService1);
let subscription2: Subscription = new Subscription(streamingService2);

// user all subscriptions
let user = new User([subscription, subscription1, subscription2]);

console.log(user);

// user avaliable list of subscriptions
user.getSubscription().forEach(subscription => console.log(subscription.streamingService.name))

console.log('-----------------------------------------');

// add new user subscription
let newSubscription = user.subscribe(new StreamingService('Rocu', showsRocu))
console.log(newSubscription);

// user new list of subscriptions
user.getSubscription().forEach(subscription => console.log(subscription.streamingService.name))

console.log('-----------------------------------------');

// call the watch() method; working counter quantity of views
subscription.watch('YoutubeMovie1')
console.log(streamingService.viewsByShowNames);

console.log('-----------------------------------------');

// call the getRecommendationTrending() method; getMostViewedShowsOfYear(2022) metod get random shows from this year and sort for duration
console.log(subscription.getRecommendationTrending());
console.log(subscription1.getRecommendationTrending());
console.log(subscription2.getRecommendationTrending());

console.log('-----------------------------------------');

// call the getRecommendationByGenre(genre) method; getMostViewedShowsOfGenre(genre) metod get the occasional show in a certain genre
console.log(subscription.getRecommendationByGenre('Comedy'));
console.log(subscription1.getRecommendationByGenre('Horror'));
console.log(subscription2.getRecommendationByGenre('Cartoon'));

console.log('-----------------------------------------');

// call the addShow() method; adds the new show to the streaming service
let newShow = new Movie('MegogoMovie10', 'Comedy', 2000, 100);
streamingService1.addShow(newShow)
console.log(streamingService1.shows);

// console.log(`Hello world ${user}`);
