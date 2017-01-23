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

    var NewLocation = new Location(inputtedPlace, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newLocation.place + "</span></li>");
  });
});

//business logic
// function Contact(first, last) {
  // this.firstName = first;
//   this.lastName = last;
// }
//
// // user interface logic
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
//
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
