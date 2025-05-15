const button = document.querySelector('button')
button.addEventListener('click',displayStats)
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
function displayStats(){
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let pop=0,liter=0,lang=''
    switch(city){
        case 'chennai':
           pop = 500
           liter=88.45
           lang='tamil'
        break
        case 'benguluru':
           pop = 600
           liter=99.5
           lang='kannada'
        break
        case 'delhi':
            pop = 700
            liter = 88.5
            lang='hindi'
        break
        case 'gujarat':
            pop = 800
            liter = 90.5
            lang='gajarati'
        break
    }
    let txt = `the indian city of ${city}  has a population of ${pop} and the language is ${lang} and literacy is ${liter}`
    console.log(txt)
    document.getElementById('result').innerHTML = txt
}