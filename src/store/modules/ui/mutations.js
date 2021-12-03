export default {
  setSubroutes(state, payload){
   if(state.subroutes.length){
     state.subroutes.splice(0, state.subroutes.length);
   }
   if(payload.subroutes){
     const { subroutes } = payload;
      if(subroutes.length){
        subroutes.forEach(route => {
          state.subroutes.push(route);
        });
      }
    }
  },
  showToast(state, payload) {
    for (const key in payload) {
      state.toast[key] = payload[key];
    }
    state.toast.icon = payload.sclass ? state.toast.icons[payload.sclass] : "";
  },
  showGlobalLoader(state, payload) {
    for (const key in payload) {
      state.loader[key] = payload[key];
    }
  },
  showGlobalAlert(state, payload) {
    for (const key in payload) {
      state.globalAlert[key] = payload[key];
    }
  },
  togglePageNav(state, payload) {
    state.pageNav.show = payload;
  },
};