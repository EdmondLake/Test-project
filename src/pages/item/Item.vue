<template>
  <div class="item">
    <item-container father-components="item"></item-container>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer'
export default {
  name: 'Item',
  components: {
    itemContainer
  }
}
</script>

<style lang="stylus" scoped>
</style>
