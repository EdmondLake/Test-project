<template>
  <div class="home-container">
    <item-container father-component="home"></item-container>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer'
export default {
  name: 'Home',
  components: {
    itemContainer
  }
}
</script>

<style lang="stylus" scoped>

</style>
