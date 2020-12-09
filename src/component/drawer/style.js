import style from 'provider/style';

const styles = (theme) => ({
  logoDrawer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
    // marginTop: 45,
    '& img': {
      padding: '2rem 0.6rem',
      width: '90%',
      borderBottom: '1.5px solid rgba(255,255,255,0.2)',
    },
    '& a': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  menuDrawer: {
    border: 'none !important',
    marginTop: 30,
    backgroundColor: 'transparent',
    '& li': {},
  },
  activeMenu: {
    backgroundColor: '#1a3248 !important',
    '&::before': {
      backgroundColor: '#edc73b',
    },
    '&::after': {
      display: 'none',
    },
  },
  headerMenu: {
    backgroundColor: '#fff',
    marginTop: 0,
    paddingTop: 0,
  },
});

export default style(styles);
