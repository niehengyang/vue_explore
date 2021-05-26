<template>
    <el-row class="page">
        <div class="ellipse-box">
            <div class="ellipse1"></div>
            <div class="ellipse2"></div>
            <div class="ellipse3"></div>
            <div class="ellipse4"></div>
            <div class="ellipse5"></div>
        </div>
    </el-row>
</template>

<script>
    export default {
        name: "SignalTower"
    }
</script>

<style scoped>
    .page{
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2c3e50;
    }
    .ellipse-box{
        width: 200px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @-webkit-keyframes breathe {
        0% {
            opacity: .0;
        }

        50% {
            opacity: .5;
        }

        80% {
            opacity: 1;
        }

        100% {
            opacity: .0;
        }
    }

    .ellipse1{
        width: 50px;
        height: 20px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe;
        animation-duration: 1s;
        animation-delay: 0.1s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }

    .ellipse2{
        width: 80px;
        height: 30px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe;
        animation-duration: 1.1s;
        animation-delay: 0.2s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
    .ellipse3{
        width: 110px;
        height: 40px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe;
        animation-duration: 1.2s;
        animation-delay: 0.3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
    .ellipse4{
        width: 140px;
        height: 50px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe;
        animation-duration: 1.3s;
        animation-delay: 0.4s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
    .ellipse5{
        width: 180px;
        height: 70px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe;
        animation-duration: 1.4s;
        animation-delay: 0.5s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }


</style>
