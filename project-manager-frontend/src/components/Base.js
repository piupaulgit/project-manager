import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Base() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar></Sidebar>
      <main className={classes.content}>
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
        lsndkfnsadl jfgkjdlkfglkd lg dl d lsndkfnsadl jfgkjdlkfglkd lg dl d
      </main>
    </div>
  );
}
