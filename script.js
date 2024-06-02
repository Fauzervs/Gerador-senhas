
function pswGenerate() {
    var pswLength = document.getElementById('pswLeght').value;
    var pswQuantity = document.getElementById('pswQtd').value;
    var includeSpecial = document.getElementById('special').checked;
    var includeNumbers = document.getElementById('number').checked;
    var includeUpperCase = document.getElementById('upperCase').checked;
 
    var resultTextarea = document.getElementById('answer');
    resultTextarea.innerHTML = '';
 
    for (var i = 0; i < pswQuantity; i++) {
        var password = generatePassword(pswLength, includeSpecial, includeNumbers, includeUpperCase);
        resultTextarea.innerHTML += password + '\n';
    }
}
 
function generatePassword(length, special, numbers, uppercase) {
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    var password = '';
 
    if (special) {
        charset += '!@#$%^&*()';
       
    }
    if (numbers) {
        charset += '0123456789';
    }
    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
 
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
 
    return password;
}
 
function clean() {
    document.getElementById('answer').innerHTML = 'Senhas ...';
}