const pHours = document.querySelector('.hour');
const pMins = document.querySelector('.mins');
const pSecs = document.querySelector('.secs');

const dHours = document.querySelector('.digital-hour');
const dMins = document.querySelector('.digital-mins');
const dSecs = document.querySelector('.digital-secs');

const setDate = () => {
  const date = new Date();

  const hours = date.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  pHours.style.transform = `rotate(${hoursDegrees}deg)`;
  dHours.innerText = ('' + hours).padStart(2, 0);

  const mins = date.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  pMins.style.transform = `rotate(${minsDegrees}deg)`;
  dMins.innerText = ('' + mins).padStart(2, 0);

  const secs = date.getSeconds();
  const secsDegrees = ((secs / 60) * 360) + 90;
  pSecs.style.transform = `rotate(${secsDegrees}deg)`;
  dSecs.innerText = ('' + secs).padStart(2, 0);
};

setInterval(setDate, 1000);