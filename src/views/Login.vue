<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <router-link class="link" to="/register">注册账号</router-link>
    <router-link to="/register" class="link">还没有账号？去注册</router-link>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // console.log('submit', values)
      const { data: res } = await loginAPI(values)
      // 登录成功，提示、存token、跳转到 /article 面经列表页
      // alert('登录成功')
      // Toast('普通提示') // 需要导入 Toast
      // Toast.success('登录成功') // 需要导入 Toast
      // this.$toast('普通提示')
      this.$toast.success('登录成功')
      localStorage.setItem('mobile-token', res.data.token)
      this.$router.push('/article')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: rgb(138, 0, 153);
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
