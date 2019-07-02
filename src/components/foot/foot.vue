<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../../assets/img/footer/ic_tab_home_normal.png" alt>
          <img src="../../assets/img/footer/ic_tab_home_active.png" alt>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/video">
          <img src="../../assets/img/footer/ic_tab_subject_normal.png" alt>
          <img src="../../assets/img/footer/ic_tab_subject_active.png" alt>
          <span>书影音</span>
        </router-link>
      </li>
      <li>
        <router-link to="/broadcast">
          <img src="../../assets/img/footer/ic_tab_status_normal.png" alt>
          <img src="../../assets/img/footer/ic_tab_status_active.png" alt>
          <span>广播</span>
        </router-link>
      </li>
      <li>
        <router-link to="/group">
          <img src="../../assets/img/footer/ic_tab_group_normal.png" alt>
          <img src="../../assets/img/footer/ic_tab_group_active.png" alt>
          <span>小组</span>
        </router-link>
      </li>
      <li>
        <router-link to="mine">
          <img src="../../assets/img/footer/ic_tab_profile_normal.png" alt>
          <img src="../../assets/img/footer/ic_tab_profile_active.png" alt>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  font-size: 0;
  border-top: 1px solid #ccc;
  background: #fff;
  ul {
    display: flex;
    li {
      list-style: none;
      flex: 1;
      a {
        height: 100%;
        font-size: 0.12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #666;
        img {
          width: 0.26rem;
          height: 0.26rem;
        }
        img:nth-child(1){
          display: block;
        }
        img:nth-child(2){
          display: none;
        }
        span {
          margin-top: 0.04rem;
        }
        &.router-link-active {
          span{
            color: #42bd;
          }
          img:nth-child(1){
            display: none;
          }
          img:nth-child(2){
            display: block;
          }
        }
      }
    }
  }
}
</style>
