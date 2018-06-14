<template>
    <div class="meter">
        <loading-progress
        :progress="progress"
        size="128"
        rotate
        fillDuration="2"
        rotationDuration="1"
        />
        <span class="indicator">{{indicator}}</span>
        <span class="meter-title">{{title}}</span>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Meter extends Vue {
    @Prop() private progress!: number;
    @Prop() private indicator!: string;
    @Prop() private title!: string;
}
</script>

<style lang="scss">
.meter{
    display: inline-flex;
    text-align: center;
    flex-direction: column;
    .indicator{
        top: -112px;
        position: relative;
        font-size: 2rem;
    }
    .meter-title{
        margin-top: -50px;
    }
}
</style>
