var dataPlaceHolder = "%data%";
var name = "Layne Lund";
var role = "Software Engineer";

var formattedName = HTMLheaderName.replace(dataPlaceHolder, name);
var formattedRole = HTMLheaderRole.replace(dataPlaceHolder, role);

$("#main").append(formattedName);
$("#main").append(formattedRole);
