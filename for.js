/*
chislo = 0;
var userName = prompt ("Ваше имя: ", "") 
while (chislo <=100 && chislo != null){
var chislo = prompt (userName + " введите число больше 100", 0);
};
//alert ("вы ввели: " + chislo)
*/
alert( navigator.userAgent ) //
alert( navigator.platform ) //



document.body.style.background = 'red';
alert( 'Элемент BODY стал красным, а сейчас обратно вернётся' );
document.body.style.background = '';




alert( location.href ); // выведет текущий адрес
//window.open('http://vk.com/neon_ua')



var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

alert("You are using: " + sBrowser);