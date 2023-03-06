// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (number) {
  // initializing and calculating variables
  let years = Math.floor(number / 31536000)
  let days = Math.floor((number % 31536000) / 86400)
  let hours = Math.floor(((number % 31536000) % 86400) / 3600)
  let minutes = Math.floor((((number % 31536000) % 86400) % 3600) / 60)
  let seconds = ((((number % 31536000) % 86400) % 3600) % 60)
  
  // checking and returning every possible outcome
  if (years == 0 && days == 0 && hours == 0 && minutes == 0 && seconds == 0){
    return "now"
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes == 0 && seconds == 1){
    return `${seconds} second`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes == 0 && seconds > 1){
    return `${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes == 1 && seconds == 0){
    return `${minutes} minute`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes == 1 && seconds == 1){
    return `${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes == 1 && seconds > 1){
    return `${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes > 1 && seconds == 0){
    return `${minutes} minutes`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes > 1 && seconds == 1){
    return `${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours == 0 && minutes > 1 && seconds > 1){
    return `${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes == 0 && seconds == 0){
    return `${hours} hour`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes == 0 && seconds == 1){
    return `${hours} hour and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes == 0 && seconds > 1){
    return `${hours} hour and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes == 1 && seconds == 0){
    return `${hours} hour and ${minutes} minute`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes == 1 && seconds == 1){
    return `${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes == 1 && seconds > 1){
    return `${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes > 1 && seconds == 0){
    return `${hours} hour and ${minutes} minutes`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes > 1 && seconds == 1){
    return `${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours == 1 && minutes > 1 && seconds > 1){
    return `${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 0 && seconds == 0){
    return `${hours} hours`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 0 && seconds == 1){
    return `${hours} hours and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 0 && seconds > 1){
    return `${hours} hours and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 1 && seconds == 0){
    return `${hours} hours and ${minutes} minute`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 1 && seconds == 1){
    return `${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 1 && seconds > 1){
    return `${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes > 1 && seconds == 0){
    return `${hours} hours and ${minutes} minutes`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes > 1 && seconds == 1){
    return `${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes > 1 && seconds > 1){
    return `${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 0 && seconds == 1){
    return `${hours} hours and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 0 && seconds > 1){
    return `${hours} hours and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 1 && seconds == 0){
    return `${hours} hours and ${minutes} minute`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 1 && seconds == 1){
    return `${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes == 1 && seconds > 1){
    return `${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes > 1 && seconds == 0){
    return `${hours} hours and ${minutes} minutes`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes > 1 && seconds == 1){
    return `${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 0 && hours > 1 && minutes > 1 && seconds > 1){
    return `${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes == 0 && seconds == 0){
    return `${days} day`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes == 0 && seconds == 1){
    return `${days} day and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes == 0 && seconds > 1){
    return `${days} day and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes == 1 && seconds == 0){
    return `${days} day and ${minutes} minute`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes == 1 && seconds == 1){
    return `${days} day, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes == 1 && seconds > 1){
    return `${days} day, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes > 1 && seconds == 0){
    return `${days} day and ${minutes} minutes`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes > 1 && seconds == 1){
    return `${days} day, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours == 0 && minutes > 1 && seconds > 1){
    return `${days} day, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes == 0 && seconds == 0){
    return `${days} day and ${hours} hour`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes == 0 && seconds == 1){
    return `${days} day, ${hours} hour and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes == 0 && seconds > 1){
    return `${days} day, ${hours} hour and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes == 1 && seconds == 0){
    return `${days} day, ${hours} hour and ${minutes} minute`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes == 1 && seconds == 1){
    return `${days} day, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes == 1 && seconds > 1){
    return `${days} day, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes > 1 && seconds == 0){
    return `${days} day, ${hours} hour and ${minutes} minutes`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes > 1 && seconds == 1){
    return `${days} day, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours == 1 && minutes > 1 && seconds > 1){
    return `${days} day, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 0 && seconds == 0){
    return `${days} day and ${hours} hours`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${days} day, ${hours} hours and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${days} day, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${days} day, ${hours} hours and ${minutes} minute`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${days} day, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${days} day, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${days} day, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${days} day, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${days} day, ${hours} hours and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${days} day, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${days} day, ${hours} hours and ${minutes} minute`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${days} day, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${days} day, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${days} day, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${days} day, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days == 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
    else if (years == 0 && days > 1 && hours == 0 && minutes == 0 && seconds == 0){
    return `${days} days`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes == 0 && seconds == 1){
    return `${days} days and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes == 0 && seconds > 1){
    return `${days} days and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes == 1 && seconds == 0){
    return `${days} days and ${minutes} minute`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes == 1 && seconds == 1){
    return `${days} days, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes == 1 && seconds > 1){
    return `${days} days, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes > 1 && seconds == 0){
    return `${days} days and ${minutes} minutes`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes > 1 && seconds == 1){
    return `${days} days, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours == 0 && minutes > 1 && seconds > 1){
    return `${days} days, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes == 0 && seconds == 0){
    return `${days} days and ${hours} hour`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes == 0 && seconds == 1){
    return `${days} days, ${hours} hour and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes == 0 && seconds > 1){
    return `${days} days, ${hours} hour and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes == 1 && seconds == 0){
    return `${days} days, ${hours} hour and ${minutes} minute`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes == 1 && seconds == 1){
    return `${days} days, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes == 1 && seconds > 1){
    return `${days} days, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes > 1 && seconds == 0){
    return `${days} days, ${hours} hour and ${minutes} minutes`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes > 1 && seconds == 1){
    return `${days} days, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours == 1 && minutes > 1 && seconds > 1){
    return `${days} days, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 0 && seconds == 0){
    return `${days} days and ${hours} hours`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${days} days, ${hours} hours and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${days} days, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${days} days, ${hours} hours and ${minutes} minute`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${days} days, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${days} days, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${days} days, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${days} days, ${hours} hours and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${days} days, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${days} days, ${hours} hours and ${minutes} minute`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${days} days, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${days} days, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${days} days, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 0 && days > 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  } 
  else if (years == 1 && days == 0 && hours == 0 && minutes == 0 && seconds == 0){
    return `${years} year`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes == 0 && seconds == 1){
    return `${years} year and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes == 0 && seconds > 1){
    return `${years} year and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes == 1 && seconds == 0){
    return `${years} year and ${minutes} minute`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes == 1 && seconds == 1){
    return `${years} year, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes == 1 && seconds > 1){
    return `${years} year, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes > 1 && seconds == 0){
    return `${years} year and ${minutes} minutes`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes > 1 && seconds == 1){
    return `${years} year, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours == 0 && minutes > 1 && seconds > 1){
    return `${years} year, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes == 0 && seconds == 0){
    return `${years} year and ${hours} hour`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${hours} hour and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${hours} hour and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${hours} hour and ${minutes} minute`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${hours} hour and ${minutes} minutes`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours == 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 0 && seconds == 0){
    return `${years} year and ${hours} hours`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${hours} hours and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${hours} hours and ${minutes} minute`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${hours} hours and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${hours} hours and ${minutes} minute`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 0 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes == 0 && seconds == 0){
    return `${years} year and ${days} day`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} day and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} day and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} day and ${minutes} minute`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} day, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} day, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} day and ${minutes} minutes`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} day, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours == 0 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} day, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes == 0 && seconds == 0){
    return `${years} year, ${days} day and ${hours} hour`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hour and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hour and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} day, ${hours} hour and ${minutes} minute`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} day, ${hours} hour and ${minutes} minutes`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours == 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 0 && seconds == 0){
    return `${years} year, ${days} day and ${hours} hours`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hours and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} day, ${hours} hours and ${minutes} minute`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} day, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hours and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} day, ${hours} hours and ${minutes} minute`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} day, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days == 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
    else if (years == 1 && days > 1 && hours == 0 && minutes == 0 && seconds == 0){
    return `${years} year and ${days} days`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} days and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} days and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} days and ${minutes} minute`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} days, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} days, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} days and ${minutes} minutes`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} days, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours == 0 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} days, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes == 0 && seconds == 0){
    return `${years} year, ${days} days and ${hours} hour`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hour and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hour and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} days, ${hours} hour and ${minutes} minute`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} days, ${hours} hour and ${minutes} minutes`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours == 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 0 && seconds == 0){
    return `${years} year, ${days} days and ${hours} hours`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hours and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} days, ${hours} hours and ${minutes} minute`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} days, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hours and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hours and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} year, ${days} days, ${hours} hours and ${minutes} minute`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} year, ${days} days, ${hours} hours and ${minutes} minutes`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years == 1 && days > 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} year, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes == 0 && seconds == 0){
    return `${years} years`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes == 0 && seconds == 1){
    return `${years} years and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes == 0 && seconds > 1){
    return `${years} years and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes == 1 && seconds == 0){
    return `${years} years and ${minutes} minute`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes == 1 && seconds == 1){
    return `${years} years, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes == 1 && seconds > 1){
    return `${years} years, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes > 1 && seconds == 0){
    return `${years} years and ${minutes} minutes`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes > 1 && seconds == 1){
    return `${years} years, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours == 0 && minutes > 1 && seconds > 1){
    return `${years} years, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes == 0 && seconds == 0){
    return `${years} years and ${hours} hour`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${hours} hour and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${hours} hour and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${hours} hour and ${minutes} minute`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${hours} hour and ${minutes} minutes`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours == 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 0 && seconds == 0){
    return `${years} years and ${hours} hours`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${hours} hours and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${hours} hours and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${hours} hours and ${minutes} minute`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${hours} hours and ${minutes} minutes`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${hours} hours and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${hours} hours and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${hours} hours and ${minutes} minute`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${hours} hours and ${minutes} minutes`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 0 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes == 0 && seconds == 0){
    return `${years} years and ${days} day`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} day and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} day and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} day and ${minutes} minute`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} day, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} day, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} day and ${minutes} minutes`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} day, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours == 0 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} day, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes == 0 && seconds == 0){
    return `${years} years, ${days} day and ${hours} hour`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hour and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hour and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} day, ${hours} hour and ${minutes} minute`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} day, ${hours} hour and ${minutes} minutes`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours == 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 0 && seconds == 0){
    return `${years} years, ${days} day and ${hours} hours`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hours and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hours and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} day, ${hours} hours and ${minutes} minute`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} day, ${hours} hours and ${minutes} minutes`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hours and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hours and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} day, ${hours} hours and ${minutes} minute`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} day, ${hours} hours and ${minutes} minutes`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days == 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
    else if (years > 1 && days > 1 && hours == 0 && minutes == 0 && seconds == 0){
    return `${years} years and ${days} days`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} days and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} days and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} days and ${minutes} minute`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} days, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} days, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} days and ${minutes} minutes`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} days, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours == 0 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} days, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes == 0 && seconds == 0){
    return `${years} years, ${days} days and ${hours} hour`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hour and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hour and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} days, ${hours} hour and ${minutes} minute`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hour, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hour, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} days, ${hours} hour and ${minutes} minutes`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hour, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours == 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 0 && seconds == 0){
    return `${years} years, ${days} days and ${hours} hours`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hours and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hours and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} days, ${hours} hours and ${minutes} minute`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} days, ${hours} hours and ${minutes} minutes`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 0 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hours and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 0 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hours and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 0){
    return `${years} years, ${days} days, ${hours} hours and ${minutes} minute`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 1 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes == 1 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minute and ${seconds} seconds`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 0){
    return `${years} years, ${days} days, ${hours} hours and ${minutes} minutes`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes > 1 && seconds == 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} second`
  }
  else if (years > 1 && days > 1 && hours > 1 && minutes > 1 && seconds > 1){
    return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  }
}
