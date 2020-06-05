import React, {Component} from 'react';
import MemoItem from '../../components/MemoItem';

class MemoList extends Component {
  render(){
    const {memos, onRemove} = this.props;
    const memoList = memos.map(
      memo => (
        <MemoItem
          key={memo.id}
          onRemove={() => onRemove(memo.id)}>
          {memo.text}
        </MemoItem>
      )
    );

    return(
      <div>
        {memoList}
      </div>
    );
  }
}

export default MemoList;
