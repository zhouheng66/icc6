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
    <Header blue="Rules" />
    <div class="body" v-if="big">
      <!-- 标题 -->
      <h1 class="hOne">2022-2023年度全球发明大会中国区竞赛规则</h1>
      <h2>-中文版-</h2>
      <div class="pdf">
        <img src="./image/1.png" alt="" />
        <img src="./image/2.png" alt="" />
        <img src="./image/3.png" alt="" />
        <img src="./image/4.png" alt="" />
        <img src="./image/5.png" alt="" />
        <img src="./image/6.png" alt="" />
        <img src="./image/7.png" alt="" />
        <img src="./image/8.png" alt="" />
        <img src="./image/9.png" alt="" />
        <img src="./image/10.png" alt="" />
        <img src="./image/11.png" alt="" />
        <img src="./image/12.png" alt="" />
      </div>
      <h2>-英文版-</h2>
      <div class="pdf">
        <img src="./image/e1.png" alt="" />
        <img src="./image/e2.png" alt="" />
        <img src="./image/e3.png" alt="" />
        <img src="./image/e4.png" alt="" />
        <img src="./image/e5.png" alt="" />
        <img src="./image/e6.png" alt="" />
        <img src="./image/e7.png" alt="" />
        <img src="./image/e8.png" alt="" />
        <img src="./image/e9.png" alt="" />
        <img src="./image/e10.png" alt="" />
        <img src="./image/e11.png" alt="" />
        <img src="./image/e12.png" alt="" />
        <img src="./image/e14.png" alt="" />
        <img src="./image/e15.png" alt="" />
        <img src="./image/e16.png" alt="" />
        <img src="./image/e17.png" alt="" />
        <img src="./image/e18.png" alt="" />
        <img src="./image/e19.png" alt="" />
        <img src="./image/e20.png" alt="" />
        <img src="./image/e21.png" alt="" />
      </div>
    </div>

    <!-- 移动端 -->
    <div v-else class="pmd-outer">
      <!-- 标题 -->
      <h1 class="hOne">2022-2023区竞赛规则</h1>
      <div class="hOne-line"></div>
      <div class="pmd-pdf">
        <h2>-中文版-</h2>
        <div class="pdf">
          <img src="./image/1.png" alt="" />
          <img src="./image/2.png" alt="" />
          <img src="./image/3.png" alt="" />
          <img src="./image/4.png" alt="" />
          <img src="./image/5.png" alt="" />
          <img src="./image/6.png" alt="" />
          <img src="./image/7.png" alt="" />
          <img src="./image/8.png" alt="" />
          <img src="./image/9.png" alt="" />
          <img src="./image/10.png" alt="" />
          <img src="./image/11.png" alt="" />
          <img src="./image/12.png" alt="" />
        </div>
        <h2>-英文版-</h2>
        <div class="pdf">
          <img src="./image/e1.png" alt="" />
          <img src="./image/e2.png" alt="" />
          <img src="./image/e3.png" alt="" />
          <img src="./image/e4.png" alt="" />
          <img src="./image/e5.png" alt="" />
          <img src="./image/e6.png" alt="" />
          <img src="./image/e7.png" alt="" />
          <img src="./image/e8.png" alt="" />
          <img src="./image/e9.png" alt="" />
          <img src="./image/e10.png" alt="" />
          <img src="./image/e11.png" alt="" />
          <img src="./image/e12.png" alt="" />
          <img src="./image/e14.png" alt="" />
          <img src="./image/e15.png" alt="" />
          <img src="./image/e16.png" alt="" />
          <img src="./image/e17.png" alt="" />
          <img src="./image/e18.png" alt="" />
          <img src="./image/e19.png" alt="" />
          <img src="./image/e20.png" alt="" />
          <img src="./image/e21.png" alt="" />
        </div>
      </div>

      <!-- <div class="pmd-showContent">
        <span>※该页面手机端无法完整显示</span>
        <span>请前往PC端官方网站进行浏览</span>
      </div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: null,
      loading: false,
      pdf: "./pdf/98ud.pdf",
      big: true,
      top: false,
      y: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollbox, true);
    window.scrollTo(0, 0);
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
  methods: {
    handleScrollbox() {
      //this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      this.y = window.pageYOffset;
    },
    toTop() {
      window.scrollTo(0, 0);
    },
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
.bigbox {
  display: flex;
  flex-direction: column;
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
  height: 240vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 15vh;
  padding: 10vh 0;

  .hOne {
    width: 60%;
    border-bottom: 2px solid #ff5a00;
    height: 10vh;
    margin: 0 auto;
    font-size: 24px;
    text-align: center;
    line-height: 10vh;
    animation: an 1s 5 alternate;
    margin-bottom: 5vh;
  }
  h2 {
    margin-bottom: 5vh;
  }
  .pdf {
    height: 90%;
    width: 50%;
    background-color: #fff;
    overflow: scroll;
    margin-bottom: 5vh;
    img {
      width: 100%;
    }
  }
}
/* 标题下的线条动画 */
@keyframes an {
  from {
    width: 40%;
  }
  to {
    width: 60%;
  }
}

// 移动端的样式
.pmd-outer {
  // 标题行
  .hOne {
    font-size: 19px;
    text-align: center;
    margin: 30px 0 20px 0;
  }
  // 分割线
  .hOne-line {
    width: 94%;
    height: 2.5px;
    margin: 0 auto;
    background: #ff5a00;
    // opacity: 0.9;
  }

  // 内容
  .pmd-showContent {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    span {
      font-size: 18px;
      font-family: "微软雅黑";
      color: #5a5a5a;
    }
  }

  .pmd-pdf {
    // width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        margin: 20px 0;
    }
    .pdf {
        border: 1px solid gray;
      height: 500px;
      width: 80%;
      background-color: #fff;
      overflow: scroll;
      margin-bottom: 5vh;
      img {
        width: 100%;
      }
    }
  }
}
</style>