let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';



$.ajax({
	url: etsyURL,
	dataType: 'jsonp',
	method: 'get'
}).then(function (res) {
	console.log(res);






}); //ajax