<template>
  <div id="wrap">
    <header-component />
    <main-component/>
    <footer-component/>
    <modal-component />
    <header-menu-modal1 />
    <banner-component />
  </div>
</template>

<script>
import HeaderComponent from './wrap/HeaderComponent.vue'
import MainComponent from './wrap/MainComponent.vue'
import FooterComponent from './wrap/FooterComponent.vue'
import ModalComponent from './wrap/ModalComponent.vue'
import BannerComponent from './wrap/BannerComponent.vue'
import HeaderMenuModal1 from './wrap/HeaderMenuModal1.vue'

export default {
  name : "WrapComponent",
  components: {
    'header-component' : HeaderComponent,
    'main-component' : MainComponent,
    'footer-component' : FooterComponent,
    'modal-component' : ModalComponent,
    'banner-component' : BannerComponent,
    'header-menu-modal1' : HeaderMenuModal1,
  }

}
</script>

<style>

  *{margin:0; padding:0; vertical-align:middle; box-sizing: border-box;}
  html{overflow-y: scroll}
  ul,li{list-style: none;}
  a{text-decoration: none;}
  #wrap{
    width:100%;
    height: 100%;
    user-select: none;
    overflow-y:scroll;
  }
</style>