<template>
    <section class="section-member">
        <div class="heading-secondary u-margin-bottom-small">
            ✿ 成员
        </div>
        <div class="gallery">
            <member-card v-for='member in sumList' :member='member' :title='member.title'></member-card>
        </div>
    </section>
</template>

<script>
    import { mapState } from "vuex";
    import memberCard from '@/components/MemberCard';

    export default {
        name: 'LongPage_Members',
        components: {
            memberCard,
        },
        data() {
            return {
                sumList: [],
            }
        },
        mounted() {
            this.sumMembers();
        },
        methods: {
            sumMembers() {
                let sumList = [];
                for (let item of this.members) {
                    for (let member of item.memberList) {
                        member.title = item.title;
                        sumList.push(member);
                    }
                }
                this.sumList = sumList;
            }
        },
        computed: {
            ...mapState({
                members: (state) => state.members,
            }),
        },
    }
</script>

<style>
    .arrow {
        font-size: 4rem;
        border-radius: 50%;
        padding: 1rem;
        color: rgba(255, 255, 255, .7);
        border: none;
        transition: all .2s;
    }

    .arrow:hover {
        transform: translateY(-1rem);
        color: rgba(255, 255, 255, .85);
        cursor: pointer;
    }

    .arrow:active {
        transform: translateY(-.5rem);
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    }

    .classifys {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding: 2rem 0;
    }
</style>