<template>
  <div class="Register-page">
    <van-nav-bar title="面径注册" />
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
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
      <router-link to="/login" class="link">已有账号？去登陆</router-link>
    </van-form>
  </div>
</template>

<script>
import { registerAPI } from '@/api/user'
export default {
  name: 'Register-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      console.log(values)
      const { data: res } = await registerAPI(values)
      console.log(res)
      // 1.提示
      this.$toast.success(res.message)
      // 2.清空
      this.username = this.password = ''
      // 3.跳转
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
