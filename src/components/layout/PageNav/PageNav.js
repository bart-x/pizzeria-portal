import React from 'react';
import styles from './PageNav.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const PageNav = (props) => (
  <nav>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeclassName='active'>Home</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeclassName='active'>Login</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeclassName='active'>Tables</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeclassName='active'>Waiter</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeclassName='active'>Kitchen</Button>
  </nav>
);

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
