<template>
  <div class="ms-container-wrapper">
    <div class="ms-left">
      <div
        class="ms-section bg_image "
        :style="{ backgroundImage: 'url(' + src + ')' }"
      ></div>
    </div>

    <div class="ms-right">
      <div class="ms-section ms-table">
        <div
          class="slipt-content-inner ms-tableCell story-content footer-widget rn-plr rn-ptb-100"
        >
          <div class="content">
            <h2 class="section-title">Contact Us</h2>
            <div class="service-wrapper address">
              <!-- Start Single Service -->
              <div class="service" v-for="(contact, i) in contactInfo" :key="i">
                <h4>{{ contact.name }}</h4>
                <p>
                  <a :href="contact.to">{{ contact.desc }}</a>
                </p>
              </div>
              <!-- End Single Service -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        src: require("../../assets/img/news/news-3.jpg"),
        contactInfo: [
          {
            name: "Address",
            noLinkDesc: "500 South Main Street Bishop, CA 93514",
            to: "",
          },
          {
            name: "Email Address",
            desc: "contact@wedaura.com",
            to: "mailto:contact@wedaura.com",
          },
          {
            name: "Hot Line",
            desc: "+212 5 37 25 36 21",
            to: "tel:+496170961709",
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
