var comfyuiMenu = document.querySelector(".comfy-menu")

var btn = document.createElement('button')
var btnBg = document.createElement('button')
var dropdown = document.createElement('div')
var multiBtn = document.createElement('div')
var switchBtn = document.createElement('button')

var p = document.createElement('p')
var pBg = document.createElement('p')
var multiP = document.createElement('ul')


var obj = {
    "Civitai": "https://civitai.com/",
    "Liblib": "https://www.liblib.art/",
    "TusiAI": "https://tusiart.com/",
    "Github": "https://github.com/",
    "HuggingFace": "https://huggingface.co/",
    "Youtube": "https://www.youtube.com/"
}

var objIcon = {
    "Civitai": "icon/Civitai.png",
    "Liblib": "icon/Liblib.png",
    "TusiAI": "icon/TusiAI.png",
    "Github": "icon/Github.png",
    "HuggingFace": "icon/Hugginface.png",
    "Youtube": "icon/Youtube.png"
}

var objFontIcon = {
    "folder": "fa-solid fa-maximize",
    "image": "fa-brands fa-youtube",
    "extension": "fa-solid fa-plug-circle-bolt",
    "basicModel": "fa-brands fa-unity",
    "gallery": "fa-solid fa-biohazard",
}
var flag = false

p.innerText = "E"
pBg.innerText = 'Reload'

btn.setAttribute('class', 'expand')
btnBg.setAttribute('class', 'reload')
dropdown.setAttribute('class', 'website')
multiBtn.setAttribute('class', 'multifuction')
switchBtn.setAttribute('class', 'switchShape')

btn.appendChild(p)
btnBg.appendChild(pBg)

for (let i = 0; i < Object.keys(obj).length; i++) {
    var website = document.createElement('a')
    var pText = document.createElement('img')
    pText.setAttribute('src', Object.values(objIcon)[i])
    website.setAttribute('href', Object.values(obj)[i])
    website.setAttribute('target', '_blank')
    website.appendChild(pText)
    dropdown.appendChild(website)
}
for (let index = 0; index < Object.keys(objFontIcon).length; index++) {
    var li = document.createElement('li')
    var iLink = document.createElement('a')
    var icon = document.createElement('i')
    icon.setAttribute('class', Object.values(objFontIcon)[index])
    // iLink.setAttribute('href','file:///C:/Program Files')
    iLink.appendChild(icon)
    li.appendChild(iLink)
    multiP.appendChild(li)
    multiBtn.appendChild(multiP)
}


comfyuiMenu.appendChild(btn)
comfyuiMenu.appendChild(btnBg)
comfyuiMenu.appendChild(dropdown)
comfyuiMenu.appendChild(multiBtn)
comfyuiMenu.appendChild(switchBtn)

btn.addEventListener('click', function () {
    // alert('dsds')
    if (flag == false) {
        this.parentElement.style.right = '-230px';
        flag = true
    } else {
        this.parentElement.style.right = '0';
        flag = false
    }
})
btnBg.addEventListener('click', function () {
    window.location.reload()
})

switchBtn.addEventListener('click', function () {
    var nameCollection = comfyuiMenu.getAttribute('class').trim().split(' ').indexOf('activate')
    if (nameCollection == -1) {
        nameCollection = comfyuiMenu.classList.add('activate')
    } else {
        nameCollection = comfyuiMenu.classList.remove('activate')
    }
})

// 全屏事件
function handleFullScreen() {
    var element = document.documentElement;
    if (this.fullscreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
    }
}
var videoFrame=document.createElement('div')
videoFrame.setAttribute('class','playVideoShow')
var iframeFrame=document.createElement('iframe')       
      
       iframeFrame.setAttribute('scrolling','no')
       iframeFrame.setAttribute('border',0)
       iframeFrame.setAttribute('frameborder','no')
       iframeFrame.setAttribute('framespacing',0)
       iframeFrame.setAttribute('allowfullscreen','true')
function playVideo() {
       var urlName=prompt('please input your adress')
       var urlPath=urlName.trim().split(' ')[1]
       var urlPathIndex=urlName.trim().split(' ')[1].indexOf('"')
       var result=urlPath.substring(urlPathIndex+1,urlPath.length - 1)          
       iframeFrame.setAttribute('src',result)
       videoFrame.appendChild(iframeFrame)
       comfyuiMenu.appendChild(videoFrame)   
}
var playVideoFlag=false
function foo() {
    for (let i = 0; i < multiP.querySelectorAll('li').length; i++) {
        multiP.querySelectorAll('li')[i].onclick = function () {            
            if (i == 0) {
                handleFullScreen()
            } else if (i == 1) {        
                if(playVideoFlag==false) {                   
                    playVideo()
                    playVideoFlag=true
                }else {
                    videoFrame.removeChild(iframeFrame)
                    videoFrame.style.display='none';
                    playVideoFlag=false
                    
                    
                }
              
            } else if (i == 2) {
                alert('2')
            } else if (i == 3) {
                alert('图片路径')
            } else if (i == 4) {
                alert('更多功能开发反馈请联系：+v: s2431084324')
            }
        }
    }
}
foo();