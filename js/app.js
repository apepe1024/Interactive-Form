"use strict";
//onload name field focus, hide elements that should be hidden
window.onload = () => {
  const initialFocus = $("#name").focus();
  const errorMessagePrepend = $('form').prepend('<p id="error-message"></p>');
  const hideElements = $("#other-title, #colors-js-puns, #credit-card, #paypal-option, #bitcoin-option, #error-message, .js_puns").hide();
  const totalCostAppend = $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
}
//variable for total cost of workshops
let totalCost = 0;
//error message variable for form validation
let errorMessage = "";
//email address regular expression
const emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
//cc regular expression
const creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
//zip regular expression
const zipCode = /^\d{5}(?:[-\s]\d{4})?$/;

//****************************Basic Info Section

//function for custom job role if "other" option selected
const jobRoleSelect = () => {
  if ($("#title").val() !== "other") {
    $("#other-title").hide();
  } else {
    $("#other-title").show();
  }
}
//click handler for job role selection
$("#title").on("click", jobRoleSelect);
//error/success classes if no value entered
$('#name, #mail, #cc-num, #zip, #cvv, #other-field').blur(function (){
	if ( $(this).val() === "")  {
		$(this).removeClass('success');
		$(this).addClass('error');
	} else {
		$(this).removeClass('error');
		$(this).addClass('success');
	}
});
//error/error handlers if email is blank vs if email is invalid
$("#mail").on("keypress blur", () => {
  $('#error-message').hide();
  if ( $("#mail").hasClass('error') ) {
      $('#error-message').hide();
      errorMessage = "<h2>Error!</h2> Please enter an email.";
      document.getElementById('error-message').innerHTML = errorMessage;
      $('#error-message').show();
  } else if ( !emailAddress.test($('#mail').val()) == true ) {
  		errorMessage = "<h2>Error!</h2> Please enter a valid email.";
      document.getElementById('error-message').innerHTML = errorMessage;
      $('#error-message').show();
  }
});

//****************************T-Shirt Info Section

//function for shirt type selection
const shirtDesignSelect = () => {
  if ($("#design").val() == "Select Theme") {
    $("#colors-js-puns").hide();
  } else {
    $("#colors-js-puns").show();
  }
}
//function for shirt color selection
const shirtColorSelect = () => {
  if ($("#design").val() == "js puns") {
    $(".js_puns").show();
    $(".heart_js").hide();
  } else if ($("#design").val() == "heart js") {
    $(".heart_js").show();
    $(".js_puns").hide();
  }
}
//click handler for shirt type and color selection
$("#design").on("click", shirtDesignSelect);
//click handler for shirt type and color selection
$("#color").on("focus", shirtColorSelect);

//****************************Registration Info Section

//function to ensure no conflicts on Tuesday morning
const tuesdayMorning = () => {
  if ( $("#js_frameworks").prop("checked") == true ) {
      $("#express")
        .prop("disabled", true)
        .parent()
        .css("text-decoration", "line-through");
  } else if ( $("#express").prop("checked") == true ) {
      $("#js_frameworks")
        .prop("disabled", true)
        .parent()
        .css("text-decoration", "line-through");
  }
  if ( $("#js_frameworks").prop("checked") == false ) {
      $("#express")
        .prop("disabled", false)
        .parent()
        .css("text-decoration", "none");
  }
  if ( $("#express").prop("checked") == false ) {
      $("#js_frameworks")
        .prop("disabled", false)
        .parent()
        .css("text-decoration", "none");
  }
}
//function to ensure no conflicts on Tuesday evening
const tuesdayEvening = () => {
  if ( $("#js_libs").prop("checked") == true ) {
      $("#node")
        .prop("disabled", true)
        .parent()
        .css("text-decoration", "line-through");
  } else if ( $("#node").prop("checked") == true ) {
      $("#js_libs")
        .prop("disabled", true)
        .parent()
        .css("text-decoration", "line-through");
  }
  if ( $("#js_libs").prop("checked") == false ) {
      $("#node")
        .prop("disabled", false)
        .parent()
        .css("text-decoration", "none");
  }
  if ( $("#node").prop("checked") == false ) {
      $("#js_libs")
        .prop("disabled", false)
        .parent()
        .css("text-decoration", "none");
  }
}
//function to combine Tuesday functions & update totalCost
const noConflicts = () => {
  tuesdayMorning();
  tuesdayEvening();
  $("#total").remove();
}
//series of .change() handlers for each checkbox to update totalCost
//I know these aren't DRY at all, but it's working code. I'll work on it.
$("#main_conference").change( () => {
  if ($("#main_conference").prop("checked") == true) {
    totalCost += 200;
  } else {
    totalCost -= 200;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
$("#js_frameworks").change( () => {
  if ($("#js_frameworks").prop("checked") == true) {
    totalCost += 100;
  } else {
    totalCost -= 100;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
$("#js_libs").change( () => {
  if ($("#js_libs").prop("checked") == true) {
    totalCost += 100;
  } else {
    totalCost -= 100;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
$("#express").change( () => {
  if ($("#express").prop("checked") == true) {
    totalCost += 100;
  } else {
    totalCost -= 100;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
$("#node").change( () => {
  if ($("#node").prop("checked") == true) {
    totalCost += 100;
  } else {
    totalCost -= 100;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
$("#build_tools").change( () => {
  if ($("#build_tools").prop("checked") == true) {
    totalCost += 100;
  } else {
    totalCost -= 100;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
$("#npm").change( () => {
  if ($("#npm").prop("checked") == true) {
    totalCost += 100;
  } else {
    totalCost -= 100;
  }
  return $(".activities").append("<legend id=\"total\">Total: $" + totalCost + "</legend>");
})
//click handler for activities' checkboxes
$( ":checkbox" ).on("click", noConflicts);

//****************************Payment Info Section

//function for payment option displays
const paymentOptionSelect = () => {
  if ($("#payment").val() == "select_method") {
    $("#credit-card, #paypal-option, #bitcoin-option").hide();
  } else if ($("#payment").val() == "credit card") {
    $("#credit-card").show();
    $("#paypal-option, #bitcoin-option").hide();
  } else if ($("#payment").val() == "paypal") {
    $("#paypal-option").show();
    $("#credit-card, #bitcoin-option").hide();
  } else if ($("#payment").val() == "bitcoin") {
    $("#bitcoin-option").show();
    $("#credit-card, #paypal-option").hide();
  }
}
//click handler for payment options
$("#payment").on("click", paymentOptionSelect);

//****************************Form Validation

//form validation submit handler
$('form').submit( (e) => {
  //prevent default refresh on submit
	e.preventDefault();
  //error testing against regex variables
	if ( $('#name').val() === "" ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please ensure you have entered all required fields.";
		$('#name').addClass('error');
		$('#name').focus();

	} else if ( !emailAddress.test($('#mail').val()) ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please enter a valid email.";
		$('#mail').focus();

	} else if ( $(".activities > label > input:checked").length === 0 ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please select at least one activity.";
		$('.activities').focus();

	} else if ( $("#payment").val() === "select_method" )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please select a payment method.";
		$('#payment').focus();

	} else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a valid credit card number.";
		$('#cc-num').focus();

	} else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter your 5 digit zip code.";
		$('#zip').focus();

	} else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
		$('#cvv').focus();

	} else {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "";
		alert("Registration Complete! See you at the conf!");
	}

	document.getElementById('error-message').innerHTML = errorMessage;
	$('#error-message').show();
});
