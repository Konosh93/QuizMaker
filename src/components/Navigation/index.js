import React from 'react';
import style from './index.less';
import NavButton from '../NavButton';

const Navigation = () => (
  <div className={style.navigation}>
    <NavButton text="HOME" uri="/" />
    <NavButton text="QUIZ" uri="/quiz" />
    <NavButton text="LOGIN" uri="/auth" />
  </div>
);

export default Navigation;
