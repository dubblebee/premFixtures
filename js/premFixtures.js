var homeTeam, awayTeam, matchDate, homeTeamShort, awayTeamShort;

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.football-data.org/v1/competitions/426/fixtures?timeFrame=n31", //Fetches next 31 days fixtures
  "method": "GET",
  "headers": {
    "x-auth-token": "ae060e00913d4304b43cad61531d704a",
    "x-response-control": "minified"
  }
};

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

$.ajax(settings).done(function (json) {
//$.getJSON("js/matchday1.json",function(json){

	$.each(json.fixtures, function(i,x){
		homeTeam = x.homeTeamName;
		awayTeam = x.awayTeamName;
		matchDate = moment(x.date).format('dddd Do MMMM');

		if (homeTeam == "AFC Bournemouth") {homeTeam = "Bournemouth"; homeTeamShort = "bournemouth";}
		if (homeTeam == "Arsenal FC") {homeTeam = "Arsenal"; homeTeamShort = "arsenal";}
		if (homeTeam == "Burnley FC") {homeTeam = "Burnley"; homeTeamShort = "burnley";}
		if (homeTeam == "Chelsea FC") {homeTeam = "Chelsea"; homeTeamShort = "chelsea";}
		if (homeTeam == "Everton FC") {homeTeam = "Everton"; homeTeamShort = "everton";}
		if (homeTeam == "Crystal Palace FC") {homeTeam = "Crystal Palace"; homeTeamShort = "palace";}
		if (homeTeam == "Hull City FC") {homeTeam = "Hull"; homeTeamShort = "hull";}
		if (homeTeam == "Leicester City FC") {homeTeam = "Leicester"; homeTeamShort = "leicester";}
		if (homeTeam == "Liverpool FC") {homeTeam = "Liverpool"; homeTeamShort = "liverpool";}
		if (homeTeam == "Manchester City FC") {homeTeam = "Manchester City"; homeTeamShort = "mancity";}
		if (homeTeam == "Manchester United FC") {homeTeam = "Manchester United"; homeTeamShort = "manutd";}
		if (homeTeam == "Middlesbrough") {homeTeam = "Middlesbrough"; homeTeamShort = "mboro";}
		if (homeTeam == "Southampton FC") {homeTeam = "Southampton"; homeTeamShort = "southampton";}
		if (homeTeam == "Stoke City FC") {homeTeam = "Stoke"; homeTeamShort = "stoke";}
		if (homeTeam == "Sunderland AFC") {homeTeam = "Sunderland"; homeTeamShort = "sunderland";}
		if (homeTeam == "Swansea City FC") {homeTeam = "Swansea"; homeTeamShort = "swansea";}
		if (homeTeam == "Tottenham Hotspur FC") {homeTeam = "Tottenham"; homeTeamShort = "tottenham";}
		if (homeTeam == "Watford FC") {homeTeam = "Watford"; homeTeamShort = "watford";}
		if (homeTeam == "West Bromwich Albion FC") {homeTeam = "West Brom"; homeTeamShort = "westbrom";}
		if (homeTeam == "West Ham United FC") {homeTeam = "West Ham"; homeTeamShort = "westham";}
		if (awayTeam == "AFC Bournemouth") {awayTeam = "Bournemouth"; awayTeamShort = "bournemouth";}
		if (awayTeam == "Arsenal FC") {awayTeam = "Arsenal"; awayTeamShort = "arsenal";}
		if (awayTeam == "Burnley FC") {awayTeam = "Burnley"; awayTeamShort = "burnley";}
		if (awayTeam == "Chelsea FC") {awayTeam = "Chelsea"; awayTeamShort = "chelsea";}
		if (awayTeam == "Everton FC") {awayTeam = "Everton"; awayTeamShort = "everton";}
		if (awayTeam == "Crystal Palace FC") {awayTeam = "Crystal Palace"; awayTeamShort = "palace";}
		if (awayTeam == "Hull City FC") {awayTeam = "Hull"; awayTeamShort = "hull";}
		if (awayTeam == "Leicester City FC") {awayTeam = "Leicester"; awayTeamShort = "leicester";}
		if (awayTeam == "Liverpool FC") {awayTeam = "Liverpool"; awayTeamShort = "liverpool";}
		if (awayTeam == "Manchester City FC") {awayTeam = "Manchester City"; awayTeamShort = "mancity";}
		if (awayTeam == "Manchester United FC") {awayTeam = "Manchester United"; awayTeamShort = "manutd";}
		if (awayTeam == "Middlesbrough") {awayTeam = "Middlesbrough"; awayTeamShort = "mboro";}
		if (awayTeam == "Southampton FC") {awayTeam = "Southampton"; awayTeamShort = "southampton";}
		if (awayTeam == "Stoke City FC") {awayTeam = "Stoke"; awayTeamShort = "stoke";}
		if (awayTeam == "Sunderland AFC") {awayTeam = "Sunderland"; awayTeamShort = "sunderland";}
		if (awayTeam == "Swansea City FC") {awayTeam = "Swansea"; awayTeamShort = "swansea";}
		if (awayTeam == "Tottenham Hotspur FC") {awayTeam = "Tottenham"; awayTeamShort = "tottenham";}
		if (awayTeam == "Watford FC") {awayTeam = "Watford"; awayTeamShort = "watford";}
		if (awayTeam == "West Bromwich Albion FC") {awayTeam = "West Brom"; awayTeamShort = "westbrom";}
		if (awayTeam == "West Ham United FC") {awayTeam = "West Ham"; awayTeamShort = "westham";}

		console.log(homeTeam + ' v ' + awayTeam);

		$("#container").append('\
		<div class="container fixtures" id="container">\
				<span class="date">'+matchDate+'</span>\
				<span class="team home">\
					<span class="teamName">'+homeTeam+'</span>\
					<span class="teamBadge '+homeTeamShort+'"></span>\
				</span>\
				<span class="versus">v</span>\
				<span class="team away">\
					<span class="teamBadge '+awayTeamShort+'"></span>\
					<span class="teamName">'+awayTeam+'</span>\
				</span>\
			</div>\
		');

	});

});
	