<template>
  <view class="app-page">
    <view class="text">
      Num：{{ number }}
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(['number'])
  },
  onLoad() {
    this.$alert('进入home页面');
  }
};
</script>

<style lang="less">
.text {
  font-size: 42rpx;
  color: #1aad19;
  border: 0 solid transparent;
  margin: 100rpx auto 60rpx;
  text-align: center;
}
</style>
