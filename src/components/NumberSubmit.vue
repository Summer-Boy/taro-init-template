<template>
  <view>
    <view class="text">
      Num：{{ num }}
    </view>
    <view class="btn-box flex">
      <button
        class="btn"
        type="primary"
        @tap="addNumber"
      >
        增加
      </button>
      <button
        class="btn"
        type="primary"
        @tap="reduceNumber"
      >
        减少
      </button>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NumberSubmit',
  data() {
    return {
      num: 0
    };
  },
  computed: {
    ...mapState(['number'])
  },
  created() {
    console.log('组件使用 created');
    this.num = this.number;
  },
  mounted() {
    console.log('组件使用 mounted');
  },
  methods: {
    addNumber() {
      this.num++;
      this.$store.dispatch('addNumber', Number(this.num));
    },
    reduceNumber() {
      this.num--;
      this.$store.dispatch('addNumber', Number(this.num));
    }
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
.btn-box {
  width: 100%;
  padding: 0 60rpx;
  justify-content: space-between;
  .btn {
    width: 40%;
    margin: auto;
    display: block;
  }
}
</style>
