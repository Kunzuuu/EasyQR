import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Drawer
} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram'
import MenuIcon from "@material-ui/icons/Menu";
import HttpIcon from "@material-ui/icons/Http";
import WifiIcon from "@material-ui/icons/Wifi";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem alignItems="flex-start">
          <img
            src="https://i.imgur.com/WEINNBb.png"
            alt="logo"
            style={{ width: 155 }}
          />
        </ListItem>
        <Divider />

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary="Wi-Fi" />
          </ListItem>
        </Link>

        <Link to="/url" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <HttpIcon />
            </ListItemIcon>
            <ListItemText primary="URL" />
          </ListItem>
        </Link>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/kunzuuu"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <InstagramIcon/>
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Kunzuuu"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon/>
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kunal-singh-parmar-5005822a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <LinkedInIcon/>
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("right", true)}
        style={{ backgroundColor: "white", fontWeight: "bold" }}
      >
        <MenuIcon style={{ color: "black" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
