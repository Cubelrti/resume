<template>
    <div id="study" class="box container">
        <h1 class="is-size-3" v-if="lang == 'zh'">教育经历</h1>
        <h1 class="is-size-3" v-else>Study Experience</h1>
         <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                <img src="school.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                <p>
                    <strong>{{resume.study.name}}</strong> <small>{{resume.study.time}}</small>
                    <br>
                    {{resume.study.description}}
                    
                </p>
                </div>
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                        <p>
                            {{resume.study.school}} <strong>{{resume.study.status}}</strong>
                        </p>
                        
                        </div>
                    </div>
                </article>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';

@Component
export default class StudyExp extends Vue {
    @Inject() private lang!: string;
    @Inject() private resume!: Resume;
}
</script>

<style lang="scss">

small{
    margin-left: 1em;
}

.media{
    padding-top: 2em;
}

</style>
