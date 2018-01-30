const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');

http.get('http://www.easyvoa.com',(res) => {
	if( res.statusCode === 200 ){
		let html = '';
		res.on('data',(data)=>{
			html += data;
		});
		res.on('end',()=>{
			const $ = cheerio.load(html);
			const list = $("#title");
			let sty = '';
			const li = list.find("a");
			for( var i = 0 ; i < li.length; i++ ){
				sty += li.eq(i).text()+'\n'
			}
			fs.writeFileSync('data.txt',sty);
		});
	}
});	