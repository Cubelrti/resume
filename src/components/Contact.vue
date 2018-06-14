<template>
      <div class="box container">
        <h1 class="is-size-3">联系方式</h1>
        <div class="content">
          <ul>
            <li v-for="(item, index) in resume.contact" :key="index">
              <b-icon
                :icon="item.type"
                size="is-small"/>
              {{item.content}}
            </li>
          </ul>
          <figure class="image is-128x128">
            <img src="qrcode.jpg">
          </figure>
        </div>
      </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
    @Inject() private resume!: Resume;
}
</script>

<style lang="scss">

</style>
