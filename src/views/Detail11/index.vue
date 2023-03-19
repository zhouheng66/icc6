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
          赛事通知 | 2022-2023年度全球发明大会中国区竞赛活动公告
        </h3>
        <div class="top" :class="{ top2: !big }">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-01-17</span>
          <span>149 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back"><返回</div>
          <span>为积极响应科教兴国战略、党的二十大“必须坚持科技是第一生产力、人才是第一资源、创新是第一动力”的号召，培养年轻一代勇于投身实践，发展自我，成就事业，为中外青少年科技创新交流搭建国际平台，中国友好和平发展基金会将于2023年1月至7月举办“2022-2023年全球发明大会中国区竞赛活动”。</span>
          <span>根据《教育部办公厅关于进一步加强面向中小学生的全国性竞赛活动管理工作的通知》和《教育部办公厅关于公布2022-2025学年面向中小学生的全国性竞赛活动通知》要求，现将本次竞赛活动具体内容通知如下:</span>
          <strong>一、活动主题</strong>
          <span>科技创益未来</span>
          <strong>二、参与对象</strong>
          <span>全国小学、初中、高中、中专、职高在校学生</span>
          <strong>三、活动安排</strong>
          <span>2023年1月至2月  宣传大赛公益主题内容</span>
          <span>2023年3月至4月  报名注册及作品预审</span>
          <span>2023年5月至6月  省级选拔赛</span>
          <span>2023年6月至7月  全国总决赛</span>
          <span>2023年7月          全球邀请赛</span>
          <strong>四、报名方式</strong>
          <span>参赛学生通过关注 <strong>“全球发明大会中国区”</strong> 官方微信公众号获取报名链接和赛事相关文件资料。</span>
          <strong>五、竞赛组织与评审</strong>
          <span>竞赛活动将围绕科技竞赛体系建设，服务于科技创新人才选拔，在广泛开展创新发明教育普及活动基础上按照不同主题进行，参赛团队请于各省赛组委会公布的报名注册截止日期前，登录“全球发明大会中国区”竞赛服务平台在线提交作品。</span>
          <span>主承办单位联合设立全球发明大会中国区组委会，并组织成立评审专家组，对参评项目进行评选。</span>
          <strong>六、申明</strong>
          <span>全球发明大会中国区组委会负责制定、修订、解释竞赛和奖励办法。全球发明大会中国区组委会保留最终解释权与更改权利。</span>
          <!-- 最下面两个右边的东西 -->
          <span class="right">中国友好和平发展基金会 <br> 2023年1月12日 </span>
        </div>
        
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第一批）</span>
      <span @click="down">下一篇：无</span>
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
      this.$router.push({name:'Detail10'})
    },
    down(){
      
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
      color: rgb(34, 34, 34);
      margin-top: 0;
      text-align: justify;
      span {
        font-size: 14px;
        line-height: 4vh;
        font-family: '微软雅黑';
        font-weight: 300;
        margin-bottom: 30px;
        /* span里面的strong */
        strong {
          color: #07b9f1;
        }
      }
      /* span外面的strong */
      strong {
          margin-bottom: 30px;
        }
    /* 最下面两个右边的东西 */
    .right{
        text-align: right;
        margin-top: 20px;
    }
    }
    img {
      width: 100%;
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