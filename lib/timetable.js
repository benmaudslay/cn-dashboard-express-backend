const getTimetable = events => {
  // sort startTimes
  events.sort((a, b) => a.startTime - b.startTime)

  // add gaps + css classes
  for (let index = 0; index < events.length; index++) {
    const event = events[index]
    let nextIndex = index + 1
    let nextEvent = events[nextIndex]
    // 0 - 8 hours
    let startTime = event.startTime

    // Add classNames to object
    switch (event.duration) {
      case 0.25:
        event.className = "quarter"
        break
      case 0.5:
        event.className = "halfhour"
        break
      case 0.75:
        event.className = "threequarter"
        break
      case 1:
        event.className = "hour"
        break
      case 1.5:
        event.className = "hourhalf"
        break
      case 2:
        event.className = "two"
        break
      case 2.5:
        event.className = "twohalf"
        break
      case 3:
        event.className = "three"
        break
      case 3.5:
        event.className = "threehalf"
        break
      default:
        event.className = "hour"
        break
    }

    // Add blank periods to the timetable
    let endTime = startTime + event.duration

    if (nextEvent && endTime < nextEvent.startTime) {
      let gap = nextEvent.startTime - endTime

      // Create the blank timetable entry
      let blank = {
        name: "",
        by: "",
        startTime: endTime,
        duration: gap,
        timecode: "",
        className: "",
        category: "",
        gap: true
      }

      switch (gap) {
        case 0.25:
          blank.className = "quarter"
          break
        case 0.5:
          blank.className = "halfhour"
          break
        case 0.75:
          blank.className = "threequarter"
          break
        case 1:
          blank.className = "hour"
          break
        case 1.5:
          blank.className = "hourhalf"
          break
        case 2:
          blank.className = "two"
          break
        case 2.5:
          blank.className = "twohalf"
          break
        case 3:
          blank.className = "three"

        default:
          blank.className = ""
          break
      }

      events.splice(nextIndex, 0, blank)
    }
  }

  return events
}

module.exports = getTimetable
