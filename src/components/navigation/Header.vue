<template>
    <div id="wrapper">
       <div id="title">{{ title }}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: 'MEGA SENA'
        }
    }
}
</script>
<style lang="scss" scoped>
#wrapper {
    padding: 1em;
    text-align: center;
    border: solid white 1px;
}
#title {
    font-size: 2em;
    color: white;
    text-shadow: 4px 2px 3px #636262;
}
</style>
