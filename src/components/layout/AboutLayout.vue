<template>
  <body class="about_background">
    <main id="about">
      <h1 class="lg-heading">
          About
          <span class="text-secondary">Me</span>
      </h1>
      <div class="about-info">
          <img src="../../assets/pic.png" alt="Hyun Seok Lee" class="bio-image">
          <div class="bio">
              <h3 class="text-secondary">BIO</h3>
              <p>&emsp;&emsp;Hello! My name is Hyun Seok Lee (Kevin is what I go by!). I'm currently studying at Tufts University as a Computer Science Engineering and Mathematics major. I am an aspiring software engineer focusing on learning whatever I can to achieve my goals.</p>
              <p>&emsp;&emsp;I was born in Seoul, Korea and I moved to the States when I was 8 years old. I grew up in Bergen County, NJ where I focused on my elementary education. Now, I am a second year at Tufts University learning as much as I can to start my journey as a software developer.</p>
              <p>&emsp;&emsp;My hobbies include playing the guitar, singing, programming, and weight lifting.</p>

          </div>
          <div class="job job-1">
              <h3>Stevens Institute of Technology</h3>
              <h6>Research Intern (April 2015 - June 2017)</h6>
              <p>I worked as a research assistant in the Chang Research Group, Biomodeling &amp; Biomeasurements Laboratory. There we worked with melt-electrospinning technology to construct a suitable microenvironment for stem cell research. This involved finding optimal temperature, applied voltage, jet delivery speed and polymer moleculer structure. I also learned to manage 3d printing algorithms in MakerBot using Python and Excel data.</p>
          </div>
          
          <div class="job job-2">
              <h3>Prestige Institute</h3>
              <h6>AP Tutor/Curriculum Project Lead (May 2017 - September 2017)</h6>
              <p>Designed and implemented questions for SAT/ACT subject tests. Tutored students in AP chemistry, AP Physics C: Mechanics, and SAT Mathematics.</p>
          </div>
          <div class="job job-3">
              <h3>Prestige Institute</h3>
              <h6>Computer Science Tutor (May 2018 - September 2018)</h6>
              <p>I taught AP Computer Science for five high school students. I focused on teaching concepts such as recursions, searching/sorting algorithms, and object oriented programming as well as the fundamentals of programming (taught in mostly Java and Python).</p>
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
  name: "HomeLayout"
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
    margin: 2rem 0.5rem 2rem 0.5rem;
    background: rgba(lighten($primary-color, 2), 0.5);
  }

  &.sm-heading {
    margin-bottom: 2rem;
    padding: 0.2rem 1rem;
    background: rgba(lighten($primary-color, 2), 0.5);
  }
}

.about_background {
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
}

.about-info {
    display: grid;
    grid-template-areas:
    'bioimage bio bio'
    'job1 job2 job3';
    grid-template-columns: repeat(3, 1fr);
}
.bio-image {
    grid-area: bioimage;
    margin: auto;
    border-radius: 50%;
    border: $secondary-color 3px solid;
}

.bio {
    grid-area: bio;
    margin: 0 1.5rem 0 1.5rem;
    font-size: 1.25rem;
}
.job-1 {
    grid-area: job1;
    margin: 4rem 0.5rem 4rem 0;
}
.job-2 {
    grid-area: job2;
    margin: 4rem 0.5rem 4rem 0.5rem;
}
.job-3 {
    grid-area: job3;
    margin: 4rem 0 4rem 0.5rem;
}

.job {
    background: rgba(darken($primary-color, 2), 0.5);
    padding: 0.5rem;
    border-bottom: $secondary-color 5px solid;
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
