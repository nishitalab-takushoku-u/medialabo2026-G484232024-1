b = document.querySelector('button#calc');
b.addEventListener('click', greeting);

function greeting(){
    let L = document.querySelector('input[name="left"]');
    let left = L.value;
    let R = document.querySelector('input[name="right"]');
    let right = R.value;
    let kotae = (left +'と'+ right);
    let p = document.querySelector('span#answer');
    p.textContent = kotae;
}