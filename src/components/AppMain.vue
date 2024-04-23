<script >
import AppGetTips from './AppGetTips.vue';
import AppHero from './AppHero.vue'
import AppOnlinemarketing from './AppOnlinemarketing.vue';
export default{
    name: 'AppMain',
  components:{
    AppHero,
    AppOnlinemarketing,
    AppGetTips
    
  }
}
</script>

<template>
 <AppHero></AppHero>
 <AppOnlinemarketing></AppOnlinemarketing>
 <AppGetTips></AppGetTips>
</template>

<style lang="scss" scoped>

</style>
