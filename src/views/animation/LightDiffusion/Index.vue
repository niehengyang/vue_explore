<template>
    <el-row class="page">
        <div class="item1"></div>

        <div class="ballon"></div>
    </el-row>
</template>

<script>
    export default {
        name: "LightDiffusion"
    }
</script>

<style scoped>
    .page{
        width: 100%;
        height: 200px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: #2c3e50;
    }

/** 光波**/
    /*0%开始，100%结束*/
    @keyframes scale{
        0%{transform:scale(1)}
        50%,75%{transform:scale(3)}
        78%,100%{opacity:0}
    }
    .item1 {
        position: relative;
        width: 30px;
        height: 30px;
        background-color: #FFFF00;
        border-radius: 50%;
        margin: 100px  100px 50px 200px;
    }
    .item1:before {
        content: '';
        display:block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        opacity: .7;
        background-color: #FFFF00;
        animation: scale 2s infinite cubic-bezier(0,0,.49,1.02);
        animation-delay: 200ms;
    }

/** 放大缩小**/
    @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
        0%{
            transform: scale(1);  /*开始为原始大小*/
        }
        25%{
            transform: scale(1.1); /*放大1.1倍*/
        }
        50%{
            transform: scale(1);
        }
        75%{
            transform: scale(1.1);
        }
    }
    .ballon{
        width: 100px;
        height: 100px;
        background: url("../../../assets/images/logo.png");
        background-size: 100px 100px;
        -webkit-animation-name: scaleDraw; /*关键帧名称*/
        -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
        -webkit-animation-iteration-count: infinite;  /*动画播放的次数*/
        -webkit-animation-duration: 5s; /*动画所花费的时间*/
    }
</style>
