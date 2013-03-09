
/*
 * GET home page.
 */

exports.index = function(request, response)
{
	var info = {};
	info.weekendsleft = "43";
	info.timeleftthisweekend = "34 hours, 40 minutes";
	info.title = "Weekends Left - How are you spending your life?"
	response.render ('index', info, function (error, html) 
	{
		if (error) throw (error);
		else
		{
			response.write (html);
			response.end ();
		}
	});
};