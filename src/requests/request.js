const importRequestErrorHandlerModule = () => import('../errors/requestErrorHandler');

export class Request
{
    constructor(requestName, method, baseUrl, parameters) {
        this._requestName = requestName;
        this._method = method;

        // TODO: implement authentication. For now just hard code the api key.
        parameters.apiKey = "cf033c57da2e4126b52df66a8cdd2f89";

        let queryUrl = this.buildQueryUrl(parameters);
        this._url = baseUrl + '?' + queryUrl;
    }

    buildQueryUrl(parameters) {
        const queryUrl = [];
        for (let parameter in parameters) {
            queryUrl.push(encodeURIComponent(parameter) + '=' + encodeURIComponent(parameters[parameter]));
        }

        return queryUrl.join('&');
     }

     async request()
     {
        let data = null;
         try {
            let request = new global.Request(this._url, { method: this._method })
            let response = await fetch(request);
            await this.handleErrors(response);
            data = await response.json();
         }
         catch(error){
             console.log('catch(error)');
            importRequestErrorHandlerModule().then(requestErrorHandlerModule =>
                {
                    let requestErrorHandlerPrototype = requestErrorHandlerModule.RequestErrorHandler;
                    let requestErrorHandler = new requestErrorHandlerPrototype();
                    requestErrorHandler.HandleError(error);
                });
         }
         
         return data;
     }

     async handleErrors(response) {
        console.log("handleErrors");
        if (!response.ok) {
            console.log("!response.ok");
            throw Error(response.statusText);
        }
        return response;
    }
}