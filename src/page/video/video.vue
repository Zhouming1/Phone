<template>
 <div>
     <Header txt="书影音">
        <img src="../../assets/img/audio/ic_actionbar_search_icon.png" alt="" slot="left" class="leftImg">
        <img src="../../assets/img/audio/ic_chat_green.png" alt="" slot="right" class="rightImg">
     </Header>
     <section>
         <ul>
             <li>
                 <router-link to="/video/movie">电影</router-link>
             </li>
              <li>
                 <router-link to="/video/book">读书</router-link>
             </li>
              <li>
                 <router-link to="/video/tv">电视</router-link>
             </li>
              <li>
                 <router-link to="/video/city">同城</router-link>
             </li>
              <li>
                 <router-link to="/video/music">音乐</router-link>
             </li>
         </ul>
        
             <router-view></router-view>
       
     </section>
 </div>
</template>

<script>
import Header from "../../components/header/header"
export default {
 data() {
 return {

 }
 },
 methods: {

 },
 components: {
     Header
 }
}
</script>

<style scoped lang="less">
    ul{
        display: flex;
        border-bottom: 1px solid #ccc;
        li{
            flex: 1;
            font-size: .12rem;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                color: #000;
                 padding: .12rem .2rem;
                &.router-link-active{
                background: #07d614;
                color: #fff;
            }
            }
        }
    }
</style>
