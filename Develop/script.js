$(function () {

  //import dayjs, set current time
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM DD YYYY'));
  

  //makes click event listener for save button
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function() {
    // sets the description of the event value to local storage, acording to the event time key
    $(this).siblings('.description').val();
    var eventDescription = $(this).siblings('.description').get(0).value;
    var eventTime = $(this).parent().attr("id");

    localStorage.setItem(eventTime, eventDescription);
   
  });

  // variables for 8am - 5pm hour blocks
  let dailyHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  
  // when page reloads, loop to reload event descriptions
  for (i = 0; i < dailyHours.length; i++) {
    let storedTimeID = ('hour-' + dailyHours[i]);
    let storedDescription = $('#hour-' + dailyHours[i] + ' .description');

    $(storedDescription).val(localStorage.getItem(storedTimeID));
  };

  // code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  for (var i = 0; i < dailyHours.length; i ++) {
    let currentHour = dayjs().hour();
    if (dailyHours[i] < currentHour) {
      $('#hour-' + dailyHours[i]).addClass('past');
    } else if (dailyHours[i] == currentHour) {
        $('#hour-' + dailyHours[i]).removeClass('past');
        $('#hour-' + dailyHours[i]).addClass('present');
    } else {
        $('#hour-' + dailyHours[i]).removeClass('past');
        $('#hour-' + dailyHours[i]).removeClass('present');
        $('#hour-' + dailyHours[i]).addClass('future');
    }
  }

});
