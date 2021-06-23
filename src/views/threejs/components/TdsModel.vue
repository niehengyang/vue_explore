<template>
    <el-row class="page">
        <base-scene @options="handleOptions"/>
    </el-row>
</template>

<script>
    import BaseScene from "../scene/BaseScene";
    import * as THREE from "three";
    import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js';

    export default {
        name: "TdsModel",
        components: {BaseScene},
        data(){
            return{
                renderer: false, //渲染器
                scene: false, //场景
                camera: false, //相机
                mygroup: false, //模型组
                control: false, //控制器
                stats: false, // 用于显示帧速率
                mixer: false //
            }
        },
        created() {},
        mounted() {
            this.initModel({//添加模型
                texturePath: "/",
                objPath: "model/FireDragon/Dragon 2.5_3ds.3ds",
                mtlPath: "model/FireDragon/textures/Dragon_ground_color.jpg"
            })
        },
        methods:{
            /** 导入外部资源**/
            initModel(objDef) {
                const TDSloader = new TDSLoader( );
                const normal = new THREE.TextureLoader().load( objDef.mtlPath );
                TDSloader.load( objDef.objPath, function ( object ) {
                    object.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            child.material.specular.setScalar( 0.1 );
                            child.material.normalMap = normal;
                        }
                    } );
                    this.scene.add( object );
                } );
            },

            handleOptions(op){
                this.renderer = op.renderer
                this.scene = op.scene
                this.camera = op.camera
                this.control = op.control
            }
        }
    }
</script>

<style scoped>
    .page{
        width: 100%;
        height: 100%;
    }
</style>
