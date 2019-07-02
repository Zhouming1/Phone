<template>
     <ul>
      <li v-for="item in list" :key="item.id" class="list">
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.target.desc }}</p>
          <p>作者： {{ item.target.author.name }}</p>
        </div>
        <img :src="item.target.cover_url" alt="">
      </li>
    </ul>
</template>

<script>
export default {
 data() {
 return {
     list:[]
 }
 },
 methods: {

 },
 components: {

 },
 mounted() {
     this.$axios.get('./static/data/homeData.json').then((res)=>{
        //  console.log(res);
         this.list = res.data.recommend_feeds;
        //  console.log(this.list);
     }).catch(err=>{
         console.log(err);
     })
 },
}
</script>

<style scoped lang="less">
   .list {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: .12rem;
  padding: .1rem;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    p:nth-child(2){
        color:#bdafa4;
    }
    p:nth-child(3){
        color:#d8cfcc;
        transform:scale(.9);
    }
  }
  img {
    width: 1rem;
    height: 1rem;
  }
}
</style>
