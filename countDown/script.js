console.log('countdown begin')
var countDownElement = document.getElementById('countdown')
var initialCountDown = countDownElement.innerHTML
setInterval ( function(){
  initialCountDown = initialCountDown > 0 ? initialCountDown - 1 : 0
  countDownElement.innerHTML = initialCountDown
  console.log( initialCountDown )
  console.log(countDownElement.innerHTML)
} ,1000)
