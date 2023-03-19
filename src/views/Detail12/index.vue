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
        <h3 style="">
          新闻动态 | 2022-2023年度全球发明大会中国区工作组全国会议在沪召开
        </h3>
        <div class="top">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-03-09</span>
          <span>86 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back">< &nbsp;返回</div>
          <img src="./image/1.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第一张图片下面的小字 -->
          <span class="sfont"
            >图：中国友好和平发展基金会
            <br />
            及23个ICC省级协调单位共聚上海</span
          >
          <span
            >2023年3月5日，
            2022-2023年度全球发明大会中国区（ICC）工作组全国会议于中国上海召开。ICC主办方中国友好和平发展基金会秘书长王龙社、项目管理部主任邵帅、项目管理部专员贾骥，中国友好和平发展基金会恒爱致远青少年创新基金发起方、恒源祥（集团）有限公司副总经理刘帅，ICC中国区召集人王维廉及23位ICC省级召集人，就2022-2023年度竞赛活动的筹备情况以及科创教育理念进行了深度的汇报和交流工作。</span
          >
          <strong>发挥平台优势，确保可持续发展</strong>
          <img src="./image/2.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第二张图片下面的小字 -->
          <span class="sfont">图：中国友好和平发展基金会秘书长王龙社</span>
          <span
            >王龙社秘书长代表中国友好和平发展基金会致辞，对各个省级召集人的与会表示感谢。他向大家介绍了中国人民对外友好协会及中国友好和平发展基金会的基本情况，阐述了主办ICC竞赛活动的初衷，并回顾了ICC的赛事历史</span
          >
          <span
            >2022年，ICC成为了由教育部办公厅发布的2022-2025学年面向中小学生的全国性竞赛活动之一，踏上了新台阶，拥有了新使命。为响应科教兴国战略和二十大报告中
            <strong
              >“必须坚持科技是第一生产力、人才是第一资源、创新是第一动力”</strong
            >
            的号召，培养年轻一代勇于投身实践，发展自我，成就事业，ICC为中外青少年科技创新交流搭建了国际平台。王龙社秘书长认为：“ICC将筑牢中外青少年民间友好关系基础，吸纳前沿科技创新理念，为世界的发展提供更多的中国智慧、中国方案。”
          </span>
          <span
            >为更好地落实国家对科技创新型人才的培养要求，打造更规范化、专业化的竞赛活动，王龙社秘书长提出以下四点建议：
            <strong
              >优化赛事规则，人才强会；确保赛事公益属性，依规治会；确保竞赛活动“零收费”，信誉立会；不断扩大活动影响力，合作共赢，发展兴会。</strong
            >
            并由衷希望ICC的所有参与者能够秉持共同的理想信念，让竞赛活动长久发展。</span
          >
          <strong>链接社会资源，灌溉向善新科苗</strong>
          <img src="./image/3.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第三张图片下面的小字 -->
          <span class="sfont">图：恒源祥（集团）有限公司副总经理刘帅</span>
          <span
            >中国友好和平发展基金会恒爱致远青少年创新基金荣誉发起方、恒源祥（集团）有限公司副总经理刘帅表示，恒源祥希望能够通过ICC竞赛活动，传播公益和科创的理念，鼓励孩子探索世界，激发青少年发明创造的热情，给予他们积极的鼓励、有效的方法，为他们搭建一个展示的平台，并期待着ICC能够在未来成为青少年创新发明界的“奥林匹克”。</span
          >
          <strong>肩负使命担当，成就未来中国梦</strong>
          <img src="./image/4.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第四张图片下面的小字 -->
          <span class="sfont">图：全球发明大会中国区召集人王维廉</span>
          <span
            >ICC中国区召集人王维廉为各个省级召集人的到来致谢，并表示：“培养具有科学创新精神和社会责任的中国青少年，集结世界的力量，成就中国的梦想，发现他们、成就他，我们责无旁贷。</span
          >
          <span
            >本次会议上，来自全国各地的23个ICC省级召集人分别汇报了赛事筹备情况，并进行热烈交流。在ICC中国区召集人王维廉介绍2022-2023ICC竞赛活动的进展情况过后，山东召集人赵磊、江苏召集人郭俭和福建召集人余熙作为省级召集人代表，分别进行了精彩的演说，分享了他们丰富的科创教育及赛事组织经验。会中，王龙社秘书长为各个省级协调单位及ICC专家代表颁发证书。</span
          >
          <strong>汇聚最强大脑，开拓科创新局面</strong>
          <img src="./image/5.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第五张图片下面的小字 -->
          <span class="sfont"
            >图：ICC中国区召集人王维廉、山东召集人赵磊、
            <br />
            江苏召集人郭俭、福建召集人余熙</span
          >
          <!-- 放那24张拿着证书的合照 -->
          <div>
            <img src="./image/6.jpg" alt="" :style="big? '':'width:100%'"/>
            <img src="./image/7.jpg" alt="" :style="big? '':'width:100%'"/>
            <img src="./image/8.jpg" alt="" :style="big? '':'width:100%'"/>
            <img src="./image/9.jpg" alt="" :style="big? '':'width:100%'"/>
          </div>
          <!-- 第六张图片下面的小字 -->
          <span class="sfont">图：王龙社秘书长为各省级协调单位颁发证书</span>
          <img src="./image/10.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第七张图片下面的小字 -->
          <span class="sfont">图：王龙社秘书长为专家代表颁发证书</span>
          <span
            >ICC将携手各省级协调单位，集结深耕在教育领域的行家志士，为培养未来科创人才贡献一份力量，不负韶华，成就青少年科创之梦，成就中国教育之梦。</span
          >
          <img src="./image/11.jpg" alt="" :style="big? '':'width:100%'"/>
          <!-- 第八张图片下面没有小字 -->
        </div>
      </div>
      <div :class="{ sfoot: big, smallFoot: !big }">
        <span @click="up"
          >上一篇：信息发布 ｜
          竞赛介绍 | 聚焦SDGs，15个竞赛主题蓄势待发</span
        >
        <span @click="down"
          >下一篇：信息发布 | 2022-2023年度全球发明大会中国区竞赛活动规则</span
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
      this.$router.push({ name: "Detail13" });
    },
    down() {
      this.$router.push({ name: "Detail" });
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
    h3 {
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
      span {
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
      /* 图片下面的小字 */
      .sfont {
        font-size: 12px;
        font-weight: 500;
        text-align: center;
      }
      span {
        font-size: 15px;
        line-height: 4vh;
        font-family: "微软雅黑";
        font-weight: 300;
        margin: 1vh 0;
        strong {
          color: #07b9f1;
        }
      }
      strong {
        margin-bottom: 2vh;
      }
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
    .foot {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 15vh;
      font-size: 1vw;
      .left {
        display: flex;
        flex-direction: column;
      }
      .right {
        display: flex;
        flex-direction: column;
        text-align: right;
        width: 50%;
        margin-top: 10vh;
      }
    }
    /* 图片的大小 */
    img {
      width: 50%;
    }

    // 标题样式的设置
    .middle-title {
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