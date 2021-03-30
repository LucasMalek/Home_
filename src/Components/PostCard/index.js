import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Bookmarkicon from '@material-ui/icons/Favorite';
import Message from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>({
    root: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: 5,
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px',
    },
    image: {
      height: 300,
      width: '100%',
      maxWidth: '100%',
    },
    content: {
      padding: 0,
    },
    favorite: {
      marginLeft: 'auto',
    },
}))



function PostCard({post}){
    const classes = useStyles();
return (
    /*<Card className={classes.root}>
    <CardHeader
     avatar = {<Avatar src={post.author.Avatar} />}
     title={<Typography variant='h6'>{post.title}</Typography>}
     subheader={
    <div className={classes.subheader}>
    <Typography className={classes.caption}  variant="caption">
       {'avaliado por'}
     </Typography>
     <Typography className={classes.caption}  variant="subtitle2">
     {post.author.name}
   </Typography>
   <Typography className={classes.caption}  variant="caption">
     {post.date}
   </Typography>
    </div>
     }
    />
    <CardContent className={classes.content}>
    <Typography className={classes.message}  variant="body1">
     {post.hashtags}
   </Typography>
   <CardActionArea className= {classes.image} alt="img">
    <img src={post.image}/>
   </CardActionArea>
    </CardContent>
    <CardActions disableSpacing>
     <IconButton>
      <FavoriteIcon>
        <Typography style={{cursor: 'pointer'}}
         color="textSecondary"
         variant="body2">

         {'10'}
        </Typography>
      </FavoriteIcon>
     </IconButton>
     <IconButton arial-label="favorite">
        <Message />
        <Typography className={classes.reactions} color="textSecondary" variant="body2">
          {'30'}
        </Typography>
      
     </IconButton>
     <IconButton arial-label="favorite" className={classes.favorite}>
       <Bookmarkicon/>
     </IconButton>
    </CardActions>
    </Card>
    */

    <Card>
    <CardContent>
    <img src="./images/locar.jpg" alt ="logo" className = {classes.img}/>
    </CardContent>
    </Card>
    
)
}

export default PostCard;