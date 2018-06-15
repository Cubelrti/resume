<template>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
    <ul v-if="lang == 'zh'">
        <li class="is-active"><a href="#" aria-current="page">关于我</a></li>
        <li><a href="#study">教育经历</a></li>
        <li><a href="#project">项目经历</a></li>
        <li><a href="#language">语言能力</a></li>
        <li><a href="?en">English Version</a></li>
    </ul>
    <ul v-else>
        <li class="is-active"><a href="#" aria-current="page">Me</a></li>
        <li><a href="#study">Study</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#language">Language</a></li>
        <li><a href="?zh">中文</a></li>
    </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    @Inject() private lang!: string;
}
</script>

<style lang="scss">
.breadcrumb{
    margin-top: 2rem;
}
</style>
