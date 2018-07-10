window.onload = function() {
  // 绑定点击事件
  document.querySelector(".search").onclick = function() {
    // 获取内容 跳转百度
    let inputValue = document.querySelector(".input").value;
    if (inputValue.trim()==='') {
      alert("请输入内容");
      return;
    }
    // 设置跳转的地址
    window.location = `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=${inputValue}&rsv_pq=d62db55900017151&rsv_t=200asNNuSxpGmzX4pEUS1yS94m%2F%2FZa2bkguwivMyRoEelf%2FKTtsNq5r%2Fggg&rqlang=cn&rsv_enter=1&rsv_sug3=19&rsv_sug1=19&rsv_sug7=101`;
  };
};
