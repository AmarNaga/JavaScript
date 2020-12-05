// var x , list = "";
// var places = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
// function display (places) {
//     for (x in places) {
//         list += places[x] + "<br>";
//     };
// }

// //display(places);

// document.getElementById("lists").innerHTML = list;


// function addPlaces(places,add) {
//    places = places.push(add);
//     for (x in places) {
//         list += places[x] + "<br>";
//     };
//     //document.getElementById("lists").innerHTML = list;
    


// }

// addPlaces(places, add);

let array=["Biratnagar","Lalitpur","Patan","Kathmandu","Pokhara","Palpa"];
console.log(array);
array.push("Dang","Plapa");
console.log(array);
array.splice(3,1);
console.log(array);
console.log(array.length);