// fetch('./data.json')
//     .then(response => response.json())
//     .then(data => console.log(data[0].day))

const bars = document.querySelectorAll(".bar")
const span = document.querySelectorAll(".bill")

let dataNumber = 0
async function getData(){
    const response = await fetch('./data.json')
    const data = await response.json()
    span.forEach((bill)=>{
        bill.textContent = `$${data[dataNumber].amount}`
        dataNumber++
  })
}
getData()





const arrayOfNumbers =[]

bars.forEach((bar)=>{
    const heights = parseInt(getComputedStyle(bar).getPropertyValue("--width"))
    arrayOfNumbers.push(heights)
    const num = arrayOfNumbers.reduce((previousValue, currentValue) => {
        return (currentValue > previousValue) ? currentValue : previousValue;
    },0)
    const largeBar = Math.floor(parseFloat(bar.style.getPropertyValue("--width")))
    if( num === largeBar){
       if(bar.style.getPropertyValue("--width") === "52.36"){
          bar.style.setProperty("--color","hsl(186, 34%, 60%)")
       }
    }
})





 