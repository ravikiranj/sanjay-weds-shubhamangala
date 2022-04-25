const weddingDate = Date.parse("2022-06-09T09:00:00Z");

var timing = setInterval( // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
  function () {

    var currentDate = new Date().getTime(); //same thing as above
    var timeLeft = weddingDate - currentDate; //difference between time you set and now in miliseconds

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days
    if (days < 10) days="0"+days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
    if (hours < 10) hours="0"+hours;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes
    if (minutes < 10) minutes="0"+minutes;
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
    if (seconds < 10) seconds="0"+seconds;

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s"; // putting number of days, hours, minutes and seconds in div,

    if (timeLeft <= 0) {
      clearInterval(timing);
      document.getElementById("countdown").innerHTML = "It's wedding time!";
    }
  }, 1000);