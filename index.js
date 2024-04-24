const circleCors = []


function checkIfCirclesAreIntersecting(circles){

    const x1= circles[0].x
    const y1 = circles[0].y
    const x2 = circles[1].x
    const y2 = circles[1].y
    const r1 = circles[0].radius
    const r2 = circles[1].radius
  
      return Math.hypot(x1 - x2, y1 - y2) <= r1 + r2;
}

function resetCircles(totalCircles){
  totalCircles.forEach(circle =>{
    document.body.removeChild(circle)
    circleCors.shift()
 })
}

document.addEventListener("click",(e)=>{
  const totalCircles = document.querySelectorAll(".circle") //this will dynamically update with each click
   const x = e.clientX
   const y = e.clientY
   
   if (totalCircles.length == 2) {

       const isIntersecting = checkIfCirclesAreIntersecting(circleCors)
       console.log("isIntersecting :" , isIntersecting)

       resetCircles(totalCircles)
  }
  else{
   

   const circle =  document.createElement("div")
   document.body.appendChild(circle)
   circle.classList.add("circle")
   const radius = Math.random()*(200-50)+50

   circleCors.push({"x":x,"y":y ,"radius": radius})

   console.log(circleCors)

   circle.style.height = radius*2+"px"
   circle.style.width = radius*2+"px"
   circle.style.top = y-radius+"px"
   circle.style.left = x-radius+"px"
 
  }
   
})