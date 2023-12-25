# 微信阅读助手

默认 action
```
"action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
}
```

内容脚本
```
  "content_scripts": [
    {
      "js": ["scripts/content.js"],
      "css": ["ReaderContentPage.css"],
      "matches": [
        "https://weread.qq.com/web/reader/*"
      ]
    }
  ]
```