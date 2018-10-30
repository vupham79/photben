import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 220,
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
};

function MediaCard(props) {
  const { classes, product } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent className={classes.content}>
          <Typography align="left" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="caption" align="left">
            {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ backgroundColor: '#455a64' }}>
        <Button size="small" variant="contained" color="secondary">
          {product.price}
        </Button>
        <Button size="small" variant="contained" color="primary">
          MUA HÀNG
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);