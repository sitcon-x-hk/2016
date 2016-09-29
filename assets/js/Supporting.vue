<template>
    <div class="col s12 m3">
        <div class="card">
            <div class="card-image">
                <img :src="image" :alt="name">
            </div>
            <div class="card-content">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 200px !important;
        height: auto !important;
        margin-left: auto;
        margin-right: auto;
    }

    .card {
        height: 350px;
        text-align: center;
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
