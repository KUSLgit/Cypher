
var encryptText = document.getElementById('encrypt');
var decryptText = document.getElementById('decrypt');
async function copyToClipboard(selector) {
    var element = document.querySelector(selector);
    await navigator.clipboard.writeText(element.value);
}

var alphabet = 
function encrypt() {
    var inp1 = document.querySelector('#inp1');
    var letters = inp1.value.split('');

    encryptText.innerHTML = "Encrypted: " + letters;
    console.log(letters);

}
// encrypt();
function decrypt() {
    var inp2 = document.querySelector('#inp2');
    var letters = inp2.value.split('');
    decryptText.innerHTML = letters;
    console.log(letters);
} 
