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
      callback(data.items);
    },
    error: function(jqXHR, status, err) {
      console.log(status, err);
    }
  });
};

window.searchYouTube = searchYouTube;

