export default async function request(url, method = "GET", headersData, body) {
    
    const headers = {method: method};

    if (headersData) {
        headers.headers = headersData;
        headers.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, headers);

    const result = await response.json();

    return result;
}