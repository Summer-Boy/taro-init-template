<template>
  <view class="app-page">
    <NumberSubmit />
    <view class="aaa" />
  </view>
</template>

<script>
import { mapState } from 'vuex';
import NumberSubmit from '../../components/NumberSubmit.vue';
import { checkLogin } from '@/api/user';

export default {
  name: 'Index',
  components: {
    NumberSubmit
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['openId'])
  },
  onLoad() {
    console.log('页面使用 onLoad');
    //校验是否登录
    checkLogin({
      openId: this.openId
    })
  },
  onReady() {
    console.log('页面使用 onReady');
  }
};
</script>

<style lang="less">
.aaa {
  width: 40rpx;
}
</style>
