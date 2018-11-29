import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 0,
    paddingTop: '100%',
    width: '80%',
    backgroundSize: 'contain',
    margin: '0 auto',
  },
  card: {
    maxWidth: '100%',
    height: '100%',
  }
};

function MediaCard(props) {
  const { classes, product } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea href='#'>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent className={classes.content} >
          <Typography align="left" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="caption" align="left">
            {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ backgroundColor: '#455a64' }}>
        <Grid container justify={'space-between'}>
          <Grid item>
            <Button size="small" variant="contained" color="secondary">
              {product.price}
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" variant="contained" color="default" href="#">
              MUA HÀNG
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);