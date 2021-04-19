<template>
    <div class="tag" :style="`background-color: ${bcgColor};color:${color};border:1px solid ${color}`">
        <p class="tagText">{{content}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
        props: {
            content: String,
            bcgColor: String,
            color: String,
        },
    }
</script>