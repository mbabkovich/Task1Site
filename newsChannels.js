class newsChannels {
    constructor() {
        this._newsChannelsList = document.getElementById("newsChannels");
        this._news = new news();
        this._newsChannelsList.onchange = () => this._news.requestNews(this._newsChannelsList.value);
    }
    
    addNewChannel(source) {
        var option = document.createElement("Option");
        option.value = source.id;
        option.text = source.name;
        // TODO: icon: source.url + "/favicon.ico"
        this._newsChannelsList.add(option)
    }

    fillNewsChannels(sources) {
        this._newsChannelsList.innerHTML = "";
        sources.forEach(source => this.addNewChannel(source));
    }

    requestNewsChannels()
    {
        var newsSourcesUrl = 'https://newsapi.org/v2/sources?apiKey=cf033c57da2e4126b52df66a8cdd2f89';
        var newsSourcesRequest = new Request(newsSourcesUrl);
        fetch(newsSourcesRequest)
            .then(response => response.json())
            .then(data => this.fillNewsChannels(data.sources));
    }
}