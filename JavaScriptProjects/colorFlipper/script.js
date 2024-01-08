let colortext=document.getElementById("color")

let btn = document.getElementById("btn")
let wrap = document.getElementById("wrap")
let hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',changeBg)
function changeBg(){
    let hexcolor = '#'
    console.log("this is"+randHexValue())
    for(let i=1;i<=6;i++){
        hexcolor=hexcolor+randHexValue()
    }
    wrap.style.backgroundColor=hexcolor
    colortext.innerHTML=hexcolor
}
function randHexValue(){
    let randomIndex=Math.floor(Math.random()*16)
    console.log("index"+randomIndex)
    return hex[randomIndex]
}

