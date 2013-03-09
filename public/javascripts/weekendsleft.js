$('document').ready(function() 
{
$('.daysleft').html(52 - moment().endOf('day').subtract('1').format('w'));

var today = moment().endOf('day').subtract('1').format('dddd');

if(today == "Saturday")
{
	$('#hoursleft').html('about '+moment().endOf('day').add('days','1').fromNow(true));
	$('.itstheweekend').show();
}
else if(today == "Sunday")
{
	$('#hoursleft').html('about '+moment().endOf('day').fromNow(true));
	$('.itstheweekend').show();			
}
});