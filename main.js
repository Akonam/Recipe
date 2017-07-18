fetch("https://crossorigin.me/http://www.recipepuppy.com/api")
.then(function (response) {
if (response.status !== 200) {
console. log(response.status);
return;
}
response.json().then(function(data) {
console.log(data.results);
});
});

// Function displayCharacters (data) {
//parse our response text
//let data = JSON.parse(this .responseText);
// Let list = “ “;
//
//data.results.forEach(function (results) {
//list += “<li>$(results.data)</li>”;
//});

// container.innerHTML = list;
// }
