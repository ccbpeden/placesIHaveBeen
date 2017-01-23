function Location(place, landmark, timeOfYear, notes) {
  this.place = place;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

$(function() {
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();

    var newLocation = new Location(inputtedPlace, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);

    $("ul#places").append("<li> <span class='currentPlace'> " + newLocation.place + "</span></li>");

    $(".currentPlace").last().click(function(){
      $("#show-places").show();
      $("#show-places h2").text(newLocation.place);
      $(".place").text(newLocation.place);
      $(".landmark").text(newLocation.landmark);
      $(".timeOfYear").text(newLocation.timeOfYear);
      $(".notes").text(newLocation.notes);

    });
  });
});


//     $(".contact").click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//     });
//
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//   });
// });
