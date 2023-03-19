<template>
<!-- 首页 -->
  <div class="bigbox">
    <Header blue="Home" id = 'head'/>
    <div v-if="top" :class="{ runTop: testShow }" @click="toTop">
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
    <div :class="{ banner: big, bannerSmall: !big }">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./image/banner1.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./image/banner2.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./image/banner3.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./image/banner4.jpg" alt="" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div :class="{ foot: big, footSmall: !big }">
      网站持续更新升级中，敬请期待更多精彩内容！
    </div>
    <div :class="{ leg: big, smallLeg: !big }">
      <div class="right">
        <h1>全球发明大赛中国区</h1>
        <div>——</div>
        <span>让我们的孩子拥有博大的视野和有责任的心</span>
        <span>让我们的孩子不因区域发展和教育资源不均而错过创新教育的机会</span>
        <span>让我们的孩子有能力提出好问题</span>
        <span>让优秀的教育者和教育参与者被更多人看到</span>
        <span>让世界听到中国孩子美好的创新愿望</span>
      </div>
      <div class="left" v-if="big">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <ul>
          <li class="text">关于我们</li>
          <li>
            <img
              ref="testref"
              src="./image/2.jpg"
              alt=""
              :class="{ img: testShow }"
              @click="toNews"
            />
          </li>
          <li class="text">支持我们</li>
          <li>
            <img
              ref="testref"
              src="./image/1.jpg"
              alt=""
              :class="{ img2: testShow }"
              @click="toAbout"
            />
          </li>
          <li class="text">近期赛事</li>
          <li>
            <img
              ref="testref"
              src="./image/3.jpg"
              alt=""
              :class="{ img2: testShow }"
              @click="toCall"
            />
          </li>
        </ul>
      </div>
      <div class="left1" v-if="!big">
        <ul>
          <li class="text">
            <img
              ref="testref"
              src="./image/2.jpg"
              alt=""
              :class="{ img: testShow }"
            />
            <span>关于我们</span>
          </li>

          <li class="text">
            <img
              ref="testref"
              src="./image/1.jpg"
              alt=""
              :class="{ img2: testShow }"
            /><span>支持我们</span>
          </li>
          <li class="text">
            <img
              ref="testref"
              src="./image/3.jpg"
              alt=""
              :class="{ img2: testShow }"
            /><span>近期赛事</span>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Home",
  data() {
    return {
      testShow: false,//动画
      big: true,//移动适配
      top:false,//返回顶部
      y:0
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, //设置小原店面可以切换
      },
      effect: "fade",
      // 如果需要滚动条
      autoplay: true,
    });
    window.addEventListener("scroll", this.handleScrollbox, true);
    window.scrollTo(0, 0);
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
  methods: {
    //动画
    handleScrollbox() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      this.y = window.pageYOffset;

      if (this.currentScroll >= this.$refs.testref.offsetTop - 10000) {
        //当前滚动位置到达testref的时候，显示div（100作为调整用）
        this.testShow = true;
      }
    },
    toNews() {
      this.$router.push({ name: "News" });
    },
    toAbout() {
      this.$router.push({ name: "About" });
    },
    toCall() {
      this.$router.push({ name: "Call" });
    },
    toTop(){
      window.scrollTo(0, 0);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScrollbox, true);
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
  list-style: none;
}
span,
div,
h1,
h2,
h3 {
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
body {
  margin: none !important;
}
.banner {
  width: 100%;
  height: 95vh;
  position: relative;
  .swiper-container ::v-deep .swiper-pagination {
    margin-bottom: 15vh;
  }
  .swiper-container ::v-deep .swiper-pagination-bullet {
    background-color: #f8f7f7;
    width: 15px;
    height: 15px;
    z-index: 999;
  }

  .swiper-container ::v-deep .swiper-pagination-bullet-active {
    background-color: #660000;
    width: 15px;
    height: 15px;
  }
  .swiper-container {
    height: 100%;
    left: 0;
    top: 0;
    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        height: 100%;
        position: relative;
        img {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
.bannerSmall {
  overflow-x: hidden;
  width: 100%;
  height: 38.5vw;
  position: relative;
  .swiper-container ::v-deep .swiper-pagination {
    text-align: right;
  }
  .swiper-container ::v-deep .swiper-pagination-bullet {
    background-color: #efefef;
    width: 10px;
    height: 10px;
    z-index: 999;
  }

  .swiper-container ::v-deep .swiper-pagination-bullet-active {
    background-color: #fff;
    width: 10px;
    height: 10px;
  }
  .swiper-container {
    height: 38.5vw;
    left: 0;
    top: 0;
    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        height: 100%;
        position: relative;
        img {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
.foot {
  width: 100%;
  background-color: rgb(204, 204, 204);
  tab-size: 20px;
  height: 20vh;
  font-size: 20px;
  text-align: center;
  line-height: 10vw;
  font-weight: bold;
  z-index: 998;
  font-family: SimSun;
  box-sizing: border-box;
  margin-top: -15vh;
}
.footSmall {
  overflow-x: hidden;
  width: 100%;
  background-color: rgb(204, 204, 204);
  tab-size: 20px;
  height: 10vh;
  font-size: 15px;
  text-align: center;
  line-height: 10vh;
  font-weight: bold;
  z-index: 998;
  font-family: SimSun;
  box-sizing: border-box;
}
.leg {
  width: 100%;
  background-color: #efefef;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .right {
    display: flex;
    flex-direction: column;
    margin-right: 7vw;
    padding: 0 20px;
    h1 {
      font-size: 3vw;
      margin-bottom: 3vh;
    }
    span {
      font-size: 1vw;
      font-weight: 300;
      margin-top: 3vh;
    }
  }
  .left {
    width: 33vw;
    margin-left: 7vw;
    position: relative;
    margin-right: 2vw;
    .s1 {
      width: 1.5vw;
      height: 1.5vw;
      background-color: #fff;
      position: absolute;
      left: 2vw;
      top: 9vw;
      transform: rotate(45deg);
      z-index: 2;
    }
    .s2 {
      width: 1.5vw;
      height: 1.5vw;
      background-color: #fff;
      position: absolute;
      left: 13vw;
      top: 9.5vw;
      transform: rotate(45deg);
      z-index: 2;
    }
    .s3 {
      width: 1.5vw;
      height: 1.5vw;
      background-color: #fff;
      position: absolute;
      left: 23vw;
      top: 9vw;
      transform: rotate(45deg);
      z-index: 2;
    }
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .text {
        background-color: #fff;
      }
      li {
        width: 33%;
        height: 10vw;
        text-align: center;
        line-height: 10vw;
        font-size: 2vw;
        font-weight: 700;
        .img2 {
          animation: down 1s;
        }

        .img {
          animation: up 1s;
        }
        img {
          width: 100%;

          height: 100%;
        }
      }
    }
  }
}
.smallLeg {
  overflow-x: hidden;
  width: 100%;
  background-color: #efefef;
  text-align: center;
//   height: 100vh;
  .right {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 70%;
    h1 {
      font-size: 25px;
      font-weight: normal;
      line-height: 60px;
    }
    div {
      margin:0 0  7px 0;
    }
    span {
      line-height: 40px;
    }
  }
  .left1 {
    flex: 1;
    padding-bottom: 20px;
    ul {
      display: flex;
      justify-content: space-between;
      .text {
        display: flex;
        flex-direction: column;
        font-size: 5vw;
        font-weight: 700;
        img {
          width: 30vw;
          margin-bottom: 3vw;
        }
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
@keyframes up {
  from {
    transform: translateY(-10vw);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes down {
  from {
    transform: translateY(10vw);
  }
  to {
    transform: translateY(0px);
  }
}
</style>