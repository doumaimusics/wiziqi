$(function(){

$('.youxijieshao').click(function(){


      audio.src='yinyue/5390.mp3'
      audio.play();
   $('.content').toggle(1000);
   setTimeout(function(){
    $('.content').toggle(0);
   },3000)
})
   audio.src="yinyue/a.mp3"
   audio.play();
   kongbai = {};
   // 创建棋盘上的线
   for (var i = 0; i < 15; i++) {
   	$('<i>')

   	.addClass('hang')
   	.appendTo('.qipan');
   	$('<b>')
   	.addClass('shu')

   	.appendTo('.qipan')
   	for (var j = 0; j < 15; j++) {
         kongbai[i+'-'+j] = {x:i,y:j};
         //创建棋子
   	$('<div>')
	.addClass('qizi')
   .data('pos',{x:i,y:j})
	.attr('id',i+'-'+j)
	.appendTo('.qipan')
   	};   
   };
     // 计时器
   time = 0;
   min = 0;
   second = 0;
  
   
   function jishi(){
      t=setInterval(function(){

     $('.font').html("00:00");
      time +=1;
      second=time%60;
      if (time%60==0){
        min = parseInt(min);
        min += 1;
        min = (min<10)?'0'+min:min;
      };
      second = (second<10)?'0'+second:second;
      $('.font').html(min+':'+second);
   },1000)
}
   
      // 加开关
   var kaiguan = true;
   hei = {};
   bai = {};
   var isAi = true;
   $('.renrenduizhan').click(function(){
      audio.src='yinyue/5390.mp3'
      audio.play();
      isAi=false;
   })
   $('.renjiduizhan').click(function(){
      audio.src='yinyue/5390.mp3'
      audio.play();
      isAi=true;
   })
   var ai = function(){
      var zuobiao;
      var max = -Infinity;
      for (var i in kongbai) {
         var weixie = panduan(kongbai[i],hei);
         if (weixie>max){
            max = weixie
            zuobiao = kongbai[i];
         };
       
      };
      var zuobiao2;
      var max2 = -Infinity;
      for(var i in kongbai){
         var weixie = panduan(kongbai[i],bai);
         if (weixie>max2){
            max2 = weixie
            zuobiao2 = kongbai[i];
         };
      }

      return (max>max2)?zuobiao:zuobiao2;
   }
   // 给每个棋子添加点击事件
   $('.kaishiyouxi').on('click',function(){
    jishi();
    $(".hang").delay(1000).animate({opacity:"1"})
    $('.shu').delay(1000).animate({opacity:"1"})
    $(".qipan").delay(250).animate({opacity:"0.8"})


      audio.src='yinyue/5390.mp3'
      audio.play();

   $('.qipan .qizi').on('click',function(){

      audio.src='yinyue/5390.mp3'
      audio.play();


       // 不要让后面的棋子覆盖住以放的棋子
      if ($(this).hasClass('hei')||$(this).hasClass('bai')){
         return;
      };
      var pos = $(this).data('pos');
      console.log(pos);

      if (kaiguan){
         $(this).addClass('hei');
         hei[pos.x+'-'+pos.y]=true;
         delete kongbai[join(pos.x,pos.y)];
         if (panduan(pos,hei)>=5){
            $('.lanongyin').toggle();
            $('.qipan .qizi').off('click');
            clearInterval(t);
         };
         
         if (isAi){
            var pos = ai();
            // audio.src='5390.mp3'
            // audio.play();
            $('#' + join(pos.x,pos.y))
            .addClass('bai');
            bai[join(pos.x,pos.y)] = true;
            delete kongbai[join(pos.x,pos.y)];
            if (panduan(pos,bai)>=5){
               $('.hongyin').toggle();
               $('.qipan .qizi').off('click');
               clearInterval(t);

            };
            return;
         };
          kaiguan=false;
      }else{
         $(this).addClass('bai');
         bai[pos.x+'-'+pos.y]=true;
         if (panduan(pos,bai)>=5){
            $('.qipai .qizi').off('click');
            $('.hongyin').toggle();
            clearInterval(t);
         }
         kaiguan=true;
      }
   })

 })
// var hei = {};
   // var bai = {};
   var join=function(n1,n2){
      return n1 + '-' + n2;
   }
      // 判断当前的的位置(坐标)
   var panduan=function(pos,biao){
      var h=1,s=1,zx=1,yx=1;
      var tx,ty;
      tx=pos.x;ty=pos.y;
      while(biao[join(tx,ty-1)]){
         h++;
         ty--;
      }
      tx=pos.x;ty=pos.y;
      while(biao[join(tx,ty+1)]){
         h++;
         ty++;
      }

      tx=pos.x;ty=pos.y;
      while(biao[join(tx-1,ty)]){
         s++;
         tx--;
      }
      tx=pos.x;ty=pos.y;
      while(biao[join(tx+1,ty)]){
         s++;
         tx++;
      }


      tx=pos.x;ty=pos.y;
      while(biao[join(tx-1,ty+1)]){
       zx++;
       tx--;
       ty++;
      }
      tx=pos.x;ty=pos.y;
      while(biao[join(tx+1,ty-1)]){
       zx++;
       tx++;
       ty--;
      }

      tx=pos.x;ty=pos.y;
      while(biao[join(tx-1,ty-1)]){
       yx++;
       tx--;
       ty--;
      }
      tx=pos.x;ty=pos.y;
      while(biao[join(tx+1,ty+1)]){
       yx++;
       tx++;
       ty++;
      }

       return Math.max(h,s,zx,yx);
   }

$('.congxinkaishi').on('click',function(){
   audio.src='yinyue/5390.mp3'
   audio.play();
   location.reload();

})
})