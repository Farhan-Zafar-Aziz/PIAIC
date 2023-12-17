const progress=document.getElementById=('progress')
const prev=document.getElementById=('prev')
const next=document.getElementById=('next')
const circles=document.querySlecterAll('.circle')

let currentActive= 1
next.addEventListner=('click',   () =>{
    currentActive++
    if(currentActive > circles.lenth) {
        currentActive.lenth
    }
})