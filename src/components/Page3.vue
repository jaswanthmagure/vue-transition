<template>
    <div class="content-section">
        <div>
            <clock-component :timeZone="'Asia/Kolkata'"></clock-component>
            <h4 class="text-center">India(Kolkata)</h4>
        </div>
        <div>
            <clock-component :timeZone="'America/Los_Angeles'"></clock-component>
            <h4 class="text-center">USA(Los_Angeles)</h4>
        </div>
        <div>
            <clock-component :timeZone="'Asia/Dubai'"></clock-component>
            <h4 class="text-center">Dubai</h4>
        </div>
    </div>
</template>

<script>

import ClockComponent from '../components/clock.vue';

export default {
    components: {
        ClockComponent
    },
    data() {
        return {
            
        }
    },
    methods: {
       
    },
    
}
</script>

<style lang="scss" scoped>
 .content-section{
     display: flex;
     justify-content: space-evenly;
 }

</style>