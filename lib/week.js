const getWeek = start => {
  let startDate = new Date(start).getTime() / 1000
  let currentDate = new Date().getTime() / 1000
  let diff = currentDate - startDate
  const day = 60 * 60 * 24
  let weeks = Math.floor(diff / day / 7) + 1

  return weeks
}

module.exports = getWeek
