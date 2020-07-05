import Vue from "vue";
import store from "./store/index";
import "./app.less";
import { getUserOpenId } from "@/utils/operate";
import { wxLoading, wxHideLoading, wxAlert, wxSuccess } from "@/utils/wxApi";

// Vue.config.productionTip = false
Vue.prototype.$loading = wxLoading;
Vue.prototype.$hideLoading = wxHideLoading;
Vue.prototype.$alert = wxAlert;
Vue.prototype.$success = wxSuccess;

const App = new Vue({
  store,
  onLaunch() {
    console.log("app Launch !");
    getUserOpenId();
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  }
});

export default App;
