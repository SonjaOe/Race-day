let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true ;
const runnerAge = 25

if(registeredEarly && runnerAge > 18) 
raceNumber += 1000

if(runnerAge > 18 && registeredEarly === true) console.log(`Early adults run at 9:30am. Your racenumber is ${raceNumber}.`)

else if (runnerAge > 18 && !registeredEarly) { console.log(`Late adults run at 11:00am. Your racenumber is ${raceNumber}.`) 
}
else if(runnerAge < 18) {
  console.log(`Youth registrants run at 12:30pm (regardless of registration). Your racenumber is ${raceNumber}.`)
  }
  else {
    console.log('Please see the registration desk.') }