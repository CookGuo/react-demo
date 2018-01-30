const fs = require('fs');
const db = require("../base/base");

var Detail = db.model('detail', {
	id: String,
	time: String,
	from: String,
	number: String,
	title: String,
	content: String
})

const addUser = ( id, time, from, number, title, content ) => {
	const detail = new Detail ({
		id: id,
		time: time,
		from: from,
		number: number,
		title: title,
		content: content
	});
	
	detail.save()
}
// let arr = []
// fs.readFile('index.txt', 'utf-8', (err, data) => {
// 	arr = data.split("\n")
// 	for (var i = 0; i < arr.length; i++ ) {
// 		addUser(Math.round(Math.random() * 567445 + 5674453 ) + "index-list", arr[i])
// 	}
// })

// fs.readFile('header.txt', 'utf-8', (err, data) => {
// 	addUser(data)
// })

var arr = [{"_id":"5a68077aaabc191ebcdd1e6a","id":"6007123index-list","content":"[ 健康报道 ] Large Review of Coffee Studies Finds ... Not Much New(2018-01-09)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e68","id":"5807660index-list","content":"[ VOA常速英语 ] US Proposes Opening Most Coastal Waters for Oil Drilling (2018-1-12)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e69","id":"5741272index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e67","id":"6022382index-list","content":"[ AS IT IS ] US Proposes Opening Most Coastal Waters for Oil Drilling(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e6b","id":"6033327index-list","content":"[ 健康报道 ] American English Words Borrowed from Japanese(2018-01-03)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e6f","id":"6196416index-list","content":"[ VOA常速英语 ] US Proposes Opening Most Coastal Waters for Oil Drilling (2018-1-12)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e74","id":"6172487index-list","content":"[ 健康报道 ] Large Review of Coffee Studies Finds ... Not Much New(2018-01-09)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e79","id":"5793363index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e7e","id":"5856772index-list","content":"[ VOA常速英语 ] US Proposes Opening Most Coastal Waters for Oil Drilling (2018-1-12)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e83","id":"5816977index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e88","id":"6215087index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e6c","id":"5886491index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e71","id":"6038680index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e76","id":"5709144index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e7b","id":"6093164index-list","content":"[ 健康报道 ] Large Review of Coffee Studies Finds ... Not Much New(2018-01-09)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e80","id":"6121281index-list","content":"[ 健康报道 ] American English Words Borrowed from Japanese(2018-01-03)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e85","id":"6172562index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e8a","id":"5955670index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e70","id":"5794659index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e75","id":"6060485index-list","content":"[ 健康报道 ] American English Words Borrowed from Japanese(2018-01-03)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e7a","id":"5948578index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e7f","id":"5791386index-list","content":"[ VOA常速英语 ] US Proposes Opening Most Coastal Waters for Oil Drilling (2018-1-12)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e84","id":"5879588index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e89","id":"5901719index-list","content":"[ 健康报道 ] Large Review of Coffee Studies Finds ... Not Much New(2018-01-09)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e6d","id":"5814350index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e72","id":"6084093index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e77","id":"5709512index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e7c","id":"6094855index-list","content":"[ 健康报道 ] American English Words Borrowed from Japanese(2018-01-03)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e81","id":"5847487index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e86","id":"5738503index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e8b","id":"5868714index-list","content":"[ 健康报道 ] Large Review of Coffee Studies Finds ... Not Much New(2018-01-09)","__v":0},{"_id":"5a68077aaabc191ebcdd1e6e","id":"6155859index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e73","id":"6117233index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e78","id":"6036752index-list","content":"[ VOA常速英语 ] Journalists Must be Protected(2018-01-11)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e7d","id":"5910942index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e82","id":"6113602index-list","content":"[ 健康报道 ] American English Words Borrowed from Japanese(2018-01-03)\r","__v":0},{"_id":"5a68077aaabc191ebcdd1e87","id":"6147168index-list","content":"[ AS IT IS ] UN Approves Resolution Rejecting US Decision on Jerusalem(2017-12-22)\r","__v":0}]



for ( var i = 0 ; i< arr.length; i++) {
	var str = JSON.stringify([{
			"id":"detail-p1",
			"cont":"The United States has announced plans to open much of the country's coastal waters to oil and gas drilling."
		},{
			"id":"detail-p2",
			"cont":"The Interior Department released the five-year plan last week. It is much more expansive than one suggested by President Donald Trump in April of last year."
		},{
			"id":"detail-p3",
			"cont":"The Interior Department proposed to publicly sell 47 possible drilling rights in much of the U.S. continental shelf. That is a large increase from the 11 lease sales during the presidency of Barack Obama."
		},{
			"id":"detail-p4",
			"cont":"The draft of the plan would permit the sale of drilling leases in 25 of 26 offshore planning areas. The one area identified as off-limits is the waters near Alaska's far-western Aleutian Islands. The area was given special protection by former President George W. Bush."
		},{
			"id":"detail-p5",
			"cont":"The strongest energy superpower in the world"
		},{
			"id":"detail-p6",
			"cont":"Interior Secretary Ryan Zinke told reporters last week that the United States is, in his words, 'going to become the strongest energy superpower this world has ever known.'"
		},{
			"id":"detail-p7",
			"cont":"Zinke also said that he wants to grow the country's offshore energy industry instead of having to depend on foreign energy resources."
		},{
			"id":"detail-p8",
			"cont":"'We will produce enough energy to meet our needs at home, and we will export enough energy to lead the world,' he said."
		},{
			"id":"detail-p9",
			"cont":"The Interior Department's broad proposal is meant to begin with a 60-day public comment period. The Interior Department is responsible for setting the start date of the comment period."
		},{
			"id":"detail-p10",
			"cont":"Zinke said in a press release that 'not all areas are appropriate for offshore drilling, and we will take that into consideration in the coming weeks.'"
		},{
			"id":"detail-p11",
			"cont":"The draft of the plan would permit the sale of drilling leases in 25 of 26 offshore planning areas. The one area identified as off-limits is the waters near Alaska's far-western Aleutian Islands. The area was given special protection by former President George W. Bush."
		},{
			"id":"detail-p12",
			"cont":"'We will produce enough energy to meet our needs at home, and we will export enough energy to lead the world,' he said."
		},{
			"id":"detail-p13",
			"cont":"The draft of the plan would permit the sale of drilling leases in 25 of 26 offshore planning areas. The one area identified as off-limits is the waters near Alaska's far-western Aleutian Islands. The area was given special protection by former President George W. Bush."
		},{
			"id":"detail-p14",
			"cont":"The United States has announced plans to open much of the country's coastal waters to oil and gas drilling."
		},{
			"id":"detail-p15",
			"cont":"The Interior Department's broad proposal is meant to begin with a 60-day public comment period. The Interior Department is responsible for setting the start date of the comment period."
		},{
			"id":"detail-p91",
			"cont":"The draft of the plan would permit the sale of drilling leases in 25 of 26 offshore planning areas. The one area identified as off-limits is the waters near Alaska's far-western Aleutian Islands. The area was given special protection by former President George W. Bush."
		},{
			"id":"detail-p16",
			"cont":"The draft of the plan would permit the sale of drilling leases in 25 of 26 offshore planning areas. The one area identified as off-limits is the waters near Alaska's far-western Aleutian Islands. The area was given special protection by former President George W. Bush."
		},{
			"id":"detail-p17",
			"cont":"'We will produce enough energy to meet our needs at home, and we will export enough energy to lead the world,' he said."
		},{
			"id":"detail-p18",
			"cont":"The United States has announced plans to open much of the country's coastal waters to oil and gas drilling."
		},{
			"id":"detail-p19",
			"cont":"'We will produce enough energy to meet our needs at home, and we will export enough energy to lead the world,' he said."
		},{
			"id":"detail-p20",
			"cont":"The draft of the plan would permit the sale of drilling leases in 25 of 26 offshore planning areas. The one area identified as off-limits is the waters near Alaska's far-western Aleutian Islands. The area was given special protection by former President George W. Bush."
		}])
	addUser(arr[i].id,"2018-01-11 06"," VOA官网 ","1086",arr[i].content, str)
}
