const input = document.querySelector('#inp');
const qr = document.querySelector('#QRcode');
const code = document.querySelector('#code');


function generate(){
    if(input.value.length>0){
    qr.src=' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input.value;
    code.classList.add('show-img');
    }
    else{
        input.classList.add('error');
        setTimeout(()=>{
            input.classList.remove('error');
        },1000)
    }
};


