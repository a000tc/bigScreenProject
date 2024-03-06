<template>
    <svg :class="svgClass" aria-hidden="true"  :fill="color">
        <use :xlink:href="iconClassName"></use>
    </svg>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    // 添加自定义类名
    className: {
        type: String,
        default: ''
    },
    color:{
        type: String,
        required: false,
        default:"#32c5e9"
    },
    // iconfont中的名字
    iconName: {
        type: String,
        required: true
    }
})

const svgClass = computed(() => {
    if (props.className) {
        return `icon ${ props.className }`
    } else {
        return 'icon'
    }
})
const iconClassName = computed(() => `#${ props.iconName }`)
</script>

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    // fill: currentColor;
    // fill: #37a2da;
    overflow: hidden;
}
</style>