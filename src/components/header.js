import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Category from "@material-ui/icons/Category";
import Menu from "@material-ui/icons/Menu";
import React from "react";

const Header = () => {
  return (
    <Box component="header" boxShadow={8} bgcolor="#fff" px={3}>
      <Box py={2}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <img src="/img/logo.png" width={90} alt="logo" />
          <Hidden smDown>
            <Box mr="auto" ml={2}>
              <Box
                className="search-box"
                component="input"
                borderRadius={12}
                border="none"
                bgcolor="rgb(222 222 222)"
                py={2}
                pl={4}
                placeholder="جست و جو..."
              />
              <Search className="search-icon" fontSize="large" />
            </Box>
          </Hidden>
          <Box>
            <Box component="span" mr={1}>
              <Button variant="contained" color="primary">
                <Person />
                تماس با ما
              </Button>
            </Box>
            <Hidden xsDown>
              <Box component="span">
                <Button variant="contained" color="primary">
                  <Person />
                  عرفان
                </Button>
              </Box>
            </Hidden>
            <IconButton aria-label="delete">
              <ShoppingCart />
            </IconButton>
          </Box>
        </Grid>
      </Box>
      <Box py={1}>
        <Hidden mdUp>
          <Grid container spacing={2}>
            <Grid item xs={9} sm={10}>
              <Box className="search-box2">
                <Box
                  fullWidth
                  component="input"
                  borderRadius={12}
                  border="none"
                  bgcolor="rgb(222 222 222)"
                  py={2}
                  pl={4}
                  placeholder="جست و جو..."
                />
                <Search className="search-icon" fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Box textAlign="right">
                <IconButton aria-label="delete">
                  <Menu />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Button color="primary">
            <Category />
            <Box color="#000">
              <Typography>دسته بندی ها</Typography>
            </Box>
          </Button>
          <ul className="menu">
            <li className="transition">دیجیتال</li>
            <li className="transition">ابزارآلات</li>
            <li className="transition">بهداشت و سلامت</li>
            <li className="transition">خانه و آشپزخانه</li>
            <li className="transition">ورزش</li>
          </ul>
        </Hidden>
      </Box>
    </Box>
  );
};

export default Header;
