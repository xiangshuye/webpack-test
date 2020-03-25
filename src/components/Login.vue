<template>
    <Row>
        <i-col span="8" offset="8">
            <Form>
                <FormItem label="账号">
                    <Input v-model="user.name" />
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="user.password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="login">signin</Button>
                </FormItem>
            </Form>
        </i-col>
    </Row>
</template>

<script>
import qs from "qs";
import { asyncRouter, router, noRouter } from '@/router/routes';
// import VueRoute from '@/router/index';
export default {
    name: "Login",
    data() {
        return {
            user: {
                name: "jack0",
                password: "123456"
            }
        };
    },
    methods: {
        login() {
            fetch(
                "http://localhost:3002/api/users/login?" +
                    qs.stringify(this.user)
            )
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if(res.code === 200){
                        sessionStorage.setItem("username", res.data[0].name);
                    }
                    // let allRouter = [...asyncRouter, ...noRouter];
                    // this.$router.addRoutes(allRouter);
                    this.$router.push('/index');
                });
        }
    }
};
</script>

<style lang="less"></style>
