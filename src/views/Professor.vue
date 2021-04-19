<template>
    <section class="section-professor">
        <div class="heading-secondary u-margin-bottom-small">☻ Professor Info</div>
        <div class="info_card">
            <div style="width: fit-content;">
                <img src="http://www.waseda.jp/fsci/gips/assets/uploads/2015/07/07.jpg" alt="professor_img"
                class="info_card__image">
            <div class="contact_card--small">
                <ul>
                    <li v-for='item in professor.contact_info'>
                        <svg class="icon icon__small" aria-hidden="true">
                            <use :xlink:href="item.info_type"></use>
                        </svg>
                        <!-- <span style="margin-right: 2rem;">{{item.info_type}}</span> -->
                        <h4>{{item.info}}</h4>
                    </li>
                </ul>
            </div>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: space-between;">
                <div class="info_card__text">
                    <div style="display: flex;justify-content: space-between;">
                        <h3>
                            {{professor.name}}
                        </h3>
                        <h4>
                            {{professor.title}}
                        </h4>
                    </div>
                    <timeline></timeline>
                </div>
                <div class="contact_card">
                    <ul>
                        <li v-for='item in professor.contact_info'>
                            <svg class="icon icon__small" aria-hidden="true">
                                <use :xlink:href="item.info_type"></use>
                            </svg>
                            <!-- <span style="margin-right: 2rem;">{{item.info_type}}</span> -->
                            <h4>{{item.info}}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import timeline from '../components/Timeline.vue';
    import { mapState } from "vuex";

    export default {
        name: 'LongPage_Professor',
        components: {
            timeline
        },
        computed: {
            ...mapState({
                professor: (state) => state.professor,
                img: (state) => state.lab.imgs[1],
            }),
        },
    }
</script>