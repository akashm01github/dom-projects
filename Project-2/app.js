//

let box = document.querySelector('.container');
let love = document.querySelector('.love');





box.addEventListener('dblclick',()=>{
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.opacity = '1'
    love.style.color = 'red'

    setTimeout(function(){
         love.style.transform = 'translate(-50%, -50%) scale(0.3)'
        love.style.opacity = '0'
        love.style.color = 'white'
    },2000)
})


