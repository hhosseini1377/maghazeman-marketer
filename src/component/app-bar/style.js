import style from 'provider/style';

const styles = (theme) => ({
  header: {
    backgroundColor: '#fff !important',
    height: 'auto',
  },
  headerMenu: {
    backgroundColor: 'transparent',
  },
  logo: {
    display: 'flex',
    width: '100%',
    height: '100%',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  headerMenuProfile: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& h5': {
      margin: 0,
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1,
      height: 20,
      textAlight: 'right',
    },
    '& span': {
      fontSize: 10,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlight: 'right',
    },
  },
});

export default style(styles);
