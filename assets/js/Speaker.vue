<template>
  <div class="col s12 m12">
    <div class="card">
      <div class="card-image" v-show="image.length">
        <img :src="image">
      </div>
      <div class="card-content">
        <div class="card-title">{{ name }}</div>
        <ul>
          <li>Community: {{ community }}</li>
        </ul>
        <p>{{ introduce }}</p>
        <img :src="communityLogo" v-show="communityLogo">
      </div>
    </div>
  </div>
</template>

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
      communityLogo: {
        type: String,
        twoWays: false
      },
      introduce: {
        type: String,
        required: true,
        twoWays: false
      }
    }
  }
</script>
