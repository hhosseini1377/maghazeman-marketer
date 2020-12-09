import style from 'provider/style';

const styles = (theme) => ({
  home: {
    height: '100%',
  },
  cloumnWrapper: {
    background: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  homeMenu: {
    '& ul': {
      '& li': {
        marginBottom: 10,
      },
    },
  },
  homeMenuButton: {
    border: 'none',
    boxShadow: 'none',
    background: '#ececec',
    borderRadius: 8,
    textAlign: 'right',
    '&:hover': {
      background: '#e0e0e0 !important',
      color: '#000',
    },
    '&:focus': {
      background: '#e0e0e0 !important',
      color: '#000',
    },
  },
  detailBox: {
    background: '#ececec',
    borderRadius: 8,
    textAlign: 'right',
    padding: 10,
    height: 150,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleDetail: {
    marginRight: 10,
    fontSize: 16,
  },
  profile: {
    borderRadius: [150, 150, 0, 0],
    padding: 20,
    background: '#ff4d4f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    '&::after': {
      content: "''",
      width: 0,
      height: 0,
      borderRight: '150px solid #ff4d4f',
      borderBottom: '150px solid transparent',
      borderTop: '0 solid transparent',
      position: 'absolute',
      right: 0,
      bottom: -150,
    },
    '&::before': {
      content: "''",
      width: 0,
      height: 0,
      borderLeft: '150px solid #ff4d4f',
      borderBottom: '150px solid transparent',
      position: 'absolute',
      bottom: -150,
      left: 0,
    },
  },
  userAvater: {
    width: 250,
    height: 250,
    borderRadius: 150,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  userTitle: {
    marginTop: 10,
    width: '100%',
    paddingBottom: 50,
    '& h4': {
      color: '#fff',
    },
    '& span': {
      color: '#fff',
    },
    '& ul': {
      '& li': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        '& span': {
          marginLeft: 15,
        },
      },
    },
  },
  storeItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },

  '@media only screen and (max-width: 1024px)': {
    profile: {
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingBottom: 0,
      marginBottom: 10,
      '&::after': {
        display: 'none',
      },
      '&::before': {
        display: 'none',
      },
    },
    userAvater: {
      width: 80,
      height: 80,
      flex: '1 0 auto',
      marginLeft: 20,
    },
    userTitle: {
      paddingBottom: 0,
      whiteSpace: 'nowrap',
      '& ul': {
        display: 'flex',
        '& span': {
          marginLeft: '8px !important',
          fontSize: 13,
        },
      },
    },
  },
});
export default style(styles);
