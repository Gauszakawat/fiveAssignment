document.getElementById('login-btn').addEventListener('click',function(){

const nameinput = document.getElementById("username");
const name = nameinput.value;
if(name != 'admin'){
        alert('Pls check Your Username')
return;
};

const pininput = document.getElementById("pinnum");
const pin = pininput.value;
if(pin ==='admin123'){
    alert('Login successful. ')
    window.location.assign('home.html');
}
else{
    alert('Pls check Your pin Number')
    return;

};

});