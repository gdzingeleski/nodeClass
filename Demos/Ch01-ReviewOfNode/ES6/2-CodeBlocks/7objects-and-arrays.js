
	var band = {
		"name" : "Pink Floyd",
		"city" : "London" ,
		"country" : "England",
		"yearFormed" : 1965,
		"genres" : ["Progressive rock", "psychedelic rock", "art rock"]
	}
	band.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

	
	var band2 = new Object();
	band2.name = "Man Man";
	band2.country = "USA";
	band2.city = "Philadelphia";
	band2.yearFormed = 2003;	
	band2.genres = ["Experimental rock"];

	//Objects printed using Object.toString
	console.log(band.toString());
	console.log(band2);

	//access properties using dot notation or [] 
	console.log("country 1 = " + band.country);
	console.log("country 2 = " + band2["country"]);
	
	//access properties using key
	for (key in band) {
		//ES6
		console.log(`key is ${key} value is ${band[key]}`);
	}
	
	for (key in band2) {
		//ES5
		console.log("key is " + key +" value is "+ band2[key] );
	}
	
	var bands = [
		          { "name": "Morphine",
		        	"country": "USA",
		        	"city": "Boston",
		        	"genres": ["Alternative rock", "experimental rock", "jazz rock"] 
		          },
		          { "name": "Vitamin String Quartet",
			        "country": "USA",
			        "city": "Los Angeles",
			        "genres": ["Rock", "Pop", "Instrumental"] 
			      }
	            ];
	
	console.log("**** key values of band objects in bands array ****");
	for	(index = 0; index < bands.length; index++) {
	    var band = bands[index];
	    console.log("--- Band at index "+index+" ---");
		for (key in band) {
			//ES6
			console.log(`key is ${key} value is ${band[key]}`);
		}
	}
