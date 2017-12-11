const TESTDATA = window.exampleVideoData;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      playerVideo: TESTDATA[0],
      playerStats: {},
    };

    this.liveSearch = _.debounce(this.props.searchYouTube, 500);
  }

  handleClick(index) {
    let newPlayerVid = this.state.videos[index];
    this.props.getStats(newPlayerVid.id.videoId, this.setStats.bind(this));
    this.setState({
      playerVideo: newPlayerVid
    });
  }

  handleSearch(event) {
    let q = event.target.value;
    this.liveSearch({
      key: window.YOUTUBE_API_KEY,
      q: q,
      maxResults: 5
    }, this.setVideos.bind(this));
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: 'best hikes near seattle',
      maxResults: 5
    }, this.setVideos.bind(this));
  }

  setVideos (stats, videos) {
    this.setState({
      videos: videos,
      playerVideo: videos[0],
      playerStats: stats
    });
  }

  setStats(stats) {
    this.setState({
      playerStats: stats
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search liveSearch={this.handleSearch.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo} />
            <VideoDetails commentCount={this.state.playerStats.commentCount}
              dislikeCount={this.state.playerStats.dislikeCount}
              favoriteCount={this.state.playerStats.favoriteCount}
              likeCount={this.state.playerStats.likeCount}
              viewCount={this.state.playerStats.viewCount}
            />
          </div>
          <div className="col-md-5" >
            <VideoList handler={this.handleClick.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App searchYouTube={window.searchYouTube} getStats={window.getStats}/>, document.getElementById('app'));
