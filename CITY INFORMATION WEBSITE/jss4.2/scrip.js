const button = document.querySelector('button')
button.addEventListener('click',display)
function display(){
    let input = document.getElementById("input")
    let city = input.options[input.selectedIndex].value
    let pop=0,litre=0,lang=''
    switch(city){
        case 'chennai':
            pop=24
            litre=567
            lang='tamil'
            break;
        case 'benguluru':
            pop=25
            litre=456
            lang='kannada'
            break;
        case 'hyderabad':
            pop=40
            litre=566
            lang='telugu'
            break;
    }
    let txt = `the name of city is ${city} and the pop is${pop} and the litre is ${litre} and the lang is ${lang}`
    let div = document.createElement('div')
    document.getElementById('hi').appendChild(div)
    div.id='res'
    document.getElementById('res').innerHTML=txt
}