<template>
    <div class="col s12 m6">
        <img :src="image" :alt="name">
        <div>
            {{ name }}
        </div>
    </div>
</template>

<style scoped>
    img {
        max-height: 300px;
        max-width: 400px;
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
