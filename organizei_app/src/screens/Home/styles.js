import theme from '../../theme';

export default {
  generalContainer: {
    backgroundColor: theme.colors.white.main,
    minHeight: '100%',
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: theme.text.width[26],
    fontWeight: theme.text.fontWeight.bold,
    marginBottom: 20,
  },
  logoDescription: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.text.width[18],
  },
  logoDescriptionDash: {
    borderTopWidth: 2.5,
    width: 30,
    height: 7,
    textAlignVertical: 'center',
    borderTopColor: theme.colors.black.main,
  },
  containerActions: {
    flex: 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textReady: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.text.width[18],
    position: 'absolute',
    bottom: 0,
  },
  button: {
    marginTop: 20,
    backgroundColor: theme.colors.orange.main,
    width: '80%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: theme.text.width[18],
    color: theme.colors.white.main,
    fontWeight: theme.text.fontWeight.bold,
  },
  buttonContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cloudContainer: {
    flex: 0.9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cloudImage: {
    position: 'absolute',
    bottom: 0,
    width: '120%',
    minWidth: 400,
    height: '75%',
  },
};
