let text_area = document.getElementById('text_area');
let capslock = document.getElementById('caps');
let backspace = document.getElementById('backspace');
let shift = document.getElementById('shift');
let enter = document.getElementById('enter');
let ok = document.getElementById('ok');
let space = document.getElementById('space');
let letters = document.querySelectorAll('button.veliko_slovo');
let keys = document.getElementsByClassName('key');

// Capslock dodaje klasu uppercase slovima
capslock.addEventListener('click', () => {
    for (let i of letters) {
        i.classList.toggle('uppercase');
    }
});

// Ispis slova u text_area string
for (let i of keys) {
    i.addEventListener('click', () => {
        if (i.classList.contains('uppercase') === true) {
            text_area.value += i.value.toUpperCase();
        } else {
            text_area.value += i.value;
        }
    });
}

// Brisanje slova
backspace.addEventListener('click', () => {
    text_area.value = text_area.value.substring(0, text_area.value.length - 1);
});

// Razmak izmedju slova
space.addEventListener('click', () => {
    text_area.value += ' ';
});

// Enter nova linija
enter.addEventListener('click', () => {
    text_area.value += '\n';
});

// Ispis poruke u alert prozoru
ok.addEventListener('click', () => {
    if (text_area.value !== '') {
        alert(text_area.value);
    }
});

// Shift dugme velika slova jednokratno
shift.addEventListener('click', () => {
    for (let i of letters) {
        i.classList.toggle('uppercase');
        i.addEventListener('click', () => {
            for (let i of letters) {
                i.classList.remove('uppercase');
            }
        });
    }
});