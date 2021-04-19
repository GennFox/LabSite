<template>
    <div id='LRPage'>
        <header class="header">
            <img class='logo' src="https://www.waseda.jp/fsci/gips/assets/uploads/2016/09/logo_gips_unit.png"
                alt="Waseda Logo">
            <nav class="sidebar">
                <ul class="side-nav">
                    <li v-for='(item,index) in sidebarMenu' :class="item.class">
                        <a :href='`#${item.id}`' class="side-nav__link" @click='addClass(index)'>
                            <svg class="icon icon__small" aria-hidden="true">
                                <use :xlink:href="item.icon"></use>
                            </svg>
                            <span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id='navi-toggle' :checked='isCheck'>

                <label for="navi-toggle" class="navigation__button" @click='isCheck=true'>
                    <span class="navigation__icon">
                        &nbsp;
                    </span>
                </label>

                <div class="navigation__background">&nbsp;</div>

                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item" v-for='(item,index) in sidebarMenu'>
                            <a :href='`#${item.id}`' class="navigation__link" @click='isCheck=false'>
                                <span>0{{index+1}}</span>
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="container">
            <main class="content" @scroll="scrollEvent">
                <div class="welcome">
                    <h1 style="font-size: 10rem; margin-bottom: 2rem;">
                        Welcome
                    </h1>
                    <h3 style="font-size: 6rem;">to
                        <span style="font-family: 'Tangerine'">Yoshie Osamu</span>
                    </h3>
                    <h3 style="font-size: 6rem; margin-bottom: 5rem;">Laboratory</h3>
                    <button class="btn btn--primary" style="width: max-content;">Discover</button>
                </div>
                <professor ref='professor' id='professor'></professor>
                <research ref='research' id='research'></research>
                <lab ref='lab' id='lab'></lab>
                <!-- <members ref='members' id='members'></members> -->
                <section id='table' class="section-table">
                    <div class="heading-secondary u-margin-bottom-small">
                        ★ Publication
                    </div>
                    <publicationTable ref='table' bcgColor='#ffe5d8' color='#ae7f6c'></publicationTable>
                </section>
            </main>
        </div>
        <footer class="footer">
            &copy; 2021 by Zhang Jingyi, Research Future Co,Ltd.
        </footer>
    </div>
</template>

<script>
    import professor from "./views/Professor";
    // import members from "./views/Members";
    import lab from "./views/Lab";
    import research from "./views/Research";
    import publicationTable from "./components/PublicationTable"

    export default {
        name: 'LRPage',
        components: {
            professor,
            // members,
            lab,
            research,
            publicationTable
        },
        data() {
            return {
                isCheck: false,
                scrollLeft: [],
                curIndex: -1,
                inactiveClass: 'side-nav__item',
                activeClass: 'side-nav__item side-nav__item--active',
                sidebarMenu: [
                    { title: 'Professor', class: '', id: 'professor', icon: '#icontie', },
                    { title: 'Research', class: '', id: 'research', icon: '#iconresearch', },
                    { title: 'Lab', class: '', id: 'lab', icon: '#iconlab', },
                    // { title: 'members',class:'', id: 'members',},
                    { title: 'Publication', class: '', id: 'table', icon: '#iconpaperfile', },
                ]
            }
        },
        mounted() {
            this.addClass(0);
            this.calPosition(this.sidebarMenu);
        },

        methods: {
            addClass(index) {
                if (index != this.curIndex) {
                    this.curIndex == -1 ? null : this.sidebarMenu[this.curIndex].class = this.inactiveClass;
                    this.sidebarMenu[index].class = this.activeClass;
                    this.curIndex = index;
                }
            },
            calPosition(arr) {
                this.scrollLeft.push(this.$refs.professor.$el.offsetLeft);
                this.scrollLeft.push(this.$refs.research.$el.offsetLeft);
                this.scrollLeft.push(this.$refs.lab.$el.offsetLeft);
                this.scrollLeft.push(this.$refs.table.$el.offsetLeft);
            },
            scrollEvent(e) {
                // console.log(e);
                let left = e.srcElement.scrollLeft;
                let curId = '';
                for (let i = 0; i < this.sidebarMenu.length; i++) {
                    if (left > this.scrollLeft[i]) {
                        this.addClass(i + 1);
                    }
                    else if(left <= this.scrollLeft[0]){
                        this.addClass(0);
                    }
                }
            },
        },
    }
</script>

<style lang='scss'>
    @import url('https://fonts.font.im/css?family=Tangerine');
    @import '//at.alicdn.com/t/font_2441705_ob3yn1eh8t.css';

    .headssss {
        color: aliceblue;
    }
</style>