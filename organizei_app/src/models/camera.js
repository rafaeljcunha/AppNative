const CameraModel = {
  namespace: 'cameraModel',

  state: {
    url: null,
  },

  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload};
    },
  },

  effects: {
    *teste({payload}, _) {
      console.log(payload);
    },
  },
};

export default CameraModel;
