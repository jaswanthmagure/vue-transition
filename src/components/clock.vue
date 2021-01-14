<template>
    <section id="app" class="py-16">
    <div class="clock rounded-full p-8 relative mx-auto border-8 border-black" :style="isNight">
      <div class="clock-face relative w-full h-full">
        <div class="bg-gray-700 hand hour-hand z-10 absolute h-1 rounded-full" :style="[{transform:'rotate('+hoursDegrees+'deg)'},isNightHand]"></div>
        <div class="bg-gray-700 hand min-hand z-20 absolute h-1 rounded-full" :style="[{transform:'rotate('+minutesDegrees+'deg)'},isNightHand]"></div>
<!--         <div class="hand second-hand z-30 bg-blue-light absolute h-4 rounded-full" :style="{transform:'rotate('+secondsDegrees+'deg)'}"></div> -->
        <!-- <div class="center w-8 h-8 p-1 bg-blue absolute rounded-full z-40">&nbsp;</div> -->
      </div>
    </div>
  </section>
</template>

<script>

import Moment from 'moment-timezone';

export default {
    data() {
        return {
           date: Moment(),
        }
    },
    methods: {
        updateTime() {
         this.date = Moment().tz(this.timeZone);
        },
    },
    computed: {
    seconds() {
      return this.date.format('ss');
    },
    minutes() {
      return this.date.format('mm');
    },
    hours() {
      return this.date.format('HH');
    },
    secondsDegrees() {
      return ((this.seconds / 60) * 360) + 90;
    },
    minutesDegrees() {
      return ((this.minutes / 60) * 360) + ((this.seconds / 60) * 6) + 90;
    },
    hoursDegrees() {
      return ((this.hours / 12) * 360) + ((this.minutes / 60) * 30) + 90;
    },
    isNight() {
            if ( this.hours < 12 ) {
                // Before 12PM Morning
                return '';
            } else if ( this.hours < 18 ) {
                // After 12pm, before 6PM after-noon
                return '';
            } else {
                // After 6PM
                return {background:'black'};
            }
    },
    isNightHand() {
            if ( this.hours < 12 ) {
                    // Before 12PM Morning
                    return {background:'grey'};
                } else if ( this.hours < 18 ) {
                    // After 12pm, before 6PM after-noon
                    return {background:'grey'};
                } else {
                    // After 6PM
                    return {background:'white'};
                }
        }
    },
    mounted() {
        console.log(this.hours)
        this.updateTime();

    setInterval(this.updateTime, 1000);
        // console.log(Moment().tz("America/Los_Angeles").format("LTS"));
    },
    props: {
        timeZone: {
            required: false,
            type: String
        },
    }
   
}
</script>

<style lang="scss" scoped>
  section {
     .clock {
       width: 12rem;
       height: 12rem;
       margin: 0 auto;
      
      .border-8 {
          border-width: 10px !important;
      }

      .clock-face {
        transform: translateY(-3px);

        .hand {
          top: 50%;
          transform-origin: 100%;
          transform: rotate(90deg);
          transition: all 0.05s;
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);

          &.second-hand {
            width: 50%;
          }

          &.min-hand {
            width: 60%;
            left: -10%;
          }

          &.hour-hand {
            width: 40%;
            left: 10%;
          }
        }

        .center {
          top: 48%;
          left: 46.5%;
        }
      }
    }
  }

</style>