function showGallery() {
    // 切换页面显示
    document.getElementById('cover').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    
    // 添加滑动提示
    const hint = document.createElement('div');
    hint.innerHTML = '← 滑动浏览 →';
    hint.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: #666;
        animation: fadeIn 2s;
        z-index: 1000;
    `;
    document.body.appendChild(hint);
    
    // 3秒后移除提示
    setTimeout(() => {
        hint.remove();
    }, 3000);
}

function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
}

// 如果需要更精细的控制，可以使用以下代码
function toggleAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}