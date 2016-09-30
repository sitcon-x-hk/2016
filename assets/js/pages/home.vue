<template>
    <div class="row">
        <div class="col s12 m12">
            <div class="card card-see-thought">
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
            <a v-link="{ path: './coc' }">
                <div class="card">
                    <div class="card-content">
                        <div class="card-title center-align">Code Of Conduct</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <h3 class="card-title">Introduction</h3>
                    <p>
                        SITCON Student IT Conference, formed by students with passion in IT,
                        a student-centered organisation hope to provide a stage
                        for all Hong Kong students to express and develop their talent with Open Source.
                    </p>
                    <p>
                        The theme of year 2016 is "Let's Open Source",
                        hoping to join students in the world of Open Source.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
