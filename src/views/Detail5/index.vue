<template>
  <div class=bigbox>
    <div v-if="top" :class="{ runTop: top }" @click="toTop">
      <svg
        t="1678766219182"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3026"
        width="18"
        height="18"
      >
        <path
          d="M512 378.24l-418.88 418.88L0 704l512-512 512 512-93.12 93.12z"
          fill="#fff"
          p-id="3027"
        ></path>
      </svg>
    </div>
    <Header />
    <div class="bigboder" :class="{ bigboder2: !big }">
      <div class="middle" :class="{ middle2: !big }">
        <h3 style="">
          新闻动态 | 美国驻华大使馆经济处、新闻文化处外交官一行到访中国友好和平发展基金会
        </h3>
        <div class="top">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-02-22</span>
          <span>48 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back">< &nbsp;返回</div>
          <img src="./image/1.jpg" alt="" />
          <span>2月15日，在全国对外友协林松添会长出访美国之际，美国驻华大使馆经济处一等秘书泰勒·帕特里奇（Tyler Partridge）一行到访中国友好和平发展基金会，与王龙社秘书长就全球发明大会中国区竞赛活动的发展与合作及中美间人文交流进行了广泛沟通和深入探讨。</span>
          <img src="./image/2.jpg" alt="" />
          <span>王龙社秘书长对美驻华大使馆外交官一行来访表示欢迎，并对基金会基本情况、全球发明大会中国区竞赛活动的发展历程及今年筹办工作做了简要介绍。他表示，中国疫情防控已进入新阶段，线下国际交流合作正在有序恢复，中美民间交流合作迎来了新的发展机遇。基金会希以全球发明大会中国区竞赛活动为纽带，与美驻华大使馆加强联系，利用双方优质资源，将活动越办越好，搭建包括中美在内的世界各国青少年科技创新交流平台；充分调动民间团体、企业、友好人士参与民间交往的积极性，促进人文交流和民间往来，为中美两国关系健康稳定发展筑牢民意基础，为构建人类命运共同体贡献力量。</span>
          <span>泰勒·帕特里奇高度赞赏基金会在民间外交、美中青少年科技创新交流和公益慈善等方面所做的工作。他说，美中青少年科创交流是美中人文交流的重要组成部分。美驻华大使馆及领事馆愿以全球发明大会合作为契合点，链接更多美在华企业、美在华机构及媒体资源，有机融合科技与民间外交元素，为此活动开展提供大力支持和积极协调，鼓励美中两国青少年运用科学、技术和创新的方法来应对当今世界面临的巨大挑战，推动美中友好交流，为两国关系发展增添正能量。</span>
          <span>美驻华大使馆新闻文化处公共关系专员卡罗琳·柳（Carolina Yoo）、基金会项目管理部主任邵帅、全球发明大会中国区召集人王维廉参加座谈交流</span>
          <span>全球发明大会中国区(Invention Convention China)，简称ICC，是由中国友好和平发展基金会主办的一项面向青少年儿童的发明类竞赛活动。</span>
            <span>竞赛旨在引导学生开展科技创新、发明创造、社会实践等创新性活动，在真正的创新实践中培养创新型人才，推动素质教育发展，践行创新驱动发展战略，鼓励和激发更多青少年关注社会问题、承担社会责任，通过创意与实践提升服务社会的意识和能力。</span>
          </div>
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：新闻动态 | 桐乡市科协主席沈玉林一行调研全球发明大会中国区</span>
      <span @click="down">下一篇：信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第四批）</span>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      big: true,
      top:false,
      y:0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollbox, true);
    window.scrollTo(0,0)
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
  methods: {
    up(){
      this.$router.push({name:'Detail4'})
    },
    down(){
      this.$router.push({name:'Detail6'})
    },
    back(){
      this.$router.push({name:'News'})
    },
    handleScrollbox() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      this.y = window.pageYOffset;
    },
    toTop(){
      window.scrollTo(0, 0);
    }
  },
  watch:{
    y(){
      //console.log(this.y);
      if(this.y > 150){
        this.top  = true
      }else{
        this.top = false
      }
    }
  }
};
</script>

<style lang="less" scoped>
span,div,h1,h2,h3{
  cursor: pointer;
}
.bigbox {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: auto;
  .runTop{
    position: fixed;
    right: 10px;
    bottom: 20vh;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #1d1d1d;
    z-index: 1000;
    text-align: center;
      margin: 0 auto;
      color: #fff;
    
    .icon{
      margin-top: 5px;
    }
  }
}
.bigboder2 {
  margin-top: 0 !important;
}
.bigboder {
  margin-top: 15vh;
  height: 120vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  h3 {
    // margin-bottom: 5vh;
    font-size: 20px;
    color: #1c4587;
    text-align: center;
  }
  .middle2 {
    width: 100vw !important;
    h3{
      display: block;
       font-family:SimSun;
       font-size:18px;
       color:#426100;
       font-weight:bold;
       text-decoration:none;
       text-align:center;
       line-height: 30px;
    }
  }
  .middle {
    height: 90%;
    width: 70%;
    overflow: scroll;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw 5vw;
    box-sizing: border-box;

   
    .top {
        display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 1vh;
      padding-bottom: 1vh;
      margin-top: 10px;
      border-bottom: 1vh solid #d9d9d9;
      padding: 2vw 0;
      span{
        display: inline-block;
        font-size: 13px;
        opacity: 0.7;
      }
      .time {
        margin: 0 3vh;
      }
    }
    .text {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgb(34, 34, 34);
      margin-top: 0;
      text-align: justify;
      span {
        font-size: 15px;
        line-height: 4vh;
        font-family: '微软雅黑';
        font-weight: 300;
        margin: 1vh 0;
        strong {
          color: #07b9f1;
        }
      }
      h2{
        display: flex;flex-direction: column;align-items: center;justify-content: baseline;
        span{
            font-size: 18px;
            font-weight: 400;
        }
      }
    }
    .foot{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 15vh;
      font-size: 1vw;
      .left{
        display: flex;
        flex-direction: column;

      }
      .right{
        display: flex;
        flex-direction: column;
        text-align: right;
        width: 50%;
        margin-top: 10vh;
      }
    }
    img {
      width: 80%;
    }

       // 标题样式的设置
      .middle-title{
       
    }
  }
}
.sfoot{
  height: 20vh;
  display: flex;
  height: 20vh;
  width: 50vw;
  margin-left: 15vw;
  background-color: #fff;
  flex-direction: column;
  width: 40vw;
  font-size: 1vw;
  text-align: left;
  margin-top: 5vh;
  font-family: SimSun;
    font-size: 12px;
    color: #444!important;
    font-weight: normal;
    line-height: 25px;
  span:hover{
    color:skyblue;

  }
}
.smallFoot{
    width: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 5vh 0;
  span{
    width: 90%;
    padding: 1vh 0;
        overflow: hidden; // 文字超长隐藏
    text-overflow:ellipsis; // 显示...
    white-space: nowrap; // 单行显示
  }
}
.back{
  margin-left: -90%;
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
//   font: 15px Arial,"宋体",Helvetica, sans-serif,Verdana;
}
.back:hover{
  color: skyblue;
}
</style>