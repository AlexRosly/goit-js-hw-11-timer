import './sass/main.scss';

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    time: document.querySelector('.timer'),
    message: document.querySelector('.deadline-message')
}

class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
   
  }

  intervalid = setInterval(() => {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.getTimeComponents(time);
    this.finishTime(time);
  }, 1000);

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
  
  pad(value) {
    return String(value).padStart(2, "0");
  }

  finishTime(time) {
    if (time < 0) {
      clearInterval(this.intervalId);
      refs.time.classList.add("hidden");
      refs.message.classList.add("visible");

    }
  }
}


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 31, 2021'),
});

