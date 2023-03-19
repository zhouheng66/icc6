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
    <Header></Header>
    <!-- 头和脚的中间部分 -->
    <div v-if="big" class="body">
      <!-- 标题 -->
      <h1 class="hOne">2022-2023年度全球发明大会中国区参赛入口</h1>
      <!-- 标题和图片中间部分 -->
      <span>报名通道正在测试中，近期即将上线，敬请期待！</span>
      <!-- 下面的大图片 -->
      <div class="img"><img src="./image/banner1.jpg" alt="" /></div>
    </div>

    <!-- 移动端 -->
    <div v-else class="pmd-outer">
      <!-- 标题 -->
      <h1 class="hOne">2022-2023区竞赛入口</h1>
      <div class="hOne-line"></div>
      <div class="pmd-showContent">
        <span>※该页面手机端无法完整显示</span>
        <span>请前往PC端官方网站进行浏览</span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: true,
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
span,div,h1,h2,h3{
  cursor: pointer;
}
.bigbox {
  overflow-x:hidden;
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
  height: 120vh;
  width: 100%;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .hOne {
    width: 60%;
    border-bottom: 2px solid #ff5a00;
    height: 10vh;
    margin: 0 auto;
    font-size: 24px;
    text-align: center;
    line-height: 10vh;
    animation: an 1s 5 alternate;
  }
  span {
    font-size: 19px;
    font-weight: 900;
    height: 20vh;
    line-height: 20vh;
    text-align: center;
  }
  .img {
    width: 80%;
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
}
</style>