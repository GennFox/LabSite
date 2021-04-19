<template>
    <div id="publications">
        <table>
            <tr>
                <th :style="`background-color:${color};border:1px solid ${color};`">Title</th>
                <th :style="`background-color:${color};border:1px solid ${color};`">Authors</th>
                <th :style="`background-color:${color};border:1px solid ${color};`">Year</th>
            </tr>
            <tr v-for='item in sumList' :style="`background-color:${bcgColor};border:`">
                <td :style="`border:1px solid ${color};`">
                    <p>{{item.title}}</p>
                    <tag :bcgColor='bcgColor' :color='color' v-for='(val,key) in item'
                        v-if="key!='title'&&key!='author'&&key!='year'" :content='val'
                        style="padding-top: 0;padding-bottom: 0;"></tag>
                </td>
                <td :style="`border:1px solid ${color};`">{{item.author}}</td>
                <td :style="`text-align: center;border:1px solid ${color};`">{{item.year}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import tag from '@/components/Tag';

    export default {
        name: 'publication_table',
        components: {
            tag,
        },
        props: {
            bcgColor: String,
            color: String,
        },
        data() {
            return {
                sumList: [],
            }
        },
        mounted() {
            this.sumPubs();
        },
        methods: {
            sumPubs() {
                let sumList = [];
                for (let item of this.publications) {
                    for (let publication of item.list) {
                        publication.year = item.year;
                        sumList.push(publication);
                    }
                }
                this.sumList = sumList;
            }
        },
        computed: {
            ...mapState({
                publications: (state) => state.publications,
            }),
        },
    }
</script>