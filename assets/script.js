// add real time to calendar to id current day - using moment.js
var currentDate = document.querySelector("#currentDay");
var toDoInfo = document.querySelector(".col-sm-8")

var date = moment().format("dddd, MMMM Do");
console.log(date)
currentDate.innerHTML = date

//add color coding for each block, current hour in red and future hours in green
// if time = to current time make text block red
// else if = time already pass , make block standard color grey
// else = time is in the future, make it green

function timeCompare () {

  var currentTime = moment().get("hour");
  console.log(currentTime);

    $(".planner-time").each(function () {
      var plannerTime = parseInt($(this).attr("id").split("time")[1])
      console.log(plannerTime)
      if (plannerTime === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else if (plannerTime > currentTime) {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
      else {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present"); 
      }
    
    })
  }

//save button save the info into local storage

$(".btn").click(function() {
    var text = $(this).siblings(".text-area").val();
    var time = $(this).parent().attr("id");
    console.log(text)
    console.log(time)
    localStorage.setItem(time, text);
  });
// add a function that stores written stuff in local storage
// add ability to load save data from local storage

$("#time8 .text-area").val(localStorage.getItem("time8"));
$("#time9 .text-area").val(localStorage.getItem("time9"));
$("#time10 .text-area").val(localStorage.getItem("time10"));
$("#time11 .text-area").val(localStorage.getItem("time11"));
$("#time12 .text-area").val(localStorage.getItem("time12"));
$("#time13 .text-area").val(localStorage.getItem("time13"));
$("#time14 .text-area").val(localStorage.getItem("time14"));
$("#time15 .text-area").val(localStorage.getItem("time15"));
$("#time16 .text-area").val(localStorage.getItem("time16"));
$("#time17 .text-area").val(localStorage.getItem("time17"));

// toDoInfo.appendChild(todo)

timeCompare();