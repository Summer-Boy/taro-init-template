export default {
  pages: ["pages/index/index", "pages/home/home"],
  window: {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#707070",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "Index",
        iconPath: "assets/tabBar/index1.png",
        selectedIconPath: "assets/tabBar/index2.png"
      },
      {
        pagePath: "pages/home/home",
        text: "Home",
        iconPath: "assets/tabBar/home1.png",
        selectedIconPath: "assets/tabBar/home2.png"
      }
    ]
  },
  networkTimeout: {
    request: 10000,
    downloadFile: 10000
  }
};
