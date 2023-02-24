// // Slicing and extracting
// var tweet = prompt("compose your tweet");
// // alert(
// //   "you have written " +
// //     tweet.length +
// //     " caracters, you have " +
// //     (140 - tweet.length) +
// //     " characters remaining."
// // );

// // Permet aussi de limité le nombre de caractère
// var tweetUder140 = tweet.slice(0, 140);
// alert(tweetUder140);
// // autre maniere d'ecrire alert(prompt("compose your twet").slice(0,140)); = mm resultat
// var nameD = "Emilie";
// console.log(nameD.slice("0,1"));
// // commence le décompte  toujours par 0

var nameUser = prompt(" What's is Your name ? ");

// a isolate the first char
var firstChar = nameUser.slice(0, 1);

// b turn the first chat to upper case
var upperCaseFisrtChar = firstChar.toUpperCase();

// c isolate the rest of the name
var restOfName = nameUser.slice(1, nameUser.length);

// d Change e rest of the name to lower case
restOfName = restOfName.toLowerCase();

// e concatenate the first char with the rest of the char
var capitaliseName = upperCaseFisrtChar + restOfName;
alert("Hello, " + capitaliseName);
