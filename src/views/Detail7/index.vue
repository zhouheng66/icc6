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
        <h3 class="middle2-small-title">
          公益培训 ｜ 关于举办2022-2023年度全球发明大会中国区培训通知
        </h3>
        <div class="top">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-02-08</span>
          <span>70 次浏览</span>
        </div>
        <div class="text">

          <div class="back" @click="back"> &lt; 返回 </div>
          <div class="middle-textOne">各省中小学及校外教育工作者：</div>
          <span class="middle-textOne"
            >全球发明大会中国区（简称ICC），由中国友好和平发展基金会主办，提倡将科学、技术、工程、数学等科学技术素养与社会创新、科技创新、发明活动进行结合。竞赛活动旨在激励青少年通过从小学到高中阶段的创新发明教育，培养定义问题的能力、解决问题的习惯和终身创新的框架，进而为成为未来的创新者、发明者和创业者做好准备</span
          >
          <span class="middle-textOne"
            >2022年8月，ICC已进入教育部办公厅公布的《2022-2025学年面向中小学生的全国性竞赛活动名单》。为了帮助参与全球发明大会中国区（ICC）的教育工作者更好地落地实践创新发明教育、了解2023年度竞赛主题与ICC的的评价标准，全球发明大会中国区即将开展线上培训活动</span
          >
          <h4 class="middle-textTitle">一、举办单位</h4>
          <div class="middle-textOne" >全球发明大会中国区工作组秘书处</div>
          <h4 class="middle-textTitle">二、培训对象</h4>
          <div class="middle-textOne">各省中小学及校外教育工作者</div>
          <h4 class="middle-textTitle">三、培训安排</h4>
          <div class="middle-textOne">1、培训平台：线上培训活动（腾讯会议）</div>
          <div class="middle-textOne">
            2、培训时间：培训安排两期，每期两个小时。两期培训内容相同，可根据自身时间安排，选择参加其中一期。
          </div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）第一期：2月14日上午9：00-11：00</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）第二期：2月23日上午9：00-11：00</div>
          <h4 class="middle-textTitle">四、培训目标</h4>
          <div class="middle-textOne">通过培训活动，教育工作者将能够：</div>
          <div class="middle-textOne">1、政策解读：</div>
          <div class="middle-textOne">了解新时代背景下科创教育发展战略与实施路径</div>
          <div class="middle-textOne">2、赛事解读</div>
          <div class="middle-textOne">
            &nbsp;&nbsp;（1）理解ICC竞赛规则，引导学生为2022-2023ICC作好准备
          </div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）了解ICC竞赛主题以及主题制定的背景</div>
          <div class="middle-textOne">（3）如何参加ICC，需要准备哪些材料</div>
          <div class="middle-textOne">3、课程拓展：</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）熟悉发明课程规划地图，设计发明课程</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）选择合适的主题开展课程</div>
          <h4 class="middle-textTitle">五、培训内容提纲</h4>
          <div class="middle-textOne">1、青少年科创教育的实践探索</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）科创教育的现状</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）科教兴国战略在新时代下的意义</div>
          <div class="middle-textOne">&nbsp;&nbsp;（3）科创教育发展新机遇</div>
          <div class="middle-textOne">2、ICC参赛要求与评价标准</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）参赛选手需要准备的材料</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）ICC评估准则</div>
          <div class="middle-textOne">&nbsp;&nbsp;（3）15个竞赛主题与驱动性问题</div>
          <div class="middle-textOne">3、ICC案例解读</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）往届发明案例</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）发明日志应该怎么写</div>
          <div class="middle-textOne">4、发明的定义与解读</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）发明的定义</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）生活中有哪些发明</div>
          <div class="middle-textOne">5、发明教育开展的价值</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）发明教育对学生的价值</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）发明教育对教师的价值</div>
          <div class="middle-textOne">&nbsp;&nbsp;（3）发明教育对学校的价值</div>
          <div class="middle-textOne">6、15个驱动性问题与可持续发展教育</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）2035远景规划与联合国可持续发展目标</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）什么是可持续发展教育</div>
          <div class="middle-textOne">&nbsp;&nbsp;（3）我们身边有哪些可持续问题</div>
          <div class="middle-textOne">7、发明课程规划地图</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）发明过程的七步法</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）我们需要培养学生哪些发明家习惯 </div>
          <div class="middle-textOne">8、如何规划一门发明课程</div>
          <div class="middle-textOne">&nbsp;&nbsp;（1）发明课程时长建议</div>
          <div class="middle-textOne">&nbsp;&nbsp;（2）如何规划课程中的里程碑</div>
          <div class="middle-textOne">&nbsp;&nbsp;（3）如何设计自己特色的发明课程地图</div>
          <div class="middle-textOne">&nbsp;&nbsp;（4）如何对学生进行评估</div>
          <div class="middle-textOne">9、问答环节</div>
          <div class="middle-textOne">现场问答，ICC教研员进行答疑</div>
          <h4 class="middle-textTitle">六、培训团队</h4>
          <div class="middle-textOne">王维廉：全球发明大会中国区召集人</div>
          <div class="middle-textOne">陈明泉：中国发明协会中小学创造教育分会副会长</div>
          <div class="middle-textOne">张家展：全球发明大会中国区秘书处教研部负责人</div>
          <h4 class="middle-textTitle">七、报名方式</h4>
          <div class="middle-textOne">扫描下方二维码，提前预约第一期或第二期线上培训活动</div>
          <img src="./image/1.jpg" alt="" />
          <span class="saoma">↑↑扫描二维码，预约第一期培训活动↑↑</span>
          <img src="./image/2.jpg" alt="" />
          <span class="saoma">↑↑扫描二维码，预约第二期培训活动↑↑</span>
          <h4 class="middle-textTitle">八、其他</h4>
          <img src="./image/3.png" alt="" />
          <span class="saoma">↑↑扫描二维码，填写问卷↑↑</span>
        </div>
    </div>
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第四批）</span>
      <span @click="down">下一篇：信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第三批）</span>
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
      this.$router.push({name:'Detail6'})
    },
    down(){
      this.$router.push({name:'Detail8'})
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
* {
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
    .middle2-small-title{
        display: block;
       font-family:SimSun;
       font-size:18px;
       color:#426100;
       font-weight:bold;
       text-decoration:none;
       text-align:center;
       line-height: 30px;
    }

     .top {
        // 来源信息
        span{
        display: inline-block;
        font-size: 13px;
        opacity: 0.7;
      }
    }

    // 详细文本页面
    .text{
         font-family: system-ui;
         font-size: 14px;
        font-weight: 300;
        // 第一行文字
        .middle-textOne{
            font-size: 14px;
            font-weight: 300;
        }

        // 里面标题的大小
        .middle-textTitle{
            font-size: 20px;
            font-family: "微软雅黑";
            font-weight: 400;


        }
        
    }
  }
  .middle {
    height: 100%;
    width: 70%;
    overflow: scroll;
    margin: 0 auto;
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
      margin-top: 1vh;
      padding-bottom: 1vh;
      border-bottom: 1vh solid #d9d9d9;
      font-size: 0.5vw;
      padding: 2vw 0;
      .time {
        margin: 0 3vh;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      span {
        font-size: 1vw;
        line-height: 4vh;
        margin: 2vh 0;
        strong {
          color: #07b9f1;
        }
      }
      img{
        width: 180px;
      }
      .saoma {
        font-size: 14px;
      }
      h4 {
        font-size: 1.5vw;
        padding-left: 2vh;
        border-left: 4px solid skyblue;
        margin: 5vh 0;
      }
      div {
        font-size: 1vw;
        line-height: 5vh;
      }
    }
  

    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      text-align: center;
      margin-top: 3vh;
      line-height: 40px;
      font-size: 1.5vw;
    }

    img {
      width: 30%;
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
//   margin-left: -90%;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
//   font: 15px Arial,"宋体",Helvetica, sans-serif,Verdana;
}ck:hover{
  color: skyblue;
}

</style>