import React, {Component} from 'react';
import PageTemplate from '../components/PageTemplate/PageTemplate';
import MemoList from '../components/MemoList/MemoList';

class Home extends Component {
  render() {
    return(
      <div>
        <PageTemplate>
          <MemoList/>
        </PageTemplate>
      </div>
    );
  }
}

export default Home;
