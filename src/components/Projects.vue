<template>
    <div id="project" class="box container">
        <h1 class="is-size-3">Project Experience</h1>
        <div class="card" v-for="(item, index) in resume.project" :key="index">
            <div class="card-image">
                <figure class="image">
                <img :src="item.image" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{item.title}} </p>
                    <p class="subtitle is-6">{{item.time}}</p>
                    <small>{{item.feature}}</small>
                </div>
                </div>

                <div class="content">
                    <ul>
                        <li v-for="(desc, d_ind) in item.description" :key="d_ind" v-html="renderMarkdown(desc)"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import markdownit from 'markdown-it';

@Component
export default class Projects extends Vue {
    @Inject() private resume!: Resume;
    private renderMarkdown(text: string) {
        return markdownit().render(text);
    }
}
</script>

<style lang="scss">
.card{
    margin-top: 2em;
}
.media{
    padding-top: 1em;
}
</style>

