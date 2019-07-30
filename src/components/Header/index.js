import React from 'react';
import { Link } from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';


export default function Header() {
  return (
    <Container>
    <Link to="/">
    <img src={logo} alt="Sergio's Shoes"/>
    </Link>

    <Cart to="/cart">
    <div>
    <strong>My Shop car</strong>
    <span>4 items</span>
    </div>
    <MdShoppingBasket size={36} color="#FFF"/>
    </Cart>
    </Container>
  );
}
