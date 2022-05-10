
let imgacc = document.querySelectorAll('.accardion');
imgacc.forEach(acco => {
    
    acco.onclick = () =>{
       imgacc.forEach(subAcco => { subAcco.classList.remove('active') } );
        acco.classList.add('active');
    }
    
})