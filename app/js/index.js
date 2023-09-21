
window.onload = async function () {

    let isWeixin = is_weixn();


    
  


    if (isWeixin) {
        //显示id为mask的div
        document.getElementById("mask").style.display = "block";
    }



     //let isIos=is_ios();
     //if(!isIos){
      //   document.getElementById("ipa-use").style.display = "none";
    // }

    let res = await request({
        url: '/appxia/api/api.txt',
        method: 'get'
    })

    let data = res.data.data;

 

    let downloadUrl={
        base_apk:data.base_apk,
        ipa:data.ios_mobileconfig,
        ipasion:data.ios_mobileprovision
    }
    for (let k in downloadUrl) {
        let dom = document.getElementById(k);
        if(!dom) continue;
        if (downloadUrl[k]) {
            if(k=='ipa'){
                if(is_ios()){
                    dom.style.display = "flex";
                    dom.onclick = function () {
                        download(downloadUrl[k]);
                        
                       setTimeout(function(){
                        download(downloadUrl['ipasion']);
                       },3000)
                    }
                }else{
                    dom.style.display = "none";
                }
            }else{
                dom.style.display = "flex";
                dom.onclick = function () {
                    download(downloadUrl[k]);
                }
            }
            
        } else {
            dom.style.display = "none";
        }
    }

   
    for (let k in textMap) {
        let dom = document.getElementById(k);
        if(!dom) continue;
        if (textMap[k]) {
            dom.innerText = textMap[k];
            if(dom.tagName=='A'){
                dom.href=textMap[k];
            }
        }
    }



}



function download(url) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', '');
    a.click();
}



//检测是否为微信浏览器
function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}


//检测是否为苹果浏览器
function is_ios() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机
        return false;
    } else if (u.indexOf('iPhone') > -1) {
        //苹果手机
        return true;
    } else if (u.indexOf('iPad') > -1) {
        //iPad
        return false;
    } else if (u.indexOf('Windows Phone') > -1) {
        //winphone手机
        return false;
    } else {
        return false;
    }
}