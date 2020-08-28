
const tpChecker = object =>{
  // magical numbers shall not pass!
  const standardRollSheetsNum = 500
  const dailySheetUsagePerPerson = 57
  const quarantineDays = 14
  const totalDailySheetUsage = object.people * dailySheetUsagePerPerson
  const totalAvailableTpSheets = object.tp * standardRollSheetsNum
  const daysSupportedWithTp = (totalAvailableTpSheets/totalDailySheetUsage).toFixed()

  if (daysSupportedWithTp > quarantineDays){
    console.log(`Your TP will last ${daysSupportedWithTp} days, no need to panic!!`)
  } else {
    console.log(`Your TP will only last ${daysSupportedWithTp} days, buy more!`)
  }
}
tpChecker({people: 4, tp: 1})
tpChecker({people: 3, tp: 20})
tpChecker({people: 4, tp: 12})