
//grabs url
var currentURL = window.location.origin;

//sends post request with survey results
$("#submitDogData").on("click", function(){

    if( ($('#name').val().trim() !== "") && ($('#photo').val().trim() !== "") 
        && ($('#question-1').val() !== null) && ($('#question-2').val() !== null)
        && ($('#question-3').val() !== null) && ($('#question-4').val() !== null)
        && ($('#question-5').val() !== null) && ($('#question-6').val() !== null)
        && ($('#question-7').val() !== null) && ($('#question-8').val() !== null)
        && ($('#question-9').val() !== null) && ($('#question-10').val() !== null)
    ) {
        //creates object for survey info
        var surveyInfo = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#question-1").val().trim(), $("#question-2").val().trim(), $("#question-3").val().trim(), $("#question-4").val().trim(), $("#question-5").val().trim(), $("#question-6").val().trim(), $("#question-7").val().trim(), $("#question-8").val().trim(), $("#question-9").val().trim(), $("#question-10").val().trim()]
        }
        //sends post request with survey data
        $.post(currentURL + "/api/dog/friends", surveyInfo, function(data){
          	//displays matching friends's name and photo
          	$("#bestFriendName").text(data.name);
          	$('#bestFriendImg').attr("src", data.photo);

          	//displays modal
          	$("#friendModal").modal('toggle');
          
          	//clears input fields
          	$("#name").val("");
          	$("#photo").val("");

        });
    } 
    else {
    	//displays message if data is missing
        // $("#closeModal").removeClass('closeModal');
        // $("#closeModal").addClass('closePetModal');
        $(".modal-title").text("Oops. Some information is missing.");
        $(".modal-body").html("<h2>Please complete the survey and resubmit.</h2>");
        $("#friendModal").modal('toggle');

    }
    return false;
});

//sends post request with survey results
$("#submitPersonData").on("click", function(){

    if ( ($('#name').val().trim() !== "") && ($('#photo').val().trim() !== "") 
          && ($('#question-1').val() !== null) && ($('#question-2').val() !== null)
          && ($('#question-3').val() !== null) && ($('#question-4').val() !== null)
          && ($('#question-5').val() !== null) && ($('#question-6').val() !== null)
          && ($('#question-7').val() !== null) && ($('#question-8').val() !== null)
          && ($('#question-9').val() !== null) && ($('#question-10').val() !== null)
      ) {
        //creates object for survey info
        var surveyInfo = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#question-1").val().trim(), $("#question-2").val().trim(), $("#question-3").val().trim(), $("#question-4").val().trim(), $("#question-5").val().trim(), $("#question-6").val().trim(), $("#question-7").val().trim(), $("#question-8").val().trim(), $("#question-9").val().trim(), $("#question-10").val().trim()]
        }

        //sends post request with survey data
        $.post(currentURL + "/api/people/friends", surveyInfo, function(data){

          //displays matching friends's name and photo
          $("#bestFriendName").text(data.name);
          $('#bestFriendImg').attr("src", data.photo);

          //displays modal
          $("#friendModal").modal('toggle');
          
          //clears input fields
          $("#name").val("");
          $("#photo").val("");

        });
    } 
    else {
    	  //displays message if data is missing
        // $("#closeModal").removeClass('closeModal');
        // $("#closeModal").addClass('closeFriendModal');
        $(".modal-title").text("Oops. Some information is missing.");
        $(".modal-body").html("<h2>Please complete the survey and resubmit.</h2>");
        $("#friendModal").modal('toggle');

    }
    return false;
});

//displays home page when close modal
$('.closeModal').click(function() {
  location.reload();
    // $.get(currentURL + 'pet-survey',function(req,res){
    //    location.replace(res);
    // });
});

// $('.closeFriendModal').click(function() {
//     $("#closeModal").removeClass('closeFriendModal');
//     $("#closeModal").addClass('closeModal');
//     location.reload();
//     $.get(currentURL + '/owner/survey',function(req,res){
//        location.replace(res);
//     });
// });

// $('.closePetModal').click(function() {
//     $("#closeModal").removeClass('closePetModal');
//     $("#closeModal").addClass('closeModal');
//     location.reload();
    // $.get('pet-survey',function(req,res){
    //    location.replace(res);
    // });
// });
