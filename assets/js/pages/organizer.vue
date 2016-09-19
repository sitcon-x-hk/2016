<template>
    <div class="row">
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <div class="card-title">Co-Organizers</div>
                    <div class="row">
                        <Organizer
                                image="https://cdn.sitconhk.pro/2016/images/logo/sitcon-x-hk-color.png"
                                name="SITCON x HK Community"
                        ></Organizer>
                        <Organizer
                                image="https://cdn.sitconhk.pro/2016/images/organizer/hkusu.png"
                                name="Computer Science Association, Engineering Society, HKUSU"
                        ></Organizer>
                        <Organizer
                                image="https://cdn.sitconhk.pro/2016/images/organizer/cityu.png"
                                name="Computer Science Society, City University of Hong Kong Students' Union"
                        ></Organizer>
                        <Organizer
                                image="https://cdn.sitconhk.pro/2016/images/organizer/hkbu.png"
                                name="The Computer Science Society, Hong Kong Baptist University"
                        ></Organizer>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <div class="card-title">Supporting Organization</div>
                    <div class="row">
                        <Supporting
                                image="https://cdn.sitconhk.pro/2016/images/support/cota.png"
                                name="Hong Kong Creative Open Technology Association"
                        ></Supporting>
                        <Supporting
                                image="https://cdn.sitconhk.pro/2016/images/support/oshk.png"
                                name="Open Source Hong Kong"
                        ></Supporting>
                        <Supporting
                                image="https://cdn.sitconhk.pro/2016/images/support/hklug.png"
                                name="Hong Kong Linux User Group"
                        ></Supporting>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            'Organizer': require('../Organizer.vue'),
            'Supporting': require('../Supporting.vue')
        }
    }
</script>
