
document.addEventListener('DOMContentLoaded', () => {
    // @ @include("swiper-bundle.min.js");
    // @ @include("some.js");
    // @ @include('burger.js');
    // @ @include("spoller.js",{});
    // @ @include("select.js",{});
    // @ @include("tabs.js",{});
    
    const form = document.querySelector('.goblin-form');
    const button = document.querySelector('.goblin-form__btn');
    const coinTotalSpan = document.querySelector('.result-popup__c');
    const diamondTotalSpan = document.querySelector('.result-popup__d');
    const emeraldTotalSpan = document.querySelector('.result-popup__e');
    const sapphireTotalSpan = document.querySelector('.result-popup__s');
    const popup = document.querySelector('.result-popup');
    const wrapper = document.querySelector('body');
    const closeBtn = document.querySelector('.result-popup__close');

    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    button.addEventListener('click', () => {
       let coin = parseInt(document.querySelector('input[name=c]').value); 
       let diamond = parseInt(document.querySelector('input[name=d]').value); 
       let emerald =  parseInt(document.querySelector('input[name=e]').value); 
       let sapphire = parseInt(document.querySelector('input[name=s]').value); 

       if(isNaN(coin)){
        coin = 0;
       }
       if(isNaN(diamond)){
        diamond = 0;
       }
       if(isNaN(emerald)){
        emerald = 0;
       }
       if(isNaN(sapphire)){
        sapphire = 0;
       }
       let coinTotal = coin + (diamond * 2) + (emerald * 4) + (sapphire * 8);
       let diamondTotal = (coin / 2) + diamond + (emerald * 2) + (sapphire * 4);
       let emeraldTotal = (coin / 4) + (diamond / 2) + emerald + (sapphire * 2);
       let sapphireTotal = (coin / 8) + (diamond / 4) + (emerald / 2) + sapphire;
       coinTotalSpan.textContent = '';
       diamondTotalSpan.textContent = '';
       emeraldTotalSpan.textContent = '';
       sapphireTotalSpan.textContent = '';
       coinTotalSpan.insertAdjacentText('beforeend',((decimalCount(coinTotal) <= 0) ? coinTotal : coinTotal.toFixed(2)));
       diamondTotalSpan.insertAdjacentText('beforeend',(decimalCount(diamondTotal) <= 0) ? diamondTotal : diamondTotal.toFixed(2));
       emeraldTotalSpan.insertAdjacentText('beforeend',(decimalCount(emeraldTotal) <= 0) ? emeraldTotal : emeraldTotal.toFixed(2));
       sapphireTotalSpan.insertAdjacentText('beforeend',(decimalCount(sapphireTotal) <= 0) ? sapphireTotal : sapphireTotal.toFixed(2));
       popup.classList.add('_active');
       wrapper.classList.add("hidden");
    });
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('_active');
       wrapper.classList.remove("hidden");
    });
    function decimalCount (number) {
        const numberAsString = number.toString();
        if (numberAsString.includes('.')) {
          return numberAsString.split('.')[1].length;
        }
        return 0;
      }
});