<template>
    <div class="row">
        <div class="col s12 m12">
            <h3 class="secondary-text">Co-Organizers</h3>
        </div>
    </div>
    <div class="row">

        <Organizer
                image="https://cdn.sitconhk.pro/2016/images/logo/sitcon-x-hk-color.png"
                name="SITCON x HK Community"
        ></Organizer>

        <Organizer
                image="https://cdn.sitconhk.pro/2016/images/organizer/cityu.png"
                name="Techie Brain, 31 st Executive Committee of Computer Science Society, City University of Hong Kong Students' Union"
        ></Organizer>

        <Organizer
                image="https://cdn.sitconhk.pro/2016/images/organizer/hkusu.png"
                name=" Computer Science Association, Engineering Society, HKUSU"
        ></Organizer>

        <Organizer
                image="https://cdn.sitconhk.pro/2016/images/organizer/hkbu.png"
                name="The Computer Science Society, Hong Kong Baptist University"
        ></Organizer>

    </div>


    <div class="row">
        <div class="col s12 m12">
            <h4 class="secondary-text">Supporting Organization</h4>
        </div>
    </div>

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
</template>

<script>
    export default {
        components: {
            'Organizer': require('../Organizer.vue'),
            'Supporting': require('../Supporting.vue')
        }
    }
</script>
