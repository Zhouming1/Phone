<template>
  <div class="header">

      <Header bol="true">
      <img src="../../assets/img/Home/ic_chat_white.png" slot="right" class="rightImg">
      <div slot="search" class="search">
        <input type="text" placeholder="书影音">
        <img src="../../assets/img/Home/ic_group_search_small.png" alt="" class="in-left">
        <img src="../../assets/img/Home/ic_scan_gray.png" alt="" class="in-right">
      </div>
    </Header>

    <Banner :loops="true" :auto="autos" el="bullets">
      <swiper-slide slot="swiper-sli"><img src="./../../assets/img/Home/01.jpg" alt=""></swiper-slide>
      <swiper-slide slot="swiper-sli"><img src="./../../assets/img/Home/02.jpg" alt=""></swiper-slide>
      <swiper-slide slot="swiper-sli"><img src="./../../assets/img/Home/03.jpg" alt=""></swiper-slide>
    </Banner>

    <Content class="content"></Content>
  </div>
</template>

<script>
import Header from "../../components/header/header"
import Banner from "../../components/banner/banner"
import Content from "./../../components/content"
export default {
  data() {
    return {
      autos:{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
    };
  },
  methods: {},
  components: {
    Header,
    Banner,
    Content
  }
};
</script>

<style scoped lang="less">
.header{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    overflow: auto;
  }
}

</style>
