<script>
  import data from '../data.json';

  export default {
    props: {
      id: {
        type: String,
        required: true,
        twoWays: false
      }
    },
    data() {
      if (this.id in data) {
        const result = Object.assign({}, data[this.id]);
        result.found = true;
        result.topic = this.id;
        return result;
      } else {
        return {topic: this.id, found: false};
      }

    }
  }

</script>

<template>
  <a v-show="found" v-link="{ name: 'topic', params: {topic: topic} }">
    {{ title }}
  </a>
  <p v-show="!found">{{ topic }}</p>
</template>