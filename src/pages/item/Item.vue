<template>
  <div>
    <item-container father-component='Item'></item-container>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer'
export default {
  name: 'Item',
  components: {
    itemContainer
  },
  created () {

  }
}
</script>

<style lang="stylus" scoped>
</style>
