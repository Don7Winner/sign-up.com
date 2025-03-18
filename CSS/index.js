$(document).ready(function () {
  const form = $("form");
  const firstName = $("#fname");
  const lastName = $("#lname");
  const emailAddress = $("#email");
  const button = $("#submit");

  form.submit("submit", function (e) {
    e.preventDefault();
  });
  button.click(function () {
    // ERROR MESSAGE FOR FIRSTNAME
    if (firstName.val() == "" || firstName.val() == null) {
      $("#errorMsgfname").text("first name cannot be empty").show();
      firstName
        .css("border", "1px solid hsl(0, 100%, 74%)")
        .css("backgroundImage", "url(../images/icon-error.svg)")
        .attr("placeholder", "");
    } else {
      firstName
        .css("border", "1px solid hsl(246, 25%, 77%)")
        .css("backgroundImage", "none");
      $("#errorMsgfname").text("");
    }
    // ERROR MESSAGE FOR LASTNAME
    if (lastName.val() == "" || lastName.val() == null) {
      $("#errorMsglname").text("Last name cannot be empty").show();
      lastName
        .css("border", "1px solid hsl(0, 100%, 74%)")
        .css("backgroundImage", "url(../images/icon-error.svg)")
        .attr("placeholder", "");
    } else {
      lastName
        .css("border", "1px solid hsl(246, 25%, 77%)")
        .css("backgroundImage", "none");
      $("#errorMsglname").text("");
    }
    // ERROR MESSAGE FOR EMAIL ADDRESS
    function validEmailAddress() {
      const email = $("#email").val();
      const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (emailPattern.test(email)) {
        return true;
      } else {
        return false;
      }
    }
    if (validEmailAddress()) {
      emailAddress
        .css("border", "1px solid hsl(246, 25%, 77%)")
        .css("backgroundImage", "none");
      $("#errorMsgEmail").text("");
    } else {
      emailAddress
        .css("border", "1px solid hsl(0, 100%, 74%)")
        .css("backgroundImage", "url(../images/icon-error.svg)")
        .css("::placeholder", "color: red")
        .attr("placeholder", "email@example/come");
      $("#errorMsgEmail").text("Looks like this is not an email").show();
    }
    // ERROR MESSAGE FOR PASSWORD
    const password = $("#password");
    if (password.val().length < 6 || password.length == "") {
      password
        .css("border", "1px solid hsl(0, 100%, 74%)")
        .css("backgroundImage", "url(../images/icon-error.svg)")
        .attr("placeholder", "");
      $("#errorMsgPassword").text("password cannot be less than 6").show();
    } else {
      password
        .css("border", "1px solid hsl(246, 25%, 77%)")
        .css("backgroundImage", "none");
      $("#errorMsgPassword").text("");
    }
    const email = $("#email").val();
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (
      firstName.val() == "" ||
      lastName.val() == "" ||
      !emailPattern.test(email) ||
      password.val().length < 6
    ) {
      form.submit("submit", function (e) {
        e.preventDefault();
      });
    } else {
      location.reload(alert("SUCCESSFUL!"));
    }
  });
});
