class app {
  constructor() {
      this._newsChannels = new newsChannels();      
  }

  showNews() {
      this._newsChannels.requestNewsChannels();
  }
}