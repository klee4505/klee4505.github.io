<template>
  <header>
    <div v-on:click="toggleMenu" class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <a href="/" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="/about" class="nav-link">About Me</a>
        </li>
        <li class="nav-item">
          <a href="/projects" class="nav-link">My Projects</a>
        </li>
        <li class="nav-item">
          <a href="/contact" class="nav-link">Contact Me</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
        toggleMenu: function() {
          const menuBtn = document.querySelector('.menu-btn');
          const menu = document.querySelector('.menu');
          const menuNav = document.querySelector('.menu-nav');
          const menuBranding = document.querySelector('.menu-branding');
          const navItems = document.querySelectorAll('.nav-item');
          if (!this.showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'))

            this.showMenu = true;
          } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'))
            this.showMenu = false;
          }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'config';
@import 'menu';
@import 'mobile';
  a {
    color: #fff;
    text-decoration: none;
  }

  header {
    position: fixed;
    z-index: 2;
    width: 100%;
  }
</style>
