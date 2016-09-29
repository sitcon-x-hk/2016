<template v-show="title.length > 0">
    <div class="row">
        <div class="col s12 m12">
            <h3 class="secondary-text">{{ title }}</h3>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col m12 s12">
                <div class="card">
                    <div class="card-content">
                        <p v-show="start && end">Time: {{ start }} - {{ end }}</p>
                        <p v-show="location">Location: {{ location }}</p>
                        <p>Language: {{ language }}</p>
                        <div v-show="tags.length">
                            Tag:
                            <div class="chip" v-for="tag in tags">
                                {{ tag }}
                            </div>
                        </div>
                        <p v-show="level">Level: {{ level }}</p>
                        <div v-show="introduction">
                            {{ introduction }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row" v-for="speaker in speakers">
            <Speaker
                    :image="speaker.image"
                    :name="speaker.name"
                    :community="speaker.community"
                    :communityLogo="speaker.communityLogo"
                    :introduce="speaker.introduce"
            ></Speaker>
        </div>
    </div>
</template>

<script>
    import content from '../../data.json';
    import Speaker from '../Speaker.vue';
    export default{
        components: {Speaker},
        data() {
            const topic = this.$route.params.topic;
            return content[topic];
        },
        ready() {
            $('.chips').material_chip();
        }
    }
</script>
