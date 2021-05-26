<template>
    <div class="wrapper" id="wrapper">
        <canvas id="theCanvas"></canvas>
        <div id="boxPosition1"></div>
        <div id="boxPosition2"></div>
    </div>
</template>

<script>
import {initCanvas} from "../../utils/canvasDrawLine";

export default {
    name: "DivDrag",
    data(){
        return{
            canvasBox: {},
            halfWidth: 0,
            halfHeight: 0,
            ctx: {},
            prevX: 0,
            prevY: 0,
            cx: 0,
            cy: 0
        }
    },
    created() {

    },
    mounted() {
        // this.initData()
        this.divWay()
    },
    methods:{
        divWay(){
            let dom1 = document.getElementById("boxPosition1")
            let dom2 = document.getElementById("boxPosition2")
            // console.log(dom1.getBoundingClientRect().left,dom1.getBoundingClientRect().top)
            // console.log(dom2.getBoundingClientRect().left,dom2.getBoundingClientRect().top)
          initCanvas("theCanvas", dom1, dom2);
        },
        initData(){
            this.canvasBox = document.getElementById("theCanvas");

            this.ctx =  this.canvasBox.getContext("2d");
            this.halfWidth = window.innerWidth / 2;
            this.halfHeight = window.innerHeight / 2;

            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;

            this.canvasBox.addEventListener('click', this.addDot);
        },

        addDot(e) {
            let size = 0;

            this.ctx.fillStyle = '#2575f7';
            this.ctx.strokeStyle = '#2575f7';

            this.ctx.beginPath();

            // if (e.x && e.y) {
            //     this.drawDot(e.x, e.y, size);
            // } else {
            //     this.drawDot(e.clientX, e.clientY, size);
            // }
            this.drawDot(e.getBoundingClientRect().left, e.getBoundingClientRect().top, size);
        },
        drawDot(x, y, s) {
            if (s !== 10) {
                this.ctx.arc(x, y, s, 0, 2 * Math.PI);
                this.ctx.fill();
                this.ctx.stroke();
                s++;
                requestAnimationFrame(()=> {
                    this.drawDot(x, y, s);
                });
            } else {
                if (this.prevX !== 0 && this.prevY !== 0) {
                    this.addLine(x, y, this.prevX, this.prevY);
                } else {
                    this.prevX = x;
                    this.prevY = y;
                }
            }
        },
        addLine(x, y, px, py) {
            let goingForward = false,
                goingUp = false;

            this.ctx.beginPath();
            this.ctx.moveTo(px, py);
            this.cx = px;
            this.cy = py;

            if (this.cx < x) {
                goingForward = true;
            }

            if (this.cy > y) {
                goingUp = true;
            }

            this.drawLine(x, y, goingForward, goingUp);
        },

        drawLine(x, y, gf, gu) {
            let metX = false,
                metY = false;

            this.canvasBox.removeEventListener('click', this.addDot);

            this.ctx.lineTo(this.cx, this.cy);
            this.ctx.stroke();

            if (gf) {
                if ( this.cx >= x) {
                    metX = true;
                }

                if ( this.cx < x && !metX) {
                    this.cx += 4;
                }

            } else {
                if ( this.cx <= x) {
                    metX = true;
                }

                if ( this.cx > x && !metX) {
                    this.cx -= 4;
                }
            }

            if (gu) {
                if ( this.cy <= y) {
                    metY = true;
                }

                if ( this.cy > y && !metY) {
                    this.cy -= 4;
                }

            } else {
                if ( this.cy >= y) {
                    metY = true;
                }

                if ( this.cy < y && !metY) {
                    this.cy += 4;
                }
            }

            if (!metY || !metX) {
                requestAnimationFrame(()=> {
                    this.drawLine(x, y, gf, gu);
                });
            } else {
                this.prevX = x;
                this.prevY = y;
                this.canvasBox.addEventListener('click',  this.addDot);
            }
        }

    }
}
</script>

<style scoped lang="css">
.wrapper{
    width: 100%;
    height: 600px;
    padding: 30px;
}
#theCanvas{
    width: 100%;
    height: 1000px;
    position: absolute;
}
#boxPosition1{
    width: 200px;
    height: 200px;
    background: aqua;
    float: left;
}
#boxPosition2{
    width: 200px;
    height: 200px;
    background: #42b983;
    float: right;
}
</style>
