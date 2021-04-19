<template>
    <div class="divider_box">
        <p class="dividerText">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Divider',
        props: {
            title: String,
        },
    }
</script>