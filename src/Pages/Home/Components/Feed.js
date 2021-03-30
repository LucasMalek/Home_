import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../Components/PostCard';
import Carousel from 'react-elastic-carousel';
import { Component } from 'react';
import { isTemplateExpression } from 'typescript';
import Paper from '@material-ui/core/Paper';
import { SignalWifi1BarLock } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
   root: {
    paddingBottom:  theme.spacing(2),
   },
   image: {
    height: '300',
    width: '100%',
    marginTop: 20,
   },
   paper: {
   width: '100%',
   backgroundColor: 'transparent',
   boxShadow: 'none',
   alignItems: 'center',
   },
   p: {
     marginLeft: 100,
   },
   div: {
     height: '380px',
     width: 'auto',
     marginTop: 20,
   },
  
}));

const posts = [
  {
   id: 1,
   author: {
      id: 1,
      name: 'Lucas Malek',
      username: 'lucasmalek',
      avatar: '/images/avatars/avatar_1.jpeg',
   },
   title: "Criando um App do zero",
   date: "April 7, 2020",
   description: "Fodase",
   hashtags: "#peideiesai",
   image: "/images/posts/post9.jpeg"
  },
  {
    id: 2,
    author: {
       id: 2,
       name: 'Lucas Malek',
       username: 'lucasmalek',
       avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: "Criando um App do zero",
    date: "April 7, 2020",
    description: "Fodase",
    hashtags: "#peideiesai",
    image: "/images/posts/post9.jpeg"
   }
]

function  Feed(){
  const classes = useStyles();
    return (
        /*<div className = {classes.root}>
          {
            posts.map(post =>(
              //<PostCard key = {post.id} post = {post}/>
              <Carousel key = {post.id} post = {post}>
                
              </Carousel>
            ))
          }
          
        </div>
        */
      
          
        <Carousel arrows={false}>
          
          <div className={classes.div}>
          
          
          <img src="./images/slide1.jpg"  className = {classes.img}/>
          </div>
          <div className={classes.div}>
          
          
        <img src="./images/slide2.jpg"  className = {classes.img}/>
          </div>
          
       </Carousel>
       
        
        
      
       
    )
}

export default Feed;