import React, {Component} from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import MemoList from './../../components/MemoList';

const cx = classNames.bind(styles);

class PageTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      memos: [
        {id:0, text: ''},
      ]
    };
  }

  id = 1
  getId = () => {
    return ++this.id;
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      input:value
    });
  }

  handleInsert = () => {
    const {memos, input} = this.state;

    const newMemo = {
      text : input,
      id : this.getId()
    };

    this.setState({
      memos: [...memos, newMemo],
      input: ''
    });
  }

  handleRemove = (id) => {
    const {memos} = this.state;
    const index = memos.findIndex(memo => memo.id === id);


    this.setState({
      memos: [
        ...memos.slice(0, index),
        ...memos.slice(index + 1, memos.length)
      ]
    });

  }

  render(){
    const {input, memos} = this.state;

    return(
      <div className={cx('position')}>
        <div className={cx('page-back')}>
          <div className={cx('Memo-title')}>Memo</div>
          <div className={cx('add-button')} onClick={this.handleInsert}>+</div>
        </div>
        <div className={cx('memolist')}>
          <MemoList onChange={this.handleChange} onRemove={this.handleRemove} value={input} memos={memos}/>
        </div>
      </div>
    );
  }
}

export default PageTemplate;
