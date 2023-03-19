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
    <Header />
    <div class="bigboder" :class="{ bigboder2: !big }">
      <div class="middle" :class="{ middle2: !big }">
        <h3 class="middle-title">
          信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第五批）
        </h3>
        <div class="top">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-02-24</span>
          <span>70 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back">< &nbsp;返回</div>
          <h2 class="topH2">
            <span>2022-2023年度全球发明大会中国区</span>
            <span>拟在各地开展活动的协调单位名单</span>
            <span>（第五批)</span>
          </h2>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;根据全球发明大会中国区省级选拔赛组织要求，拟邀请以下单位：山西宝佳教育科技有限公司、石家庄蓝兴教育科技有限公司、云南通飞科技有限公司，协助全球发明大会中国区工作组在山西省、河北省、云南省开展赛事筹备活动。
          </span>
          <span
            >&nbsp;&nbsp;&nbsp;&nbsp;各协调单位须严格落实教育部办公厅等四部门关于印发《面向中小学生的全国性竞赛活动管理办法》(教监管厅函〔2022〕4号)的文件要求，遵照《2022-2023年度全球发明大会中国区竞赛活动规则》的要求在各地开展赛事组织协调工作。</span
          >
        </div>
        <div class="foot">
          <div class="left">
            <span>联系邮箱：</span> <span>contact@inventionconvention.cn</span>
          </div>
          <div class="right">
            <span>全球发明大会中国区工作组秘书处</span>
            <span>2023年2月24日</span>
          </div>
        </div>
      </div>
      <div :class="{ sfoot: big, smallFoot: !big }">
        <span @click="up"
          >上一篇：公益培训 | 直通ICC竞赛内容，引领科创公益新潮流</span
        >
        <span @click="down"
          >下一篇：新闻动态 |
          桐乡市科协主席沈玉林一行调研全球发明大会中国区</span
        >
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
    up() {
      this.$router.push({ name: "Detail2" });
    },
    down() {
      this.$router.push({ name: "Detail4" });
    },
    back() {
      this.$router.push({ name: "News" });
    },
    handleScrollbox() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
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
.bigboder2 {
  margin-top: 0 !important;
}
.bigboder {
  margin-top: 15vh;
//   height: 120vh;
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
    .text {
      h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: baseline;

        span {
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
    .middle-title {
      display: block;
      font-family: SimSun;
      font-size: 18px;
      color: #426100;
      font-weight: bold;
      text-decoration: none;
      text-align: center;
      line-height: 30px;
    }
  }
  .middle {
    // height: 90%;
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
      
      span {
        display: inline-block;
        font-size: 13px;
        opacity: 0.7;
      }
      .time {
        margin: 0 3vh;
      }
    }
    // h3 {
    //   font-size: 1.5vw;
    //   color: #4f6eaa;
    //   text-align: center;
    // }

    // zhangqiang
    // .text {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   h2{
    //     text-align: center;
    //     margin-top: 3vh;
    //     line-height: 40px;
    //     font-size: 1.5vw;
    //   }
    //   span {
    //     font-size: 1vw;
    //     line-height: 4vh;
    //     margin: 2vh 0;
    //     strong {
    //       color: #07b9f1;
    //     }
    //   }
    // }

    .text {
      .topH2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        span {
          font-size: 14px;
          font-weight: 700;
          text-align: center;
        }
      }
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgb(34, 34, 34);
      margin-top: 0;
      text-align: justify;
      span {
        font-size: 15px;
        line-height:25px;
        font-family: "微软雅黑";
        font-weight: 300;
        // margin: 1vh 0;
        strong {
          color: #07b9f1;
        }
      }
    }
    .foot {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: space-between;
      width: 100%;
      margin-top: 15vh;
      font-size: 14px;
      .left {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
      .right {
        display: flex;
        flex-direction: column;
        text-align: right;
        width: 100%;
      }
    }
    img {
      width: 100%;
    }


  }
}
.sfoot {
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
  color: #444 !important;
  font-weight: normal;
  line-height: 25px;
  span:hover {
    color: skyblue;
  }
}
.smallFoot {
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
.back {
  margin-left: -90%;
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
  //   font: 15px Arial,"宋体",Helvetica, sans-serif,Verdana;
}
.back:hover {
  color: skyblue;
}
</style>