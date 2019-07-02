<template>
  <div>
    <Header txt="我的">
      <img src="../../assets/img/Mine/ic_settings.png" alt slot="right" class="rightImg" />
    </Header>
    <section>
      <div class="manage">
        <router-link to>
          <i class="fa fa-lock fa-2x"></i>
          <span>密码管理</span>
        </router-link>
        <router-link to>
          <i class="fa fa-credit-card fa-2x"></i>
          <span>银行卡管理</span>
        </router-link>
      </div>
      <ul class="list">
        <li v-for="(item,index) in list" :key="index">
          <i :class="item.class"></i>
          <span v-text="item.title"></span>
          <i :class="item.right"></i>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from "../../components/header/header";

export default {
  data() {
    return {
      list: [
        { class: "fa fa-file-text-o", title: "风险承受能力评估",right:"fa fa-angle-right" },
        { class: "fa fa-shield", title: "安全保障",right:"fa fa-angle-right"},
        { class: "fa fa-user-o", title: "我的关注",right:"fa fa-angle-right" },
        { class: "fa fa-hand-paper-o", title: "帮助中心",right:"fa fa-angle-right" },
        { class: "fa fa-user-o", title: "关于我们",right:"fa fa-angle-right" },
        { class: "fa fa-search", title: "检查更新",right:"fa fa-angle-right" },
        { class: "fa fa-commenting-o", title: "联系客服",right:"fa fa-angle-right" }
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
.manage {
  display: flex;
  flex-direction: row;
  padding: 0.18rem 0.2rem 0.1rem 0.2rem;
  border-bottom: 1px solid #ccc;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 0.16rem;
    span {
      color: #000;
    }
  }
}
.list {
  margin-top: 0.21rem;
  font-size: 0.18rem;
  text-align: left;
  li {
    height: 0.41rem;
    border-bottom: 1px solid #ccc;
    line-height: 0.41rem;
    padding: 0 0.17rem;
    i {
      color: #48bd50;
    }
    i:nth-child(3){
        line-height: .41rem;
        float: right;
    }
    span {
      margin-left: 0.14rem;
      font-size: 0.16rem;
    }
  }
}
</style>
