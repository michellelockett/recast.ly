var searchYouTube = ({key, q, maxResults}, callback) => {
  console.log('search function called');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': key,
      'q': q,
      'maxResults': maxResults,
      'part': 'snippet',
      'type': 'video',
      'videoEmbeddable':'true'
    },
    success: function(data, status, jqXHR) {
      console.log(data, status);
      getStats(data.items[0].id.videoId, callback, data.items);
    },
    error: function(jqXHR, status, err) {
      console.log(status, err);
    }
  });
};

var getStats = (id, callback, videos) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    data: {
      'key': window.YOUTUBE_API_KEY,
      'part': 'statistics',
      'id': id
    },
    success: function(data, status, jqXHR) {
      console.log(data, status);
      console.log('yipppeeeeee!');
      callback(data.items[0].statistics, videos);
    },
    error: function(jqXHR, status, err) {
      console.log(status, err);
    }
  });
};

window.searchYouTube = searchYouTube;
window.getStats = getStats;

