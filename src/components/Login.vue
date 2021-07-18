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
import { Message } from 'view-design';

export default {
    name: "Login",
    data() {
        return {
            user: {
                name: "xueliang",
                password: "123456"
            }
        };
    },
    methods: {
        login() {
            userLogin(this.user).then(res => {
                if (res.code === 200) {
                    this.$store.commit("setUserInfo",{
                        userinfo: res.data
                    })
                    sessionStorage.setItem('username', res.data.name)
                    this.$router.push("/home").catch(err => {
                        // console.log(err);
                    });
                    
                }else {
                    this.$Message.error(res.msg)
                }
           
            });
        }
    }
};
</script>

<style lang="less"></style>
