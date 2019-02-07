
var inch_meter = 0.0254;
var feet_meter = 0.3048;
var yard_meter = 0.9144;
var mile_meter = 1609.344;
var meter_meter = 1;
var kilometer_meter = 1000;
var u1;
var u2;
var f1 = 1;
var f2 = 1;

//Unit Selection Function
function unitchange(){
  var u1 = document.getElementById("unit1");
  var str1 = u1.options[u1.selectedIndex].value;
    if (str1 == "Inch"){
      f1 = inch_meter;
    } else if (str1 == "Feet"){
      f1 = feet_meter;
    } else if (str1 == "Yard"){
      f1 = yard_meter;
    } else if (str1 == "Mile"){
      f1 = mile_meter;
    } else if (str1 == "Meter"){
      f1 = meter_meter;
    } else {
      f1 = kilometer_meter;
    }
  //document.getElementById("fromunit").innerHTML = str1 + f1;
  
  var u2 = document.getElementById("unit2");
  var str2 = u2.options[u2.selectedIndex].value;
    if (str2 == "Inch"){
      f2 = inch_meter;
    } else if (str2 == "Feet"){
      f2 = feet_meter;
    } else if (str2 == "Yard"){
      f2 = yard_meter;
    } else if (str2 == "Mile"){
      f2 = mile_meter;
    } else if (str2 == "Meter"){
      f2 = meter_meter;
    } else {
      f2 = kilometer_meter;
    }
//document.getElementById("tounit").innerHTML = str2 + f2;
}

//Value Conversion Function
function convertvalue(v) {
  var v = document.getElementById("input").value;
  v = v * f1 / f2;
  var vf = v.toFixed(6)
  document.getElementById("output").innerHTML= vf;
}