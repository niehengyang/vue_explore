<template>
    <el-row class="page">
        <div ref='threeDom' class="threeDom"></div>
        <div id="Stats-output"></div>
    </el-row>
</template>

<script>
    import * as THREE from "three";
    import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";
    import { MtlObjBridge } from "three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js";
    import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
    import Stats from 'stats-js'     // 帧速率显示
    export default {
        name: "Index1",
        data(){
            return{
                webRender: false, //渲染器
                scene: false, //场景
                camera: false, //相机
                mygroup: false, //模型组
                mouse: null, // 鼠标对象
                control: false, //控制器
                stats: null, // 用于显示帧速率
                mixer: false, //
            }
        },
        created() {},
        mounted() {
            //注： 顺序不可错乱
            this.init()
            this.initStats()
            this.animate()
            this.initEvent()
        },
        methods:{
            init(){
                this.initRender()
                this.initScene()
                this.initCamera()
                // this.initModel()
                // this.initFbxModel(
                //     {//添加模型
                //         texturePath: "public/model/97-free_091_aya_obj/",
                //         fbxPath: "hose/45-cottage_free_other/Cottage_FREE.fbx",
                //         mtlPath: "hose/45-cottage_free_other/Cottage_FREE.mtl"
                //     }
                // )
                // this.initObjModel({//添加模型
                //     texturePath: "public/model/97-free_091_aya_obj/",
                //     objPath: "model/eye/obj/eyeball.obj",
                //     mtlPath: "model/eye/obj/eyeball.mtl"
                // })
                // this.init3dsModel()
                this.initHelper()
                this.initControl()
            },

            initRender(){ //初始化渲染器
                var width = window.innerWidth; //窗口宽度 window.innerWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏）包含滚条
                var height = window.innerHeight; //窗口高度 window.innerHeight
                this.webRender = new THREE.WebGLRenderer({ antialias: true }); //创建渲染器
                this.webRender.setClearColor(0xffffff); //添加背景颜色
                this.webRender.setSize(width, height); // 设定渲染器尺寸
                this.$refs.threeDom.appendChild(this.webRender.domElement); //通过 this.$refs获取页面的dom将场景初始化上去
            },

            initScene(){ //初始化场景 并向场景添加光源和辅助坐标系
                this.scene = new THREE.Scene(); //初始化场景
                var ambient = new THREE.AmbientLight(0x444444, 3); //添加光源  颜色和光照强度
                // var axisHelper = new THREE.AxesHelper(600); //添加辅助坐标系 参数位辅助坐标系的长度
                this.scene.add(ambient); //向场景中添加光源 和 辅助坐标系
            },
            initCamera(){
                var width = window.innerWidth; //窗口宽度
                var height = window.innerHeight; //窗口高度
                this.camera = new THREE.PerspectiveCamera(90, width / height, 1, 10000); //使用透视相机
                this.camera.position.set(0, 0, 100); //设置相机位置
                this.camera.lookAt(new THREE.Vector3(0, 0, 0)); // 相机看向
            },

            initHelper(){
                var gridHelper = new THREE.GridHelper( 100, 30, 0x2C2C2C, 0x888888 );
                gridHelper.position.y = -10;
                this.scene.add(gridHelper);
            },

            initModel() {
                this.mygroup = new THREE.Group(); //建立一个分组
                let geometry = new THREE.BoxGeometry(6, 6, 6);
                //创建纹理贴图
                const texture = new THREE.TextureLoader().load(require('../../assets/mdoelTexture/qjt.jpg'))
                //添加材质
                const material = new THREE.MeshBasicMaterial({ map: texture })

                let mesh = new THREE.Mesh(geometry, material);
                this.mygroup.add(mesh);
                this.scene.add(this.mygroup);
            },

            initFbxModel(objDef) {
                this.mygroup = new THREE.Group(); //建立一个分组
                const fbx_loader = new FBXLoader();
                fbx_loader.load( objDef.fbxPath , ( object )=> {
                    object.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    object.position.set(0, 0,0 );//模型摆放的位置
                    object.scale.set(0.01, 0.01, 0.01);//模型放大或缩小，有的时候看不到模型，考虑是不是模型太小或太大。
                    this.mygroup.add(object);
                    this.scene.add(this.mygroup);
                });
            },
            /** 导入外部资源**/
            initObjModel(objDef) {

                var objLoader2 = new OBJLoader2();
                let mtlLoader = new MTLLoader()
                let _this = this

                var onError = function (xhr) { console.log("An error happened"); };
                var onProgress = function(xhr){ console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                     };

                mtlLoader.load(objDef.mtlPath, function (mtlParseResult) {
                    objLoader2.setLogging(true, true)
                    objLoader2.addMaterials(MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult))
                    objLoader2.load(objDef.objPath, function (object3d) {
                        _this.oldChildren = _this.dealMeshMaterial(object3d.children)
                        object3d.position.set(2, 2,0 );//模型摆放的位置
                        object3d.scale.set(1, 1, 1);//模型放大或缩小，有的时候看不到模型，考虑是不是模型太小或太大。
                        _this.scene.add(object3d)
                    }, onProgress, onError, null)
                })
            },
            /**
             * 留住每个模型的 原材质
             */
            dealMeshMaterial(arrs) {
                let result = [];
                for (let i = 0; i < arrs.length; i++) {
                    let obj = {
                        name: arrs[i].name,
                        material: arrs[i].material,
                    };
                    result.push(obj);
                }
                return result;
            },


            init3dsModel(){

            },

            initControl(){
                    // 创建控制器
                this.control = new OrbitControls( this.camera, this.webRender.domElement );

                this.control.target = new THREE.Vector3(0, 0, 0);//控制焦点

                this.control.autoRotate = false;//将自动旋转关闭
                this.control.minDistance = 10;
                this.control.maxDistance = 30;
            },

            animate() { //动态刷新
                requestAnimationFrame(this.animate);

                //可添加动画
                // this.mygroup.rotation.x += 0.001;
                // this.mygroup.rotation.y += 0.002;

                this.webRender.render(this.scene, this.camera);
                this.control.update();	//更新控制器.
                this.stats.update(); //帧刷新

            },

            onWindowResize(){ // 渲染器自适应
                // 重新设置相机宽高比例
                this.camera.aspect = window.innerWidth / window.innerHeight;
                // 更新相机投影矩阵
                this.camera.updateProjectionMatrix();
                // 重新设置渲染器渲染范围
                this.webRender.setSize(window.innerWidth, window.innerHeight);
            },

            initEvent(){
                window.addEventListener('resize', this.onWindowResize);
            },

            //渲染帧
            initStats(){
                // state 加载帧速率显示器
                this.stats = new Stats()
                //设置统计模式
                this.stats.setMode(0); // 0: fps, 1: ms
                //统计信息显示在左上角
                this.stats.domElement.style.position = 'absolute';
                this.stats.domElement.style.left = '0px';
                this.stats.domElement.style.top = '0px';
                //将统计对象添加到对应的<div>元素中
                document.getElementById("Stats-output").appendChild( this.stats.domElement);
            }
        }
    }
</script>

<style scoped>
    .page{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .threeDom{
        width: 100%;
        height: 100%;
    }
</style>
