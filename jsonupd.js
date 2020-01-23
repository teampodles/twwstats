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
					if (req.status != 200) {
               			console.log(req.status);
        		} else {
                		fs.writeFile('data.json', req.responseText, (err) => {})
                		//console.log(req.responseText)
				//console.log('BLYATTT')
        			}
        		//req.abort()
		}
		req.open('GET', 'https://api.twitch.tv/helix/streams?first=10', false)
		req.setRequestHeader('Client-ID', 'unffefducfm2c69uym75zoij6qicly')  
		req.send()
		await sleep(timems)
	};
}


run(7000)

