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
                });
        }
    }
};
</script>

<style lang="less"></style>
