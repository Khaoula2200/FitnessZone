<template>
  <!-- Footer -->
  <footer class="-rn-footer" id="footer" style="padding-top: 90px;">
    <div class="rn-footer-wrapper footer" style="padding-bottom: 90px;">
      <v-container fluid>
        <v-row>
          <v-col lg="12">
            <div class="footer-top" style="padding-top: 0;">
              <div class="content">
                <h4>Contact Us</h4>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="footer-wrapper ptb--100" >
        <v-container fluid>
          <v-row>
            <!-- Start Single Wedget -->
            <v-col lg="4" md="4" sm="6" cols="12">
              <div class="footer-widget">
                <h3 class="ft-title">Address</h3>
                <div class="content">
                  <p>
                    500 South Main Street <br />
                    Bishop, CA 93514
                  </p>
                </div>
              </div>
            </v-col>
            <v-col lg="4" md="4" sm="6" cols="12">
              <div class="footer-widget">
                <h3 class="ft-title">Contact</h3>
                <div class="content">
                  <div class="address">
                    <p>
                      <a href="mailto:contact@FitZone.com">contact@FitZone.com</a>
                    </p>
                    <p><a href="tel:0123344556677">+212 5 37 25 36 21</a></p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="4" md="4" sm="6" cols="12">
              <div class="footer-widget">
                <h3 class="ft-title">Quick Link</h3>
                <div class="content">
                  <ul class="quick-link">
                    <li v-for="(link, i) in quickLink" :key="i">
                      <router-link :to="link.RouteName">{{
                        link.name
                      }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <!-- <FooterTwo /> -->
    <FooterNew />
  </footer>
  <!--// Footer -->
</template>

<script>
  // import FooterTwo from "./FooterTwo";
  import FooterNew from "./FooterNew";
  export default {
    components: {
      // FooterTwo,
      FooterNew
    },
    data() {
      return {
        quickLink: [
          {
            name: "Services",
            RouteName: "/FitZone/services",
          },
          {
            name: "Gallery",
            RouteName: "/FitZone/gallery",
          },
          {
            name: "Testimonials",
            RouteName: "/FitZone/testimonials",
          }
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
