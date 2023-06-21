
class Clock {
  
  constructor() {
    this.date = new Date
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let runClock = this._tick.bind(this);
    setInterval(runClock, 1000);
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }



  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (this.second === 59) {
      this.second = 0;
      this.minute += 1;
    } 
    else {
      ++this.second;
    }

    if (this.minute === 59) {
      this.minute = 0;
      this.hour +=1;
    }
     
    this.printTime();
  }
  
}


const clock = new Clock();
// clock._tick();

// console.log(clock.printTime());
// setInterval(runClock, 1000);



// boundBark = calzone.bark.bind(calzone)
// console.log(boundBark());
