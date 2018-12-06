import { Request } from './request.js'

import { baseUrls } from './baseUrls.js'

import { requestMethod } from './requestMethod.js'

const newsUrl = `${baseUrls.news}/everything`;

export class NewsRequest extends Request {
    constructor(source, maxNewsCount) {
        let parameters = {
            sources: source,
            pageSize: maxNewsCount
        };
        super("NewsRequest", requestMethod.get, newsUrl, parameters);
    }
}