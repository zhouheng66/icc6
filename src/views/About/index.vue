<template>
  <div class="bigbox">
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
    <Header blue="About"></Header>
    <div class="body" v-if="big">
      <div class="left"></div>
      <div class="right">
        <div class="text">
          <h1>全球发明大会中国区指导原则</h1>
          <div>
            <h1>
              INVENTION CONVENTION CHINA <br />
              GUIDING PRINCIPLE
            </h1>
          </div>
          <ul>
            <li>放眼国际，友好交流</li>
            <li>立足科创，聚焦公益</li>
            <li>重视过程，培养素养</li>
            <li>链接社会，开放透明</li>
          </ul>
          <ul>
            <li>International outlook, Friendly exchange</li>
            <li>Based on innovation, Focusing on public welfare</li>
            <li>Respect the process, Cultivate quality</li>
            <li>Linking society, Open and transparent</li>
          </ul>
        </div>
      </div>
      <div class="center">
        <div class="anime">
          <h1>
            为未来中国教育助力 <br />
            为人类命运共同体赋能
          </h1>
          <span>
            <strong>全球发明大会中国区</strong>
            ，是由中国友好和平发展基金会主办的青少年创新发明大赛，是教育部认定的面向中小学生的全国性竞赛活动。全球发明大会中国区以党和政府的科教兴国战略为指引，强化建设青少年科创人才支撑，传导人类命运共同体意识，培养符合中国式现代化要求和国际视野的新一代创新人才。全球发明大会中国区全球邀请赛由美国海伦·福斯特·斯诺基金会主办，为青少年搭建国际化科创舞台。</span
          >
          <span>
            <strong>全球发明大会中国区</strong>
            提倡将科学、技术、工程、数学等科学技术素养与社会创新、科技创新、发明活动进行结合。活动主旨为激励青少年儿童的创新发明教育，培养定义问题的能力、解决问题的习惯和终身创新的框架，进而为成为未来的创新者、发明者和创业者做好准备。</span
          >
          <span
            >以全球发明大会中国区为基础，<strong
              >中国友好和平发展基金会恒爱致远青少年创新基金致</strong
            >
            力于构建一个企业、科研机构、教育机构、民间组织、社区、国际友好人士、家庭与孩子一同参与的公益创新社群。集合世界的力量，成就孩子们让世界变得更美好的梦想。</span
          >
        </div>
      </div>
    </div>
    <div class="smallBody" v-if="!big">
      <div class="top">
        <div class="topSpan">
          <span>为未来中国的教育助力</span>
          <span>为人类命运共同体赋能</span>
        </div>
        <div class="toSpan2">
          <span class="span2-paragraph">
            <strong class="bold-span">全球发明大会中国区,</strong>
            是由中国友好和平发展基金会主办的青少年创新发明大赛，
            是教育部认定的面向中小学生的全国性竞赛活动。
            全球发明大会中国区以党和政府的科教兴国战略为指引，强化建设青少年科创人才支撑，传导人类命运共同体意识，培养符合中国式现代化要求和国际视野的新一代创新人才。
            全球发明大会中国区全球邀请赛由美国海伦·福斯特·斯诺基金会主办，为青少年搭建国际化科创舞台。
          </span>
          <span class="span2">
            <strong class="bold-span span2-paragraph"
              >全球发明大会中国区</strong
            >
            提倡将科学、技术、工程、数学
            等科学技术素养与社会创新、科技创新、发明活动进 行结合。
            活动主旨为激励青少年儿童的创新发明教
            育，培养定义问题的能力、解决问题的习惯和终身创
            新的框架，进而为成为未来的创新者、发明者和创业 者做好准备。
          </span>
          <span class="span2-paragraph">
            以全球发明大会中国区为基础，<strong class="bold-span"
              >中国友好和平发展 基金会恒爱致远青少年创新基金</strong
            >
            致力于构建一个 企业、科研机构、教育机构、民间组织、社区、国际
            友好人士、家庭与孩子一同参与的公益创新社群。
            集合世界的力量，成就孩子们让世界变得更美好的梦想。</span
          >
        </div>
      </div>
      <div class="center">
        <h1>全球发明大会中国区指导原则</h1>
        <h2>
          INVENTION CONVENTION CHINA <br />
          GUIDING PRINCIPLE
        </h2>
        <span class="line">---------</span>
        <div class="ulSpan">
          <ul>
            <li>放眼国际，友好交流</li>
            <li>立足科创，聚焦公益</li>
            <li>重视过程，培养素养</li>
            <li>链接社会，开放透明</li>
          </ul>
          <ul class="ul-English">
            <li><strong>International outlook,</strong></li>
            <li><strong>Friendly exchange</strong></li>
            <li><strong>Based on innovation,</strong></li>
            <li><strong> Focusing on public welfare</strong></li>
            <li><strong>Respect the process,</strong></li>
            <li><strong> Cultivate quality</strong></li>
            <li><strong>Linking society,</strong></li>
            <li><strong>Open and transparent</strong></li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <div class="animate-remove">
          <h1>2020-2021</h1>
          <span
            >全球发明大会中国区活动采用线上线下相结合的
            形式开展，线下赛事于杭州未来科技城举办。</span
          >
        </div>
        <div class="div2 animate2-remove">
          <h1>2021-2022</h1>
          <span
            >全球发明大会中国区活动吸引了来自全国14个省市
            600多所学校的近500个发明项目团队，5000多名幼儿
            园、中小学生参与竞赛，并采用线上形式顺利举办。</span
          >
        </div>
        <div class="animate3-remove">
          <h1>2022-2023</h1>
          <span
            >全球发明大会中国区被列入教育部办公厅发布的《2022-
            2025学年面向中小学生的全国性竞赛活动名单》中，成为
            2022-2025学年面向中小学的全国性竞赛活动之一。</span
          >
        </div>
      </div>
    </div>
    <div class="leg" v-if="big">
      <div class="left">
        <div class="img1" :class="{ move: testShow }">
          <img src="./image/left.png" alt="" />
        </div>
        <div class="img2" :class="{ move: testShow }">
          <img src="./image/left.png" alt="" />
        </div>
        <div class="text1" ref="testref" :class="{ tm: testShow }">
          <h1>2020-2021</h1>
          <span
            >全球发明大会中国区活动采用线上线下相结合的 <br />
            形式开展，线下赛事于杭州未来科技城举办。</span
          >
        </div>
        <div class="text2" ref="test2ref" :class="{ tm: testShow }">
          <h1>2022-2023</h1>
          <span
            >全球发明大会中国区被列入教育部办公厅发布的《2022- <br />
            2025学年面向中小学生的全国性竞赛活动名单》中，成为 <br />
            2022-2025学年面向中小学的全国性竞赛活动之一。</span
          >
        </div>
      </div>
      <div class="right">
        <div class="img3">
          <img src="./image/right.png" alt="" :class="{ move1: testShow }" />
        </div>
        <div class="text3" ref="test3ref" :class="{ tm1: testShow }">
          <h1>2021-2022</h1>
          <span
            >全球发明大会中国区活动吸引了来自全国14个省市，<br />
            600多所学校的近500个发明项目团队，5000多名幼儿 <br />
            园、中小学生参与竞赛，并采用线上形式顺利举办。</span
          >
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      testShow: false,
      testShow1: false,
      testShow2: false,
      big: true,
      top: false,
      y: 0,
    };
  },
  mounted() {
    // 滚动事件
    window.addEventListener("scroll", this.handleScrollbox, true);
    window.scrollTo(0, 0);
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
  methods: {
    handleScrollbox() {
        // PC滚动
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      this.y = window.pageYOffset;

      if (this.big) {
        if (this.currentScroll >= this.$refs.testref.offsetTop - 600) {
          //当前滚动位置到达testref的时候，显示div（100作为调整用）
          this.testShow = true;
        }
      }

    //   移动端滚动触发
    //   var scrollT =document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this);
      /*第二页动画的触发*/
      if (this.getTop("animate-remove") < 800) {
        this.getDom("animate-remove").classList.add("animated");
        this.getDom("animate-remove").classList.add("xuanzhuan");
      }

      if (this.getTop("animate2-remove") < 750) {
        this.getDom("animate2-remove").classList.add("animated");
        this.getDom("animate2-remove").classList.add("xuanzhuan");
      }

      if (this.getTop("animate3-remove") <700) {
        this.getDom("animate3-remove").classList.add("animated");
        this.getDom("animate3-remove").classList.add("xuanzhuan");
      }
    },
    // 获取顶部值  看不懂找张强
    getTop(clsName) {
      var obj = document.getElementsByClassName(clsName)[0];
      if (!this.big) {
        return obj.getBoundingClientRect().top;
      }
    },
    getDom(clsName) {
      var obj = document.getElementsByClassName(clsName)[0];
      return obj;
    },

    // 返回顶部
    toTop() {
      window.scrollTo(0, 0);
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScrollbox, true);
  },
  watch: {
    y() {
      //console.log(this.y);
      if (this.y > 150) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
  },
};


</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
// 动画样式动态添加
.animated {
  animation-duration: 3s;
  -webkit-animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.xuanzhuan {
  animation-name: xuanzhuan;
  -webkit-animation-name: xuanzhuan;
}

@keyframes xuanzhuan {
  0% {
    opacity: 0;
    transform: translateX(-200px);
    -webkit-transform: translateX(-200px);
  }
  //   50% {
  //     opacity: 0.5;
  //     transform: scale(1.5, 1.5);
  //     -webkit-transform: scale(1.5, 1.5);
  //   }
  100% {
    opacity: 1;
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
  }
}
// @-webkit-keyframes xuanzhuan {
//   0% {
//     opacity: 0;
//     transform: rotate(120deg);
//     -webkit-transform: rotate(120deg);
//   }
//   50% {
//     opacity: 0.5;
//     transform: scale(1.5, 1.5);
//     -webkit-transform: scale(1.5, 1.5);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1, 1);
//     -webkit-transform: scale(1, 1);
//   }
// }
span,
div,
h1,
h2,
h3 {
  cursor: pointer;
}
.bigbox {
  overflow-x: hidden;
  .runTop {
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

    .icon {
      margin-top: 5px;
    }
  }
}
.body {
  overflow-x: hidden;
  width: 100%;
  height: 90vh;
  margin-top: 15vh;

  display: flex;
  .left {
    display: inline-block;
    width: 40%;
    height: 100%;
    background-color: #d7561f;
    box-sizing: border-box;
  }
  .right {
    display: inline-block;
    width: 60%;
    height: 100%;
    background-color: #232426;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text {
      color: white;
      font-size: 1vw;
      text-align: center;
      margin: 0 auto;
      animation: moves2 1s;
      h1 {
        font-size: 1.3vw;
        margin-bottom: 1vw;
      }
      ul {
        margin-top: 10vh;
        li {
          font-size: 1vw;
          list-style: none;
        }
      }
    }
  }
  .center {
    width: 38%;
    height: 75%;
    background-color: #fff;
    position: absolute;
    top: 20vh;
    left: 10vw;
    .anime {
      padding: 3vw 2vw;
      h1 {
        font-size: 1.8vw;
        font-weight: 600;
        margin-bottom: 20px;
        animation: change 3s;
      }
      i {
        color: skyblue;
        font-weight: 700;
      }
      strong {
        color: #00c1f4;
      }
      span {
        display: block;
        margin-bottom: 1vw;
        color: #a6a6c4;
        animation: moves 2s;

        font: 14px Arial, "宋体", Helvetica, sans-serif, Verdana;
        line-height: 22px;
      }
    }
  }
}

.smallBody {
  width: 100%;
  //   height: 240vh;
  .top {
    background-color: #ea702c;
    width: 100%;
    // height: 40%;
    padding-bottom: 30px;
    overflow: hidden;
    .topSpan {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 20%;
      justify-content: space-around;
      margin-top: 30px;
      margin-bottom: 20px;
      animation: change 3s;
      span {
        // height: 13vw;
        background-color: #fff;
        width: 94.5vw;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        line-height: 13vw;
        font-family: SimHei;
      }
    }
    .toSpan2 {
      overflow: hidden;
      //   height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 10px;
      padding: 0px 15px;
      font-size: 12px;
      animation: right2 2s;

      // 每段首句话加粗
      .bold-span {
        font-size: 14px;
        font-family: "Microsoft YaHei" !important;
        font-weight: 900;
      }
      span {
        color: #fff;
        height: 25%;
        // margin-bottom: 10vw;
        font-size: 14px;
        font-family: SimSun;
        line-height: 23px;
        text-align: justify;
      }

      // 每一大端的间距样式
      .span2-paragraph {
        margin: 0 0 0 0;
      }
      .span2 {
        // margin-top: 0px;
        // margin-bottom: -10px;
      }
    }
  }

  .center {
    background-color: #434343;
    // height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 23px;
      text-align: center;
      color: #fff;
      margin: 20px 0;
      margin-top: 40px;
    }
    h2 {
      font-size: 15px;
      text-align: center;
      color: #fff;
    }
    .line {
      color: #fff;
      text-align: center;
      margin: 20px 0 0 0;
    }
    .ulSpan {
      color: rgb(255, 255, 255);
      font-family: SimSun;
      font-size: 14px;
      //   font-size: 15px;
      text-align: center;
      ul {
        margin: 20px 0 0;
        // ********************************************
        margin-bottom: 20px;

        li {
          line-height: 20px;
          font-family: SimSun;
        }
      }
    }
  }
  .footer {
    background-color: #fff;
    height: 30%;
    display: flex;
    flex-direction: column;
    width: 100vw;
    animation: trunOpacity 3s ease-out;
    div {
      width: 80vw;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .div2 {
      h1 {
        text-align: right;
        border-left: none;
        border-right: 5px solid #000;
        margin-bottom: 20px;
        padding-left: none;
        padding-right: 20px;
      }
      span {
        margin-left: 20px;
      }
    }
    h1 {
      border-left: 5px solid #000;
      font-size: 40px;
      padding-left: 20px;
    }
    span {
      font-size: 13px;
      line-height: 20px;
    }
  }
}

// ***********
.leg {
  height: 100vh;
  width: 100vw;
  display: flex;
  span {
    display: inline-block;
    font-size: 12px;
    font: 12px/140% Arial, "宋体", Helvetica, sans-serif, Verdana;
    color: #000;
  }
  .left {
    margin-top: 20px;
    width: 50%;
    height: 80%;
    border-right: 1px solid #5a5a5a;
    position: relative;
    .move {
      animation: left1 2s;
    }

    .img1 {
      position: absolute;
      right: 2vw;
      top: 10vh;
    }
    .img2 {
      position: absolute;
      right: 2vw;
      top: 50vh;
    }
    .tm {
      animation: left2 2s;
    }

    .text1 {
      position: absolute;
      right: 4vw;
      top: 10vh;
      h1 {
        text-align: right;
        margin-bottom: 10px;
      }
    }
    .text2 {
      position: absolute;
      right: 4vw;
      top: 50vh;
      h1 {
        text-align: right;
        margin-bottom: 10px;
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    position: relative;
    .img3 {
      position: absolute;
      left: 2vw;
      top: 35vh;
      .move1 {
        animation: right1 2s;
      }
    }
    .tm1 {
      animation: right2 2s;
    }
    .text3 {
      position: absolute;
      left: 4vw;
      top: 35vh;
      h1 {
        text-align: left;
        margin-bottom: 10px;
      }
    }
  }
}
.footer {
  height: 23vh;
  background-color: #5a5a5a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .right {
    span {
      color: white;
      opacity: 0.5;
    }
  }
  .left {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -10vw;
    .img {
      width: 60%;
      .img1 {
        width: 60%;
      }
      .img2 {
        width: 30%;
        margin-bottom: 60px;
      }
    }
  }
}
.ma {
  display: flex;
  font-size: 12px;
  color: white;
  justify-content: space-between;
  width: 20vw;
  height: 20vh;
  .ma1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 8vw;
    text-align: center;
  }
  .ma2 {
    display: flex;
    flex-direction: column;
    width: 8vw;
    text-align: center;
    justify-content: space-between;
  }
}
@keyframes change {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes moves {
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes moves2 {
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes left1 {
  from {
    opacity: 0;
    transform: translateX(-5vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes left2 {
  from {
    opacity: 0;
    transform: translateX(-10vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes right1 {
  from {
    opacity: 0;
    transform: translateX(5vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes right2 {
  from {
    opacity: 0;
    transform: translateX(10vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// 2021-2122数字大标题 变透明
@keyframes trunOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>