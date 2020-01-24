const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const fs = require('fs')

//req.open('GET', 'https://api.twitch.tv/helix/streams?first=10', false)
//req.setRequestHeader('Client-ID', 'unffefducfm2c69uym75zoij6qicly')


function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
}


async function run(timems) {
	while (true) {
		req = new XMLHttpRequest()
		req.onload = function() {
			switch(req.status) {
				case 200:
					fs.writeFileSync('data.json', req.responseText, (err) => {})
					break
				case 401:
					console.log('HTTPRequest error: ', req.status, ' - Unauthorized')
					break
				case 404:
					console.log('HTTPRequest error: ', req.status, ' - Not Found')
				case 400:
					console.log('HTTPRequest error: ', req.status, ' - Bad Request')
					break
				default:
					console.log(req.status)
			}

		}
		//req.open('GET', 'twitch.tv/games/dota2.jpg', true)
		req.open('GET', 'https://api.twitch.tv/helix/streams?first=10', false)
		req.setRequestHeader('Client-ID', 'unffefducfm2c69uym75zoij6qicly')  
		req.send()
		await sleep(timems)
	};
}


run(5000)

