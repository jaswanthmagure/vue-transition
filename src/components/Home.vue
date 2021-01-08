<template>
  <div >
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slide-one">Slide 1</swiper-slide>
      <swiper-slide class="slide-two">Slide 2</swiper-slide>
      <swiper-slide class="slide-three">Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    
  </div>
</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
 import "swiper/swiper-bundle.min.css";


export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperSlide,
  },
  
  data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
         Keyboard: true,
          mousewheelControl: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
  },
  methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      }
    },
    
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.swiper-container-vertical{
  height: 92vh;
  overflow-x: hidden;
}
.swiper-slide {
  /* background-color:lightcoral; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-one {
  background: lightsalmon;
}
.slide-two {
  background: lightskyblue;
}
.slide-three {
  background: lightslategray;
}
</style>
