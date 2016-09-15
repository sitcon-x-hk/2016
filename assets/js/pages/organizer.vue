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
</template>

<script>
    export default {
        components: {
            'Organizer': require('../Organizer.vue')
        }
    }
</script>
