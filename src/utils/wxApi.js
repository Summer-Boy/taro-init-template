function wxLoading(tips = "加载中") {
  wx.showLoading({
    title: String(tips),
    mask: true
  });
}

function wxAlert(tips, type = "none") {
  wx.showToast({
    title: tips,
    icon: type,
    duration: 1500
  });
}

function wxSuccess(tips = "成功") {
  wx.showToast({
    title: tips,
    icon: "success",
    duration: 2000,
    mask: true
  });
}

function wxHideLoading() {
  wx.hideLoading();
}

export { wxLoading, wxHideLoading, wxAlert, wxSuccess };
