export default {
  loader(state) {
    return state.loader;
  },
  globalAlert(state) {
    return state.globalAlert;
  },
  toast(state) {
    return state.toast;
  },
  pageNav(state) {
    return state.pageNav;
  },
  subroutes(state) {
    return state.subroutes;
  }, 
  featureFlags(state){
    return state.featureFlags;
  }
};
