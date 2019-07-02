<template>
  <div>
    <div class="movies">
      <h3>正在上映的电影-北京</h3>
      <!-- <ul>
        <li v-for="(item,index) in list" :key="index">
          <router-link to>
            <img :src="item.poster" alt />
            <p v-text="item.title"></p>
            <p>评分:{{item.rating}}</p>
          </router-link>
        </li>
      </ul> -->
      <Banner :widths="width" right="true">
        <swiper-slide slot="swiper-sli" class="movie_list" v-for="(item,index) in list" :key="index">
           <router-link to>
            <img :src="item.poster" v-lazy.container="item.poster" alt />
            <p v-text="item.title"></p>
            <p>评分:{{item.rating}}</p>
          </router-link>
        </swiper-slide>
      </Banner>
    </div>
  </div>
</template>

<script>
import Banner from "./../banner/banner";
export default {
  data() {
    return {
      list: [],
      width:110
    };
  },
  methods: {},
  components: {
    Banner
  },
  mounted() {
    this.$axios
      .get("@/static/data/movie.json")
      .then(result => {
        this.list = result.data.result;
        console.log(this.list);
      })
      .catch(err => {
        throw err;
      });
  }
};
</script>

<style scoped lang="less">
.movies {
  // width: 100%;
  h3 {
    font-size: 0.14rem;
    padding: 0.16rem 0 0.18rem 0.2rem;
    text-align: left;
  }
  .movie_list{
      overflow: hidden;
    //  width: 100%;
        font-size: 0.12rem;
        margin-right: .1rem;
       a {
        //    width: 100%;
        display: flex;
        flex-direction: column;
        // text-align: left;
        // justify-content: center;
        width: 100%;
        img {
          width: 0.99rem;
          height: 1.44rem;
        }
        p:nth-child(2) {
          color: #333333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p:nth-child(3) {
          color: #b3b3b3;
        }
  }
  }
}
</style>
