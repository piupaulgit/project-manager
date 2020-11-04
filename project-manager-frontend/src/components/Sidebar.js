import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import BallotIcon from '@material-ui/icons/Ballot';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CategoryIcon from '@material-ui/icons/Category';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PeopleIcon from '@material-ui/icons/People';

import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        background: "#fff",
        color: '#000'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: "#2A3042",
        color: "#fff",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(11),
    },
}));

function Sidebar(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    const [openQuestion, setOpenQuestion] = React.useState(false);
    const handleQuestionToggle = () => {
        setOpenQuestion(!openQuestion);
    };
    
    const [openExam, setOpenExam] = React.useState(false);
    const handleExamToggle = () => {
        setOpenExam(!openExam);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
      };
  
      const handleMenuClose = () => {
          setAnchorEl(null);
      };
      const menuItems = [
        { 
          icon: (<DashboardOutlinedIcon/>),
          text: 'Dashboard'
      }
    ];

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <div className="hCenter brand">
                    <span align="center">PMS</span>
                </div>
            </div>
            <Divider />
            <List>
                {menuItems.map(
                    (menu) => (
                        <ListItem button key={menu.text} component={Link} to="/dashboard">
                            <ListItemIcon>
                                <v-icon style={{
                                        color: "#eeeeee",
                                        opacity: 0.7,
                                    }}>{menu.icon}</v-icon>
                            </ListItemIcon>
                            <ListItemText primary={menu.text} />
                        </ListItem>
                    )
                )}
                <ListItem button onClick={handleQuestionToggle}>
                    <ListItemIcon>
                    <BusinessCenterOutlinedIcon style={{
                        color: "#eeeeee",
                        opacity: 0.7,
                    }}/>
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                    {openQuestion ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openQuestion} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} component={Link} to="/project-list">
                            {/* <ListItemIcon>
                            <BallotIcon style={{
                                color: "#eeeeee",
                                opacity: 0.7,
                            }}/>
                            </ListItemIcon> */}
                            <ListItemText primary="Project List" />
                        </ListItem>
                        <ListItem button className={classes.nested} component={Link} to="/add-question">
                            {/* <ListItemIcon>
                            <PostAddIcon style={{
                                color: "#eeeeee",
                                opacity: 0.7,
                            }}/>
                            </ListItemIcon> */}
                            <ListItemText primary="Create New" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
           
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                {props.title}
                </Typography>
                <IconButton color="inherit" style={{marginLeft: 'auto'}}>
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Button aria-controls="simple-menu" aria-haspopup="true" style={{marginLeft: "10px"}}>
                    <span style={{marginRight: "10px"}}>Admin</span>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" onClick={handleMenuClick}>
                        A
                    </Avatar>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.mainContent}
            </main>
        </div>
    );
}

Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Sidebar;
