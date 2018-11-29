import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
});

function CustomizedBadge(props) {
  const { classes } = props;

  return (
    <Link to='/cart'>
      <IconButton aria-label="Cart" href="/cart">
        <Badge badgeContent={4} color="error" classes={{ badge: classes.badge }}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
}

export default withStyles(styles)(CustomizedBadge);