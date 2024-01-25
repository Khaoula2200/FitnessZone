<template>
  <div class="social-icon">

    <a
      v-for="(icon, i) in socialIconList"
      :key="i"
      :href="icon.url"
      target="_blank"
      >
      <font-awesome-icon :icon="['fab', icon.name]" />    

      <span class="circle"></span
    ></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        socialIconList: [
              {
                name: "facebook",
                dataHover: "facebook",
                url: "https://www.facebook.com/",
              },
              {
                name: "behance",
                dataHover: "behance",
                url: "https://www.behance.net/",
              },
              {
                name: "twitter",
                dataHover: "twitter",
                url: "https://twitter.com/",
              },
            ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
