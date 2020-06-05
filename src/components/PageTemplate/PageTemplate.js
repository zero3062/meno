import React, {Component} from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import MemoList from './../../components/MemoList';

const cx = classNames.bind(styles);

class PageTemplate extends Component {
  render(){
    const {children} = this.props;

    return(
      <div className={cx('position')}>
        <div className={cx('page-back')}>
          <div className={cx('Memo-title')}>Memo</div>
          <div className={cx('add-button')}>+</div>
        </div>
        <div className={cx('memolist')}>
          {children}
        </div>
      </div>
    );
  }
}

export default PageTemplate;
