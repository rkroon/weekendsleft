var spendWisely = ["http://www.expedia.com.au","http://www.hooroo.com.au","http://www.goodreads.com/shelf/show/101-must-read","http://www.instructables.com/id/Weekend-Lego-Projects/","http://www.redballoon.com.au/adventure-sports/paintball-laser-skirmish","http://www.khanacademy.org","http://snapguide.com/guides/transform-a-closet-into-a-nook/?utm_expid=69945963-15&utm_referrer=http%3A%2F%2Fsnapguide.com%2Fguides%2Fpopular%2F","https://generalassemb.ly/education?where=online","http://www.gamesparadise.com.au/","http://ocw.mit.edu/index.htm"];

var squander = ["http://www.amazon.com/s/?_encoding=UTF8&camp=1789&creative=390957&field-keywords=dvd%20box%20sets%20tv%20series&linkCode=ur2&rh=n%3A2625373011%2Ck%3Advd%20box%20sets%20tv%20series&tag=viddler0e-20&url=search-alias%3Dmovies-tv","http://www.theuselessweb.com","http://www.amazon.com/gp/product/031613290X/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=031613290X&linkCode=as2&tag=viddler0e-20","http://www.youtube.com","http://www.angrybirds.com/","http://trololololololololololo.com","https://apps.facebook.com/onthefarm/","http://www.procatinator.com","http://www.tvzap.com"];

function spendNow()
{
	var randomNumber = Math.floor(Math.random() * spendWisely.length);
	window.open(spendWisely[randomNumber]);
}

function squanderNow()
{
	var randomNumber = Math.floor(Math.random() * squander.length);
	window.open(squander[randomNumber]);
}

$('document').ready(function() 
{
// This allows debugging of the time display/weekends left display
var now = moment();

var weekendsleft = 52 - moment(now).endOf('day').subtract('second','1').format('w');

var today = moment(now).endOf('day').subtract('seconds','1').format('dddd');

if(today == "Saturday")
{
	var endOfWeekend = moment(now).endOf('day').add('days','1');
	console.log(endOfWeekend);
	$('#hoursleft').html('about '+endOfWeekend.from(now,true));
	$('.itstheweekend').show();
}
else if(today == "Sunday")
{
	weekendsleft = weekendsleft + 1;
	var endOfWeekend = moment(now).endOf('day');
	$('#hoursleft').html('about '+endOfWeekend.from(now,true));
	$('.itstheweekend').show();		
}

$('.daysleft').html(weekendsleft);

$('#spendbutton').bind ('click', spendNow);
$('#squanderbutton').bind ('click', squanderNow);

});