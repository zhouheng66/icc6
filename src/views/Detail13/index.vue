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
        <h1 class="middle-title">竞赛介绍 | 聚焦SDGs，15个竞赛主题蓄势待发</h1>
        <div class="top" :class="{ top2: !big }">
          <span v-if="big">作者:全球发明大会中国区</span>
        <span v-else>来源</span>
          <span class="time">发布时间: 2023-03-09</span>
          <span>259 次浏览</span>
        </div>
        <div class="text">
          <div class="back" @click="back"><返回</div>
          <span
            >为引导青少年关注社会，用科创的力量解决问题，帮助建设美好的未来社区，2022-2023年度全球发明大会中国区（ICC）竞赛活动结合
            <strong
              >“十四五”规划和2035年远景目标纲要，以及联合国提出的可持续发展目标（SDGs）</strong
            >
            ，设置了15个竞赛主题和驱动性问题。</span
          >
          <img src="./image/1.png" alt="" :style="big? '':'width:100%'"/>
          <!-- 小标题 -->
          <h3>
            无障碍世界
            <br />
            Accessibility for All
          </h3>
          <span
            >我们生活周围存在着各种各样的障碍，一直以来，人们都在想方设法地去消除它们，尽可能地创造一个无障碍的世界——楼梯旁会有坡道，就是为了方便人们运输行李；电梯按钮上有盲文，还有语音提示，就是为了让视障人士也能摸到、听到；电视节目里配有手语解说，就是为了让聋哑人士也能看明白……只有消除障碍，才能让我们的社会更文明、更美好。
            <strong>我们如何才能创造一个无障碍的世界？</strong>
            在这个主题中，小发明家将保持好奇，用发现的眼光调查现实世界存在的障碍，并利用创新来打破它们，以此创造一项发明，带来更开放、更畅通的世界。</span
          >
          <h3>
            包容与关爱
            <br />
            Including Everyone
          </h3>
          <span
            >没有人喜欢被冷落。但有时候，人们可能会受到不公的对待。或许，我们可以试着放下脚步，看看身边的人，是不是需要我们的关注——我们可以帮助沉默寡言的同学更好地融入群体，让他们感觉到温暖；我们可以帮助成绩较差的同学，让他们找到合适的学习方法……生活中充满包容与关爱，才会让这个世界更和谐。
            <strong>我们如何才能让生活更具包容性？</strong>
            在这个主题中，小发明家将发起调查，深入了解生活中边缘化群体的状况和需求，并创造出一项发明，帮助他们感到被重视，并在社会中发挥充分并积极的作用。</span
          >
          <h3>
            可持续社区
            <br />
            Sustainable Communities
          </h3>
          <span
            >一个可持续发展的社区强调满足现有和未来的居民、其子孙和其他使用者的各类需求。提高生活品质的同时，也需要注意建造不会过度使用自然资源、或对环境造成破坏的社区。当我们的行为带来不可持续性的影响时，就会对我们居住的地方和地球造成持久的破坏。人类所有的行为都会对地球的健康产生重大影响。
            <strong>我们如何使我们的社区更具可持续性？</strong>
            在这个主题中，小发明家们将把目光投向我们身边的场景，关注我们生活、学习和娱乐的地方，并创造出一项发明，能够给我们所有人带来更加可持续的生活方式。</span
          >
          <h3>
            守护蓝色海洋
            <br />
            A Blue Revolution
          </h3>
          <span
            >海洋是地球的肺，它产生了我们人类呼吸所需一半以上的氧气，并且是地球上一半以上生命的家园。但在过去的几个世纪里，我们滥用了海洋，将其作为我们的垃圾倾倒场。我们正在使海洋窒息，这影响了我们人类现在及未来共同的命运。
            <strong>我们如何保护好我们的海洋？</strong>
            在这个主题中，小发明家将要调查海洋的状况，反思我们做了什么，并想象一个更美好、更健康发展的世界，然后设计一项帮助我们创造这个美好世界的发明。</span
          >
          <h3>
            未来学校
            <br />
            Future Schools
          </h3>
          <span
            >学校，是学生成长的主要场所和学习的主阵地。好的学习环境和学习方式能够帮助学生丰富校园生活，提升学习效率，持续为未来作好准备。当前，我们能够通过“人脸识别”，更快速安全地进出学校；使用多功能学习桌椅，能够预防同学们近视，让学习更有效……
            <strong>我们如何让学校变得更好？</strong>
            在这个主题中，小发明家将使用创新思维重新思考学校的建设，创造一项发明使学校变得更有趣、更具包容性、更适合培养未来的人才。</span
          >
          <h3>食品的未来 The Future of Food</h3>
          <span
            >2057年左右，人口将达到 100 亿。这意味着将有100
            亿张嘴巴需要供养。尽管我们已经学会了利用地球资源来最大限度地提高粮食产量，但这也付出了颇为沉重的代价。我们烧毁了大片森林来养牛，我们的化学品和密集的耕作方法破坏了表土层，而这需要数十年才能自然修复……除非我们能改变我们的态度和方法，否则在未来，我们将要去面对更多难以复原的自然灾害。 <strong>我们如何保证未来食品的供给和安全？</strong> 在这个主题中，小发明家将创新思维应用到未来世界的食品供给和安全问题上，创造一项发明来加强未来人类所在地区的粮食供给及安全。</span
          >
          <h3>
            零浪费生活
            <br />
            Nothing Wasted
          </h3>
          <span
            >资源浪费的现象在我们的日常生活中随处可见——喝了一口就扔了的矿泉水，一直在放水的水龙头，无人的房间里没有及时关闭的电风扇……这些行为都造成了很大的浪费。不仅如此，由于浪费，每天产生的大量垃圾正在让我们的星球“窒息”。我们每天都会丢弃塑料、纸张、罐头、玻璃等等，学校、工厂、企业产生的垃圾流向了我们的河流、海洋和街道，最终对环境造成了极大的破坏。 <strong>我们如何才能创造一个零浪费的世界？</strong> 我们可以尝试回收再生产，也可以尝试重复使用，但最好的解决方案就是不要过度使用。小发明家将探索日常生活中的浪费问题，调查身边的家园和社区，并创造一项发明，帮助我们减少浪费和废物产生——让地球健康地呼吸。</span
          >
          <h3>老年福祉 Help the Aged</h3>
          <span
            >我们每个人都会变老。变老时，生活会变得特别艰难。不管是在家中还是出行，都会遇到困难。不仅如此，当今世界瞬息万变，新技术、新生活方式也会让老人寸步难移。但我们都知道，老年人群不是负担——他们是阅历和智慧的源泉。<strong>我们如何才能让老人的生活更美好？</strong> 在这个主题中，小发明家将需要与老一代们共度难忘的时光，了解他们过去的经历、现在的生活以及他们的需求。小发明家们将创造有助于改善老年人和我们所有人的发明。</span
          >
          <h3>
            水就是一切
            <br />
            Water is Everything
          </h3>
          <span
            >安全、干净的水对公众健康至关重要。当社区能够获得清洁、安全的水时，人们就会变得更健康，饥饿和贫困也会随之减少。但并非人人都能获得安全干净的水——数百万人无法获得干净的水和卫生设施，这导致了不能正常工作和学习的人数增加，甚至会加剧死亡和疾病的蔓延。水带给我们的不仅仅是解渴，干净的水可以改变人类的生活。 <strong>我们如何确保每个人都能喝到安全、干净的水？</strong> 在这个主题中，小发明家们将要研究如何获得净水的问题，并创造出帮助我们所有人都能享受美好生活的发明。</span
          >
          <h3>
            与自然为友
            <br />
            Going Wild
          </h3>
          <span
            >我们生活在天地之间，从依附自然到利用自然、再到人与自然和谐共生，人与自然的关系经历了重大的发展阶段。今天，我们逐渐意识到：人因自然而生，人与自然是一种共生关系，对自然的伤害最终会伤及人类自身，很多自然灾害已经应证了这一点。人类必须尊重自然、顺应自然、保护自然，否则就会遭到大自然的报复，这个客观规律谁也无法抗拒。<strong>我们如何才能与自然和谐共生？</strong> 在这个主题中，小发明家将创造出让人们与自然和谐相处的发明，促进人们能够形成绿色发展方式和生活方式，共建美好未来。</span
          >
          <h3>
            共向清洁未来
            <br />
            Cleaning Up the Future
          </h3>
          <span
            >根据联合国政府间气候变化专门委员会（IPCC）的统计，因人类活动（主要是燃烧化石燃料）而引起的二氧化碳变化量每年约为237亿吨。其结果就是现在大气中的二氧化碳含量比过去65万年（平均水平）高了27%。从工业革命时代开始，人类大量燃烧煤炭，二氧化碳水平开始极速上升，造成气候变化所需时间要比气候系统的自然变化周期短得多，而过量的温室气体对环境的破坏无法想象。全球气候变暖、海平面上升、大量物种灭亡、厄尔尼诺现象……人类对自然的破坏最后都会反噬人类自身。因此发展清洁能源不但是保护环境，更是保护人类自己。<strong>我们如何让更多人享用清洁能源？</strong> 在这个主题中，小发明家将深入研究清洁能源并创造一项发明，为我们提供清洁能源的解决方案。</span
          >
          <h3>
            传承与弘扬中华文明
            <br />
            Preserving the Past
          </h3>
          <span
            >文化是一个国家、一个民族的精神家园。中华文明是四大古文明中唯一没有中断的文明，中华民族在长期生产生活实践中产生和形成的优秀传统文化，为我们民族的生息、发展和壮大提供了丰厚的精神滋养。但在社交媒体的影响下，世界不断缩小，我们的传统文化面临着被忽视的危险。<strong>我们如何才能传承和讲好中华文化？</strong> 在这个主题中，小发明家将要研究优秀的传统中华文化，以及这些文化如何在日常中影响到了自身和家庭，并创造一项发明，来帮助传承与弘扬优秀传统文化。</span
          >
          <h3>
            保持安全
            <br />
            Staying Safe
          </h3>
          <span
            >危险无处不在。我们的世界总会隐藏一些我们看不到的危机。不管是在我们的家中、我们的学校、娱乐的场所、逛街以及搭乘交通工具途中，都有可能发生意外——我国每年因疲劳驾驶直接引发的道路交通事故10万余起，造成9万余人死亡或重伤；每年有超2万名的儿童死于触电……看到这些触目惊心的数字，我们是不是可以通过发明创造，来做些什么？ <strong>我们如何才能让我们的世界更安全？</strong> 在这个主题中，小发明家寻找他们周围的危险情况，并找到创新的解决方案，让生活变得更加安全。</span
          >
          <h3>
            健康的未来
            <br />
            A Healthy Future
          </h3>
          <span
            >据统计，我国每天有超过2亿年轻人在熬夜，因为熬夜、压力、不健康饮食、长时间不运动等等，很多人年纪轻轻就肠胃不好、身体虚、甚至脱发等，或多或少处于一种“亚健康”的状态。健康是我们每个人正常生活的基础，如果没有了健康，那么一切的外在条件都将失去意义。 <strong>我们如何才能构建一个更健康的未来？</strong> 在这个主题中，小发明家们将用他们的创新思维创造一项发明，让我们在当今快节奏生活方式的浪潮中保持健康，并帮助下一代也能有一个健康的生活方式。</span
          >
          <h3>
            让乡村生活更美好
            <br />
            Better Village Life
          </h3>
          <span
            >郡县治则天下安，乡村治则国家稳，乡村是国家的基础。但就目前而论，与城市相比，由于基础设施的不完善，乡村地区在环保、卫生、教育、就业等方面有着很多问题，这些都会影响子孙后代的生活。这样的未来农村生活并非人们所希望的，我们需要让乡村生活变得更美好。<strong>我们如何建设宜居宜业和美乡村？</strong> 在这个主题中，小发明家将把他们的创新思维应用到我们的乡村建设中，并创造出能够在未来打造和美乡村的发明。</span
          >
        </div>
      </div>
      <div :class="{ sfoot: big, smallFoot: !big }">
        <span @click="up">上一篇：无</span>
        <span @click="down"
          >下一篇：新闻动态 |
          2022-2023年度全球发明大会中国区工作组全国会议在沪召开</span
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
    up() {},
    down() {
      this.$router.push({ name: "Detail12" });
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
  height: 120vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  h1 {
    // margin-bottom: 5vh;
    font-size: 20px;
    color: #1c4587;
    text-align: center;
  }

  .middle2 {
    width: 100vw !important;
    // 标题样式的设置
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
      color: rgb(34, 34, 34);
      margin-top: 0;
      text-align: justify;
      span {
        font-size: 14px;
        line-height: 4vh;
        font-family: "微软雅黑";
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
      .right {
        text-align: right;
        margin-top: 20px;
      }
    }
    img {
      margin: 0 auto;
      width: 60%;
      margin-bottom: 5vh;
    }
  }
}
.sfoot {
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