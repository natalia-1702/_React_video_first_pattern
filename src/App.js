import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './components/Video';
import { Menu } from './components/Menu';
import './App.css';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }


chooseVideo(newVideo){
  this.setState({
    src: VIDEOS[newVideo]
  });
}
  render() {
    return (
      <div class="test">
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}
/*
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
*/
export default App;
