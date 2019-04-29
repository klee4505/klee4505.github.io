<template>
  <body class="bg-img">
    <ProjectHeader/>
    <ProjectLayout/>
  </body>
</template>

<script>

import ProjectHeader from './components/layout/ProjectHeader.vue'
import ProjectLayout from './components/layout/ProjectLayout.vue'

export default {
  name: 'home',
  components: {
    ProjectHeader,
    ProjectLayout
  }
}
</script>

<style lang="scss">
  @import './components/layout/config';

  @mixin easeOut {
    transition: all 0.5s ease-out;
  }
  @mixin background {
    @if $show-home-image {
      &#bg-img {
        background: $home-image;
        background-attachment: fixed;
        background-size: cover;
        
      }
    }
  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: $home-image;
    background-attachment: fixed;
    background-size: cover;
    

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    color: #fff;
    height: 100%;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
