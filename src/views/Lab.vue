<template>
    <section class="section-lab">
        <div class="popup" id="popup" :style="isClick?'display: block':'display: none'">
            <div class="popup__content">
                <a href="#section-tours" class="popup__close">&times;</a>
                <img :src="currentImg" style="width: 100%;">
            </div>
        </div>

        <div class="heading-secondary u-margin-bottom-small">
            ♨ Laboratory
        </div>
        <div class="lab_card">
            <div v-for='item in lab.info' style="margin-bottom: 2rem;">
                <h3 class="heading-tertiary">
                    {{item.title}}
                </h3>
                <p class="paragraph">
                    {{item.content}}
                </p>
            </div>
            <div class="composition" style="margin-top: 2rem;">
                <a href="#popup">
                    <img v-for='(img,index) in lab.imgs' :srcset="`${img} 300w, ${img} 1000w`"
                        sizes="(max-width:56.25em) 20vw,(max-width:37.5em) 30vw, 300px" alt="Photo 1"
                        :class="`composition__photo composition__photo--p${index+1}`" :src="img"
                        @click='currentImg=img,isClick=true'>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: 'LongPage_Lab',
        data() {
            return {
                isClick: false,
                currentImg: '',
            }
        },
        components: {
        },
        computed: {
            ...mapState({
                lab: (state) => state.lab,
            }),
        },
    }
</script>