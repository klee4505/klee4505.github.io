<template>
  <body>
    <main id="home">
      <h1 class="lg-heading">Hyun Seok Lee <!--
        --><span class="text-secondary">(Kevin)</span>
      </h1>
      <h2 class="sm-heading">Computer Science and Mathematics Student at Tufts University</h2>
      <div class="icons">
        <a href="https://www.linkedin.com/in/kevin-l-866211a6/" title="linkedin">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/klee4505" title="GitHub">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/klee4505" title="facebook">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#!" download>
          <i class="far fa-file-alt fa-2x"></i>
        </a>
      </div>
    </main>
  </body>
</template>

<script>

export default {
  name: "HomeLayout",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'config';
@import 'menu';
@import 'mobile';


// Headings
h1,
h2,
h3 {
  margin: 0;
  font-weight: 400;

  &.lg-heading {
    font-size: 6rem;
    background: rgba(lighten($primary-color, 2), 0.5);
  }
  &.md-heading {
    font-size: 4rem;
    background: rgba(lighten($primary-color, 2), 0.5);
    color: $secondary-color;
  }
  &.sm-heading {
    margin-bottom: 2rem;
    padding: 0.2rem 1rem;
    background: rgba(lighten($primary-color, 2), 0.5);
  }
}

.text-secondary {
  color: $secondary-color;
}

main {
  padding: 4rem;
  // height: 100%;
  min-height: calc(100vh - 60px);

  .icons {
    margin-top: 1rem;
    a {
      padding: 0.4rem;
      color: #fff;
      text-decoration: none;
      @include easeOut;

      &:hover {
        color: rgba(0, 255, 242, 0.795);
      }
    }
  }

  &#home {
    overflow: hidden;
    h1 {
      margin-top: 20vh;
    }
  }
}

</style>
