/** 监听copy事件 */
document.addEventListener(
  "copy",
  function (e) {
    e.stopPropagation();
    //取消默认事件，才能修改复制的值
    e.preventDefault();
    //复制的内容
    const copyTxt = window.getSelection(0).toString();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", copyTxt);
    } else if (window.clipboardData) {
      return window.clipboardData.setData("text", copyTxt);
    }
  },
  true
);
