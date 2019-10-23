const addZero = i => {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

const getTime = () => {
  const today = new Date()
  let AMPM

  if (today.getHours() > 11) {
    AMPM = "PM"
  } else {
    AMPM = "AM"
  }

  const h = addZero(today.getHours())
  const m = addZero(today.getMinutes())

  const time = {
    digits: `${h}:${m}`,
    period: AMPM
  }

  return time
}

module.exports = {
  getTime,
  addZero
}
