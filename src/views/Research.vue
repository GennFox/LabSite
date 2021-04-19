<template>
    <section class="section-research">
        <div class="heading-secondary u-margin-bottom-small">★ Research Area</div>
        <div class="cardBox">
            <div class="card" v-for='(topic,index) in research_topic'>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="topic.img"></use>
                </svg>
                <div class="card__text">
                    <h2>{{topic.name}}</h2>
                    <p>{{topic.desc}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: 'LongPage_Research',
        computed: {
            ...mapState({
                research_topic: (state) => state.professor.research_topic,
            }),
        },
    }
</script>