<template>
  <div>
    <swiper :options="swiperOption" :class="{swiper:true,w:right}">
      <!-- slides -->
      <slot name="swiper-sli"></slot>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        width: this.widths, 
        autoplay: this.auto,
        loop: this.loops,
        pagination: {
          el: ".swiper-pagination",
          type:this.el
        }
      }
    };
  },
  methods: {},
  props:["widths","right","loops","auto","el"],
  components: {}
};
</script>

<style scoped lang="less">
 .w{
   padding: .1rem;
 }
.swiper {
  position: relative;
  .swiper-pagination-bullets {
    position: absolute;
    left: 1rem;
    bottom: -0.1rem;
    /deep/.swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>
