<template>
  <section class="scroll-container" ref="scrollContainer">
    <div class="scroll-wrapper" ref="scrollWrapper">
      <slot></slot>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.scroll-container{
  height: 50px;
  padding-top: 8px;
  overflow: hidden;
  border-bottom: 1px solid #d8dce5;
  .scroll-wrapper{
    white-space:nowrap;
    overflow-x: auto;
    height: 50px;
  }
}
</style>
