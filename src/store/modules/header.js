const header = {
  state : {
    menu1:'모델',
    menu2:'구매',
    menu3:'체험',
    menu4:'멤버스',
    menu5:'제네시스',
    menuPopup1:false,
    menuPopup2:false,
    menuPopup3:false,
    menuPopup4:false,
    menuPopup5:false,
  },
  getters:{
    getMenu1(state){
      return state.menu1;
    },
    getMenu2(state){
      return state.menu2;
    },
    getMenu3(state){
      return state.menu3;
    },
    getMenu4(state){
      return state.menu4;
    },
    getMenu5(state){
      return state.menu5;
    },
    getMenuPopup1(state){
      return state.menuPopup1;
    },
    getMenuPopup2(state){
      return state.menuPopup2;
    },
    getMenuPopup3(state){
      return state.menuPopup3;
    },
    getMenuPopup4(state){
      return state.menuPopup4;
    },
    getMenuPopup5(state){
      return state.menuPopup5;
    }
  },
  mutations:{
    setMenuPopup1(state){
      state.menuPopup1 = !state.menuPopup1;
      state.menuPopup2 = false;
      state.menuPopup3 = false;
      state.menuPopup4 = false;
      state.menuPopup5 = false;
    },
    setMenuPopup2(state){
      state.menuPopup1 = false;
      state.menuPopup2 = !state.menuPopup2;
      state.menuPopup3 = false;
      state.menuPopup4 = false;
      state.menuPopup5 = false;
    },
    setMenuPopup3(state){
      state.menuPopup1 = false;
      state.menuPopup2 = false;
      state.menuPopup3 = !state.menuPopup3;
      state.menuPopup4 = false;
      state.menuPopup5 = false;
    },
    setMenuPopup4(state){
      state.menuPopup1 = false;
      state.menuPopup2 = false;
      state.menuPopup3 = false;
      state.menuPopup4 = !state.menuPopup4;
      state.menuPopup5 = false;
    },
    setMenuPopup5(state){
      state.menuPopup1 = false;
      state.menuPopup2 = false;
      state.menuPopup3 = false;
      state.menuPopup4 = false;
      state.menuPopup5 = !state.menuPopup5;      
    },

  },
  actions:{
    acMenuPopup1({commit}){
      commit('setMenuPopup1')
    },
    acMenuPopup2({commit}){
      commit('setMenuPopup2')
    },
    acMenuPopup3({commit}){
      commit('setMenuPopup3')
    },
    acMenuPopup4({commit}){
      commit('setMenuPopup4')
    },
    acMenuPopup5({commit}){
      commit('setMenuPopup5')
    },
  }

}
export default header;