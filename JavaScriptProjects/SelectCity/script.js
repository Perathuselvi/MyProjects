

const button = document.querySelector('button')
let resultdiv=document.createElement('div')
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
//event listener
button.addEventListener('click',displaystats)
function displaystats(){
    
    const input=document.getElementById("input")

    const city = input.options[input.selectedIndex].value
    console.log(city)
    let population=0,literacyRate=0,language=''
    switch(city){
        case 'Bengaluru':
            population=8443675
            literacyRate=89.77
            language='kannadam'
            break;
            case 'Chennai':
            population=7443675
            literacyRate=91.77
            language='Tamil'
            break;
            case 'Mumbai':
            population=9443675
            literacyRate=89.77
            language='Marathi'
            break;
            case 'Delhi':
            population=6443675
            literacyRate=86.77
            language='Hindi'
            break;



    }
    let text=`The indian city of ${city} has a population ${population} Language spoken is  ${language} and literacy rate ${literacyRate}`
    
    document.getElementById('result').innerHTML=text
    
}





