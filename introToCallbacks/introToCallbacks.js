
class Clock {
  
  constructor() {
    this.date = new Date();
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


// const clock = new Clock();
// clock._tick();

// console.log(clock.printTime());
// setInterval(runClock, 1000);



// boundBark = calzone.bark.bind(calzone)
// console.log(boundBark());


const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  } else if (numsLeft > 0) {
    reader.question("Please enter a number:", num => {
      num = parseInt(num);
      partialSum = sum + num;
      addNumbers(partialSum, numsLeft-=1, completionCallback);
    });
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
  return () => {
    return this.apply(context);
  };
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
