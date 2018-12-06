import 'whatwg-fetch'

import { NewsRequest } from './requests/newsRequest'

const masNewsCount = 10;

export class News {
    constructor() {
        this._newsContainer = document.getElementById("newsContainer");
        this._newsCountElement = document.getElementById("newsCount");
        this._newsCount = masNewsCount;
        this._newsCountElement.value = this._newsCount;
        this._newsCountElement.oninput = () => {
            this._newsCount = this._newsCountElement.value;
            this.requestNews(this._selectedSource);
        };
    }
    
    addNewArticleItem(article) {
        let articleItem = document.createElement("li");
        if (article.urlToImage) {
            let image = document.createElement("img");
            image.src = article.urlToImage;
            image.width = 24;
            image.height = 24;
            articleItem.appendChild(image);
        }
        
        let text = document.createTextNode(article.title)
        articleItem.appendChild(text);
        this._newsList.appendChild(articleItem)
    }

    fillNews(articles) {
        if (this._newsList) {
            this._newsContainer.removeChild(this._newsList);
        }
        
        this._newsList = document.createElement("ul");
        this._newsContainer.appendChild(this._newsList);
        articles.forEach(article => this.addNewArticleItem(article));
    }

    async requestNews(selectedSource)
    {
        this._selectedSource = selectedSource;
        let newsRequest = new NewsRequest(selectedSource, this._newsCount);
        let data = await newsRequest.request();
        this.fillNews(data ? data.articles : []);
    }
}