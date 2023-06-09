<template>
  <div class="hello">
    <h1>
      <img alt="Vue logo" src="https://cli.vuejs.org/favicon.png" height="30">
      VUE MODULE
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {  
    msg: String,
    version: {
      type: String,
      default: require('../../package.json').dependencies.vue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
