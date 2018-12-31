'use strict';

console.log("as of: " + Date());

var currentUser = "Bob Recio"; //testing

var memberFields = ["Field1"],
  adminFields = ["Field1", "Field2", "Field3", "Field4"];

$(document).ready(function () {
  disableAllFields();
  enableFields(getUserRole(currentUser));

  function getUserRole(thisUser) {
    var thisRole = "";
    var userInfo = JSON.stringify(poclist);
    //userInfo = userInfo.splice({UserName: thisUser});
    console.log(thisUser,"\n",userInfo);
    //return thisRole;
  }

  function disableAllFields() {
    $("td>*").each(function () {
      $(this).attr("disabled", "disabled");
    });
  }

  function enableFields(arrFields) {
    var fields = arrFields;
    $.each(fields, function () {
      var jqSelect = ".formlabel:contains(" + this + ")";
      $(jqSelect).siblings().children().removeAttr('disabled');
    })
  }
});