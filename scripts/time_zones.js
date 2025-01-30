// const offices = {
//   houston: -360,
//   london: 0,
//   newyork: -300,
//   seatle: -480,
//   sydney: 660,
//   tokyo: 540,
//   montreal: -300,
// };

// function worldClock() {
//   let currentDate = new Date();
//   console.log('this is the current date ', currentDate);

//   for (let office in offices) {
//     let offset = offices[office] * 60000; // convert minutes to milliseconds
//     let localTime = new Date(currentDate.getTime() + offset);
//     // console.log(`${office} local time: `, localTime.toLocaleTimeString());

//     document.querySelector(`#${office} span`).textContent =
//       localTime.toLocaleTimeString();
//   }
// }

// setInterval(worldClock, 1000);
// worldClock();

const timeZones = {
  houston: 'America/Chicago',
  london: 'Europe/London',
  newyork: 'America/New_York',
  seattle: 'America/Los_Angeles',
  sydney: 'Australia/Sydney',
  tokyo: 'Asia/Tokyo',
  montreal: 'America/Montreal',
};

function worldClock() {
  let currentDate = new Date();

  for (let office in timeZones) {
    let localTime = currentDate.toLocaleTimeString('en-Us', {
      timeZone: timeZones[office],
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    document.querySelector(`#${office} span`).textContent = localTime;
  }
}

setInterval(worldClock, 1000);
