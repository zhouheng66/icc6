<template>
  <div :class="{ Header: big, small: !big }">
    <div class="img" v-if="big">
      <img src="./image/icon.png" alt="" class="img1" />
      <img src="./image/icon2.png" alt="" class="img2" />
    </div>
    <!-- 下面是移动端的logo -->
    <div v-else  class="img"> 
        <img src="@/assets/anhui.png" alt="" class="img1"  />
        <img src="@/assets/iccLogo.png" alt="" class="img2" />
    </div>
    <!-- pc端导航 -->
    <div class="nav" v-if="big">
      <ul>
        <li @click="home" :class="{ blue: blue == 'Home' }">首页</li>
        <li @click="about" :class="{ blue: blue == 'About' }">关于ICC</li>
        <li @click="rules" :class="{ blue: blue == 'Rules' }" class="show">
          2022-2023ICC
          <!-- 鼠标hover显示小导航 -->
          <div class="newNav">
            <ul>
              <li v-for="(i, index) in arr" :key="index" @click="toNewPage(index)">{{ i }}</li>
            </ul>
          </div>
        </li>
        <li @click="news" :class="{ blue: blue == 'News' }">新闻热点</li>
        <li @click="phone" :class="{ blue: blue == 'Call' }">联系我们</li>
      </ul>
    </div>
    <!-- 手机端的样式 -->
    <div class="nav2" v-else @click="nav2to">
        <!-- 图标 -->
        <div class="icon-outerBorder">
            <div class="icon-bck">
                <svg
            t="1678416825991"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2790"
            width="32"
            height="32"
        >
        <path
          d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z"
          fill="#fff"
          p-id="2791"
        ></path>
        <path
          d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z"
          fill="#fff"
          p-id="2792"
        ></path>
        <path
          d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z"
          fill="#fff"
          p-id="2793"
        ></path>
                </svg>
            </div>
        </div>
    </div>
    <!-- 点击菜单按钮显示的内容 -->
    <div v-show="nav" class="nav2to">
        <!-- 遮罩层 里面每一个选项 -->
        <div class="icon-mask">
            <ul class="icon-Lists">
            <li @click="home" :class="{ blue: blue == 'Home' }">首页</li>
            <li @click="about" :class="{ blue: blue == 'About' }">关于ICC</li>
            <li @click="news" :class="{ blue: blue == 'News' }">新闻热点</li>
            <li  class="drow-downMenu"> <span  @click="rules">2022-2023ICC</span>  <span class="headedarrow" @click="showIcc=!showIcc">»</span>  </li>
            <div  class="showIcc-Lists" v-if="showIcc">
                <!--  -->
                <router-view></router-view>
                <router-link to="/page1">  <li>竞赛规则</li> </router-link>
                <router-link to="/page2">  <li>竞赛内容</li> </router-link>
                <router-link to="/page3">  <li>参赛材料</li> </router-link>
                <router-link to="/page4">  <li>参赛入口</li> </router-link>
                <router-link to="/page5">  <li class="entry-border">参赛答疑</li> </router-link>
            </div>
            <li @click="phone" :class="{ blue: blue == 'Call' }">联系我们</li>
            </ul>
        </div>
        <button class="close-icon-mask" @click="closeMask">✕</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      /* 移动适配 */
      big: true,
      nav: false,
      arr: ["竞赛规则", "竞赛内容", "参赛材料", "参赛入口", "参赛答疑"],
      showIcc:false,  // 用来展示2022-2033里面的数据 默认不显示
    };
  },
  props: ["blue"],
  mounted() {
    let w = window.screen.width;
    if (w < 1200) {
      this.big = false;
    }
    this.nav = false;
  },
  methods: {
    home() {
        this.nav = false
      this.$router.push({ name: "Home" });
    },
    about() {
        this.nav = false
      this.$router.push({ name: "About" });
    },
    rules() {
        this.nav = false
      this.$router.push({ name: "Rules" });
    },
    news() {
        this.nav = false
      this.$router.push({ name: "News" });
    },
    phone() {
        this.nav = false
      this.$router.push({ name: "Call" });
    },
    nav2to() {
      if (this.nav == true) {
        this.nav = false;
      } else {
        this.nav = true;
      }
    },
    /* 去2022-2023icc下面小导航的路由跳转 */
    toNewPage(index){
      if(index == 0){
        this.$router.push({name:'Page1'})
      }else if(index == 1){
        this.$router.push({name:'Page2'})
      }else if(index == 2){
        this.$router.push({name:'Page3'})
      }else if(index == 3){
        this.$router.push({name:'Page4'})
      }else if(index == 4){
        this.$router.push({name:'Page5'})
      }
    },
    closeMask(){
      
            this.nav=false
            console.log(this.showIcc)

            
       
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.Header {
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  position: fixed;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: 999;
  .img {
    display: flex;
    width: 20vw;
    margin-top: 1vh;
    .img1 {
      height: 61%;
      margin-top: 6px;
    }
    .img2 {
      height: 80%;
      margin-left: 1vw;
    }
  }
  .nav {
    width: 50vw;
    height: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      /* 鼠标滑过显示小导航 */
      .show:hover
      .newNav{
        display: block;
      }
      .show{
        position: relative;
      }
      li {
        list-style: none;
        width: auto;
        height: 100%;
        margin-right: 5vw;

        font-size: 1vw;
                line-height: 15vh;
        /* 鼠标hover显示的小导航*/
        .newNav {
          margin-top: 8px;
          left: -0.5vw;
          top: 12vh;
          position: absolute;
          width: 8vw;
          height: 25vh;
          background: rgba(8, 8, 8, 0.7);
          display: none;
          ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li {
              margin-right: 0;
              list-style: none;
              width: 100%;
              text-align: center;
              align-items: center;
              color: #fff;
              line-height: 5vh;
              font-size: 12px;
            }
            /* 滑过改变li的样式 */
            li:hover{
              background-color: #2e2928;
              color:#eb5f2a
            }
          }
        }
        .newNav:hover{
          display: block;
        }
      }
      .blue {
        color: skyblue;
      }
      li:hover {
        color: skyblue;
        cursor: pointer;
      }
    }
  }
}
// 移动端样式
.small {
  display: flex;
  flex-direction: column;
  align-items: center;
//   width: 100vw;
//   padding: 0 2vw;
  box-sizing: border-box;
  background-color: #111111;
  .img {
    display: flex;
    width: 100%;
    .img1 {
      width: 40%;
      margin-top: 0.5vw;
      height: 50%;
      margin-top: 3%;
      margin-right: 10px;
    }
    .img2 {
      width: 50%;
      margin-left: 1vw;
    }
  }

//   菜单按钮
//   点击菜单显示的遮罩层
  .nav2to {
    width: 100vw;
    height: 170vh;

    position: fixed;
    top: 0;
    background: rgba(8, 8, 8, 0.3);
    z-index: 999;
    text-align: center;
    // margin-top: 1vh;
    // font-size: 4vw;
    // margin-top: 5vh;
    /*   animation: right2 1s; */
    overflow: hidden;
    
    // 首页文字列表
    .icon-Lists {
        margin-top: 8vh;
        
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        // gap: -10px;
        // margin-left: 2vw;
        
      li {
        height: 30px;
        font-family:"Microsoft YaHei";
        font-size: 16px;
        padding: 0 18px;
        color: #fff;
        z-index: 988;
        margin-top: 20px;
      }
    //   第4个li有下拉菜单的效果
      .drow-downMenu{
        // background: red;
        display: flex;
        height: 21px;
        width:60%;
        align-items: center;
        justify-content: space-between;

        // 下拉菜单的按钮>>
        .headedarrow{
            // display: inline-block;
            position: absolute;
            right: 10px;
            width: 50px;
            font-size: 28px;
            // margin: 0 0 3px 0;
            z-index: 999;

        }
      }

    // 下拉菜单Icc竞赛规则列表样式
    .showIcc-Lists{
        background:#5a5a5a ;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: flex-start;
        width: 100%;
        li{
            margin: 0;
            margin-left: 34px;
            display: inline-block;
            padding: 0;
            width: 100%;
            height: 30px;
            text-align: left;
            line-height: 40px;
            border-bottom: 1px solid #686666;
          
        }
        // 最后一个不要边框
        .entry-border{
                border-bottom: none;

            }
        
    }
    }

        // 关闭遮罩层按钮 close-icon-mask
        .close-icon-mask{
            z-index: 1999;
            position: absolute;
            top: 4px;
            right: 5px;
            width: 50px;
            height: 50px;
            color: snow;
            font-weight: 300;
            font-size: 30px;
            border-radius: 3px;
            background:rgba(128, 128, 128, 1);
        }
  }
}

// 移动端菜单样式
.nav2 {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border:1px solid gray ;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1999;
    
//   菜单图标样式的设置
    .icon-bck{
        width: 40px;
        height: 40px;
        background: rgba(128, 128, 128, 0.8);
        border-radius: 50%;
        .icon{
            margin-left: 3.9px;
            margin-top: 4px;
        }
    }
  }

@keyframes right2 {
  from {
    height: 0;
  }

  to {
    height: 150px;
  }
}
</style>