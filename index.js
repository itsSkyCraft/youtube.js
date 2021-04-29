const fetch = require('node-fetch');

module.exports = class Youtube{
    /**
     * @param {String} search - What Do you want to Search
     * @param {String} key - A Valid Youtube V3 Api Key
     * @param {String} total - Max results to fetch
     * @param {String} channelId - A Valid Channel ID
     * @param {String} videoId - A Valid Video ID
     */

    constructor(key){
        if(!key) throw new TypeError('Please Provide A Youtube V3 API Key');

        this.key = key
    }

    search(search, total, callback){
        if(!search) throw new TypeError('Please Provide Something to Search!!')
        if(typeof search != 'string') throw new TypeError('The Search parameter Must be a String!!');
        if(isNaN(total)) total = 5

        const fixed = search.split(' ').join('%20');

        fetch(`https://www.googleapis.com/youtube/v3/search?q=${fixed}&key=${this.key}&part=snippet&maxResults=${total || 5}`).then(result => result.json()).then(res => {
            const reslast1 = res.items.map(result2 => {
                if(result2.id.kind === 'youtube#video'){
                    return {
                        type: result2.id.kind,
                        title: result2.snippet.title,
                        description: result2.snippet.description,
                        videoId: result2.id.videoId,
                        thumbnails: result2.snippet.thumbnails,
                        author: result2.snippet.channelTitle,
                        authorId: result2.snippet.channelId,
                        publishedAt: result2.snippet.publishedAt,
                        link: `https://www.youtube.com/watch?v=${result2.id.videoId}`
                    }
                }else{
                    return {
                        type: result2.id.kind,
                        title: result2.snippet.title,
                        description: result2.snippet.description,
                        channelId: result2.id.channelId,
                        thumbnails: result2.snippet.thumbnails,
                        createdAt: result2.snippet.publishedAt
                    }
                }
            });

            const reslast2 = {
                totalResults: res.pageInfo.totalResults,
                resultsPerPage: res.pageInfo.resultsPerPage,
                items: reslast1
            }

            callback(reslast2);
            return reslast2;
        }).catch(err => {
            callback(null)
            return null
        });
    }
    getChannel(channelId, callback){
        if(!channelId) throw new TypeError('Please Provide a Channel ID!!');
        if(typeof channelId !== 'string') throw new TypeError('The Provided Channel id Must be a String');

        fetch(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${this.key}&part=snippet,contentDetails,statistics,status`).then(result => result.json()).then(res=> {
            callback(res.items[0]);
            return res.items[0];
        }).catch(err => {
            callback(null)
            return null
        });
    }
    getVideo(videoId, callback){
        if(!videoId) throw new TypeError('Please Provide a Video ID!!');
        if(typeof videoId !== 'string') throw new TypeError('The Provided Video id Must be a String');

        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${this.key}&part=snippet,contentDetails,statistics,status`).then(result => result.json()).then(res => {
            callback(res.items[0])
            return res.items[0];
        }).catch(err => {
            callback(null)
            return null
        });
    }

}