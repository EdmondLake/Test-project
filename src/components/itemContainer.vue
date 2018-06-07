<template>
  <div class="item-contianer">
    <section>
      <header class="top-tips">
        <span class="num-tip" v-if="fatherComponent == 'home'">
          第一周
        </span>
        <span class="num-tip" v-if="fatherComponent == 'item'">题目1</span>
      </header>
    </section>
  </div>
</template>

<script>
export default {
  name: 'itemContainer'
}
</script>

<style lang="stylus" scoped>
  .top-tips
    position: absolute
    height: 7.35rem
    width: 3.25rem

</style>
