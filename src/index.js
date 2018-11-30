import './startup.css';

const importApp = () => import('./app');

function initialize() {
    let showNewsButton = document.getElementById("showNewsButton");        
    showNewsButton.onclick = function() {
        showNews();
    };
}

function showNews()
{
    importApp().then(appModule =>
        {
            let appPrototype = appModule.App;
            let app = new appPrototype();
            app.showNews();
            let showNewsButton = document.getElementById("showNewsButton");
            showNewsButton.style.display = 'none';
            showNewsButton.style.visibility = 'collapse';
            let newsRootContainer = document.getElementById("newsRootContainer");
            newsRootContainer.classList.remove("hidden");
        });   
}
	
window.onload = initialize;