<template>
  <footer class="footer" id="links">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Resume</strong> by <a href="https://github.com/Cubelrti">Cubelrti</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';


@Component
export default class Footer extends Vue {
}
</script>

<style lang="scss">
.footer{
  margin-top: 2em;

}
</style>
