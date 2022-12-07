$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  let today = dayjs();
  const saveButton = $('.saveBtn');

  
  $(".saveBtn").on('click', function() {
    var eventDescription = $(this).siblings(".description").val();
    var eventTime = $(this).parent().attr("id");

    localStorage.setItem(eventTime, eventDescription);
  });

  const dailyHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  
  for (i = 0; i < dailyHours.length; i++) {
    let eventInputStorage = localStorage.getItem('hour-' + hoursOfDay[i]);
    let hourTextArea = $('#hour-' + hoursOfDay[i] + ' > .description');
    hourTextArea.textContent = eventStorage;
  }



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function timeBlockColor() {
    let currentHour = moment().hour();
    $(".time-block").each(function() {
        let hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (hourBlock > currentHour) {
            $(this).addClass("future");
        } else if (hourBlock === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
};
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

