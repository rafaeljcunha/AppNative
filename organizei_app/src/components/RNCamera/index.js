import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {RNCamera} from 'react-native-camera';
import {connect, createAction} from '../../utils/dva';
import Button from '../Button';
import logo from '../../assets/camera/imagem_camera.png';

function RNCameraComponent({navigation, dispatch, cameraModel: {url}}) {
  const takePicture = async function (camera) {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
      };
      const data = await camera.takePictureAsync(options);
      if (data && data.uri) {
        dispatch(createAction('cameraModel/updateState')({url: logo}));
        navigation.navigate(navigation.getParam('backRouter'));
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <RNCamera
        ref={(camera) => {
          camera;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') {
            return (
              <View>
                <Text>Pendente</Text>
              </View>
            );
          }
          return (
            <View style={styles.captureContainer}>
              <Button
                onClick={() => takePicture(camera)}
                style={styles.capture}
                icon={
                  <View style={styles.captureButtonViewContainer}>
                    <View style={styles.captureButtonView} />
                  </View>
                }
              />
            </View>
          );
        }}
      </RNCamera>
      <View />
    </View>
  );
}

export default connect(({cameraModel}) => ({cameraModel}))(RNCameraComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: {flex: 0, flexDirection: 'row', justifyContent: 'center'},
  capture: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(26,26,26, 1)',
    borderRadius: 80,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    height: 80,
    width: 80,
  },
  captureButtonViewContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'rgba(64,64,64, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonView: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(51,51,51, 0.6)',
  },
});
