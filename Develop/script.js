$(function () {

  let today = dayjs();
  const saveButton = $('.saveBtn');

  $(".saveBtn").on('click', function() {
    var eventDescription = $(this).siblings(".description").val();
    var eventTime = $(this).parent().attr("id");

    localStorage.setItem(eventTime, eventDescription);
  });

  let dailyHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  
  for (i = 0; i < dailyHours.length; i++) {
    let eventInputStorage = localStorage.getItem('hour-' + dailyHours[i]);
    let eventTextInput = $('#hour-' + dailyHours[i] + ' > .description');
    eventTextInput.textContent = eventInputStorage;
  };

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
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

