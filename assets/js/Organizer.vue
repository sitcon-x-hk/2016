<template>
    <div class="col s12 m6">
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
        height: auto !important;
        max-width: 300px !important;
        margin-left: auto;
        margin-right: auto;
    }

    .card-content {
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
