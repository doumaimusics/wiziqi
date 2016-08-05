<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<style>
body{
	background: #272822;
}
	.info{
		width: 500px;
		height: 200px;
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin:auto;
		color: #fff;
		background:#f40;
		text-align:center;
		line-height: 200px;
		font-size: 24px;

	}
</style>
<body>
	<div class="info">
       <?php 
        echo date("Y-m-d i:s");//时间函数

      ?>



       <?php
        //$array = array("a","b","c","d"); php语言中的数组
        $mysqli = new
        mysqli('localhost','root','','test');
        $result = $mysqli->query("select * from news");
       $array = $result->fetch_all(MYSQLI_ASSOC);//方法
        // print_r($arr);
        // $array = array(
        //     0 => array(
        //     	"title" => "abcd",
        //     	"jianjie" => "&&&&&&&&&&&",
        //     	),
        //     1 => array(
        //     	"title" => "efgh",
        //     	"jianjie" => "**********",
        //     	)
        // 	);
        echo "<ul class='news'>";
        //下面是php语言中遍历数组的方法
        foreach ($array as $k => $v) {
        	echo "<li><span>{$v['title']}</span><i>{$v['info']}</i></li>";        	
        }
        echo"</ul>";
      ?>
	</div>
</body>
</html>