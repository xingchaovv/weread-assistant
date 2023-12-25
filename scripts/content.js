// 动态加载 CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('/ReaderContentPage.css');
document.head.appendChild(link);

window.addEventListener('load', () => {
    const readerCatalog = document.querySelector('.readerCatalog');
    readerCatalog.style = "";
});
