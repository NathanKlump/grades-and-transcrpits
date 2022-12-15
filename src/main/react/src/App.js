import React from 'react';
import PopularServices from './component/GradesAndTranscripts/js/GradesAndTranscripts';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <PopularServices />
      </React.Fragment>
    );
  }
};

export default App;
