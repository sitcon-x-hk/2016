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
                image="https://cdn.sitconhk.pro/2016/images/support/hklug.jpg"
                name="Hong Kong Linux User Group"
        ></Supporting>
        <Supporting
                name="SITCON - TW Community"
                image="https://cdn.sitconhk.pro/2016/images/support/sitcon.png"
        ></Supporting>
    </div>

    <div class="row">
        <div class="col s12 m12">
            <h3 class="secondary-text">Sponsor</h3>
        </div>
    </div>
    <div class="row">
        <div class="card horizontal">
            <div class="card-image">
                <img src="https://cdn.sitconhk.pro/2016/images/sponsor/oursky.png">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <h4 class="secondary-text">
                        Platinum Sponsor - Oursky Ltd.
                    </h4>
                    <p>
                        Oursky is a Hong Kong-based digital product studio founded in 2008.
                        The company develops web & mobile app apps for startups and enterprises,
                        including ASOS and Thomson Reuters.
                        In 2015, 60% of Oursky's iOS apps published were featured
                        in Apple's App Store and one was selected as a Best of 2013 App
                        on the App Store.
                    </p>

                    <p>
                        Our flagship product - Skygear.io,
                        is an open-source backend as a service (BaaS) with iOS / Android / Web SDKs.
                        Skygear.io provides common backend services
                        (such as authentication, database, push notification, background jobs,
                        pub-sub, chat messaging etc), server-less functions and managed hosting.
                        Skygear.io helps developers focus on building amazing client-side experiences
                        by offering backend infrastructure.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Organizer from '../Organizer.vue';
    import Supporting from '../Supporting.vue';
    export default {
        components: {Organizer, Supporting}
    }
</script>
