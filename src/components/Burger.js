import React from 'react';
import { bool, func } from 'prop-types';
import './Burger.css';

const Burger = ({ open, setOpen }) => <button className={open ? 'burger burger-open' : 'burger'} onClick={()=> setOpen(!open)}>
  <div />
  <div />
  <div />
</button>

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger;