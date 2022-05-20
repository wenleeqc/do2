// number count
const counter = document.querySelector('.counter');
counter.innerText = '0';

const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target/400;

    if(c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter,1);
    } else {
        counter.innerText = target;
    }
}

updateCounter();

// auto text
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const stay = "Stay Orgainzed";
const anywhere = 'Anytime, Anywhere';
let index1 = 1;
let index2 = 1;
let speed = 300;

writeText();

function writeText() {
    text1.innerText = stay.slice(0, index1);
    index1++;

    text2.innerText = anywhere.slice(0, index2);
    index2++;

    if(index1 > stay.length) {
        index1 = 1;
    }

    if(index2 > anywhere.length) {
        index2 = 1;
    }

    setTimeout(writeText, speed);
}

// toast notification
const toasts = document.querySelector('.toasts');
const message = 'Another task was completed!';

function createToast() {
    console.log('in create toast');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;
    toasts.appendChild(toast);

    setTimeout(() => {
        // toasts.remove();
        const r = document.querySelector('.toast:first-child');
        r.parentElement.removeChild(r);
    }, 3000);
}

setInterval(createToast,10000);



