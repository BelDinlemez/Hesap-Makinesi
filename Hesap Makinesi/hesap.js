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
    console.log(button)
    switch (button) {
        default:
            ekleSonuc(button); 
          break;
        case '=':
          hesapla();
          break;
        case '+/-':
          isaretDegis();
          break;
        case 'AC':
            silSonuc();
    } 
}

function silSonuc() {
    sonuc.textContent = '0';
}
function isaretDegis(){
   let value = sonuc.textContent;
   sonuc.textContent = -value;
}

function hesapla() {
    let ifade = sonuc.textContent;

    try {
        sonuc.textContent = math.evaluate(ifade);
    } catch (error) {
        sonuc.textContent = 'Error';
    }
}
