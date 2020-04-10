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
import { asyncRouter, router, noRouter } from "@/router/routes";
import { userLogin } from "@/api/user";

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
            userLogin(this.user).then(res => {
                if (res.code === 200) {
                    // this.$store.commit("LOGIN_STATE",{
                    //     username: res.data.name
                    // })
                    sessionStorage.setItem("username", res.data.name);
                }
                this.$router.push("/index").catch(err => {
                    // console.log(err);
                });
            });
        }
    }
};
</script>

<style lang="less"></style>
