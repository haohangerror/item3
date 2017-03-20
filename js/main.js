$(document).ready(function(){
    //首页商品分类页弹出
    $(".shopClass_item").mouseover(function() {
        var index = $(this).index();
        $(".shopClass_list").eq(index).show().siblings().hide();
    });
    $('.shopClass_list').mouseleave(function(){
        $('.shopClass_list').hide();
    });
    //首页图片轮播
    adbox1();
    function adbox1(){
        $('.banner_big .imgBox').css({'left':'0'}).delay(3000).animate({'left':'-810px'},1000).delay(3000).animate({'left':'-1620px'},1000,adbox1);
    }
    adbox2();
    function adbox2(){
        $('.banner_sm .imgBox').css({'left':'0'}).delay(3000).animate({'left':'-190px'},1000).delay(3000).animate({'left':'-380px'},1000,adbox2);

    }
    //筛选页筛选选项切换
    $('.screening_list:eq(0) a').click(function(e){
        $('.screening_list:eq(0) a').removeClass('active');
        $(e.target).addClass('active');
    });
    $('.screening_list:eq(1) a').click(function(e){
        $('.screening_list:eq(1) a').removeClass('active');
        $(e.target).addClass('active');
    });
    $('.screening_list:eq(2) a').click(function(e){
        $('.screening_list:eq(2) a').removeClass('active');
        $(e.target).addClass('active');
    });
    //商品详情评论选项卡切换
    $(".des_tit li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".des_infoContent").eq(index).show().siblings().hide();
    });
    //商品颜色版本选择
    $('.colorSelect+div .des_item').click(function(e){
        $('.colorSelect+div .des_item').removeClass('des_item_acitve');
        $(e.target).addClass('des_item_acitve');
    });
    $('.des_select_more+div .des_item').click(function(e){
        $('.des_select_more+div .des_item').removeClass('des_item_acitve');
        $(e.target).addClass('des_item_acitve');
    });
    //商品展示图片切换
    $(".des_smimg li").mouseover(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".big img").eq(index).show().siblings().hide();
    });
    //注册表单验证
    $('#myform').validate({
        rules:{
            tel:{
                required:true,
                digits:true

            },
            username:{
                required:true
            },
            password:{
                required:true,
                rangelength:[6,20]
            },
            confirmpass:{
                required:true,
                equalTo:"#password"
            }
        },
        messages:{
            tel:{
                required:"手机号码必须填写",
                digits:"必须填写手机号码"
            },
            username:{
                required:"用户名必须填写"
            },
            password:{
                required:"密码必须填写",
                rangelength:"请输入6-20位密码"
            },
            confirmpass:{
                required:"请确认密码",
                equalTo:"两次输入的密码不一致"
            }
        },
        errorClass:"wrong"
    });
})