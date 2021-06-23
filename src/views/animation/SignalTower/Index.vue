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

    @-webkit-keyframes breathe1 {
        0% {
            opacity: .0;
            transform: translateY(-20px);/**上移元素**/
        }
        50% {
            opacity: .3;
        }
        80% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes breathe2 {
        0% {
            opacity: .0;
            transform: translateY(-20px);/**上移元素**/
        }
        50% {
            opacity: .3;
        }
        80% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes breathe3 {
        0% {
            opacity: .0;
            transform: translateY(-20px);/**上移元素**/
        }
        50% {
            opacity: .3;
        }
        80% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes breathe4 {
        0% {
            opacity: .0;
            transform: translateY(-20px);/**上移元素**/
        }
        50% {
            opacity: .3;
        }
        80% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes breathe5 {
        0% {
            opacity: .0;
            transform: translateY(-20px);/**上移元素**/
        }
        50% {
            opacity: .3;
        }
        80% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    .ellipse1{
        width: 50px;
        height: 20px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe1;
        animation-duration: 2s;
        animation-delay: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .ellipse2{
        width: 80px;
        height: 30px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe2;
        animation-duration: 2s;
        animation-delay: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    .ellipse3{
        width: 110px;
        height: 40px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe3;
        animation-duration: 2s;
        animation-delay: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    .ellipse4{
        width: 140px;
        height: 50px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe4;
        animation-duration: 2s;
        animation-delay: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    .ellipse5{
        width: 180px;
        height: 70px;
        margin: 2px;
        border: 1px solid #03f2ff;
        border-radius: 50% / 50%;

        animation-name: breathe5;
        animation-duration: 2s;
        animation-delay: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }


</style>
