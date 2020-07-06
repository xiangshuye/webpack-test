<template>
    <Row :gutter="16">
        <Col :span="12" offset="4">
            <Form :model="form" :rules="rules" :label-width="100">
                <FormItem label="username">
                    <Input v-model="form.username" :maxlength="20"/>
                </FormItem>
                <FormItem label="password">
                    <Input v-model="form.password" type="password" :maxlength="16"></Input>
                </FormItem>
                <FormItem label="城市">
                    <Select v-model="form.city">
                        <Option value="beijing">北京</Option>
                        <Option value="NewYork">纽约</Option>
                        <Option value="London">伦敦</Option>
                        <Option value="Paris">巴黎</Option>
                    </Select>
                </FormItem>
                <FormItem label="单选">
                    <RadioGroup v-model="form.radio">
                        <Radio label="male">男</Radio>&emsp;
                        <Radio label="female">女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="checkbox">
                    <CheckboxGroup v-model="form.checkbox">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="switch">
                    <i-switch v-model="form.switch" size="large">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </i-switch>
                </FormItem>
                <FormItem label="Slider">
                    <Slider v-model="form.slider" range></Slider>
                </FormItem>
                <FormItem label="Slider">
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>&emsp;
                    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem>
            </Form>
        </Col>
    </Row>
</template>

<script>
export default {
    name:"List2",
    data(){
        return {
            form:{
                username: '',
                checkbox: [],
                slider: [20, 50],
            },
            rules:{}
        }
    }
}
</script>
<style lang="less">

</style>
