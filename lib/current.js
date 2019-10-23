const { addZero } = require("./clock")

const getMinutes = duration => {
  let minutes
  if (duration == 0.25) {
    minutes = 0.15
  } else if (duration == 0.5) {
    minutes = 0.3
  } else if (duration == 0.75) {
    minutes = 0.45
  } else {
    minutes = duration
  }

  return minutes
}

const getCurrent = timetable => {
  const today = new Date("October 22, 2019  16:00:00")
  const m = addZero(today.getMinutes())
  const h = addZero(today.getHours())
  let hm = h + "." + m

  console.table(timetable)

  let current = timetable.find(
    slot =>
      h >= slot.startTime && hm <= getMinutes(slot.duration) + slot.startTime
  )

  return current
}

module.exports = getCurrent
