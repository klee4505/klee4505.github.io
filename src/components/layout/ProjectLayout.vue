<template>
  <body class="project_background">
    <main id="project">
      <h1 class="lg-heading">
        My
          <span class="text-secondary">Projects</span>
      </h1>
      <h2 class=sm-heading>
          Here are some of my personal projects!
      </h2>
      <div class="projects">
        <div class="item">
            <div class=item-background>
                <a href="#">
                    <img src="../../assets/tuftsdining.jpeg" alt="Project">
                </a>
            </div>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
            </a>
        </div>
        <div class="item">
            <div class=item-background>
                <a href="#">
                    <img src="../../assets/pic.png" alt="Project">
                </a>
            </div>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
            </a>
        </div>
        <div class="item">
            <div class=item-background>
                <a href="#">
                    <img src="../../assets/pic.png" alt="Project">
                </a>
            </div>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
            </a>
        </div>
        <div class="item">
            <div class=item-background>
                <a href="#">
                    <img src="../../assets/pic.png" alt="Project">
                </a>
            </div>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
            </a>
        </div>
        <div class="item">
            <div class=item-background>
                <a href="#">
                    <img src="../../assets/pic.png" alt="Project">
                </a>
            </div>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
            </a>
        </div>
      </div>
    </main>
    <footer id="main-footer">
        Copyright &copy; 2019
    </footer>
  </body>
</template>

<script>

export default {
  name: "ProjectLayout"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'config';
@import 'menu';

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

.project_background {
    background: rgba(darken($primary-color, 2), 0.5);
}
.text-secondary {
  color: $secondary-color;
}

main {
  padding: 4rem;
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
.about-info {
    display: grid;
    grid-template-areas:
    'bioimage bio bio'
    'job1 job2 job3';
    grid-template-columns: repeat(3, 1fr);
}

.item-background {
    background: rgba(lighten($primary-color, 2),1);
}
.projects {
    margin-top: 4rem;
    display: grid;
    grid-gap: 0.7rem;
    grid-template-columns: repeat(3, 1fr);

    img {
        width:100%;
        object-fit: contain;

        border: 3px #fff solid;
        &:hover {
            opacity: 0.5;
            border-color: $secondary-color;
            @include easeOut;
        }
    }
}

.btn {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 0.5rem 1rem;
    border: 0;
    margin-bottom: 0.3rem;
    &:hover {
        background: $secondary-color;
        color: set-text-color($secondary-color);
    }
}

.btn-dark {
    @extend .btn;
    background: darken($primary-color, 50);
    color: #fff;
}
.btn-light {
    @extend .btn;
    background: lighten($primary-color, 50);
    color: #333;
}
#main-footer {
    text-align: center;
    padding: 1rem;
    background: rgba(darken($primary-color, 2), 0.9);
    color: set-text-color($primary-color);
    height: 60px;
}
@import 'mobile';
</style>
