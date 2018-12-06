export const RequestProxy = {
    apply: function(target, thisArg, argumentsList)
    {
        let request = target(argumentsList);
        console.log(`Requets: ${request._requestName}, Method: ${request._method}, Parameters: ${argumentsList}`)
        return null;
    }
}