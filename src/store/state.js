const state = {
  //professor
  professor: {
    name: "YOSHIE Osamu",
    title: "Professor dean, director",
    img: "../../assets/img/UserProfile.jpg",
    contact_info: [
      { info_type: '#iconmail-Fill', info: "yoshie@waseda.jp" },
    ],
    research_topic: [
      {
        name: "Community Computing",
        img: "#iconyunjisuan-",
        desc:
          "Community computing is a resource-sharing model in which users are provided with free or low-cost computer and Internet access."
      },
      {
        name: "Expression Recognition",
        img: "#iconrenlianshibie",
        desc:
          "Facial expression recognition is a technology which uses biometric markers to detect emotions in human faces. ",
      },
      {
        name: "Multi-player Interaction",
        img: "#iconshequ",
        desc:
          "aims to develop new information technology to enrich people’s lives by considering how to use computers that have never been before."
      },
      {
        name: "Agent",
        img: "#iconagent_session",
        desc:
          "aims to develop new information technology to enrich people’s lives by considering how to use computers that have never been before."
      },
      {
        name: "eMaintenance",
        img: "#icongongju",
        desc:
          "E-maintenance is the synthesis of two major trends in today’s society: the growing importance of maintenance as a key technology and the rapid development of information and communication technology."
      },
      {
        name: "Consensus Building Process",
        img: "#iconshuju",
        desc:
          "Consensus building (collaboration) is a conflict-resolution process used mainly to settle complex, multiparty disputes."
      },
    ]
  },

  //members
  // members: [
  //   {
  //     title: "本科生",
  //     memberList: [
  //       {
  //         name: "李文浩",
  //         img: "../../assets/img/UserProfile.jpg",
  //         year: "2016",
  //         research_topic: "后端开发，数据库技术",
  //         after_graduate: "京东物流"
  //       },
  //       {
  //         name: "谢培茹",
  //         img: "../../assets/img/UserProfile.jpg",
  //         year: "2016",
  //         research_topic: "前端开发，大数据分析",
  //         after_graduate: "保研西安交大"
  //       },
  //       {
  //         name: "张靖漪",
  //         img: "../../assets/img/selfie.jpg",
  //         year: "2016",
  //         research_topic: "前端开发，IOT",
  //         after_graduate: "早稻田大学"
  //       },
  //       {
  //         name: "孟丽媛",
  //         img: "../../assets/img/UserProfile.jpg",
  //         year: "2014",
  //         research_topic: "WEB开发应用",
  //         after_graduate: "全栈工程师，先后工作于京东、华为等大型企业"
  //       },
  //       {
  //         name: "彭卫杰",
  //         img: "../../assets/img/UserProfile.jpg",
  //         year: "2016",
  //         research_topic: "后端开发，数据库技术",
  //         after_graduate: "京东物流"
  //       },
  //       {
  //         name: "叶凡",
  //         img: "../../assets/img/UserProfile.jpg",
  //         year: "2014",
  //         research_topic: "WEB开发应用",
  //         after_graduate:
  //           "全栈工程师，先后工作于京东、华为等大型企业"
  //       }
  //     ]
  //   },
  //   {
  //     title: "研究生",
  //     memberList: [
  //       {
  //         name: "YE Fan",
  //         img: "",
  //         year: "2017",
  //         research_topic: "人脸识别，表情识别，情感分析",
  //         after_graduate: "全栈工程师，先后工作于京东、华为等大型企业"
  //       },
  //       {
  //         name: "ZHANG Peng",
  //         img: "",
  //         year: "2016",
  //         research_topic: "WEB开发应用",
  //         after_graduate: "全栈工程师，先后工作于京东、华为等大型企业"
  //       }
  //     ]
  //   }
  // ],

  //lab
  
  lab: {
    imgs: [
      "https://www.waseda.jp/fsci/gips/assets/uploads/2015/09/pic2-720x540.jpg",
      "https://www.waseda.jp/fsci/gips/assets/uploads/2019/12/Workshop-for-studying-the-consensus-building-process-940x705.jpeg",
      "https://www.waseda.jp/fsci/gips/assets/uploads/2019/12/Laboratory-party-940x705.jpeg",
    ],
    info: [
      {
        title: "Lab Location",
        content: "Our lab is at S305(Master Only) and S306(PHD & Professor), buliding X, Kitakyushu.",
      },
      {
        title: "Arrangements",
        content:"Our lab has 50 students, including master & phd. You can research in any topic you interested in, and book a time to discuss with me, 20 mins for each student."
      }
    ]
  },

  //publications
  publications: [
    {
      year: "2014",
      list: [
        {
          author: "Huiquan Zhang,Sha luo,Osamu Yoshie",
          title:
            "Facial Expression Recognition Based upon Human Cognitive Regions",
          year: "2014",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        }
      ]
    },
    {
      year: "2013",
      list: [
        {
          author: "Huiquan Zhang, Sha luo, Osamu Yoshie",
          title:
            "Exploring Appropriate Clusters in Subspace for Human Activity Recognition",
          year: "2013",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        },
        {
          author: "Huiquan Zhang, Wenhao zhou, Osamu Yoshie",
          title:
            "Phishing Website Clustering through Textual Feature and Visual Feature",
          year: "2013",
          publican:'Journal of Network & Information Securit',
        },
        {
          author: "Huiquan Zhang, Osamu Yoshie",
          title:
            "A Fusion Approach for Facial Expression Using Local Binary Pattern and a Pseudo 3D Face Model",
          year: "2013",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        }
      ]
    },
    {
      year: "2012",
      list: [
        {
          author: "Huiquan Zhang, Osamu Yoshie",
          title:
            "Improving human activity recognition using subspace clustering",
          year: "2012",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        },
        {
          author: "Huiquan Zhang, Sha luo, O. Yoshie",
          title:
            "Study on Complex Adaptive Supply Networks Based on Trust Propagation Strategies",
          year: "2012",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        }
      ]
    },
    {
      year: "2011",
      list: [
        {
          author: "Huiquan Zhang, Wonjung Kim, Osamu Yoshie",
          title:
            "Activity Recognition in Plant: Investigation on Actions for Preventing Human Error",
          year: "2011",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        }
      ]
    },
    {
      year: "2010",
      list: [
        {
          author: "Huiquan Zhang, Osamu Yoshie",
          title:
            "Planning for Dynamic Presentation: A Probabilistic-Planning-Based Approach",
          year: "2010",
          publican:'IEEJ Transactions on Electronics, Information and Systems',
        }
      ]
    }
  ]
};

export default state;
