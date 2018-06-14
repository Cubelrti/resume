<template>
    <section>
        <div id="language" class="container box">
            <h1 class="is-size-3">Language Ability</h1>
            <div class="scores">
              <Meter v-for="(item, index) in resume.language" 
              :key="index" 
              :title="item.title" 
              :progress="item.portion" 
              :indicator="item.score"
              />
            </div>
            <div class="content">
              <ul>
                <li v-for="(item, index) in resume.language_ability" :key="index">
                      {{item}}
                </li>
              </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import Meter from './widgets/Meter.vue';

@Component({
  components: {
    Meter,
  },
})
export default class Language extends Vue {
    @Inject() private resume!: Resume;
}
</script>

<style lang="scss">
.scores{
  text-align: center;
}
</style>
