let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const nth = function(d) {
  if (d > 3 && d < 21) return "th"
  switch (d % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}

const getDate = () => {
  const today = new Date()
  let day = weekday[today.getDay()]
  let date = today.getDate()
  let month = months[today.getMonth()]
  return `${day} ${date + nth(date)} ${month}`
}

module.exports = getDate
