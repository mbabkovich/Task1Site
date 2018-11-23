import { News } from './news'

export class NewsChannels {
    constructor() {
        this._newsChannelsContainer = document.getElementById("newsChannelsContainer");
        this._news = new News();
    }
    
    addNewChannel(source) {
        let option = document.createElement("Option");
        option.value = source.id;
        option.text = source.name;
        this._newsChannelsList.add(option)
    }

    fillNewsChannels(sources) {
        if (this._newsChannelsList) {
            this._newsChannelsContainer.removeChild(this._newsChannelsList);
        }
        
        this._newsChannelsList = document.createElement("Select");
        this._newsChannelsList.id = "newsChannelsSelect";
        this._newsChannelsList.size = 20;
        this._newsChannelsList.onchange = () => this._news.requestNews(this._newsChannelsList.value);
        this._newsChannelsContainer.appendChild(this._newsChannelsList);
        sources.forEach(source => this.addNewChannel(source));
    }

    async requestNewsChannels()
    {
        let newsSourcesUrl = 'https://newsapi.org/v2/sources?apiKey=cf033c57da2e4126b52df66a8cdd2f89';
        let response = await fetch(newsSourcesUrl);
        let data = await response.json();
        this.fillNewsChannels(data.sources)
    }
}