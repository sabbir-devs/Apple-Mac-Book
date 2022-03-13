var memoryArTaka = document.getElementById('memory-ar-taka');
var ssdArTaka = document.getElementById('ssd-ar-taka');
var baritaDeliveryDeoarTaka = document.getElementById('barita-delivary-deoar-taka');

function basiTaka(pochondo){
    if(pochondo === 'olpo-memory'){
        memoryArTaka.innerText = 0;
    }
    else if(pochondo === '16GB-memory'){
        memoryArTaka.innerText = 180;
    }
    else if(pochondo === 'olpo-ssd'){
        ssdArTaka.innerText = 0;
    }
    else if(pochondo === '521GB-ssd'){
        ssdArTaka.innerText = 100;
    }
    else if(pochondo === '1TB-ssd'){
        ssdArTaka.innerText = 180;
    }
    else if(pochondo === 'mangna-dari-koira-delivery'){
        baritaDeliveryDeoarTaka.innerText = 0;
    }
    else if(pochondo === 'taka-diya-taratai-delivery'){
        baritaDeliveryDeoarTaka.innerText = 20;
    }else{
    sob()
    }
}

var puraTakaBeforeSobkisu = document.getElementById('pura-taka-before-sobkisu');
var puraTakaAfterSobkisu = document.getElementById('pura-taka-after-sobkisu');
function sob(){
    var aroTakaAroTaka = parseInt(memoryArTaka.innerText) + parseInt(ssdArTaka.innerText) + parseInt(baritaDeliveryDeoarTaka.innerText);
    puraTakaBeforeSobkisu.innerText = 1299 + aroTakaAroTaka;
    puraTakaAfterSobkisu.innerText = 1299 + aroTakaAroTaka;
}


 document.getElementById('promo-apply').addEventListener('click', function(){
     var takaBacao = document.getElementById('promo-input');
     var amiKipta = document.getElementById('pura-taka-after-sobkisu');
     if(takaBacao.value == discount
       ){
         puraTakaAfterSobkisu.innerText = amiKipta - (amiKipta * 100 / 25);
     }
     amiKipta.value = '';
 })
