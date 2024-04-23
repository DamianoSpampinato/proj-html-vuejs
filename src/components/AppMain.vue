<script >
import AppGetTips from './AppGetTips.vue';
import AppHero from './AppHero.vue'
import AppOnlinemarketing from './AppOnlinemarketing.vue';
import AppPopularFeatures from './AppPopularFeatures.vue'
export default{
    name: 'AppMain',
  components:{
    AppHero,
    AppOnlinemarketing,
    AppGetTips,
    AppPopularFeatures
    
  }
}
</script>

<template>
 <AppHero></AppHero>
 <AppOnlinemarketing></AppOnlinemarketing>
 <AppGetTips></AppGetTips>
 <AppPopularFeatures></AppPopularFeatures>
</template>

<style lang="scss" scoped>

</style>
