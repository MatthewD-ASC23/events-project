let divRef = document.querySelector('div');

let aqua = document.getElementById('aqua');
aqua.onclick = function(){
    if(divRef.style['background-color'] != 'aqua'){
        divRef.style['background-color'] = 'aqua';
        divRef.innerHTML = 'aqua';
    }
}

let teal = document.getElementById('teal');
teal.onclick = function(){
    if(divRef.style['background-color'] != 'teal'){
        divRef.style['background-color'] = 'teal';
        divRef.innerHTML = 'teal';
    }
}

let pink = document.getElementById('pink');
pink.onclick = function(){
    if(divRef.style['background-color'] != 'pink'){
        divRef.style['background-color'] = 'pink';
        divRef.innerHTML = 'pink';
    }
}

let purple = document.getElementById('purple');
purple.onclick = function(){
    if(divRef.style['background-color'] != 'purple'){
        divRef.style['background-color'] = 'purple';
        divRef.innerHTML = 'purple';
    }
}

let colorless = document.getElementById('colorless');
colorless.onclick = function(){
    if(divRef.style['background-color'] != 'colorless'){
        divRef.style['background-color'] = 'white';
        divRef.innerHTML = 'colorless';
    }
}