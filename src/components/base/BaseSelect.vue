<template>
  <Select v-bind="$attrs" v-on="$listeners">
    <div slot="prefix">
      <slot name="prefix"><Icon :type="prefix"></Icon></slot>
    </div>
    <slot>
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>
      <Option value="6">6</Option>
      <Option value="7">7</Option>
    </slot>
  </Select>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    prefix: {
      type: String
    }
  }
};
</script>

<style></style>
