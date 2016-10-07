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
                            <th>LT 16</th>
                            <th>LT 17</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="schedule in schedules">
                                <td> {{ schedule.start }} - {{ schedule.end }} </td>
                                <td v-show="schedule.combine" colspan="2">
                                    <Topic :id="schedule.title"></Topic>
                                </td>
                                <td v-show="!schedule.combine">
                                    <Topic :id="schedule.main"></Topic>
                                </td>
                                <td v-show="!schedule.combine">
                                    <Topic :id="schedule.sub"></Topic>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import schedules from '../schedules';
    import Topic from '../Topic.vue';
    export default {
        components: {Topic},
        data() {
            return {schedules};
        }
    }
</script>
