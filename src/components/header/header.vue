<template>
  <div :class="{header:true ,green:bol}">
    <span>{{txt}}</span>
    <slot name="left"></slot>
    <slot name="right"></slot>
    <slot name="search"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["txt", "bol"],
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 0.44rem;
  background: #f7f7f7;
  line-height: 0.44rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.14rem;
  position: relative;
  &.green {
    background: #48bd50;
  }
  img {
    width: 0.25rem;
    height: 0.25rem;
    position: absolute;
  }
  .leftImg {
    top: 0.1rem;
    right: 0.5rem;
  }
  .rightImg {
    top: 0.1rem;
    right: 0.1rem;
  }
  .search {
    position: relative;
    input {
      width: 85%;
      height: 0.3rem;
      text-indent: 0.25rem;
      margin-left: -0.38rem;
      border-radius: 0.05rem;
    }
    input::placeholder{
      font-size: .14rem;
    }
    .in-left {
      width: 0.2rem;
      height: 0.2rem;
      position: absolute;
      top: 50%;
      left: 0.1rem;
      transform: translateY(-50%);
    }
    .in-right {
      width: 0.2rem;
      height: 0.2rem;
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
    }
  }
}
</style>
