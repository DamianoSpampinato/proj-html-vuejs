<script >
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue"
export default{

  components:{
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
 <AppHeader></AppHeader>
 <main>
    <AppMain></AppMain>
 </main>
 <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './style/generic';
</style>
