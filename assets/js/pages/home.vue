<template>
    <div class="row">
        <div class="col s12 m12">
            <div class="card card-see-thought">
                <div class="card-content">

                </div>
                <div class="card-image">
                    <logo height="140"></logo>
                    <div class="secondary-text bold-text center-align">SITCON x HK 2016</div>
                </div>
                <div class="card-content">
                    <div class="center-align">
                        <p class="text-strong">A conference and community for Student</p>
                        <p class="secondary-text text-call">22 Oct 2016 (Sat)</p>
                        <p class="secondary-text text-call">City University of Hong Kong Academic 1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col s6 m4">
            <a v-link="{ path: './organizers'}">
                <div class="card">
                    <div class="card-content">
                        <div class="card-title center-align">About Us</div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col s6 m4">
            <a v-link="{ path: './timetable' }">
                <div class="card">
                    <div class="card-content">
                        <div class="card-title center-align">Timetable</div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col s6 m4">
            <a v-link="{ path: './sponsor' }">
                <div class="card">
                    <div class="card-content">
                        <div class="card-title center-align">Sponsorship</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <intro></intro>
</template>

<script>
    export default {
        components: {
            'intro': require('./intro.vue')
        }
    }
</script>
