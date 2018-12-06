import { RequestProxy } from './requestProxy'

import { NewsChannelsRequest } from './newsChannelsRequest'

import { NewsRequest } from './newsRequest'

let instance;

export class RequestFactory {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
    }

    newsChannelsRequest()
    {
        let newsChannelsRequest = new NewsChannelsRequest();
        let proxy = new Proxy(newsChannelsRequest, RequestProxy);
        return proxy;
        //let data = await newsChannelsRequest.request();
        //return data ? data.sources : [];
    }

    newsRequest(source, maxNewsCount)
    {
        let newsRequest = new NewsRequest(source, maxNewsCount);
        let proxy = new Proxy(newsRequest, RequestProxy);
        return proxy;
        //let data = await newsRequest.request();
        //return data ? data.articles : [];
    }
}