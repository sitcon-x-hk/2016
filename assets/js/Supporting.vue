<template>
    <div class="col s8 m4">
        <img :src="image" :alt="name">
        <div>
            {{ name }}
        </div>
    </div>
</template>

<style scoped>
    img {
        max-height: 200px;
        max-width: 200px;
        margin-left: auto;
        margin-right: auto;
    }

    div.col {
        padding-top: 20px;
    }
</style>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
                twoWays: false
            },
            image: {
                type: String,
                required: true
            }
        }
    }
</script>
