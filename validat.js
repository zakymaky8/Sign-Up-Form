//password matching and submit validation

let passWord = document.querySelector('#pwd');
let confirmPwd = document.querySelector('#confirm');
let msg = document.querySelector('#failed');
confirmPwd.addEventListener('input', ()=>{
    if (passWord.value!==confirmPwd.value) {
        msg.style.display = 'block';
        msg.textContent = 'Password Mismatched!';
        msg.style.color = 'red';
    }
    else {
        btn.addEventListener('click', ()=>{
            btn.setAttribute('form','form');
        })
        msg.style.display = 'block'
        msg.textContent = 'Matched!';
        msg.style.color = 'green';
        setTimeout(()=>{
            msg.style.display = 'none';
        },2000)
    }
})

//required field validation//constraints

let comment = document.querySelectorAll('#comment');
let arr1 = Array.from(comment);
let input= document.querySelectorAll('input');
let btn = document.querySelector('button');
let arr = Array.from(input);
btn.addEventListener('click', ()=>{
    for(i=0;i<arr.length;i++) {
        if (arr[i].value==='') {
            arr1[i].textContent = 'X- fill it';
            arr1[i].style.color = 'red';
            arr1[i].style.fontWeight = '900';
        }
        else {
            arr1[i].textContent = '';
        }
    }
})

//showing password
let outerEye = document.querySelector('#eye');
let eye = document.querySelector('#inner');
eye.addEventListener('click', ()=>{
    if (passWord.type==='password') {
        passWord.type='text';
        eye.style.filter = 'blur(5px)';
        outerEye.style.filter = 'blur(5px)';
    }
    else if (passWord.type==='text'){
        passWord.type='password';
        eye.style.filter = 'blur(0px)';
        outerEye.style.filter = 'blur(0px)';
    }
})