<template>
  <div>
    <Header txt="小组">
      <img
        src="../../assets/img/audio/ic_actionbar_search_icon.png"
        alt
        slot="left"
        class="leftImg"
      />
      <img src="../../assets/img/audio/ic_chat_green.png" alt slot="right" class="rightImg" />
    </Header>
    <section>
      <div class="g_content">
        <h2>新组速报</h2>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link to>
              <div class="top">
                <img :src="item.img_url" v-lazy.container="item.img_url" alt />
                <span v-text="item.title"></span>
                <span v-text="item.num"></span>
              </div>
              <div class="bottom">
                <p v-text="item.text"></p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="more">
            <router-link to>更多相关小组</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/header/header";

export default {
  data() {
    return {
        list:[
            {img_url:require('./../../assets/img/Group/1.jpg'),title:'反大数据联盟',num:"1776人",
            text:"我们不需要大数据来做鬼魅,以方便之名,行肮脏之事。 我们,反对滥用大数据!"
            },
            {img_url:require('./../../assets/img/Group/2.jpg'),title:'刚才发生了一件重要的小事',num:"126人",
            text:"相信那些看似不经意的小事, 终会引发生命里的蝴蝶效应"
            },
            {img_url:require('./../../assets/img/Group/3.jpg'),title:'胶片里的美丽人儿',num:"357人",
            text:"你最美好的样子，电影都替你记住了。分享观影中那些心动的瞬间 广告贴,推广微信公众号的,言之无物的,一律删"
            },

        ]
    };
  },
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="less">
image[lazy=loading] {
//   width: 40px;
//   height: 300px;
//   margin: auto;
}
.g_content {
  padding: 0.18rem 0 0 0.18rem;
  h2 {
    font-size: 0.16rem;
    text-align: left;
  }
  ul {
    margin-top: 0.22rem;
    li {
        margin-top: .17rem;
      border-bottom: 1px solid #ccc;
      font-size: 0.14rem;
      height: 0.8rem;
      display: flex;
      flex-direction: column;
      padding: 0 0.22rem 0.22rem 0;
      .top {
        height: 0.34rem;
        display: flex;
        line-height: 0.34rem;
        img {
          width: 0.37rem;
          height: 0.34rem;
        }
        span:nth-child(2) {
          text-align: left;
          text-indent: 0.11rem;
          color: #111111;
          flex: 3;
        }
        span:nth-child(3) {
          text-align: right;
          color: #bababa;
          flex: 1;
        }
      }
      .bottom {
        margin-top: 0.17rem;
        color: #bababa;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
    }
  }
  .more{
      font-size: .16rem;
      margin-top: .16rem;
  }
}
</style>
