<template>
    <img
            src="https://cdn.sitconhk.pro/2016/images/logo/sitcon-x-hk-color.png"
            :style="{height: h, width: 'auto'}"
    >
</template>

<script>
    export default {
        data() {
            const height = parseInt(this.height);
            return {
                h: height < 0 ? 'auto' : `${height}px`
            }
        },
        props: {
            height: {
                default: 140
            }
        }
    }
</script>
