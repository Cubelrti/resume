<template>
    <div class="box container">
      <h1 class="is-size-3">Personal Ability</h1>
      <hr/>
        <div class="content" v-html="markdown">
        </div>
        <div class="widgets">
        
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import markdownit from 'markdown-it';

@Component
export default class Main extends Vue {
  private markdown = '';
  private computeMarkdown() {
    const html = fetch('./ability_en.md')
    .then((response) => response.text())
    .then((text) => markdownit().render(text))
    .then((md) => this.markdown = md);
  }
  private mounted() {
    this.computeMarkdown();
  }

}
</script>
