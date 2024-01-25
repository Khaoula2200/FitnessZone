<template>
  <div class="about-page dark-mode-section">
    <div class="rn-story-area d-flex" id="about">
      <div class="about-image-side w-50">
          <div class="image-border">
            <img :src="aboutSrc" />
          </div>
      </div>
      <div class="rn-story-right w-50 d-flex align-items-center about-text-side">
        <div
          class="story-style--3 story-content"
        >
          <div class="content text-left">
            <h2>
              Who We Are
            </h2>
            <div class="content-text">
              <p>
                At FitZone, we believe that fitness is a journey, and we're here to guide you every step of the way. With years of experience in the fitness industry, our team of certified trainers is dedicated to helping you reach your full potential.
              </p>
              <p>
                We offer a wide range of fitness programs, cutting-edge equipment, and a motivating atmosphere to keep you inspired and motivated.
              </p>
            </div>
            <div
              class="get-connected-btn"
            >
              <router-link to="/FitZone/contact">Get Connected</router-link>
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
        aboutSrc: require("../../assets/images/gallery/muscular-man-about.jpg"),
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
    padding: 20px 0;
  }
  .dark-mode-section{
    background: rgb(19,15,12) !important;
    background: linear-gradient(325deg, rgba(19,15,12,1) 0%, rgba(62,62,62,1) 100%) !important;
  }
  .dark-mode-section * {
    color: white !important;

  }
  .about-text-side {
    background-color: transparent !important;
    background: transparent !important;
  }
  .about-text-side .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .about-text-side .content h2 {
    text-transform: uppercase;
    font-family: sans-serif;
    color: #f7c324 !important;
    margin-bottom: 0 !important;
  }
  .about-text-side .content-text {
    text-align: justify;
  }
  .about-text-side .content p {
    font-size: 16px !important;
  }
  .about-text-side .get-connected-btn {
    display: flex;
    justify-content: end;
  }
  .about-text-side .get-connected-btn a {
    display: inline-block;
    padding: 0 26px;
    height: 40px;
    line-height: 39px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #000 !important;
    background: #f7c324;
    border: 1px solid #f7c324;
    font-weight: 700;
  }

  .about-image-side .image-border {
    width: fit-content;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 10px solid #f7c324;
  }
  .about-image-side img {
    width: 300px;
    transform: translate(25px, -25px);
  }
</style>
