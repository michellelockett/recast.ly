const TESTDATA = window.exampleVideoData;

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: TESTDATA,
      playerVideo: TESTDATA[0],
    }
  }

  handleClick(e) {
    console.log(e.target.attributes.getNamedItem('data-reactid').value);
    console.log('in handle Click')
    let clicked = e.target;
    // this.setState({
    //   playerVideo: TEST
    // })
    //var attribute = event.target.attributes.getNamedItem('data-tag').value;
  }

  testFunc() {
    console.log('hello world');
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
            <VideoList handler={this.testFunc} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}


 // App = () => (
 //  <div>
 //    <nav className="navbar">
 //      <div className="col-md-6 offset-md-3">
 //        <div><h5><em>search</em> view goes here</h5></div>
 //      </div>
 //    </nav>
 //    <div className="row">
 //      <div className="col-md-7">
 //        <VideoPlayer video={TESTDATA[0]} />
 //      </div>
 //      <div className="col-md-5">
 //        <VideoList videos={TESTDATA}/>
 //      </div>
 //    </div>
 //  </div>


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App />, document.getElementById('app'));
