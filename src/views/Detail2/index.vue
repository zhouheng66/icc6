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
        <h3 class="middle-title">
          公益培训  | 
          直通ICC竞赛内容，引领科创公益新潮流
        </h3>
        <div class="top" :class="{ top2: !big }">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-02-24</span>
          <span>149 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back"><返回</div>
          <span
            >为帮助教育工作者更好地落地实践创新发明教育，了解2022-2023年度全球发明大会中国区（ICC）竞赛活动，ICC分别于2月14日、2月23日开展了两期线上公益培训活动。</span
          >
          <span
            >培训老师和嘉宾准备了充足的干货内容，包括ICC竞赛活动理念、国内青少年科创发明趋势、2022-2023年度ICC参赛要求综述、发明课程的设计等，让教育工作者们对本届竞赛活动的核心理念更加了解。</span
          >
          <h3>主打“科创+公益”</h3>
          <img src="./image/1.jpg" alt="" />
          <span
            >全球发明大会中国区召集人王维廉提到，ICC是一个重视“发现问题的能力”以及“社会责任意识”的竞赛活动，也是一个可以展现日常持续努力、放眼观察世界的机会。</span
          >
          <span
            >ICC
            <strong
              >不只是为了选拔有天赋的青少年，更是为了传递ICC的理念，发现和成就更多没有获奖、或是没有参赛的孩子们，让他们有机会能够对社会公益话题进行深度思考，参与到未来社会的建设中。</strong
            >
            ICC将与教育工作者们共同探讨更好的教育评估标准，设计出属于中国未来的科创发明课程。</span
          >
          <h3>2022-2023 ICC参赛综述</h3>
          <img src="./image/2.jpg" alt="" />
          <span
            >全球发明大会中国区工作组秘书处教研部负责人张家展，详细解读了目前教育工作者们最为关注的竞赛活动信息：2022-2023年度全球发明大会中国区的参赛要求与评价标准、15个公益主题、往届参赛案例解读等，以及如何设计发明课程，并为教育工作者们答疑解惑、提供支持和帮助。
          </span>
          <span
            >2022-2023年度全球发明大会中国区竞赛活动包括
            <strong>六个参赛学段</strong> ，采用参赛者们历经深度思考而制的
            <strong>发明日志、发明展板、路演视频以及发明原型（模型）</strong>
            作为参赛材料。</span
          >
          <span
            >秉承“发明过程的完整性比发明结果的有效性更重要”的理念，ICC不要求学生的发明作品原型实现所有功能，允许学生组织外部资源完成发明的制作，用重视过程的评估标准，来培养中国青少年的科创素养和自驱力。</span
          >
          <img src="./image/3.jpg" alt="" />
          <span
            >为了引导青少年关注社会，并亲身加入未来社会的建设中，
            <strong>2022-2023ICC设置了如下15个公益主题方向：</strong>
            无障碍世界、包容与关爱、可持续社区、守护蓝色海洋、未来学校、食品的未来、零浪费生活、老年福祉、水就是一切、与自然为友、共向清洁未来、传承与弘扬中华文明、保持安全、健康的未来、让乡村生活更美好。</span
          >
          <span>
            <strong
              >每个公益主题的驱动型问题围绕“十四五”规划和2035年远景目标纲要，以及联合国提出的可持续发展目标进行结合</strong
            >
            。ICC希望让学生通过对社会公益问题的理解、探索和实践过程，增强对社会责任的理解。</span
          >
          <img src="./image/4.jpg" alt="" />
          <span
            >为帮助教育工作者们更好地设计创新发明课程，ICC提出了
            <strong>“发明七步法”</strong>
            ，用“定义”、“理解”、“构思”、“设计”、“制作”、“测试”、“交流”七个关键词组成发明课程的基本步骤和流程。
          </span>
          <img src="./image/5.png" alt="" />
          <span
            >ICC将持续提供教育工作者们丰富的教学支持和平台，共同
            “发现”人才，遇见“光明”，守护每个亿分之一的梦想，成就科创发明的未来。
          </span>
        </div>
        
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：2022-2023年度全球发明大会中国区竞赛活动规则</span>
      <span @click="down">下一篇：信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第五批）</span>
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
      this.$router.push({name:'Detail'})
    },
    down(){
      this.$router.push({name:'Detail3'})
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
*{
  margin: 0;
  padding: 0;
}
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
    // 标题样式的设置
    .middle-title{
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
        font-size: 14px;
        line-height: 4vh;
        font-family: '微软雅黑';
        font-weight: 300;
        margin: 1vh 0;
        strong {
          color: #07b9f1;
        }
      }
    }
    img {
      width: 80%;
    }
  }
}
.sfoot{
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