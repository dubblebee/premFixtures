var homeTeam, awayTeam, matchDate, kickoff, homeTeamShort, awayTeamShort, tv, homeWin, awayWin, draw;

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.football-data.org/v1/competitions/445/fixtures?timeFrame=n8", //Fetches next 8 days fixtures
  "method": "GET",
  "headers": {
    "x-auth-token": "ae060e00913d4304b43cad61531d704a",
    "x-response-control": "minified"
  }
};

$.ajax(settings).done(function (json) {

	$.each(json.fixtures, function(i,x){
		homeTeam = x.homeTeamName;
		awayTeam = x.awayTeamName;
		matchDay = moment(x.date).format('dddd');
		matchDate = moment(x.date).format('Do MMMM');
		kickoff = moment(x.date).format('HH:mm');
		
		if (x.odds) {
			homeWin = x.odds.homeWin;
			awayWin = x.odds.awayWin;
			draw = x.odds.draw;
		} else {
			homeWin = 0;
			awayWin = 0;
			draw = 0;
		}

		if (homeTeam == "AFC Bournemouth") {homeTeam = "Bournemouth"; homeTeamShort = "bournemouth";}
		if (homeTeam == "Arsenal FC") {homeTeam = "Arsenal"; homeTeamShort = "arsenal";}
		if (homeTeam == "Brighton & Hove Albion") {homeTeam = "Brighton"; homeTeamShort = "brighton";}
		if (homeTeam == "Burnley FC") {homeTeam = "Burnley"; homeTeamShort = "burnley";}
		if (homeTeam == "Chelsea FC") {homeTeam = "Chelsea"; homeTeamShort = "chelsea";}
		if (homeTeam == "Everton FC") {homeTeam = "Everton"; homeTeamShort = "everton";}
		if (homeTeam == "Crystal Palace FC") {homeTeam = "Crystal Palace"; homeTeamShort = "palace";}
		if (homeTeam == "Huddersfield Town") {homeTeam = "Huddersfield"; homeTeamShort = "huddersfield";}
		//if (homeTeam == "Hull City FC") {homeTeam = "Hull"; homeTeamShort = "hull";}
		if (homeTeam == "Leicester City FC") {homeTeam = "Leicester"; homeTeamShort = "leicester";}
		if (homeTeam == "Liverpool FC") {homeTeam = "Liverpool"; homeTeamShort = "liverpool";}
		if (homeTeam == "Manchester City FC") {homeTeam = "Man City"; homeTeamShort = "mancity";}
		if (homeTeam == "Manchester United FC") {homeTeam = "Man Utd"; homeTeamShort = "manutd";}
		if (homeTeam == "Newcastle United FC") {homeTeam = "Newcastle"; homeTeamShort = "newcastle";}
		//if (homeTeam == "Middlesbrough FC") {homeTeam = "Middlesbrough"; homeTeamShort = "mboro";}
		if (homeTeam == "Southampton FC") {homeTeam = "Southampton"; homeTeamShort = "southampton";}
		if (homeTeam == "Stoke City FC") {homeTeam = "Stoke"; homeTeamShort = "stoke";}
		//if (homeTeam == "Sunderland AFC") {homeTeam = "Sunderland"; homeTeamShort = "sunderland";}
		if (homeTeam == "Swansea City FC") {homeTeam = "Swansea"; homeTeamShort = "swansea";}
		if (homeTeam == "Tottenham Hotspur FC") {homeTeam = "Tottenham"; homeTeamShort = "tottenham";}
		if (homeTeam == "Watford FC") {homeTeam = "Watford"; homeTeamShort = "watford";}
		if (homeTeam == "West Bromwich Albion FC") {homeTeam = "West Brom"; homeTeamShort = "westbrom";}
		if (homeTeam == "West Ham United FC") {homeTeam = "West Ham"; homeTeamShort = "westham";}

		if (awayTeam == "AFC Bournemouth") {awayTeam = "Bournemouth"; awayTeamShort = "bournemouth";}
		if (awayTeam == "Arsenal FC") {awayTeam = "Arsenal"; awayTeamShort = "arsenal";}
		if (awayTeam == "Brighton & Hove Albion") {awayTeam = "Brighton"; awayTeamShort = "brighton";}
		if (awayTeam == "Burnley FC") {awayTeam = "Burnley"; awayTeamShort = "burnley";}
		if (awayTeam == "Chelsea FC") {awayTeam = "Chelsea"; awayTeamShort = "chelsea";}
		if (awayTeam == "Everton FC") {awayTeam = "Everton"; awayTeamShort = "everton";}
		if (awayTeam == "Crystal Palace FC") {awayTeam = "Crystal Palace"; awayTeamShort = "palace";}
		if (awayTeam == "Huddersfield Town") {awayTeam = "Huddersfield"; awayTeamShort = "huddersfield";}
		//if (awayTeam == "Hull City FC") {awayTeam = "Hull"; awayTeamShort = "hull";}
		if (awayTeam == "Leicester City FC") {awayTeam = "Leicester"; awayTeamShort = "leicester";}
		if (awayTeam == "Liverpool FC") {awayTeam = "Liverpool"; awayTeamShort = "liverpool";}
		if (awayTeam == "Manchester City FC") {awayTeam = "Man City"; awayTeamShort = "mancity";}
		if (awayTeam == "Manchester United FC") {awayTeam = "Man Utd"; awayTeamShort = "manutd";}
		if (awayTeam == "Newcastle United FC") {awayTeam = "Newcastle"; awayTeamShort = "newcastle";}
		//if (awayTeam == "Middlesbrough FC") {awayTeam = "Middlesbrough"; awayTeamShort = "mboro";}
		if (awayTeam == "Southampton FC") {awayTeam = "Southampton"; awayTeamShort = "southampton";}
		if (awayTeam == "Stoke City FC") {awayTeam = "Stoke"; awayTeamShort = "stoke";}
		//if (awayTeam == "Sunderland AFC") {awayTeam = "Sunderland"; awayTeamShort = "sunderland";}
		if (awayTeam == "Swansea City FC") {awayTeam = "Swansea"; awayTeamShort = "swansea";}
		if (awayTeam == "Tottenham Hotspur FC") {awayTeam = "Tottenham"; awayTeamShort = "tottenham";}
		if (awayTeam == "Watford FC") {awayTeam = "Watford"; awayTeamShort = "watford";}
		if (awayTeam == "West Bromwich Albion FC") {awayTeam = "West Brom"; awayTeamShort = "westbrom";}
		if (awayTeam == "West Ham United FC") {awayTeam = "West Ham"; awayTeamShort = "westham";}

		if (matchDay == "Friday" || matchDay == "Monday") {tv = "sky";}
		if (matchDay == "Saturday" && kickoff == "12:30") {tv = "sky";}
		if (matchDay == "Saturday" && kickoff == "15:00") {tv = "";}
		if (matchDay == "Saturday" && kickoff == "17:30") {tv = "bt";}
		if (matchDay == "Sunday" && kickoff == "13:30") {tv = "sky";}
		if (matchDay == "Sunday" && kickoff == "16:00") {tv = "sky";}

		console.log(homeTeam + ' v ' + awayTeam + ' - kick-off @ ' + kickoff + ' --- Betting Odds - Home win:' +homeWin+ ' Away win:' +awayWin+ ' --- TV Channel = ' +tv);

		$("#container").append('\
		<div class="container fixtures" id="container">\
		<span class="date"><span class="matchDay">'+matchDay+'</span> '+matchDate+'</span>\
				<span class="team home">\
					<span class="teamName">'+homeTeam+'</span>\
					<span class="teamBadge '+homeTeamShort+'"></span>\
				</span>\
				<span class="versus">'+kickoff+'</span>\
				<span class="team away">\
					<span class="teamBadge '+awayTeamShort+'"></span>\
					<span class="teamName">'+awayTeam+'</span>\
				</span>\
				<span class="tv '+tv+'"></span>\
				<span class="odds homeOdds">'+homeWin+'</span>\
				<span class="odds drawOdds">'+draw+'</span>\
				<span class="odds awayOdds">'+awayWin+'</span>\
		</div>\
		');

	});

});
	