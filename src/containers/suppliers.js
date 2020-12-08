import { Box, Divider, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import AttachMoney from "@material-ui/icons/AttachMoney";
import CreditCard from "@material-ui/icons/CreditCard";

const Suppliers = () => {
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={3} xl={2}>
          <Box bgcolor="#fff" boxShadow={4} p={2} borderRadius={16} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box textAlign="center">
                  <Home color="primary" />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography>صفحه اصلی</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            bgcolor="#fff"
            boxShadow={4}
            p={2}
            borderRadius={16}
            mb={2}
            className="active"
          >
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box textAlign="center">
                  <AttachMoney color="primary" />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography>زیر مجموعه ها</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box bgcolor="#fff" boxShadow={4} p={2} borderRadius={16} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box textAlign="center">
                  <CreditCard color="primary" />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography>چت</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box bgcolor="#fff" boxShadow={4} p={2} borderRadius={16} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box textAlign="center">
                  <Apps color="primary" />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography>امور مالی</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box bgcolor="#fff" boxShadow={4} p={2} borderRadius={16} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box textAlign="center">
                  <Apps color="primary" />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography>تقوبم کاری</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box bgcolor="#fff" boxShadow={4} p={2} borderRadius={16} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box textAlign="center">
                  <Apps color="primary" />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography>نامه</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                خبر جدید ندارید!
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Hidden mdUp xsDown>
          <Grid item sm={5}>
            <Box
              bgcolor="#ff584d"
              boxShadow={4}
              pb={2}
              borderRadius="500px 500px 16px 16px"
            >
              <img
                src="/img/avatar.jpg"
                className="image radius-circle"
                alt="product"
              />
              <Box mt={3} px={1}>
                <Box mb={2} color="#fff">
                  <Typography variant="h6">عرفان حسین پور</Typography>
                  <Typography>برنامه نویس</Typography>
                </Box>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={7} xl={8}>
          <Box bgcolor="#fff" boxShadow={4} p={2} borderRadius={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box textAlign="center" mb={3} p={2}>
                  <img src="/img/product.png" className="image" alt="product" />
                  <Typography component="h2" variant="h6">
                    محصول من
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} md={2} xl={2}>
            <Box
              bgcolor="#ff584d"
              boxShadow={4}
              pb={2}
              borderRadius="500px 500px 16px 16px"
            >
              <img
                src="/img/avatar.jpg"
                className="image radius-circle"
                alt="product"
              />
              <Box mt={3} px={1}>
                <Box mb={2} color="#fff">
                  <Typography variant="h6">عرفان حسین پور</Typography>
                  <Typography>برنامه نویس</Typography>
                </Box>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={2}>
                    <Box textAlign="center">
                      <img
                        src="/img/avatar.jpg"
                        className="image radius-circle"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>@erfaneshoon_</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default Suppliers;
