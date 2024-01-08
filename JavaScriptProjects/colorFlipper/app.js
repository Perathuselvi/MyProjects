// let colortext=document.getElementById("color")
// let btn = document.getElementById("btn")
// let wrap = document.getElementById("wrap")
// let hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']

// btn.addEventListener('click',changeBg)
// function changeBg(){
//     let hexcolor = '#'
//     for(let i=1;i<=6;i++){
//         hexcolor=hexcolor+randHexValue()
//     }
//     wrap.style.backgroundColor=hexcolor
//     colortext.innerHTML=hexcolor
// }
// function randHexValue(){
//     let randomIndex=Math.floor(Math.random()*16)
//     return hex[randomIndex]
// }

function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
     // smaller than all other numbers
    
    for (let num of nums) {
        console.log("The max num3", max_num); 
      if (num > max_num) {
        max_num = num; // Update max_num if a larger element is found
      }
    }
  
    return max_num;
  }
  
  // Example usage:
  const numbers = [-12,10,19,11,8,3, 7, 1, 9, 4, 2, 6,20];
  const result = find_max(numbers);
  console.log("The maximum number is:", result);
  