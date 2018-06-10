<template>
  <div class="home-container">
    <item-container father-component='Home'></item-container>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer'
export default {
  name: 'Home',
  components: {
    itemContainer
  },
  created () {

  }
}
</script>

<style lang="stylus" scoped>

</style>
