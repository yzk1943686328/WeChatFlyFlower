//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    poetry: [{ title: "登鹳雀楼", author: "[唐]王之涣", text: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。" }, { title: "江雪", author: "[唐]柳宗元", text: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。" }, { title: "登乐游原", author: "[唐]李商隐", text: "向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。" }, { title: "八阵图", author: "[唐]杜甫", text: "功盖三分国，名成八阵图。江流石不转，遗恨失吞吴。" }, { title: "赋得古原草送别", author: "[唐]白居易", text: "离离原上草，一岁一枯荣。野火烧不尽。春风吹又生。远芳侵古道，晴翠接荒城。又送王孙去，萋萋满别情。" }, { title: "春晓", author: "[唐]孟浩然", text: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。" }, { title: "鹿柴", author: "[唐]王维", text: "空山不见人，但闻人语响。返景入深林，复照青苔上。" }, { title: "相思", author: "[唐]王维", text: "红豆生南国，春来发几枝。愿君多采撷，此物最相思。" }, { title: "杂诗", author: "[唐]王维", text: "君自故乡来，应知故乡事。来日绮窗前，寒梅著花未。" }, { title: "静夜思", author: "[唐]李白", text: "床前明月光，疑是地上霜。举头望明月，低头思故乡。" }, { title: "凉州词", author: "[唐]王翰", text: "葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回。" }, {title: "望庐山瀑布", author: "[唐]李白", text: "日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。" }],
    key: "",
    restitle:[],
    resauthor:[],
    respoembeforekey:[],
    respoemafterkey:[],
    finish: false
  },
  //事件处理函数
  startsearch: function(e){
    //首先把结果集设置为空并把finish设置为false
    this.setData({
      restitle:[],
      resauthor:[],
      respoembeforekey:[],
      respoemafterkey:[],
      finish:false
    })
    
    //获取关键字
    this.setData({
      key:e.detail.value.key
    })

    //开始逐首诗检索
    for(var i=0;i<this.data.poetry.length;i++){
      var poem=this.data.poetry[i]

      if(poem.text.indexOf(this.data.key)>=0){
        
        //如果诗句中包含关键字就把这句诗加入到结果集中
        var temptitle = this.data.restitle
        temptitle.splice(0, 0, poem.title)

        var tempauthor=this.data.resauthor
        tempauthor.splice(0, 0, poem.author)

        var tempbefore=this.data.respoembeforekey
        tempbefore.splice(0,0,poem.text.substring(0,poem.text.indexOf(this.data.key)))

        var tempafter =this.data.respoemafterkey
        tempafter.splice(0,0,poem.text.substring(poem.text.indexOf(this.data.key)+1,poem.text.length))

        this.setData({
          restitle: temptitle,
          resauthor:tempauthor,
          respoembeforekey:tempbefore,
          respoemafterkey:tempafter
        })



      }
    }

    this.setData({
      finish:true
    })

  }

})
