import { Request } from './request.js'

import { baseUrls } from './baseUrls.js'

import { requestMethod } from './requestMethod.js'

const newsUrl = `${baseUrls.news}/sources`;

export class NewsChannelsRequest extends Request {
    constructor() {
        let parameters = {};
        super(requestMethod.get, newsUrl, parameters);
    }
}