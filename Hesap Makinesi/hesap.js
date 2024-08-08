const sonuc = document.getElementById('Sonuc');

function ekleSonuc(value) {
    if (sonuc.textContent == '0' || sonuc.textContent === 'Error') {
        sonuc.textContent = value;
    } else {
       
        sonuc.textContent += value;
    }
    console.log(value);
}
function islemCalistir(button) {
    ekleSonuc(button.value); 
}

function silSonuc() {
    sonuc.textContent = '0';
}
function isaretDegis(){
    let value = parseFloat(sonuc.textContent);
    if (!isNaN(value)) { 
        sonuc.textContent = -value;
}}

function hesapla() {
    let ifade = sonuc.textContent;

    try {
        sonuc.textContent = math.evaluate(ifade).toString();
    } catch (error) {
        sonuc.textContent = 'Error';
    }
}
/*
document.getElementById('arti').addEventListener('click', function() {
    ekleSonuc('+');
});
document.getElementById('eksi').addEventListener('click', function() {
    ekleSonuc('-');
});
document.getElementById('carpi').addEventListener('click', function() {
    ekleSonuc('*');
});
document.getElementById('yuzde').addEventListener('click', function() {
    ekleSonuc('%');
});
document.getElementById('bolum').addEventListener('click', function() {
    ekleSonuc('/');
});
document.getElementById('virgul').addEventListener('click', function() {
    ekleSonuc('.');
});*/
document.getElementById('esit').addEventListener('click', function() {
    hesapla();
});
document.getElementById('isaret').addEventListener('click', function() {
    isaretDegis();
});
document.getElementById('Sil').addEventListener('click', function() {
    silSonuc('0');
})
