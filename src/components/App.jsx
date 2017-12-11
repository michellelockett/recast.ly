const TESTDATA = window.exampleVideoData;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      playerVideo: TESTDATA[0],
    };
  }

  handleClick(index) {
    let newPlayerVid = this.state.videos[index];
    this.setState({
      playerVideo: newPlayerVid
    });
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: 'best hikes near seattle',
      maxResults: 5
    }, this.setVideos.bind(this));
  }

  setVideos (videos) {
    this.setState({
      videos: videos
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo} />
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
ReactDOM.render(<App searchYouTube={window.searchYouTube} />, document.getElementById('app'));
