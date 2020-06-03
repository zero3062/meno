import React from 'react';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import TodoList from '../../components/TodoList';


const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('home-back')}>
      <div className={cx('list')}>
      <TodoList></TodoList>
      </div>
      <div className={cx('button')}>
        <div className={cx('create-button')}>Create</div>
        <div className={cx('delete-button')}>Delete</div>
      </div>
      <div className={cx('main-border')}>

      </div>
    </div>
  );
};

export default HomePage;
