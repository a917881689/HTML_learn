/**
 * Created by Administrator on 2018/7/11.
 */
$(function() {
    var $div_list = $('#container').children().children();
    var color = ["red","blue","green"];
    for (var i = 0;i < $div_list.length;i++ ) {
        $div_list.eq(i).css({"background-color":color[Math.floor(Math.random()*3)]});
    }
    var $div_row1 = $('#container').children('div').eq(0).children();
    var $div_row2 = $('#container').children('div').eq(1).children();
    var $div_row3 = $('#container').children('div').eq(2).children();
    var $div_row4 = $('#container').children('div').eq(3).children();
    var $div_row5 = $('#container').children('div').eq(4).children();
    var $div_row6 = $('#container').children('div').eq(5).children();
    var $div_row7 = $('#container').children('div').eq(6).children();
    var $div_row8 = $('#container').children('div').eq(7).children();

    var $div_row = [$div_row1,$div_row2,$div_row3,$div_row4,$div_row5,$div_row6,$div_row7,$div_row8]



})