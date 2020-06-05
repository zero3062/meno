import React, {Component} from 'react';
import styles from './MemoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class MemoItem extends Component {
  render(){
    const {children, onRemove} = this.props;

    return(
      <div className={cx('item-back')}>
        <div className={cx('item-contents')}>
          <textarea>{children}</textarea>
          <div className={cx('button')}>
            <div className={cx('delete-button')} onClick={(e) => {
              onRemove();
              e.stopPropagation();
              }
            }>Delete</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoItem;
