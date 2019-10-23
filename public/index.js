const getTime = () => {
  fetch("/getClock")
    .then(res => res.json())
    .then(data => {
      console.log("tick tock")
      document.getElementById("timePeriod").innerText = data.period
      document.getElementById("timeDigits").innerText = data.digits
    })
}

let template = document.getElementById("current").innerHTML
let templateRender = Handlebars.compile(template)
let newCurrent = {
  name: "Example",
  by: "Test",
  startTime: 1700,
  duration: 1,
  timecode: "EX",
  category: "teaching"
}

const getCurrent = () => {
  fetch("/getCurrent")
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(data => {
      // TODO
      // console.log(data)
      // document.getElementById("current").innerHTML = templateRender({
      //   current: newCurrent
      // })
    })
}

setInterval(() => {
  getTime()
  getCurrent()
}, 2000)
