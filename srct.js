const buttons = document.querySelectorAll('.div-sml');
const body = document.querySelector('body');
//console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener("click" , function(e){

        if(e.target.id === 'burlywood'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'orangered'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor =  e.target.id ;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id ;
        }
        
        
    });
})

