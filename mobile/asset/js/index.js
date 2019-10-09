Zepto(function ($) {
    //菜单切换
    $(".logoModule").on("touchend", function(){
        $(this).addClass("logoModuleActive").siblings(".logoModule").removeClass("logoModuleActive");
        $(this).find(".imgActive").show();
        $(this).find(".img").hide();
        $(this).siblings(".logoModule").find(".imgActive").hide();
        $(this).siblings(".logoModule").find('.img').show();
    });

    //标签切换
    $(".labelCurrent li").on('touchend', function(){
        var index = $(this).index();
        $(this).addClass("mainLabelCurrentActive").siblings("li").removeClass("mainLabelCurrentActive");
        $(".mainCurrent").hide().eq(index).show();
    });

    //只走心
    $("#moduleOnePage").paging({
        nowPage: 1, // 当前页码
        pageNum: 10, // 总页码
        buttonNum: 5, //要展示的页码数量
        canJump: 0,// 是否能跳转。0=不显示（默认），1=显示
        showOne: 0,//只有一页时，是否显示。0=不显示,1=显示（默认）
        callback: function (num) { //回调函数
            console.log(num);

            //请求ajax，刷新列表
        }
    });

    //不走量
    $("#moduleTwoPage").paging({
        nowPage: 1, // 当前页码
        pageNum: 10, // 总页码
        buttonNum: 5, //要展示的页码数量
        canJump: 0,// 是否能跳转。0=不显示（默认），1=显示
        showOne: 0,//只有一页时，是否显示。0=不显示,1=显示（默认）
        callback: function (num) { //回调函数
            console.log(num);

            //请求ajax，刷新列表
        }
    });
});