<template>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
    <ul>
        <li class="is-active"><a href="#" aria-current="page">Me</a></li>
        <li><a href="#study">Study</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#language">Language</a></li>
        <li><a href="https://cubelrti.github.io/resume/cn">Chinese Version</a></li>
    </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>

<style lang="scss">
.breadcrumb{
    margin-top: 2rem;
}
</style>
