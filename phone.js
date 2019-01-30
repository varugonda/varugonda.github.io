$(document).ready(function() { // do this when the document is loaded
	$("#dialpad").show(); // show the element with ID "dialpad"
	$("#contacts").hide(); // hide the element with ID "contacts"
  $("#addcontact").hide(); // hide the element with ID "addcontact"
});

$("#dialerButton").click(function() { // do this when dialer is clicked
	$("#dialpad").show(); // show the element with ID "dialpad"
	$("#contacts").hide(); // hide the element with ID "contacts"
  $("#addcontact").hide(); // hide the element with ID "addcontact"
});

$("#phonebookButton").click(function() { // do this when contacts is clicked
	$("#dialpad").hide(); // hide the element with ID "dialpad"
	$("#contacts").show(); // show the element with ID "contacts"
  $("#addcontact").hide(); // hide the element with ID "addcontact"
});

$("#addcontactButton").click(function() { // do this when add contacts is clicked
	$("#dialpad").hide(); // hide the element with ID "dialpad"
	$("#contacts").hide(); // hide the element with ID "contacts"
  $("#addcontact").show(); // show the element with ID "addcontact"
});
