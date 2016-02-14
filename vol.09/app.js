var path = require('path');
var websiteHome = "Desktop/Mustafa//test/home.html";
var websiteAbout = "Desktop/Mustafa/test/about.html";

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

console.log(__dirname);
console.log(__filename);