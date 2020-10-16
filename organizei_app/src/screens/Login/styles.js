import theme from '../../theme/index';

export default {
  scrollview: {backgroundColor: theme.colors.white.main, height: '100%'},
  generalContainer: {
    backgroundColor: theme.colors.white.main,
    minHeight: '100%',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
  },
  logoImage: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  logoText: {
    fontSize: theme.text.width[22],
    fontWeight: theme.text.fontWeight.bold,
    letterSpacing: 1,
  },
  loginImageContainer: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginImage: {
    width: 280,
    height: 325,
  },
  actionsContainer: {
    minHeight: 100,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  forgotText: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.text.width[16],
  },
  button: {
    marginTop: 20,
    backgroundColor: theme.colors.orange.main,
    width: '60%',
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
};
