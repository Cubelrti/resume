<template>
    <div class="box container">
      <h1 class="is-size-3" v-if="lang == 'zh'">个人能力</h1>
      <h1 class="is-size-3" v-else>Personal Ability</h1>
      <hr/>
        <div class="content" v-html="markdown">
        </div>
        <div class="widgets">
        
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import markdownit from 'markdown-it';

@Component
export default class Main extends Vue {
  @Inject() private lang!: string;
  private markdown = '';
  private computeMarkdown() {
    let file = './ability_en.md';
    if (this.lang === 'zh') {
      file = './ability_cn.md';
    }
    const html = fetch(file)
    .then((response) => response.text())
    .then((text) => markdownit().render(text))
    .then((md) => this.markdown = md);
  }
  private mounted() {
    this.computeMarkdown();
  }

}
</script>
