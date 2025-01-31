'use strict';

window.addEventListener('load', worldClock);

const timeZones = {
  houston: 'America/Chicago',
  london: 'Europe/London',
  newyork: 'America/New_York',
  seattle: 'America/Los_Angeles',
  sydney: 'Australia/Sydney',
  tokyo: 'Asia/Tokyo',
  montreal: 'America/Toronto',
  beirut: 'Asia/Beirut',
};

function worldClock() {
  let currentDate = new Date();

  for (let office in timeZones) {
    let localTime = currentDate.toLocaleTimeString('en-US', {
      timeZone: timeZones[office],
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    document.querySelector(`#${office} span`).textContent = localTime;
    let carouselTime = document.querySelector(`#${office}-time`);
    if (carouselTime) {
      carouselTime.textContent = localTime;
    }
  }
}

setInterval(worldClock, 1000);
