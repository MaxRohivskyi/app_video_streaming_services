import { Subscription } from './subscription'
import { StreamingService } from './streamingService';

export class User {
    readonly subscriptions: Subscription[];
    
    constructor(subscriptions: Subscription[]) {
        this.subscriptions = subscriptions;
    }

    subscribe(streamingService: StreamingService): Subscription {
        let newSubscription = new Subscription(streamingService);

        let result = this.subscriptions.find((subscription) => subscription.streamingService === streamingService);
        if(result === newSubscription) {
            return result
        } else {
            this.subscriptions.push(newSubscription);
            return newSubscription;
        }
    }

    getSubscription(): Subscription[] {
        return this.subscriptions
    }
}

