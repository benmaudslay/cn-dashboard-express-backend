const { Router } = require("express")

const data = require("../data.json")
const { getTime } = require("../lib/clock")
const getDate = require("../lib/date")
const getTimetable = require("../lib/timetable")
const getCurrent = require("../lib/current")
const getWeek = require("../lib/week")

const router = Router()

router.get("/", (req, res) => {
  let calendar = getTimetable(data.timetable)
  let time = getTime()
  let date = getDate()
  let current = getCurrent(calendar)
  let week = getWeek(data.startDate)
  res.send({ calendar, time, date, current, week })
  // res.render("index", { calendar, time, date, current, week })
})

router.get("/getClock", (req, res) => {
  let time = getTime()
  res.send(time)
})

router.get("/getCurrent", (req, res) => {
  let calendar = getTimetable(data.timetable)
  let current = getCurrent(calendar)
  res.send(current)
})

module.exports = router
