
require(["esri/Map", "esri/views/MapView"], function(
  Map,
  MapView
) {
  const map = new Map({
    basemap: "satellite"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: {
        latitude: 34.937594,
        longitude: -41.063333
    }
  });
//Location 1  
  const contentString1 = "<p>Edward Teach, better known as Blackbeard th' pirate, was prolly born somewhere nigh Bristol, England. Little be known o' his early life except that he went t' sea as a young scallywag.</p>" + "<p><p><img src='https://www.landofthebrave.info/images/ships-bristol.jpg' alt='Old Bristol' height='150'>"; 
  view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 51.454514,
        longitude: -2.587910
    },
    popupTemplate: {
      title: "Birthplace",
      content: contentString1
    }
  });
  
  //Location 2  
  const contentString2 = "<p>As a privateer (legalized gentleman o' fortune) durin' the warrr o' the spanish succession (1701-13), 'e robbed ships in the west indies. When the warrr ended in 1713, 'e turned to piracy, like many former privateers.</p>" + "<p><p><img src='https://66.media.tumblr.com/efa8bb86b655b92d389f8a35630c48a4/tumblr_inline_ngq2iuUgnk1rm9hcj.jpg' alt='Old Bristol' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 24.357535,
        longitude: -77.194525
    },
    popupTemplate: {
      title: "War of the Spanish Succession (1701-1713)",
      content: contentString2
    }
  });

    //Location 3  
  const contentString3 = "<p> By 1716, teach been servin' under the command o' benjamin thornigold, a gentleman o' fortune Cap'n. On thornigold's ship, 'e sailed from the gentleman o' fortune colony o' new providence in the west indies to the american mainland. The gentlemen o' fortune captured a number o' ships, whose cargo ranged from flour an' wine to silk an' gold bullion (gold still in raw or unrefined form). In 1717, after the gentleman o' fortune crew attacked a large merchant ship 'eaded fer parley island o' martinique, teach took o'er as the captured vessel's Cap'n. Equippin' the boat as a warship, 'e added some forty guns an' renamed it the queen anne's revenge.</p>" + "<p>Shortly after teach became the Cap'n o' 'is own ship, thornigold gave to the sky piracy. Cap'n woodes rogers, the british-appointed governor o' the bahamas, 'ad been given the power to pardon gentlemen o' fortune who yay to mend their ways. Thornigold—and other members o' blackbeard's circle— sailed to new providence to accept the king's pardon. Edward teach, 'owever, 'ad just begun 'is short but active career as a gentleman o' fortune.</p>" + "<p><p><img src='https://cdna.artstation.com/p/assets/images/images/002/005/200/large/zhenya-slo-painting-the-sea-queen-anne-s-revenge-min.jpg?1455827358' alt='Old Bristol' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 25.3015086,
        longitude: -79.2069284
    },
    popupTemplate: {
      title: "The Queen Anne's Revenge (1716)",
      content: contentString3
    }
   });
  
    //Location 4  
  const contentString4 = "<p>Like most gentlemen o' fortune, there been a seasonal pattern to teach's voyages. In the warmer months, 'is crew robbed ships off the coast o' virginia an' the carolinas. Operatin' out o' ocracoke inlet—off the island o' ocracoke in the outer banks chain o' islands that there extends along the coast o' north carolina—his ships anchored in shallow waters that there prevented other ships from attackin'. As winter approached, teach 'eaded south, to the warmer climate o' the caribbean.</p>" + "<p><p><img src='http://www.hauntedhouses.com/photos/nc-blackbeard-1.jpg' alt='Old Bristol' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 35.1303794,
        longitude: -75.9588047
    },
    popupTemplate: {
      title: "Base of Operations",
      content: contentString4
    }
   });  
 
      //Location 5  
  const contentString5 = "<p>'avin' spent the winter o' 1717 in the caribbean, teach's crew landed in charleston, south carolina, in the sprin' o' 1718. With three other gentleman o' fortune sloops (small, one-masted ships), the gentlemen o' fortune blockaded the city's 'arbor an' attacked any ship that there attempted to set sail or enter. They also took prisoners an' put ashore a landin' party that there 'ad instructions to brin' aft medical supplies to treat diseases that there plagued the crew. Teach promised to release the prisoners in exchange fer the supplies. After 'e received a chest full o' expensive medicine, 'e made jolly on 'is word (but not until after the captives 'ad been robbed o' their possessions). </p>" + "<p><p><img src='https://sites.google.com/site/blackbeardsuccess/_/rsrc/1300724845468/blockade-at-charleston/Naval%20Blockade%20of%20Port.jpg' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 32.8209674,
        longitude: -80.1105612
    },
    popupTemplate: {
      title: "The Charleston Blockade (1718)",
      content: contentString5
      
    }
   }); 
  
    //Location 6  
  const contentString6 = "<p> Shortly after the charleston blockade, the queen anne's revenge sank. Sailin' on another ship, a ten-gun vessel called the adventure, teach 'eaded up the pamlico river to the town o' bath in north carolina—in search not o' treasure but o' a royal pardon. (england's kin' george I, who reigned from 1714 to 1727, offered to pardon gentlemen o' fortune who gave to the sky their profession. As a british colony, north carolina been able to extend the king's pardon to gentlemen o' fortune.) charles eden, the governor o' north carolina, granted teach a pardon, an' then ordered the court to declare 'im a privateer. As a privateer, teach been able to continue to plunder ships in carolina waters with no fearrr o' bein' punished—provided 'e shared 'is loot with governor eden an' 'is secretary an' collector o' customs, tobias knight. Sailin' up an' down the pamlico river, teach stole from ships 'e encountered as well as from local plantations.</p>" + "<p> Unable to appeal to governor eden fer assistance, local traders asked thomas spotswood, the governor o' virginia, fer protection from the gentlemen o' fortune. In november 1718, spotswood issued a proclamation offerin' rewards fer the capture—dead or alive—of teach an' 'is shipmates. 'e also enlisted the 'elp o' british navy officers to organize an expedition to capture the infamous gentleman o' fortune, even though the carolina shoreline been well beyond 'is jurisdiction. </p>" + "<p><p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/George-I_lafontaine2.jpg/220px-George-I_lafontaine2.jpg' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 35.4667191,
        longitude: -76.8179871
    },
    popupTemplate: {
      title: "A Royal Pardon (Nov. 1718)",
      content: contentString6
      
    }
   }); 
  
    //Location 7  
  const contentString7 = "<p> In june 1718, shortly before teach been captured, 'is flagship—the queen anne's revenge, a 103-foot forty-cannon vessel—became grounded on a sandbarrr off the coast o' north carolina. It eventually sank, grabbin' with it secrets about the day-to-day existence o' one o' the seven seas's most infamous sea robbers. But on november 21, 1996, one day before the anniversary o' teach's death in 1718, archaeologists found what they believe to be teach's long lost flagship. </p>" + "<p><p><img src='http://i2.cdn.turner.com/cnn/2011/images/10/25/shipwreck.jpg' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 32.4231988,
        longitude: -80.8225994
    },
    popupTemplate: {
      title: "The Sunken Queen Anne's Revenge (June 1718)",
      content: contentString7
      
    }
   });  
  
    //Location 8  
  const contentString8 = "<p> Under the charge o' lieutenant robert maynard, an experienced officer, took two ships, jane an' ranger, sailed to the carolina coast from virginia with specific orders to rout the gentlemen o' fortune. Because the gentleman o' fortune ships was anchored in shallow waters that there was difficult to navigate, maynard took small vessels that there 'ad no guns, which meant 'is crew would be forced into 'and-to-hand combat with knives an' swords. 'avin' learned from other seamen that there teach been anchored in a sheltered spot off ocracoke island, maynard reached the area on the evenin' o' november 21, 1718. Anchorin' 'is ships nearby, 'e waited until mornin' to attack. </p>" + "<p><p><img src='https://images.findagrave.com/photos/2011/158/71009150_130753866092.jpg' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 37.0924373,
        longitude: -76.2989446
    },
    popupTemplate: {
      title: "Lieutenant Robert Maynard (Nov. 1718)",
      content: contentString8
      
    }
   });   
  
    //Location 9  
  const contentString9 = "<p> Maynard's ships—the Jane and the Ranger—headed for Ocracoke Island at dawn. Spotting the approaching ships, the pirates sounded the alarm and pulled in the anchor. Maynard's vessels chased the pirate ships, using oars since there was very little wind to sail by. Navigating shallow waters that were filled with sandbars and submerged obstacles, Maynard's ships ran aground.</p>" + "<p> Eventually, Maynard's crew managed to free its two vessels. Rowing toward Teach's ship, the crew was hit by a broadside volley that killed several men and wounded others. (Broadsides could be devastating: firing at the enemy, a ship discharged all the guns on one side of the boat at once—and at close range.) Maynard ordered the remainder of his crew to conceal itself below deck. </p>" + "<p> Teach assumed that most of Maynard's men had been killed by the broadside attack. But when he climbed aboard the Jane, he was surprised by Maynard's sailors. The fight that followed was Blackbeard's last battle. According to Captain Johnson's account, he 'stood his ground and fought with great fury till he received five and twenty wounds.' Of Teach's twenty-five wounds, the last was fatal: the pirate had been decapitated. </p>" + "<p><p><img src='https://timedotcom.files.wordpress.com/2018/11/gettyimages-517200612.jpeg' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 35.236288,
        longitude: -75.716743
    },
    popupTemplate: {
      title: "The Death of Blackbeard (Nov. 1718)",
      content: contentString9  
    }
   }); 
  
    //Location 10  
  const contentString10 = "<p> The Year of Our Lord after teach been killed, the boston news letter published a detailed account o' the gentleman o' fortune's last battle: 'maynard an' teach themselves began the fight with their swords, maynard makin' a thrust, the point o' 'is sword went against teach's cartridge box, an' bended it to the 'ilt. Teach broke the guard o' it, an' wounded maynard's fingers but did not disable 'im, whereupon 'e jumped aft an' threw away 'is sword an' fired 'is pistol which wounded teach. Demelt [another sailor] stuck in between them with 'is sword an' cut teach's face pretty much; in the interim both companies engaged in maynard's sloop, one o' maynard's men … engaged teach with 'is broad sword, who gave teach a cut on the neck, teach sayin 'well done lad' [the man] replied if it be not well done, I'll do it better. With that there 'e gave 'im a second stroke, which cut off 'is 'ead, layin' it flat on 'is shoulder. </p>" + "<p><p><img src='http://edwardteach-aka-blackbeard.weebly.com/uploads/1/4/8/6/14869374/433880301.jpg' height='150'>"; 
    view.graphics.add({
    symbol: {
      type: "picture-marker",
      url: "http://static.arcgis.com/images/Symbols/Transportation/SkullandCrossbones.png",
      width: 20,
      height: 20,
    },
    geometry: {
      type: "point",
        latitude: 40.9338323,
        longitude: -71.3800256
    },
    popupTemplate: {
      title: "Account of Blackbeard's death (1719)",
      content: contentString10  
    }
   });    
//  
});