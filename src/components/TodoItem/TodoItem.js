import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class  TodoItem extends Component {
  render() {
    const {children} = this.props;

    return(
      <div className={cx('todo-list')}>
        <div className={cx('text')}>{children}</div>
      </div>
    )
  }
}

export default TodoItem;
