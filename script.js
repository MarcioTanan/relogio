const hourHand = document.querySelector('.hand.hours')
const minutesHand = document.querySelector('.hand.minutes')
const secondsHand = document.querySelector('.hand.seconds')

const setRotation = () => {

}

const setClock = (element, rotationPercentage) =>{
const currentDate = new Date();

const secondsPercentage = currentDate.getSeconds() / 60;
const minutesPercentage = currentDate.getMinutes() / 60;
const hoursPercentage = currentDate.getHours() / 12;

}