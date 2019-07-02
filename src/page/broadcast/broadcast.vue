<template>
  <div>
    <Header txt="广播">
      <img src="../../assets/img/broadcast/ic_status_search_user.png" alt slot="left" class="leftImg" />
      <img src="../../assets/img/audio/ic_chat_green.png" alt slot="right" class="rightImg" />
    </Header>
     <div class="send_boradcast">
        <div class="title">
            <img src="./../../assets/img/broadcast/user_normal.jpg" alt="">
            <span>登录发广播</span>
        </div>
      </div>
      <div class="diary">
          <div class="diary_user">
              <img src="./../../assets/img/broadcast/ic_launcher.png" />
          <div class="user_diary_info">
            <p>
              <span class="user_name">豆瓣</span>
              <span class="write_diary">写了日记</span>
            </p>
              <span class="diary_time">2018-05-23 10:39:23</span>
          </div>
          </div>
            <div class="diary_cantainer">
                <div class="cantainer_title">
                    5月24日凌晨3:00~6:00豆瓣停机维护
                </div>
                <p class="diary_info">
                    因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关的业务都将停止服务。
                </p>
            </div>
          <div class="more_message">
            <div class="praise">
              <img src="./../../assets/img/broadcast/ic_vote_normal_large.png">
              <span>29</span>
            </div>
            <div class="message">
              <img src="./../../assets/img/broadcast/ic_review.png">
              <span>14</span>
            </div>
            <div class="relay">
              <img src="./../../assets/img/broadcast/ic_reshare_gray.png">
              <span>25</span>
              <span>.....</span>
            </div>
          </div>
        </div>     
  </div>
</template>


<script>
import Header from "../../components/header/header";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="less">
.boradcast{
    height: .5rem;
    width:100%;
    background: #f7f7f7;
    font-size: .17rem;
    /* text-align: center; */
    /* line-height: .5rem; */
    position: relative;
  }
  .boradcast .icon_left{
    width: .23rem;
    position: absolute;
    right: 0;
    top: 50%;
    right:.5rem;
    transform: translateY(-50%);
  }
  .boradcast .icon_right{
    width: .23rem;
    position: absolute;
    right: .11rem;
    top: 50%;
    transform: translateY(-50%);

  }
  .send_boradcast{
      /* padding-left: .18rem; */
      border-bottom: 1px solid #e8e8e8;
  }
  .send_boradcast .title{
    width:100%;
    height: .6rem;
    display: flex;
    flex-direction: row;
    line-height: .6rem;
    position: relative;
    padding-left: .18rem;
  }
  .title img{
    width: .42rem;
    height: .42rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .title span{
    margin-left: .51rem;
    font-size: .13rem;
    color: #aaaaaa;
  }
  .diary{
    padding-left: .18rem;
    font-size: 0rem;
  }
  .diary .diary_cantainer{
    width: 2.36rem;
    height: 1.28rem;
     font-size: 0rem;
     margin-left: .5rem;
     background-color: #f9f9f9;
     padding: .2rem;
  }
  .diary .diary_cantainer .cantainer_title{
    font-size: .15rem;
  }
  .diary .diary_cantainer .diary_info{
    font-size: .13rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .diary .diary_user{
    display: flex;
    flex-direction: row;
    font-size: .13rem;
    position: relative;
  }
  .diary .user_diary_info{
    font-size: .13rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .diary .user_diary_info .diary_time{
    margin-left: .5rem;
  }
  .diary .user_diary_info p{
    width: .95rem;
    height: .16rem;
    margin-left: .5rem;
    margin-top: .21rem;
  }
  .diary .diary_user img{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: .1rem;
  }
  .more_message{
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
    margin-top: .25rem;
  }
  .more_message .praise{
    display: flex;
    flex-direction: row;
  }
  .more_message .message{
    display: flex;
    flex-direction: row;
    margin-left: .21rem;
  }
  .more_message .relay{
    display: flex;
    flex-direction: row;
    margin-left: .21rem;
  }
  .relay span:last-child{
   margin-left: .5rem;
  }
  .more_message span{
    font-size: .11rem;
  }
  .more_message img{
    width: .17rem;
    height:.15rem;
  }
</style>

