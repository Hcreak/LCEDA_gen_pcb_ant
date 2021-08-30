var N = 25;   //匝数(N)
var s = 0.254;  //线间距(s) mm
var w = 0.254;  //线宽(w) mm
var Dout = 50;  //外径(Dout) mm

var p_s = api('unitConvert', {type:'mm2pixel',value:s});
var p_w = api('unitConvert', {type:'mm2pixel',value:w});
var p_Dout = api('unitConvert', {type:'mm2pixel',value:Dout});


api('setOriginXY', {x:4000,y:4000});

var last_x = 4000;
var last_y = 4000+p_Dout/2;
var next_x = 4000+p_Dout/2;
var next_y = 4000+p_Dout/2;
var line_len = p_Dout;

// 开头的部分
api('createShape', {
    "shapeType": "TRACK",
    "jsonCache": {
      "layerid":"1",
      "net":"",
      "pointArr":[
         {
            "x":last_x,
            "y":last_y
         },
         {
            "x":next_x,
            "y":next_y
         }
       ],
       "strokeWidth":p_w
    }
});


for (i = 0; i < N; i++) {
    last_x = next_x;
    last_y = next_y;
    next_x = last_x;
    next_y = last_y - line_len;
    api('createShape', {
        "shapeType": "TRACK",
        "jsonCache": {
          "layerid":"1",
          "net":"",
          "pointArr":[
             {
                "x":last_x,
                "y":last_y
             },
             {
                "x":next_x,
                "y":next_y
             }
           ],
           "strokeWidth":p_w
        }
    });

    last_x = next_x;
    last_y = next_y;
    next_x = next_x - line_len;
    next_y = next_y;
    api('createShape', {
        "shapeType": "TRACK",
        "jsonCache": {
          "layerid":"1",
          "net":"",
          "pointArr":[
             {
                "x":last_x,
                "y":last_y
             },
             {
                "x":next_x,
                "y":next_y
             }
           ],
           "strokeWidth":p_w
        }
    });

    line_len = line_len - (p_s+p_w);

    last_x = next_x;
    last_y = next_y;
    next_x = next_x;
    next_y = next_y + line_len;
    api('createShape', {
        "shapeType": "TRACK",
        "jsonCache": {
          "layerid":"1",
          "net":"",
          "pointArr":[
             {
                "x":last_x,
                "y":last_y
             },
             {
                "x":next_x,
                "y":next_y
             }
           ],
           "strokeWidth":p_w
        }
    });

    last_x = next_x;
    last_y = next_y;
    next_x = next_x + line_len;
    next_y = next_y;
    api('createShape', {
        "shapeType": "TRACK",
        "jsonCache": {
          "layerid":"1",
          "net":"",
          "pointArr":[
             {
                "x":last_x,
                "y":last_y
             },
             {
                "x":next_x,
                "y":next_y
             }
           ],
           "strokeWidth":p_w
        }
    });

    line_len = line_len - (p_s+p_w);
}