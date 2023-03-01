
let nameinput = document.getElementById('getName');
let ageinput = document.getElementById('getAge');
let emailinput = document.getElementById('getEmail');
let addressinput = document.getElementById('getAddress')
let submitbtn = document.getElementById('addbtn');
let clearbtn = document.getElementById('clearbtn');

submitbtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.style.backgroundColor = 'pink'
    nameinput.value = 'Fahad';
    ageinput.value = 22;
    emailinput.value = 'rana@gmail.com';
    addressinput.value = 'Lahore'
})
clearbtn.addEventListener('click',()=>{
    
   alert('are u confirmed to clear your form')
    nameinput.value = ''
    ageinput.value = ''
    emailinput.value = ''
    addressinput.value = ''

})






