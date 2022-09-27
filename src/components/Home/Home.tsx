import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}
export const Home = (props: Props) => {
  return (
    <div>
        {props.title}
    </div>
  )
}
