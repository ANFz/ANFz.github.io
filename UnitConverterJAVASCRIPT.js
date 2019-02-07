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
}

//Value Conversion Function
function convertvalue(v) {
  var v = document.getElementById("input").value;
  v = v * f1 / f2;
  var vf = v.toFixed(6)
  document.getElementById("output").innerHTML= vf;
  v = document.getElementById("input").value;
  if (v == "forbidden"){
  document.getElementById("output").innerHTML= 666;
  {
  var q = document.getElementById("input").value;
  if (q == "forbidden"){
    var blinks = document.getElementsByTagName('input');
    var visibility = 'hidden';
    window.setInterval(function() {
      for (var i = blinks.length - 1; i >= 0; i--) {
        blinks[i].style.visibility = visibility;
      }
      visibility = (visibility === 'visible') ? 'hidden' : 'visible';
    }, 250);
    document.getElementById("input").value = "YOU FOOL!";
  }
}
  }
  
}

//Random Comment Generator
function rando(){
  var r = Math.floor(Math.random() * 10);
  if (r == 0){
      r = "What a great conversion!";
    } else if (r == 1){
      r = "Imagine if these were alerts";
    } else if (r == 2){
      r = "CRITICAL CONVERSION!";
    } else if (r == 3){
      r = "Yep, that's a conversion alright";
    } else if (r == 4){
      r = "Dr. Ames is a cool dude!";
    } else if (r == 5){
      r = "I looked up some funny quotes but they were all dumb";
    } else if (r == 6){
      r = "That'll do converter, that'll do";
    } else if (r == 7){
      r = "Don't type in forbidden";
    } else if (r == 8){
      r = "I'm running out of ideas";
    } else{
      r = "Your conversions fuel me";
    }

      
  document.getElementById("comment").innerHTML= r;
}

function forbidden(){
  var q = document.getElementById("input").value;
  if (q == "forbidden"){
    var blinks = document.getElementsByTagName('input');
    var visibility = 'hidden';
    window.setInterval(function() {
      for (var i = blinks.length - 1; i >= 0; i--) {
        blinks[i].style.visibility = visibility;
      }
      visibility = (visibility === 'visible') ? 'hidden' : 'visible';
    }, 250);
    document.getElementById("input").value = "YOU FOOL!";
  }
}