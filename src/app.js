import { NewsChannels } from './newsChannels'

export class App {
  constructor() {
      this._newsChannels = new NewsChannels();      
  }

  showNews() {
      this._newsChannels.requestNewsChannels();
  }
}