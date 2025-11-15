export default async function request(url, method = "GET", headers, body) {
    
    const options = {method: method};

    if (headers) {
        options.headers = headers;
        options.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, options);

    if (!response.ok || response.status === 204) {
        throw {message: response.statusText}
    };

    const result = await response.json();

    return result;
}