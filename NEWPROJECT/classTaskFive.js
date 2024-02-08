// const classTiming = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"]

// const result = classTiming.filter((timing) => timing.length > AM);

// console.log(result);



const jakeTimeSchedules = ["9:00 AM", "11:00 PM", "1:00 PM", "3:00 PM", "5:00 PM"];

// Function to help me check PM in my timing 
function isPM(time) {
    return time.includes("PM");
  }
  
  // Using my filter methods to create  a new PM 
  const pmTimings = jakeTimeSchedules.filter(isPM);
  
  console.log("PM Timings :", pmTimings);
  
// function isAM(time){
//     return time.includes("AM");
// }  


// const pmTimings2 = jakeTimeSchedules.filter("isAM");
  
// console.log("AM Timings :", pmTimings2);