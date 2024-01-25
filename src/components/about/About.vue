<template>
  <div class="about-page">
    <div class="rn-story-area d-flex bg_color--3" id="about">
      <div
        class="rn-story-left w-50 rn-story-bg-wrapper"
        :style="{ backgroundImage: 'url(' + aboutSrc + ')' }"
      ></div>
      <div class="rn-story-right w-50 d-flex align-items-center">
        <div
          class="story-style--3 story-content text-left rn-plr--160 section-ptb-xl"
        >
          <div class="content text-left">
            <h2>
              Meet Our Team
            </h2>
            <p>
             At WedAura, our team is a dedicated group of passionate individuals united by a common goal: to turn your dream wedding into a reality. Each member brings a unique skill set and a shared commitment to excellence, ensuring that every detail of your special day is crafted with precision and care. 
            </p>
            <p>
             From creative minds to meticulous planners, we are here to make your wedding experience truly exceptional.
            </p>
            <div
              class="story-btn  wow newFadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1000ms"
            >
              <router-link to="/WedAura/contact">Get Connected</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        aboutSrc: require("../../assets/images/gallery/team.jpg"),
      };
    },
  };
</script>

<style lang="scss" scoped>
  .about-page {
    .rn-skill-right {
      @media only screen and (max-width: 767px) {
        order: 2;
      }
    }
  }
  
</style>
