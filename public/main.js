console.log('js文件');

getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        //0: 请求未初始化 1: 服务器连接已建立 2: 请求已接收 接收到了响应头 3: 请求处理中 正在下载响应体 4: 请求已完成，且响应已就绪
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const styleEl = document.createElement('style');
                styleEl.innerHTML = request.response;
                document.head.appendChild(styleEl);
            } else {
                alert('加载css失败');
            }
        }
    }
    request.send();
}

getJs.onclick = () => {
    const request2 = new XMLHttpRequest();
    request2.open('GET', '/2.js');
    request2.onload = () => {
        const scriptEl = document.createElement('script');
        scriptEl.innerHTML = request2.response;
        document.body.appendChild(scriptEl);
    }
    request2.onerror = () => {
        console.log('请求失败');
    }

    request2.send();
}

getHtml.onclick = () => {
    const request3 = new XMLHttpRequest();
    request3.open('GET', '/3.html');
    request3.onload = () => {
        const htmlEl = document.createElement('div');
        htmlEl.innerHTML = request3.response;
        document.body.appendChild(htmlEl);
    }
    request3.onerror = () => {
        console.log('请求失败');
    }

    request3.send();
}

getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        //0: 请求未初始化 1: 服务器连接已建立 2: 请求已接收 接收到了响应头 3: 请求处理中 正在下载响应体 4: 请求已完成，且响应已就绪
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            let text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
}

getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        //0: 请求未初始化 1: 服务器连接已建立 2: 请求已接收 接收到了响应头 3: 请求处理中 正在下载响应体 4: 请求已完成，且响应已就绪
        if (request.readyState === 4 && request.status === 200) {
            let json = JSON.parse(request.response)
            jsonText.textContent = `hello ${json.name}`;
        }
    }
    request.send();
}

let n = 1;
getNext.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}.json`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let arr = JSON.parse(request.response);
            arr.forEach(item => {
                let newLiEL = document.createElement('li');
                newLiEL.textContent = `id:${item.id}`;
                list.appendChild(newLiEL);
            });
            n += 1;
        }

    }
    request.send();
}