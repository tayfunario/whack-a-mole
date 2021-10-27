// selectors
const kutucuklar_DIV = document.querySelectorAll('.kutucuk')
const puan_SPAN = document.querySelector('#puan')
const sure_SPAN = document.querySelector('#sure')

// değişkenler
let anaInterval
let puan = 0
let kalanSure = 60
    // bu kilit ile renkli kutuya birden çok kez tıklayıp fazladan puan kazanmayı engelliyoruz
let kilit = false


// fonksiyonlar
function kutularıTemizle() {
    for (let i of kutucuklar_DIV) {
        i.removeAttribute('style')
    }
}

function sureyiAyarla() {
    kalanSure--
    sure_SPAN.innerHTML = kalanSure
}

function renkYarat() {
    const harfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let str = '#'
    for (let i = 0; i < 6; i++) {
        const renkSayisi = Math.floor(Math.random() * 19)
        str += harfler[renkSayisi]
    }
    return str
}
// event listener
document.addEventListener('click', function(e) {
    if (e.target.getAttribute('style') && !kilit) {
        kilit = true
        puan += 1
        puan_SPAN.innerHTML = puan
    }
})

// çalıştır
anaInterval = setInterval(function() {
    kutularıTemizle()

    const sayi = Math.floor(Math.random() * 9)

    for (let i of kutucuklar_DIV) {
        kutucuklar_DIV[sayi].style.background = renkYarat()
        kilit = false
    }
}, 750)

sureInterval = setInterval(() => {
    sureyiAyarla()
    if (kalanSure == 0) {
        clearInterval(anaInterval)
        clearInterval(sureInterval)
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
}, 1000);