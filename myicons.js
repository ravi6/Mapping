// Create some Marker Icons to jazz up the maps

// This is neat you can make a default icon
// and then extend it it, and modify properties
// when instantiating, but iconUrl is not to be seen here
// why?? but you can add it when making new instances of LeafIcon
// That is a little confusing
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaflet/images/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'leaflet/images/leaf-green.png'}),
      redIcon = new LeafIcon({iconUrl: 'leaflet/images/leaf-red.png'}),
   orangeIcon = new LeafIcon({iconUrl: 'leaflet/images/leaf-orange.png'});

var imgSize = [100,100];
var myImage ;


function getSize(src) 
{
myImage = new Image();
myImage.onload = function(){ 
                       imgSize = [this.width, this.height]; 
                        // console.log(imgSize);
                        };
myImage.src = src ;
}

function makeIcon(src, width)
{
getSize(src);
var layr = L.icon({ iconUrl:  src,
                    iconSize: [60, 60*imgSize[1]/imgSize[0]] 
                   });
return layr ;

} // end makeIcon


//===============    USER SPACE ======================
var plane1 = makeIcon( "images/tanks/plane1.png", 60);
var tank1  = makeIcon( "images/tanks/tank1.png", 60);
var tank2  = makeIcon( "images/tanks/tank2.png", 60);
var tank3  = makeIcon( "images/tanks/tank3.png", 60);
