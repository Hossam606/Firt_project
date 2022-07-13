var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var slider = document.querySelector('.slider')
 

btn1.onclick = function () {
    this.style.background = 'white';
    btn2.style.background = 'transparent';
    btn3.style.background = 'transparent';
    btn4.style.background = 'transparent';
    slider.style.marginLeft = '0px';
}
btn2.onclick = function () {
    this.style.background = 'white';
    btn1.style.background = 'transparent';
    btn3.style.background = 'transparent';
    btn4.style.background = 'transparent';
    slider.style.marginLeft = '-500px';
}
btn3.onclick = function () {
    this.style.background = 'white';
    btn2.style.background = 'transparent';
    btn1.style.background = 'transparent';
    btn4.style.background = 'transparent';
    slider.style.marginLeft = '-1000px';
}
btn4.onclick = function () {
    this.style.background = 'white';
    btn2.style.background = 'transparent';
    btn3.style.background = 'transparent';
    btn1.style.background = 'transparent';
    slider.style.marginLeft = '-1500px';
}



var btn11 = document.getElementById('btn11');
var btn22 = document.getElementById('btn22');
var btn33 = document.getElementById('btn33');
var btn44 = document.getElementById('btn44');
var slider1 = document.querySelector('.our-testimonials')

btn11.onclick = function () {
    this.style.background = ' #cccaca';
    btn22.style.background = 'transparent';
    btn33.style.background = 'transparent';
    btn44.style.background = 'transparent';
    slider1.style.marginLeft = '0px';
}
btn22.onclick = function () {
    this.style.background = ' #cccaca';
    btn11.style.background = 'transparent';
    btn33.style.background = 'transparent';
    btn44.style.background = 'transparent';
    slider1.style.marginLeft = '-500px';
}
btn33.onclick = function () {
    this.style.background = ' #cccaca';
    btn22.style.background = 'transparent';
    btn11.style.background = 'transparent';
    btn44.style.background = 'transparent';
    slider1.style.marginLeft = '-1000px';
}
btn44.onclick = function () {
    this.style.background = ' #cccaca';
    btn22.style.background = 'transparent';
    btn33.style.background = 'transparent';
    btn11.style.background = 'transparent';
    slider1.style.marginLeft = '-1500px';
}


 

