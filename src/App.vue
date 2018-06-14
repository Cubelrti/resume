<template>
  <div id="app">
    <Header />
    <Navbar />
    <Main />
    <StudyExp />
    <Projects />
    <Language />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import StudyExp from './components/StudyExp.vue';
import ProjectTiles from './components/ProjectTiles.vue';
import Projects from './components/Projects.vue';
import Language from './components/Language.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import 'buefy/lib/buefy.css';
import resume from './resume_en.json';

@Component({
  components: {
    HelloWorld,
    Header,
    Navbar,
    Main,
    StudyExp,
    ProjectTiles,
    Language,
    Projects,
    Footer,
  },
})
export default class App extends Vue {
  @Provide() public resume = resume;
}
</script>

<style lang="scss">
@import "assets/scss/app.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
