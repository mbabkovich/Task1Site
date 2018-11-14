class news {
    constructor() {
        this._newsContainer = document.getElementById("newsContainer");
    }
    
    addNewArticleItem(article) {
        let articleItem = document.createElement("li");
        if (article.urlToImage) {
            let favicon = document.createElement("img");
            favicon.src = article.urlToImage;
            favicon.width = 24;
            favicon.height = 24;
            articleItem.appendChild(favicon);
        }
        
        let text = document.createTextNode(article.title)
        articleItem.appendChild(text);
        this._newsList.appendChild(articleItem)
    }

    fillNews(articles) {
        if (this._newsList) {
            this._newsList.remove();
            this._newsList = null;
        }
        
        this._newsList = document.createElement("ul");
        this._newsContainer.appendChild(this._newsList);
        articles.forEach(article => this.addNewArticleItem(article));
    }

    requestNews(selectedSource)
    {
        let newsUrl = `https://newsapi.org/v2/everything?sources=${selectedSource}&apiKey=cf033c57da2e4126b52df66a8cdd2f89`;
        let newsRequest = new Request(newsUrl);
        fetch(newsRequest)
            .then(response => response.json())
            .then(data => this.fillNews(data.articles));
    }
}