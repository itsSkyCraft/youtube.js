<h1 align="center">youtube.js</h1>
<p align="center">A Node.js Package For Interacting With Youtube V3 API</p>

## Installation
[![NPM](https://nodei.co/npm/youtube.js.png)](https://nodei.co/npm/youtube.js/)
## Api Menu
* [Getting API](#getting-api)
* [Youtube Search](#youtube-search)
* [Youtube Video](#youtube-video)
* [Youtube Channel](#youtube-channel)
## Getting API
Here is A Method to Get Youtube API Key in Steps: [(Tutorial By RapidAPI)](https://rapidapi.com/blog/how-to-get-youtube-api-key/)
- The first step is to log in or create an account on https://developers.google.com/
- When you log in into your account, follow this link https://console.developers.google.com/project and CREATE PROJECT by clicking on the blue button. Wait a few seconds for Google to prepare your project.
- Fill in the name you want to assign to your project.
- On the top left corner, click the Google APIs link and then follow the link option dubbed “YouTube DATA API” below the YouTube API’s icon.
- Now select the “ENABLE” button which manifests after you click the YouTube DATA API link.
- Now click the blue button on the far right with the “Go to Credentials” phrase.
- On the first select option displayed on this page, choose the YouTube Data API v3, and then the Web server (such as node js. Tomcat) on the second option. For the third option, choose public data. Lastly, click the button with “what credentials do I need” and then move on to the next step.
- After hitting the “What credentials do I need” button, Google will create your new project, and you can now copy your API Key from this page.
- Now You Have The APi For this Package.
## Youtube API
### Youtube Search
The Basic Usage To Search for youtube video/channel is:
```js
const Youtube = require('youtube.js');

const Client = new Youtube('api-key'); // replace api-key with your Youtube API

Client.search('Chess Tricks', 5, (res) => {
    // Searching 5 Results "Chess Tricks" on youtube
    console.log(res); // Video or Channel also included in the search
});
```
### Youtube Video
The Basic Usage To Search for youtube video/channel is:
```js
const Youtube = require('youtube.js'); // replace api-key with your Youtube API

const Client = new Youtube('api-key');

Client.getVideo('<videoid>', (res) => {
    console.log(res); 
    /**
    * How To get Video ID:
    * Heres an example of A Youtube Video Link
    * 
    * https://www.youtube.com/watch?<videoid>
    */
});
```
### Youtube Channel
```js
const Youtube = require('youtube.js'); // replace api-key with your Youtube API

const Client = new Youtube('api-key');

Client.getChannel('<channelid>', (res) => {
    console.log(res); 
    /**
    * How To get Channel ID:
    * Heres an example of A Youtube Channel Link
    * 
    * https://www.youtube.com/channel/<channelid>
    */
});
```

