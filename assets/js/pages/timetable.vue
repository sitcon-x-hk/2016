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
</template>

<script>
    import schedules from '../schedules';
    export default {
        data() {
            return {schedules};
        }
    }
</script>
