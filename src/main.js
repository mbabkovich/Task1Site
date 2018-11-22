import 'babel-polyfill'

import { App } from './app'

function initialize() {
    let app = new App();
    app.showNews();
}
	
window.onload = initialize;