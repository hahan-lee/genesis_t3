<template>
  <div id="main">
    <section1-component/>
    <section2-component/>
    <section3-component/>
    <section4-component/>
    <section5-component/>
    <section6-component/>
    <section7-component/>
  </div>
</template>

<script>
import Section1Component from './main/Section1Component.vue'
import Section2Component from './main/Section2Component.vue'
import Section3Component from './main/Section3Component.vue'
import Section4Component from './main/Section4Component.vue'
import Section5Component from './main/Section5Component.vue'
import Section6Component from './main/Section6Component.vue'
import Section7Component from './main/Section7Component.vue'
export default {
  name:"MainComponent",
  components: { 
    'section1-component' : Section1Component, 
    'section2-component' : Section2Component,
    'section3-component' : Section3Component,
    'section4-component' : Section4Component,
    'section5-component' : Section5Component,
    'section6-component' : Section6Component,
    'section7-component' : Section7Component
  },

}
</script>

<style>
  #main{
    padding-top:70px;
  }
</style>