console.log("the bot is starting!");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


//setting up a user stream
//
//var stream = T.stream('user');

//anytime someone follows me, function is called
//******current stream functionality is broken********
//stream.on('follow', followed);

// function followed(event){
//     console.log("follow event!");
//     var name = event.source.name;
//     var screenName = event.source.screen_name;
//     tweetIt('@' + screenName + ' thanks for following me! #twitterbot from Node.js');
// }

//function call to make bot post
//tweetIt();

//setInterval calls the function and sets it in miliseconds (1000*20 = 20 seconds)
setInterval(tweetIt, 1000*60)

function tweetIt(){
    
    var r = random(r*100);
    var tweet = {
        //editable part to post a message. replace below with params 
        status: 'here is a random number: ' + r + ' #twitterbot from Node.js'
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
    if(err){
        console.log("error posting tweet");
        }
        else {
            console.log("post succesful!");
        }
    }
}

////////////////////////
//search functionality//
////////////////////////

// var params = {
//   q: 'kevin bautista',
//   count: 2
// }

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
//     var tweets = data.statuses;
//     for(var i=0; i < tweets.length; i++){
//         console.log(tweets[i].text);
//     }



