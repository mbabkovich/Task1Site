let instance;

export class RequestErrorHandler
{
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
    }

    async HandleError(error)
    {
        console.log(error.message);
        Promise.reject({
            type: 'Error',
            message: error.message
        });
    }
}