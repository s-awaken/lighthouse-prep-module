const talkingCalendar = function (date) {
  const newDate = date.split("/");
  if (newDate[1] === "01") {
    if (newDate[2] === "01") {
      return "January 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "January 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "January 3rd, " + newDate[0];
    } else {
      return "January " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "02") {
    if (newDate[2] === "01") {
      return "February 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "February 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "February 3rd, " + newDate[0];
    } else {
      return "February " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "03") {
    if (newDate[2] === "01") {
      return "March 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "March 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "March 3rd, " + newDate[0];
    } else {
      return "March " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "04") {
    if (newDate[2] === "01") {
      return "April 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "April 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "April 3rd, " + newDate[0];
    } else {
      return "April " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "05") {
    if (newDate[2] === "01") {
      return "May 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "May 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "May 3rd, " + newDate[0];
    } else {
      return "May " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "06") {
    if (newDate[2] === "01") {
      return "June 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "June 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "June 3rd, " + newDate[0];
    } else {
      return "June " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "07") {
    if (newDate[2] === "01") {
      return "July 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "July 2nd, " + newDate[2];
    } else if (newDate[2] === "03") {
      return "July 3rd, " + newDate[2];
    } else {
      return "July " + newDate[2] + "th, " + newDate[2];
    }
  } else if (newDate[1] === "08") {
    if (newDate[2] === "01") {
      return "August 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "August 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "August 3rd, " + newDate[0];
    } else {
      return "August " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "09") {
    if (newDate[2] === "01") {
      return "September 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "September 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "September 3rd, " + newDate[0];
    } else {
      return "September " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "10") {
    if (newDate[2] === "01") {
      return "October 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "October 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "October 3rd, " + newDate[0];
    } else {
      return "October " + newDate[2] + "th, " + newDate[0];
    }
  } else if (newDate[1] === "11") {
    if (newDate[2] === "01") {
      return "November 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "November 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "November 3rd, " + newDate[0];
    } else {
      return "November " + newDate[2] + "th, " + newDate[0];
    }
  } else {
    if (newDate[2] === "01") {
      return "December 1st, " + newDate[0];
    } else if (newDate[2] === "02") {
      return "December 2nd, " + newDate[0];
    } else if (newDate[2] === "03") {
      return "December 3rd, " + newDate[0];
    } else {
      return "December " + newDate[2] + "th, " + newDate[0];
    }
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
