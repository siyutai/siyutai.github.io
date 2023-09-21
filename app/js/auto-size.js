/* 【公告】永久会员588,注册后下单购买即可，永久会员可以无限制下载所有项目。源码不保证100%准确，你注册下单为永久会员后慢慢挑。 游客/普通用户单个项目多少分就是多少元，支付宝自动购买(不注册也可支付后下载)。(境外)支付宝无法直接转帐请加支付宝好友， 非常忙，不接搭建，不接咨询，本站几千份源码与组件，需要请直接充值，不需要的话你去网上再找找。 谢谢各位客户多年的支持！ */
//-------------------------------------
var designWidth=document.getElementsByTagName("head")[0].getAttribute("design-width");
font_size(designWidth);
function font_size(devwidth){
function _size(){
	var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth>=devwidth) deviceWidth=devwidth;
	document.documentElement.style.fontSize = deviceWidth/(devwidth/100) + 'px';
}
_size();
window.onresize=function(){
	_size();
};
}
var media = document.createElement('style');
    media.innerHTML = "@media screen and (min-width:" + designWidth + "px){.center{width:"+designWidth+"px;margin-left:-"+designWidth/2+"px;left:50%;}}";
  document.getElementsByTagName('head')[0].appendChild(media);
//-------------------------------------