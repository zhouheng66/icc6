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
          新闻动态 |
          桐乡市科协主席沈玉林一行调研全球发明大会中国区
        </h3>
        <div class="top">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-02-22</span>
          <span>30 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back">< &nbsp;返回</div>
          <img src="./image/1.jpg" alt="" />
          <span>
            2月20日，桐乡市科协主席沈玉林、副主席张建成、科普部部长张月良一行调研全球发明大会中国区工作组，深度了解2022-2023年度全球发明大会中国区竞赛活动的特色亮点、竞赛模式等相关情况</span
          >
          <h3>“有信心把赛事办得漂亮”</h3>
          <img src="./image/2.jpg" alt="" />
          <span
            >全球发明大会中国区召集人王维廉向桐乡市科协一行的莅临指导表示欢迎，并分别介绍了全球发明大会中国区的赛事特点、评估标准、竞赛主题、组织架构等竞赛活动的基本情况。
          </span>
          <span>“ICC是强调画面感的赛事，乌镇的各类展会和活动都具有世界影响力，办得很漂亮，希望能吸取世界互联网大会的优秀经验，把ICC也办成一个具有影响力的赛事，将是我们所有参与者的一大幸事”，王维廉进一步表达了向乌镇经验学习的意愿。</span>
          <img src="./image/3.jpg" alt="">
          <span>全球发明大会中国区竞赛活动结合“十四五”规划和2023年远景目标纲要，以及联合国可持续发展目标，紧密联结公益社会责任和科创发明，搭建中美民间友好交流桥梁，让中国的青少年们能够切身参与到未来世界的建设之中。同时，竞赛活动将联合社会各界的力量，链接青少年与社会，向青少年提供优质的科创发明案例、资源和平台。</span>
          <h3>“让ICC成为乌镇另一重要活动”</h3>
          <img src="./image/4.jpg" alt="">
          <span>桐乡市科协主席沈玉林充分肯定了全球发明大会中国区竞赛活动的办赛理念和宗旨，表示“桐乡市有意愿让全球发明大会中国区成为乌镇另一个重要的活动，让乌镇成为青少年科创教育的新土壤”。</span>
          <span>作为江浙沪“金三角”之地和世界互联网大会的永久会址，乌镇重视科技、重视人才、重视科教融合，拥有高知名度的国际客流量、强大的会展资源平台，以及优越的黄金地理位置。</span>
          <span>贯穿引领浙江省发展的总纲领“八八战略”，乌镇将汇聚头部互联网资源，组建科技创新矩阵，在未来打造国际青少年科创教育高地和前沿技术的展示基地。</span>
          <h3>“千万个孩子是人类的希望”</h3>
          <img src="./image/5.jpg" alt="">
          <span>恒源祥（集团）有限公司副总裁刘帅提到， “一个孩子是家庭的希望，千万个孩子是人类的希望”。作为中国友好和平发展基金会恒爱致远青少年创新项目基金荣誉发起方，恒源祥愿意携手更多有社会责任感的国内外优秀企业和组织，在科创的新土壤上培育出更多“科学之苗”，鼓励青少年实践科创、热爱科创，促进国际民间交流，并共同推动中国科创教育的发展。</span>
          <span>会议探讨了全球发明大会中国区与桐乡市科协进行紧密长效合作的可能性，在竞赛活动中让参赛选手及参会人员体验到千年文化底蕴与高新科创技术交织的双重魅力。</span>
          <img src="./image/6.jpg" alt="">
          <span>本次其他与会人员有：恒源祥（集团）有限公司工会主席顾云尧、高校学术代表、社会企业代表、以及全球发明大会中国区工作组秘书处部分工作人员。</span>
        </div>
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：信息发布  ｜   2022-2023年度全球发明大会中国区协调单位名单（第五批）</span>
      <span @click="down">下一篇：新闻动态   |   美国驻华大使馆经济处、新闻文化处外交官一行...</span>
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
      this.$router.push({name:'Detail3'})
    },
    down(){
      this.$router.push({name:'Detail5'})
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
//   .middle {
//     height: 100%;
//     width: 50%;
//     overflow: scroll;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 2vw 5vw;
//     box-sizing: border-box;
//     .top {
//       display: flex;
//       justify-content: center;
//       width: 100%;
//       margin-bottom: 1vh;
//       padding-bottom: 1vh;
//       border-bottom: 1vh solid #d9d9d9;
//       font-size: 0.5px;
//       padding: 2vw 0;
//       .time {
//         margin: 0 3vh;
//       }
//     }
//     h3 {
//       font-size: 1.5vw;
//       color: #4f6eaa;
//       text-align: center;
//     }
//     .text {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       span {
//         font-size: 1vw;
//         line-height: 4vh;
//         margin: 2vh 0;
//         strong {
//           color: #07b9f1;
//         }
//       }
//     }
//     img {
//       width: 100%;
//     }
//   }

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