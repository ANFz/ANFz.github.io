      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 28.6934, lng: -81.510618},
          zoom: 11,
          mapTypeId: 'satellite'
        });
var contentString1 = '<h1>The Fisher Home</h1>'+
'<p>The Fisher property, composed of around 70 acres, was purchased by Russell Fisher sometime in the 80s as an investment and used for orange production. Later the land was given to Lawrence Fisher and used for plant nurseries to support the Fisher Family. A house for the family was built sometime in the 1992. The orange grove plot (20acres) was later sold and turned into a neighborhood development. Lawrence and Stacey Fisher still reside on the property to this day.</p>'+
'<p>Attribution: My Brain, <a href="https://en.wikipedia.org/wiki/Brain">'+'https://en.wikipedia.org/wiki/Brain </a> '+
'</div>';     
var contentString2 = '<h1>Apopka High School</h1>'+
'<p>The school originated in what is now Apopka City Hall. In 1950, the school was moved to what is now Apopka Memorial Middle School, and then to its current location in 1976. In 2009, most of the campus was torn down and a new campus was constructed with the same layout as Timber Creek, Ocoee, Wekiva, and Freedom High Schools. In spring 1932, students were asked to choose a mascot for the athletic teams. Dr. Carey C. Womble proposed the blue darter, which won. Before that the school mascot was a Blue Devil.</p>' + '<p> Apopka competes in the Florida High School Athletic Association and has about 26 total sports teams. The football team won the class 6A State Championship in 2001. Since then the Apopka Blue Darters, led by Head Coach Rick Darlington, have collected two 8A state titles (12 & 14) along with a 2013 state runner-up. The Apopka High School football team currently competes in District 4, Region 1 of FHSAA Class 8A. They hold an overall record of 106-29 since 2005.Apopka High School boys varsity bowling team had three consecutive undefeated seasons in 2013, 2014, and 2015. The boys varsity team won the 2013 and 2014 Mens bowling state championships undefeated both years with the same five starters on the team for both years.</p>'+
'<p>Attribution: Apopka High School, <a href="https://en.wikipedia.org/wiki/Apopka_High_School">'+'https://en.wikipedia.org/wiki/Apopka_High_School </a> '+
'</div>';     
var contentString3 ='<h1>The Church of Jesus Christ of Latter-Day Saints</h1>'+
'<p>The Church of Jesus Christ of Latter-day Saints is the official name of the religion. It was established April 6, 1830, by Joseph Smith, the first president of the Church. We believe he was called by God to be a prophet in this modern era, just as Moses and Abraham were called in biblical times. Joseph Smith saw God the Father and Jesus Christ in a vision after praying to know which church to join. They called on him to restore the church Christ had organized when He was on the earth, with the proper organization and priesthood authority that had been lost shortly after the Savior’s death. </p>' + '<p> From the original six members when the Church was first formed in 1830, the restored Church of Jesus Christ has now grown to a membership of over 15 million people, living on six continents. After Joseph Smith’s death, an unbroken succession of prophets have led the Church; these prophets and other Church leaders who serve with them are always striving to bring individuals to a better understanding and greater love for the gospel of Jesus Christ.</p>'+
'<p>Attribution: Lake Apopka, <a href="https://www.mormon.org/about-us">'+
'https://www.mormon.org/about-us </a> '+
'</div>';    
var contentString4 ='<h1>Wekiva Springs State Park</h1>'+
'<p>Wekiwa Springs State Park is a 7,000-acre (28 km2) Florida State Park in Apopka, Florida. It is located 20 minutes north of Orlando, off Interstate 4 at exit 94, near Altamonte Springs and Longwood. The park also contains the head water of the Wekiva River. It also serves as the headquarters of one of the states five AmeriCorps Florida State Parks chapters. Although the springs are spelled Wekiwa Springs, the river and most subdivisions and streets in Seminole County use the Wekiva spelling. Wekiwa is the Creek word for a spring, but contrary to popular belief that Wekiva means flowing water, it was actually an alternate spelling used by developers.</p>'+
'<p>Attribution: Lake Apopka, <a href="https://en.wikipedia.org/wiki/Wekiwa_Springs_State_Park">'+
'https://en.wikipedia.org/wiki/Wekiwa_Springs_State_Park</a> '+
'</div>';  
var contentString5 =
'<h1>Lake Apopka</h1>'+
'<p>Lake Apopka is the fourth largest lake in the U.S. state of Florida. It is located 15 miles (24 km) northwest of Orlando, mostly within the bounds of Orange County, although the western part is in Lake County. Fed by a natural spring, rainfall and stormwater runoff, water from Lake Apopka flows through the Apopka-Beauclair Canal and into Lakes Beauclair and Dora. From Lake Dora, water flows into Lake Eustis, then into Lake Griffin and then northward into the Ocklawaha River, which flows into the St. Johns River.</p>'+
'<p>Attribution: Lake Apopka, <a href="https://en.wikipedia.org/wiki/Lake_Apopka">'+
'https://en.wikipedia.org/wiki/Lake_Apopka</a> '+
'</div>';
      
var infowindow1 = new google.maps.InfoWindow({
content: contentString1
  });
var infowindow2 = new google.maps.InfoWindow({
content: contentString2
  });
var infowindow3 = new google.maps.InfoWindow({
content: contentString3
  });
var infowindow4 = new google.maps.InfoWindow({
content: contentString4
  });       
var infowindow5 = new google.maps.InfoWindow({
content: contentString5
  });
var image1 = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        
var marker1 = new google.maps.Marker({
    position: {lat: 28.7096054, lng: -81.5465029},
    map: map,
    icon: image1,
    title: 'Home'
  });  
var marker2 = new google.maps.Marker({
    position: {lat: 28.6956235, lng: -81.5204937},
    map: map,
    icon: image1,
    title: 'School'
  });  
var marker3 = new google.maps.Marker({
    position: {lat: 28.6919154, lng: -81.5227146},
    map: map,
    icon: image1,
    title: 'Church'
  }); 
var marker4 = new google.maps.Marker({
    position: {lat: 28.713213, lng: -81.458946},
    map: map,
    icon: image1,
    title: 'Wekiva Springs'
  });
var marker5 = new google.maps.Marker({
    position: {lat: 28.636570, lng: -81.625807},
    map: map,
    icon: image1,
    title: 'Lake Apopka'
  }); 
    marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });
    marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
    marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });
    marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });
    marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });
      }