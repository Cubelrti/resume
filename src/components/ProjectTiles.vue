<template>
    <div class="box container">
        <h1 class="is-size-3">Project Experience</h1>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">Obsidian</p>
                            <p class="subtitle">Typescript + React + Webpack</p>
                            <div class="content">
                                Obsidian is a project based on .NET Core. It provide a one-stop authentication service for OAuth2.0 compatible sites.
                            </div>
                        </article>
                        <article class="tile is-child notification is-warning">
                            <p class="title">FailureTrobleshooting</p>
                            <p class="subtitle">JQuery + KnockoutJS</p>
                            <div class="content">
                                FailureTrobleshooting is a project based on ASP.NET and MongoDb. It provides a fully-featured system which can maintain, track and review fixes and troubles.
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                        <p class="title">MidiHub</p>
                        <p class="subtitle">React</p>
                            <div class="content">
                                Share and collaborate music on MidiHub! (WIP)
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                    <p class="title">Prove</p>
                    <p class="subtitle">Angular + Electron + Typescript</p>
                    <div class="content">
                        Use prove to create your own encrypted message. Protect yourself with GnuPG.
                    </div>
                    </article>
                </div>
            </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-success">
            <div class="content">
                <p class="title">Kontent</p>
                <p class="subtitle">Vue + ES6</p>
                <div class="content">
                    Kontent is a lightweight content management system. It provides simple display with Markdown.
                </div>
            </div>
            </article>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class ProjectTiles extends Vue {
}
</script>

<style lang="scss">
.is-ancestor{
    padding-top: 1rem;
}
</style>
