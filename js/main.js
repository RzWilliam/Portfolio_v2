let boxes = document.querySelectorAll('.logo')

boxes.forEach(function(box){
    box.addEventListener('mouseover', e=>{
        box.classList.add('reverse')
        
    })
    box.addEventListener('mouseout', e=>{
        box.classList.remove('reverse')
    })
})

let open_burger = document.querySelector('.burger');
let container_burger = document.querySelector('.container_burger')

open_burger.addEventListener('click', e=>{
    if(open_burger.classList.contains('active')){
        open_burger.classList.remove('active')
        container_burger.classList.remove('active')
    } else{
        open_burger.classList.add('active')
        container_burger.classList.add('active');
    }
})
