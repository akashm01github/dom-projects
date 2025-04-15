let btn = document.querySelector('button');

let h5 = document.querySelector('h5');

btn.addEventListener("click",function(){

    if(h5.innerHTML == 'Stranger'){
        h5.innerHTML = 'Friend';
        h5.style.color = 'green';
        btn.innerHTML = 'Remove Friend'
        btn.classList.add('remove');
        
    }
    else{
        h5.innerHTML = 'Stranger';
        h5.style.color = 'red';
        btn.innerHTML = 'Add Friend'
        btn.classList.remove('remove');
    }
    
})