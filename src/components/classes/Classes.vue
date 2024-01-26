<template>
  <div
    class="row classes-wrapper dark-mode-section"
  >
    <div class="title-row">
        <h2>
        Our Classes
        </h2>
    </div>
    <div class="classes-row">
        <v-col
            v-for="(classElement, i) in classesContent"
            :key="i"
            lg="4"
            md="4"
            sm="6"
            cols="12"
            class="column classElement"
            >
                    <div class="coach-image">
                        <img :src="classElement.coachImg" alt="coach">
                    </div>
                    <div class="class-title">
                    {{ classElement.classTitle }}
                    </div>
                    <div class="class-description">
                    {{ classElement.classDesc }}
                    </div>
        </v-col>
    </div>
    <div class="button-row">
        <a href="/FitZone/">See Plans</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classesContent: [
          {
            coachImg: require("../../assets/images/profile/male-coach-1.jpg"),
            coachName: "Mark Thompson",
            classTitle: "HIIT Blast",
            classDesc: "Join Mark's HIIT class and push your limits with a combination of intense bursts of exercise and short recovery periods, designed to maximize fat burn and boost your metabolism.",
          },
          {
            coachImg: require("../../assets/images/profile/female-coach.jpg"),
            coachName: "Sarah Parker",
            classTitle: "Powerlifting 101",
            classDesc: "Get stronger and build lean muscle with Sarah's Powerlifting class. Learn proper techniques while focusing on improving your strength and overall body composition. ",
          },
          {
            coachImg: require("../../assets/images/profile/male-coach-2.jpg"),
            coachName: "Ryan Adams",
            classTitle: "Boxing Bootcamp",
            classDesc: "Increase your cardiovascular endurance, and build strength and agility through a combination of boxing drills, bodyweight exercises, and partner work.",
          },
          
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
.dark-mode-section{
    background: rgb(19,15,12) !important;
    background: linear-gradient(325deg, rgba(19,15,12,1) 0%, rgba(62,62,62,1) 100%) !important;
  }
 .classes-wrapper {
    padding: 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
 }
 .title-row {
    // padding-top: 20px;
    text-align: center;
 }
 .title-row h2{
    text-transform: uppercase;
    font-family: sans-serif;
    color: #f7c324 !important;
    margin-bottom: 0 !important;
    position: relative;
 }
  .title-row h2:before {
        content: "";
        display: block;
        width: 1px;
        height: 40px;
        background: white;
        position: absolute;
        left: 50%;
        top: -50px;
        transform: translate(-50%, 0);
      }
 .classes-row {
    display: flex;
    justify-content: center;
    gap: 30px;
    color: white;
    text-align: center;
    font-size: 16px !important;
 }
 .classElement {
    width: calc(25%);
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 17px;
 }
 .coach-image img {
    height: 180px;
    border-radius: 50%;
 }
 .class-title {
    font-weight: 700 !important;
    font-size: 22px !important;
    text-transform: uppercase;
    color: #f7c324 ;
 }
 .button-row {
    display: flex;
    justify-content: center;
 }
 .button-row a {
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

.button-row a:hover {
    transform: scale(1.05);
 }
</style>
