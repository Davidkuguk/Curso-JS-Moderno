document.addEventListener('visibilitychange', ()=>{
    console.log(document.visibilityState);

    if(document.visibilityState === 'visible'){
        console.log('Reproduciendo');
    }
})