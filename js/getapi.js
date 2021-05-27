export default class APIService {
    async ping() {
        return await fetch('https://api.coingecko.com/api/v3/ping')
        .then(response => response.json())
    }

    async getCoinInfo(coin_name) {
        return await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(response => response.json()).then(json => Object.values(json)[0])
    }
    
    async getMarketChartInfo(coin_name, range) {
        return await fetch(`https://api.coingecko.com/api/v3/coins/${coin_name}/market_chart?vs_currency=usd&days=${range}`)
        .then(response => response.json()).then(json => Object.values(json)[0])
    }

};


// "id": "dogecoin",
// "symbol": "doge",
// "name": "Dogecoin"
