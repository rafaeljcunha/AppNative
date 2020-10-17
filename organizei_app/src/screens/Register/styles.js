import theme from '../../theme';

export default {
  scrollview: {
    backgroundColor: theme.colors.orange.main,
    height: '100%',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
  },
  logo: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  logoText: {
    fontSize: theme.text.width[22],
    fontWeight: theme.text.fontWeight.bold,
    color: theme.colors.black.main,
    letterSpacing: 1,
  },
  formContainer: {
    height: '100%',
  },
  cloudContainer: {
    zIndex: 1,
    marginTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 140,
  },
  cloudImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 0,
    marginTop: 30,
  },
  picture: {
    backgroundColor: theme.colors.white.main,
    width: 110,
    height: 110,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.orange.main,
    borderWidth: 3,
  },
  formData: {
    padding: 12,
    backgroundColor: theme.colors.white.main,
    minHeight: 500,
  },
  button: {
    backgroundColor: theme.colors.orange.main,
    width: '100%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: theme.text.width[18],
    color: theme.colors.white.main,
    fontWeight: theme.text.fontWeight.bold,
  },
  camImage: {width: 104, height: 104, borderRadius: 104},
};
