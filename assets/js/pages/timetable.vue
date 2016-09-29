<template>
    <div class="row">
        <div class="col s12 m12">
            <h3 class="secondary-text">Timetable</h3>
            <div class="card">
                <div class="card-content">
                    <table class="responsive centered highlight bordered">
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>LT A</th>
                            <th>LT B</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="schedule in schedules">
                                <td> {{ schedule.start }} - {{ schedule.end }} </td>
                                <td v-show="schedule.combine" colspan="2">
                                    {{ schedule.title }}
                                </td>
                                <td v-show="!schedule.combine">{{ schedule.main }}</td>
                                <td v-show="!schedule.combine">{{ schedule.sub }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div>
        <ul class="collection with-header">
            <li class="collection-header"><h4>Topics</h4></li>
            <li class="collection-item" v-for="topic in topics">
                <div>
                    {{ topic.title }}
                    <a v-link="{ name: 'topic', params: {topic: $key} }" class="secondary-content">
                        <i class="material-icons">send</i>
                    </a>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<style scoped>
    ul.collection > li {
        color: black;
    }
</style>

<script>
    import schedules from '../schedules';
    import data from '../../data.json';
    export default {
        data() {
            const topics = {};
            Object.keys(data).forEach(function (key) {
                topics[key] = data[key];
            });
            return {schedules, topics};
        },
        ready() {

        }
    }
</script>
