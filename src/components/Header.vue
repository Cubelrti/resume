<template>
    <section>
        <div class="container header">
            <div class="username-avatar">

            <h3 class="username is-size-3">{{resume.name}}</h3>
            </div>
            <div class="description content">
                <ul style="list-style: none; margin-left: 1em">
                    <li v-for="(item, index) in resume.description" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Inject() private resume!: Resume;
}
</script>

<style lang="scss">
.header{
    height: 18rem;
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    box-shadow: 0 5px 6px rgba(10, 10, 10, 0.3), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
.avatar{
    border-radius: 100%;
    overflow: hidden;
}
.username-avatar{
    color: white;
    display: flex;
    top:75%;
    left: 5%;
    position: relative;
}
.username{
    margin: 1rem 1rem;
}
.description{
    float: right;
    margin-top: -5%;
    width: 300px;
    background-color: rgba(33, 33, 33, 0.7);
    color:white;
    padding: 1em;
}
</style>
