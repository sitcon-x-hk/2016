<template>
    <div class="col s12 m12">
        <div class="card">
            <div class="card-image" v-show="image.length">
                <img :src="image">
            </div>
            <div class="card-content">
                <div class="card-title">{{ name }}</div>
                <p>Community: {{ community }}</p>
                <img :src="logo" v-show="logo">

                <p>{{ introduce }}</p>
            </div>
            <div class="card-action" v-show="github">
                <a :href="url">
                    <i class="fa fa-github fa-3x"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        max-width: 300px;
        height: auto;
    }
</style>

<script>
    export default {
        props: {
            image: {
                type: String,
                required: true,
                twoWays: false
            },
            name: {
                type: String,
                required: true,
                twoWays: false
            },
            community: {
                type: String,
                required: true,
                twoWays: false
            },
            logo: {
                twoWays: false
            },
            introduce: {
                type: String,
                required: true,
                twoWays: false
            },
            github: {
                type: String,
                twoWays: false
            }
        },
        data() {
            return {
                url: `https://github.com/${this.github || ''}`
            }
        },
        ready() {
            console.log(this.logo);
        }
    }
</script>
