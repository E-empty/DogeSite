import Highway from '@dogstudio/highway'
import Fade from './transition'
import APIService from './getapi.js'


//transitions
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});



let api = new APIService();
const dogePriceElement = document.getElementsByClassName('doge_price')[0];
const dogeMarketCapElement = document.getElementsByClassName('doge_market_cap')[0];
const dogeTotalSupplyElement = document.getElementsByClassName('doge_total_supply')[0];


// api.ping().then(data => console.log(data));



api.getCoinInfo('dogecoin').then(data => {
//    console.log(data);
    dogePriceElement.innerHTML += data.current_price;
    dogeMarketCapElement.innerHTML += data.market_cap;
    dogeTotalSupplyElement.innerHTML += data.total_volume;
});

