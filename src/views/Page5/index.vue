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
    <div v-if="big" class="body">
      <!-- 标题 -->
      <h1 class="hOne">常见参赛问题答疑</h1>
      <!-- 标题下面的整个大盒子，左边放分栏右边放二维码 -->
      <div class="inBody">
        <!-- 左侧分类区域 -->
        <div class="left">
          <!-- 头部分栏导航 -->
          <div class="nav">
            <ul>
              <li
                v-for="(i, index) in arr"
                :key="index"
                :class="active == index ? 'active' : ''"
                @click="act(index)"
              >
                {{ i }}
              </li>
            </ul>
          </div>
          <!-- 第一个导航栏下面对应的内容 -->
          <div class="text" v-if="active == 0">
            <!-- 每个小文章的外层容器 -->
            <div class="list">
              <!-- 用li写的每个小文章 -->
              <ul>
                <li>
                  <h2>参加ICC竞赛活动需要收取报名费吗？</h2>
                  <span
                    >不收费。根据教育部办公厅等四部门印发《面向中小学生的全国性竞赛活动管理办法》的管理规定，2022-2025年度全球发明大会中国区竞赛活动不向参赛选手收取报名费用。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章 -->
              <ul>
                <li>
                  <h2>参加ICC竞赛活动需要收取报名费吗？</h2>
                  <span
                    >不收费。根据教育部办公厅等四部门印发《面向中小学生的全国性竞赛活动管理办法》的管理规定，2022-2025年度全球发明大会中国区竞赛活动不向参赛选手收取报名费用。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章2 -->
              <ul>
                <li>
                  <h2>报名区域有限制吗？？</h2>
                  <span
                    >有。ICC各省级赛区严格按照省级行政区域进行划分，参赛团队应当选择所属省份报名参加ICC省级选拔赛。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章3 -->
              <ul>
                <li>
                  <h2>参赛团队可以跨省、跨校组队吗？</h2>
                  <span
                    >ICC允许参赛团队跨省或跨校组队。不同省份的学生组队报名参赛，参赛团队所属省份以队长登记的省份信息为准，所有队员都将获得同一省份的省赛奖项。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章4 -->
              <ul>
                <li>
                  <h2>参赛队员所在的省份没有省级赛区怎么办？</h2>
                  <span
                    >ICC工作组将为没有省级赛区的省份统一开设线上赛区，举办线上选拔赛。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章5 -->
              <ul>
                <li>
                  <h2>参赛团队的所有队员都需要在报名通道提交报名吗？</h2>
                  <span
                    >每位队员都需要在竞赛平台上注册个人帐号，并申请加入团队；队长负责完成项目资料上传和报名申请表的填报工作，队员无需操作；在参赛团队报名过程中，每位队员都需要在线完成参赛协议的签署。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章6 -->
              <ul>
                <li>
                  <h2>参赛团队报名人数有限制吗？可以报名多个项目吗？</h2>
                  <span
                    >每个参赛团队的报名人数范围为1到4人；同一队员只能参加一个参赛团队，不可重复参赛。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章7 -->
              <ul>
                <li>
                  <h2>参赛团队中有不同年级的队员，报名时如何选择参赛组别？</h2>
                  <span>参赛团队的组别由团队中年级最高的队员决定。</span>
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章8 -->
              <ul>
                <li>
                  <h2>不同学制的学生在报名注册时，如何填写自己的年级？</h2>
                  <span>学生可以根据下面这张对照表，填写自己的所属年级。</span>
                  <img src="./image/2.png" alt="" />
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章9 -->
              <ul>
                <li>
                  <h2>幼儿园的孩子可以和小学生组队参赛吗？</h2>
                  <span
                    >不可以。就读幼儿园的学生不可以报名参加ICC竞赛活动。ICC是一项面向青少年儿童的发明类赛事，包括参与对象为幼儿园学生的非竞赛活动部分和参赛对象为小学、初中、高中、中专、职高学生的竞赛活动部分。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章10 -->
              <ul>
                <li>
                  <h2>参赛团队或队员信息有变化可以更改吗？</h2>
                  <span
                    >在参赛团队报名省赛的报名通道关闭前可以更改团队信息；报名通道关闭后，不可再更改信息。如果队长的所属省份或队员的年级信息发生了变化，会影响到团队报名的赛区或组别，相关信息请谨慎填写或更改。报名截止后，只可进行团队人员删减，不可进行人员顺序调整及人员添加。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章10 -->
              <ul>
                <li>
                  <h2>
                    参赛团队中有队员缺席比赛，其他队员还能继续参与比赛吗？
                  </h2>
                  <span
                    >如果参赛团队全体成员缺席，按团队缺席处理，取消该团队参赛资格。如果部分队员缺席比赛，其他队员仍然可以继续参加参赛，取消缺席队员的获奖资格。</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- 第二个导航栏下面对应的内容 -->
          <div class="text" v-if="active == 1">
            <div class="list">
              <!-- 用li写的每个小文章 -->
              <ul>
                <li>
                  <h2>所有的作品参赛项目材料都是用中文呈现吗？</h2>
                  <span
                    >参赛团队可以选择中文/英文准备参赛项目材料。若晋级全球邀请赛，则需要用英文呈现。进入全球邀请赛的选手有数周的时间准备英文材料，如有交流障碍也不必担心语言能力，赛会组织方会在交流过程中配备翻译。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章 -->
              <ul>
                <li>
                  <h2>选择英文作为评审语言，是否有优势？？</h2>
                  <span
                    >ICC竞赛活动的官方评审语言为中文或英文，参赛作品材料、项目路演和答辩均接受中文或英文表达。参赛团队无论选择中文还是英文作为评审语言不会带来额外的优势。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章2 -->
              <ul>
                <li>
                  <h2>发明日志可以写成论文的形式吗？</h2>
                  <span
                    >符合“发明日志”内容和格式要求的参赛材料都是接受的，日志结构不限。官方提供的发明日志模版仅供参考。“发明日志”的内容须包含发现、定义、设计、制作和优化等发明历程。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章3 -->
              <ul>
                <li>
                  <h2>参赛团队可以跨省、跨校组队吗？</h2>
                  <span
                    >ICC允许参赛团队跨省或跨校组队。不同省份的学生组队报名参赛，参赛团队所属省份以队长登记的省份信息为准，所有队员都将获得同一省份的省赛奖项。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章4 -->
              <ul>
                <li>
                  <h2>
                    低年龄学生识字数量有限，可以请家长或老师帮忙填写发明日志吗？
                  </h2>
                  <span
                    >原则上，学生发明日志需要学生自行填写。二年级及以下学生允许用口述方式说明发明过程，请家长或辅导老师协助整理成文字，完成参赛材料。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章5 -->
              <ul>
                <li>
                  <h2>APP或软件产品能否报名参赛？？</h2>
                  <span
                    >当然可以。无论是实物发明还是软件发明，只要参赛资料符合ICC竞赛活动规则的参赛要求，都可以报名参赛。ICC期待能在电脑或手机上看到运行的软件Demo。但面对低年级参赛学生，ICC也接受软件流程图。只要流程图能清楚展现软件UI交互界面，运行逻辑，并在路演环节能让评委了解软件运行模式即可。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章6 -->
              <ul>
                <li>
                  <h2>对现有材料的一种全新应用或组合算是发明吗？</h2>
                  <span
                    >对现有材料的全新应用或组合算是发明。ICC认为，对现有事物的改进，属于学生发明的范畴。在历届比赛中，多项获奖发明就是对材料的全新应用。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章7 -->
              <ul>
                <li>
                  <h2>作品只提供3D设计图，没有3D实物，是否可行？</h2>
                  <span
                    >可以。项目作品只要能清楚表达设计理念，无论是否有实物均可接受。同时，ICC鼓励学生制作作品的实物模型，在展现学生动手能力的同时，也能便于评委更好的理解学生作品。。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章7 -->
              <ul>
                <li>
                  <h2>路演视频可以添加滤镜，增强光线吗？</h2>
                  <span
                    >在保证视频画面连贯无剪辑或变速的前提下，参赛选手可以为了提升视频的观看效果而添加滤镜，增强光线或添加字幕。</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- 第三个导航栏下面对应的内容 -->
          <div class="text" v-if="active == 2">
            <div class="list">
              <!-- 用li写的每个小文章 -->
              <ul>
                <li>
                  <h2>省赛的晋级比例是多少？？</h2>
                  <span
                    >各省赛的晋级比例统一为30%。省赛评审分为两个阶段：作品合规审核阶段和评审圈评审阶段。参与省赛评审圈评审的各组别项目综合得分排名前30%的参赛团队将获得晋级资格；未通过作品合规审核的参赛团队不能参加现场评审，不计入晋级比例的统计。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章 -->
              <ul>
                <li>
                  <h2>如何确保评审的公正性？</h2>
                  <span
                    >ICC公开面向社会（主要来自学校、行业领军企业、公益组织）进行评委的招募和筛选，并对评委进行统一的规则培训，只有通过考核的评委才能参与ICC各级竞赛活动的评审。在比赛中，评委须回避与其有关系的参赛选手，例如评委不能为本人及近亲属，或者与本人及近亲属有利害关系的项目进行评审。</span
                  >
                </li>
              </ul>
            </div>
            <div class="list">
              <!-- 用li写的每个小文章2 -->
              <ul>
                <li>
                  <h2>我还有其他问题可以去哪里寻求答案？</h2>
                  <span
                    >可添加官方赛事小助手微信号进行提问。同时微信服务号“全球发明大会中国区”及订阅号“全球发明大会中国区资讯”也将开设菜单专栏，将大家提出的问题收集起来并持续更新解答。</span
                  >
                </li>
              </ul>
            </div>
            <!-- 第三个导航栏对应页面最下面的二维码 -->
            <div class="erweima">
              <img src="./image/3.jpg" alt="" />
              <span>扫描二维码，添加ICC安徽官方服务微信</span>
            </div>
          </div>
        </div>
        <!-- 右侧二维码区域 -->
        <div class="right">
          <strong>联系我们</strong>
          <span
            >如有其他问题，请扫一扫下方二维码，添加ICC安徽官方服务微信进行询问。</span
          >
          <div class="img"><img src="./image/3.jpg" alt="" /></div>
        </div>
      </div>
    </div>

    <!-- 移动端 -->
    <div v-else class="pmd-outer">
      <!-- 标题 -->
      <h1 class="hOne">常见参赛问题答疑</h1>
      <div class="hOne-line"></div>
      <div class="pmd-showContent">
        <!-- 导航栏的导航 -->
        <ul class="pmd-nav" >
          <li v-for="(item,index) in arr" :key="index" :class="{current:active==index}" @click="act(index)"><span>{{ item }}</span></li>
          <!-- <li :class="{'current':iscurrent}"><span>参赛资料相关</span></li> -->
          <!-- <li :class="{'current':iscurrent}"><span>其他问题</span></li> -->
        </ul>
        <!-- 导航栏要显示对应的内容 -->
        <div v-show="active==0" class="pmd-navShowContent ">
          <!-- 正文1 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 参加ICC竞赛活动需要收取报名费吗?
              </h1>
              <span>
                不收费。根据教育部办公厅等四部门印发《面向中小学生的全国性竞赛活动管理办法》的管理规定，2022-2025年度全球发明大会中国区竞赛活动不向参赛选手收取报名费用。
              </span>
            </div>
          </div>
          <!-- 正文2 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title"><strong>▌</strong> 报名区域有限制吗?</h1>
              <span>
                有。ICC各省级赛区严格按照省级行政区域进行划分，参赛团队应当选择所属省份报名参加ICC省级选拔赛。
              </span>
            </div>
          </div>
          <!-- 正文3 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 参赛团队可以跨省、跨校组队吗?
              </h1>
              <span>
                ICC允许参赛团队跨省或跨校组队。不同省份的学生组队报名参赛，参赛团队所属省份以队长登记的省份信息为准，所有队员都将获得同一省份的省赛奖项。
              </span>
            </div>
          </div>
          <!-- 正文4 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 参赛队员所在的省份没有省级赛区怎么办?
              </h1>
              <span>
                ICC工作组将为没有省级赛区的省份统一开设线上赛区，举办线上选拔赛。
              </span>
            </div>
          </div>
          <!-- 正文5 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 参赛团队的所有队员都需要在报名通道提交报名吗?
              </h1>
              <span>
                每位队员都需要在竞赛平台上注册个人帐号，并申请加入团队；队长负责完成项目资料上传和报名申请表的填报工作，队员无需操作；在参赛团队报名过程中，每位队员都需要在线完成参赛协议的签署。
              </span>
            </div>
          </div>
          <!-- 正文6 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 参赛团队报名人数有限制吗？可以报名多个项目吗?
              </h1>
              <span>
                每个参赛团队的报名人数范围为1到4人；同一队员只能参加一个参赛团队，不可重复参赛。
              </span>
            </div>
          </div>
          <!-- 正文7 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                参赛团队中有不同年级的队员，报名时如何选择参赛组别?
              </h1>
              <span> 参赛团队的组别由团队中年级最高的队员决定。 </span>
            </div>
          </div>
          <!-- 正文8 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                不同学制的学生在报名注册时，如何填写自己的年级?
              </h1>
              <span> 学生可以根据下面这张对照表，填写自己的所属年级。 </span>
              <img
                src="./image/2.png"
                alt=""
                style="width: 100%; height: auto"
              />
            </div>
          </div>
          <!-- 正文9 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                幼儿园的孩子可以和小学生组队参赛吗?
              </h1>
              <span>
                不可以。就读幼儿园的学生不可以报名参加ICC竞赛活动。ICC是一项面向青少年儿童的发明类赛事，包括参与对象为幼儿园学生的非竞赛活动部分和参赛对象为小学、初中、高中、中专、职高学生的竞赛活动部分。
              </span>
            </div>
          </div>
          <!-- 正文10 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                参赛团队或队员信息有变化可以更改吗?
              </h1>
              <span>
                在参赛团队报名省赛的报名通道关闭前可以更改团队信息；报名通道关闭后，不可再更改信息。如果队长的所属省份或队员的年级信息发生了变化，会影响到团队报名的赛区或组别，相关信息请谨慎填写或更改。报名截止后，只可进行团队人员删减，不可进行人员顺序调整及人员添加。
              </span>
            </div>
          </div>
          <!-- 正文11 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                参赛团队中有队员缺席比赛，其他队员还能继续参与比赛吗?
              </h1>
              <span>
                如果参赛团队全体成员缺席，按团队缺席处理，取消该团队参赛资格。如果部分队员缺席比赛，其他队员仍然可以继续参加参赛，取消缺席队员的获奖资格。
              </span>
            </div>
          </div>
          <!-- 正文12 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                在海外学校就读的学生可以参加哪个省份的比赛?
              </h1>
              <span>
                在海外学校就读的学生可以报名参加ICC中国区组织的省级线上选拔赛。该学生在注册帐号时，在学校所在地一览须选择“海外”选项。
              </span>
            </div>
          </div>
        </div>

        <!-- 参赛材料相关 -->
            <div v-show="active==1" class="pmd-navShowContent ">
          <!-- 正文1 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 所有的作品参赛项目材料都是用中文呈现吗？
              </h1>
              <span>
                参赛团队可以选择中文/英文准备参赛项目材料。若晋级全球邀请赛，则需要用英文呈现。进入全球邀请赛的选手有数周的时间准备英文材料，如有交流障碍也不必担心语言能力，赛会组织方会在交流过程中配备翻译。
              </span>
            </div>
          </div>
          <!-- 正文2 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title"><strong>▌</strong> 选择英文作为评审语言，是否有优势？</h1>
              <span>
                ICC竞赛活动的官方评审语言为中文或英文，参赛作品材料、项目路演和答辩均接受中文或英文表达。参赛团队无论选择中文还是英文作为评审语言不会带来额外的优势。
              </span>
            </div>
          </div>
          <!-- 正文3 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>发明日志可以写成论文的形式吗？
              </h1>
              <span>
                符合“发明日志”内容和格式要求的参赛材料都是接受的，日志结构不限。官方提供的发明日志模版仅供参考。“发明日志”的内容须包含发现、定义、设计、制作和优化等发明历程。
              </span>
            </div>
          </div>
          <!-- 正文4 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 低年龄学生识字数量有限，可以请家长或老师帮忙填写发明日志吗？
              </h1>
              <span>
                原则上，学生发明日志需要学生自行填写。二年级及以下学生允许用口述方式说明发明过程，请家长或辅导老师协助整理成文字，完成参赛材料。
              </span>
            </div>
          </div>
          <!-- 正文5 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> APP或软件产品能否报名参赛？
              </h1>
              <span>
                当然可以。无论是实物发明还是软件发明，只要参赛资料符合ICC竞赛活动规则的参赛要求，都可以报名参赛。ICC期待能在电脑或手机上看到运行的软件Demo。但面对低年级参赛学生，ICC也接受软件流程图。只要流程图能清楚展现软件UI交互界面，运行逻辑，并在路演环节能让评委了解软件运行模式即可。
              </span>
            </div>
          </div>
          <!-- 正文6 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 对现有材料的一种全新应用或组合算是发明吗？
              </h1>
              <span>
                对现有材料的全新应用或组合算是发明。ICC认为，对现有事物的改进，属于学生发明的范畴。在历届比赛中，多项获奖发明就是对材料的全新应用。
              </span>
            </div>
          </div>
          <!-- 正文7 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                作品只提供3D设计图，没有3D实物，是否可行？
              </h1>
              <span> 可以。项目作品只要能清楚表达设计理念，无论是否有实物均可接受。同时，ICC鼓励学生制作作品的实物模型，在展现学生动手能力的同时，也能便于评委更好的理解学生作品。 </span>
            </div>
          </div>
          <!-- 正文8 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                路演视频可以添加滤镜，增强光线吗？
              </h1>
              <span> 在保证视频画面连贯无剪辑或变速的前提下，参赛选手可以为了提升视频的观看效果而添加滤镜，增强光线或添加字幕。 </span>
            </div>
          </div>
          <!-- 正文9 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>
                什么作品才算发明？
              </h1>
              <span>
                发明是以前不存在的新事物。创新是对现有产品或想法的添加或更改。ICC 接受发明作品和创新作品。
              </span>
            </div>
          </div>
        </div>

          <!-- 其他问题 -->
          <div v-show="active==2" class="pmd-navShowContent ">
          <!-- 正文1 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong> 省赛的晋级比例是多少？
              </h1>
              <span>
                各省赛的晋级比例统一为30%。省赛评审分为两个阶段：作品合规审核阶段和评审圈评审阶段。参与省赛评审圈评审的各组别项目综合得分排名前30%的参赛团队将获得晋级资格；未通过作品合规审核的参赛团队不能参加现场评审，不计入晋级比例的统计。
              </span>
            </div>
          </div>
          <!-- 正文2 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title"><strong>▌</strong> 如何确保评审的公正性？</h1>
              <span>
                ICC公开面向社会（主要来自学校、行业领军企业、公益组织）进行评委的招募和筛选，并对评委进行统一的规则培训，只有通过考核的评委才能参与ICC各级竞赛活动的评审。在比赛中，评委须回避与其有关系的参赛选手，例如评委不能为本人及近亲属，或者与本人及近亲属有利害关系的项目进行评审。
              </span>
            </div>
          </div>
          <!-- 正文3 -->
          <div class="showLi-one">
            <!-- 每一项内容 -->
            <div class="everyContent">
              <h1 class="main-title">
                <strong>▌</strong>我还有其他问题可以去哪里寻求答案？
              </h1>
              <span>
                可添加官方赛事小助手微信号进行提问。同时微信服务号“全球发明大会中国区”及订阅号“全球发明大会中国区资讯”也将开设菜单专栏，将大家提出的问题收集起来并持续更新解答。
              </span>
            </div>
          </div>
        </div>
        <!-- 联系我们 -->
        <div class="pmd-connectUs">
          <h1 class="main-title"><strong>▌</strong> 联系我们</h1>
          <p>
            如有其他问题，请扫一扫下方二维码，添加ICC官方助手微信号进行询问。
          </p>
          <img src="./image/3.jpg" alt="" />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 模拟分栏导航的数据 */
      arr: ["报名参赛相关", "参赛资料相关", "其他问题"],
      /* 设置显示哪个分栏 */
      active: 0,
      big: true,
      y: 0,
      top: false,
    //   iscurrent:false
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
    /* 控制分栏变化的函数 */
    act(index) {
      this.active = index;
    },
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
  top: 0;
  list-style: none;
}

span,div,h1,h2,h3{
  cursor: pointer;
}
.bigbox {
  overflow-x: hidden;
  .runTop {
    position: fixed;
    right: 10px;
    top: 90vh;
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
  height: 250vh;
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
  /* 标题下面的整个大盒子，左边left放分栏右边right放二维码 */
  .inBody {
    width: 60%;
    height: 200vh;
    display: flex;
    .left {
      width: 70%;
      height: 100%;

      .nav {
        height: 6%;
        ul {
          display: flex;
          height: 100%;
          border-bottom: 2px solid #e1e1e1;
          margin-right: 2vw;
          box-sizing: border-box;
          li {
            line-height: 18vh;
            width: 80px;
            padding: 0 1vw;
            font-size: 13px;
            text-align: center;
            color: #5a5a5a;
          }
          /* li被选中时的样式s */
          .active {
            color: #ff5a00;
            border-bottom: 2px solid #ff5a00;
          }
        }
      }
      .text {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* <!-- 第三个导航栏对应页面最下面的二维码 --> */
        .erweima {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 8vw;
          }
          span {
            font-size: 12px;
          }
        }
        .list {
          width: 100%;

          ul {
            width: 100%;
            height: 100%;
            display: flex;
            /* 主轴旋转 */
            flex-direction: column;
            li {
              width: 100%;
              display: flex;
              /* 主轴旋转 */
              flex-direction: column;
              margin-bottom: 20px;
              h2 {
                font-weight: 600;
                height: 3vh;
                font-size: 18px;
                color: #5a5a5a;
                line-height: 2vh;
                border-left: 7px solid #ff5a00;
                box-sizing: border-box;
                padding: 5px 10px;
                margin: 2vh 0;
              }
              span {
                font: 12px/140% Arial, "宋体", Helvetica, sans-serif, Verdana;
                color: #5a5a5a;
                margin: 0;
                background: #fff;
                line-height: 20px;
                padding-right: 20px;
              }
              /* 第一个导航栏下面对应的内容下面的图片 */
              img {
                width: 35vw;
              }
            }
          }
        }
      }
    }
    .right {
      margin-top: 10vh;
      flex: 1;
      background-color: #fafafa;
      height: 35vh;
      padding: 20px;
      display: flex;
      flex-direction: column;
      strong {
        font-size: 14px;
        border-left: 5px solid #ff5a00;
        padding-left: 1vw;
      }
      span {
        font-size: 14px;
        margin-top: 10px;
      }
      .img {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 8vw;
          height: 8vw;
        }
      }
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
  padding: 0 14px;
  // 标题行
  .hOne {
    font-size: 19px;
    text-align: center;
    margin: 30px 0 20px 0;
  }
  // 分割线
  .hOne-line {
    width: 100%;
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

    // 导航栏的设置
    .pmd-nav {
      width: 100%;
      // li里面的默认样式
      li {
        width: 33%;
        display: inline-block;
        border-bottom: 2px solid #e1e1e1;
        text-align: center;
        padding-bottom: 5px;

        span {
          font-size: 16px;
          font-family: SimSun;
          color: black;
        }
      }

      //****************************
      // 用来添加下边框颜色 判断当前是哪一个
      .current {
        border-bottom: 2px solid #ff5a00;
      }
    }

    // 导航栏要显示对应的内容
    .pmd-navShowContent {
      .showLi-one {
        margin-bottom: 30px;
        .everyContent {
          text-align: justify;
          font-family: "微软雅黑";
          color: #5a5a5a;
          line-height: 25px;
          padding: 0 15px;

          .main-title {
            font-size: 19px;
            // font-weight: 1500;
            margin: 20px 0px 10px 0px;
            strong {
              color: #ff5a00;
            }
          }
          // 正文字体大小
          span {
            font-size: 13px;
          }
        }
      }
    }

    // 联系我们
    .pmd-connectUs {
        line-height: 25px;
      .main-title {
        font-size: 19px;
        // font-weight: 1500;
        margin: 20px 0px 10px 0px;
        strong {
          color: #ff5a00;
        }
      }
      img {
        display: block;
        width: 140px;
        height: 140px;
        margin: 20px auto;
        margin-bottom: 0px;
      }
    }
  }
}
</style>