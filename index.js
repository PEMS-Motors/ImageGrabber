const fs = require('fs');
const download = require('download');


images =
[
    "https://www.pemsmotors.com/wp-content/uploads/Pems-Catalog-Button.jpg",
    "https://www.pemsmotors.com/wp-content/uploads/Vacuum-Motor-1024x791.png",
    "https://www.pemsmotors.com/wp-content/uploads/Helwig-Carbon-BPK-4-05.11.17.png"
]


 

// images.forEach(function(image) {
// })

for (var start = 0; start < 782; start++){
	// console.log(images[start]);
	url = images[start];
	setTimeout(function (url) {
		download(url, 'dist6').then(() => {
		   console.log('done!', url + ' ' + start);
		});
	}, 5000 * start, url, start);
}