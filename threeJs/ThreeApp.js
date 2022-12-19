import React, { Component } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import $ from 'jquery'

export default class Sketch {

    constructor(selector) {
        let URL = "/static/webgl/"
        let manager = new THREE.LoadingManager();
        let raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2(), SELECTED;
        let clock = new THREE.Clock(), mixer, action, delta;
        let init, cityLoad, spritStore = [], hologramStore = [], hologramLines = [], cloudMesh, spriteClicked = false;
        let cameraMove = false;
        let trainPath = URL + "assets/Train.gltf";
        let width = $(window).width();
        let textData = [];
        manager.onStart = function (url, itemsLoaded, itemsTotal) {
            console.log("STARTED....");
            $(".loaderContainer").show();
        }
        manager.onProgress = function (url, itemsLoaded, itemsTotal) {
            console.log("PROGRESSING....");
            $(".loaderContainer").show();
        };
        manager.onLoad = function () {
            console.log("LOADED....");
            $(".loaderContainer").hide();
        };

        let forSprites = [
            {
                "img": URL + "tex_2/data.png", "x": -460, "y": 300, "z": -350, "sX": 115, "sY": 170, "name": "data"
            },
            {
                "img": URL + "tex_2/data-analytics.png", "x": -180, "y": 265, "z": -670, "sX": 135, "sY": 195, "name": "dataTwo"
            },
            {
                "img": URL + "tex_2/settings.png", "x": 145, "y": 240, "z": -450, "sX": 115, "sY": 175, "name": "settings"
            },
            {
                "img": URL + "tex_2/world.png", "x": 270, "y": 330, "z": -300, "sX": 110, "sY": 165, "name": "world"
            },
            {
                "img": URL + "tex_2/security.png", "x": 425, "y": 250, "z": -430, "sX": 105, "sY": 165, "name": "security"
            },
            {
                "img": URL + "tex_2/alfanar-logo.png", "x": -205, "y": 80, "z": 20, "sX": 80, "sY": 80, "name": "alfanar"
            },
        ];

        let camAnim = {
            "data": { "name": "data", "xBox": -460, "yBox": 250, "zBox": -250, "xCam": -450, "yCam": 200, "zCam": 375 },
            "dataTwo": { "name": "dataTwo", "xBox": -180, "yBox": 300, "zBox": -700, "xCam": -150, "yCam": 150, "zCam": 100 },
            "settings": { "name": "settings", "xBox": 140, "yBox": 280, "zBox": -300, "xCam": 100, "yCam": 50, "zCam": 300 },
            "world": { "name": "world", "xBox": 270, "yBox": 320, "zBox": -300, "xCam": 200, "yCam": 200, "zCam": 325 },
            "security": { "name": "security", "xBox": 380, "yBox": 220, "zBox": -450, "xCam": 300, "yCam": 200, "zCam": 180 },
            "alfanar": { "name": "alfanar", "xBox": -205, "yBox": 80, "zBox": 50, "xCam": -300, "yCam": 200, "zCam": 400 },
        }
        let material = {
            bLightsMat: new THREE.MeshLambertMaterial({
                color: 0x170808,
                combine: THREE.MixOperation,
                side: THREE.DoubleSide
            }),
            dataIconMat: new THREE.MeshBasicMaterial({ map: texLoad(URL + "tex_2/Data-An.png"), transparent: true, combine: THREE.MixOperation, side: THREE.DoubleSide }),
            dataTwoIconMat: new THREE.MeshBasicMaterial({ map: texLoad(URL + "tex_2/ML.png"), transparent: true, combine: THREE.MixOperation, side: THREE.DoubleSide }),
            settingIconMat: new THREE.MeshBasicMaterial({ map: texLoad(URL + "tex_2/security.png"), transparent: true, combine: THREE.MixOperation, side: THREE.DoubleSide }),
            worldIconMat: new THREE.MeshBasicMaterial({ map: texLoad(URL + "tex_2/infrastructure.png"), transparent: true, combine: THREE.MixOperation, side: THREE.DoubleSide }),
            securityIconMat: new THREE.MeshBasicMaterial({ map: texLoad(URL + "tex_2/Digital-Transformation.png"), transparent: true, combine: THREE.MixOperation, side: THREE.DoubleSide }),
            alfanarIconMat: new THREE.MeshBasicMaterial({ map: texLoad(URL + "tex_2/alfanar-logo.png"), transparent: true, combine: THREE.MixOperation, side: THREE.DoubleSide }),



            cube: new THREE.MeshLambertMaterial({
                color: 0xffff00,
                combine: THREE.MixOperation,
                side: THREE.DoubleSide
            }),
        }
        let gltfpath = [
            "assets/Building_A/Building_A.gltf",
            "assets/Building_B/Building_B.gltf",
            "assets/Building_C/Building_C.gltf",
            "assets/Bridge/Bridge.gltf",
            "assets/Hologram.gltf",
            "assets/MainBuilding.gltf",
            "assets/BuildingLights.gltf",
            "assets/Clouds.gltf",
            "assets/SmallBuilding.gltf",
            "assets/Ground.gltf",
            "assets/Alfanar_Energy.gltf",
            "assets/icons.gltf",
            "assets/Text_Icon.gltf"
        ];

        $(document).ready(function () {
            let detect = detectWebGL();
            if (detect == 1) {
                if (width < 710) {
                    init = new sceneSetup(60, 1, 3500, 0, 0, 1100, 0x919191);
                } else {
                    init = new sceneSetup(49, 1, 3500, 0, 0, 1100, 0x919191);
                }

                init.renderer.domElement.addEventListener('pointerdown', onDocumentMouseDown, true);
                cityLoad = new objLoad();
                gltfpath.forEach(element => {
                    cityLoad.cityModel(element)
                });
                cityLoad.trainLoad(manager);
                // spritesLoad(forSprites);
                setInterval(function () {
                    material.bLightsMat.emissive.setHex(0xff0000);
                    material.bLightsMat.needsUpdate = true;
                }, 2000);
                setInterval(function () {
                    material.bLightsMat.emissive.setHex(0x000000);
                    material.bLightsMat.needsUpdate = true;
                }, 3000);
            } else if (detect == 0) {
                alert("PLEASE ENABLE WEBGL IN YOUR BROWSER....");
            } else if (detect == -1) {
                alert(detect);
                alert("YOUR BROWSER DOESNT SUPPORT WEBGL.....");
            }

            $('.closeBtn').on('click', function () {
                spriteClicked = false;
                spriteHide(null, spriteClicked);
                $(".popUp-Container").fadeOut('slow');
                let data = {
                    "reset": { "xBox": 0, "yBox": 130, "zBox": -270, "xCam": 0, "yCam": 0, "zCam": 1100 }
                }
                animation(data.reset);


            });

        });

        function spritesLoad(getSprites) {
            for (let i = 0; i < getSprites.length; i++) {
                var spriteTexture = THREE.ImageUtils.loadTexture(getSprites[i].img);
                //   spriteTexture.minFilter =spriteTexture.magFilter = THREE.LinearFilter;
                var spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture, useScreenCoordinates: false });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.position.set(getSprites[i].x, getSprites[i].y, getSprites[i].z);
                sprite.scale.set(getSprites[i].sX, getSprites[i].sY, 1.0); // imageWidth, imageHeight
                sprite.name = getSprites[i].name;
                init.spriteScene.add(sprite);
                spritStore.push(sprite);
            }
        }

        let onDocumentMouseDown = (event) => {
            if (!cameraMove) {
                event.preventDefault();
                const rect = init.renderer.domElement.getBoundingClientRect();
                mouse.x = ((event.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
                mouse.y = - ((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;
                raycaster.setFromCamera(mouse, init.cameraMain);
                let intersects = raycaster.intersectObjects(spritStore, true);
                if (intersects.length > 0) {
                    SELECTED = intersects[0].object;
                    $("#" + SELECTED.name).delay(100).fadeIn(4000);
                    animation(camAnim[SELECTED.name]);
                    spriteClicked = true;
                    spriteHide(SELECTED, spriteClicked);
                } else {
                    spriteClicked = false;
                    console.log("NOTHING HITTED......");
                    //event.stopPropagation();
                }
            }


        }
        function spriteHide(selectedSprite, spriteClicked) {
            if (spriteClicked) {
                let forHolo = "Hologram_" + selectedSprite.name;
                let forText = "Text-" + selectedSprite.name;
                spritStore.forEach(element => {
                    if (element.name !== selectedSprite.name) {
                        fadeOutMaterial(element, 0, false);
                    }
                });
                hologramStore.forEach(element => {
                    if (element.name !== forHolo) {
                        fadeOutMaterial(element, 0, false);
                    }
                });
                textData.forEach(element => {
                    if (element.name !== forText) {
                        fadeOutMaterial(element, 0, false);
                    }
                });
                hologramLines.forEach(group => {
                    if (group.name !== forHolo) {
                        group.children.forEach(element => {
                            fadeOutMaterial(element, 0, false);
                        })
                    }
                });
            } else {
                spritStore.forEach(element => {
                    fadeOutMaterial(element, 1, true);
                });
                hologramStore.forEach(element => {
                    fadeOutMaterial(element, 1, true);
                });
                textData.forEach(element => {
                    fadeOutMaterial(element, 1, true);
                });
                hologramLines.forEach(group => {
                    group.children.forEach(element => {
                        fadeOutMaterial(element, 1, true);
                    })
                });
            }
        }
        let fadeOutMaterial = (object, val, vis) => {
            if (val == 1) {
                object.visible = true;
            }
            TweenMax.to(object.material, 3, {
                opacity: val, onUpdate: function () {
                    object.material.needsUpdate = true;
                }, onComplete: function () {
                    if (val == 0) {
                        object.visible = false;
                    }
                }
            });
        }
        let animation = (data) => {
            cameraMove = true;
            let pos = data;
            TweenMax.to(init.camPoint.position, 4, { x: pos.xBox, y: pos.yBox, z: pos.zBox, onUpdate: function () { } });
            TweenMax.to(init.cameraMain.position, 4, {
                x: pos.xCam, y: pos.yCam, z: pos.zCam, onUpdate: function () {

                    init.cameraMain.updateProjectionMatrix();
                    init.controls.target = init.camPoint.position;
                }, onComplete: function () {
                    if (spriteClicked) {
                        init.controls.enabled = true;
                        init.controls.enablePan = false;
                        init.controls.enableZoom = false;
                        cameraMove = false;
                    } else {
                        //  init.controls.enabled = false;
                        cameraMove = false;
                    }
                }
            });
        }
        function detectWebGL() {
            // Check for the WebGL rendering context
            if (!!window.WebGLRenderingContext) {
                var canvas = document.createElement("canvas"),
                    names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
                    context = false;

                for (var i in names) {
                    try {
                        context = canvas.getContext(names[i]);
                        if (context && typeof context.getParameter === "function") {
                            // WebGL is enabled.
                            return 1;
                        }
                    } catch (e) { }
                }

                // WebGL is supported, but disabled.
                return 0;
            }

            // WebGL not supported.
            return -1;
        };

        class sceneSetup {
            constructor(FOV, near, far, x, y, z, ambientColor) {

                this.container = selector;
                this.scene = new THREE.Scene();
                this.scene.background = null;
                this.spriteScene = new THREE.Scene();
                this.addingCube();
                this.camera(FOV, near, far, x, y, z);
                this.ambientLight(ambientColor);
                this.render();
            }
            camera(FOV, near, far, x, y, z) {
                // this.scene.fog = new THREE.Fog(0xffffff, 1150, 2400);
                this.cameraMain = new THREE.PerspectiveCamera(FOV, this.container.offsetWidth / this.container.offsetHeight, near, far);
                this.cameraMain.position.set(x, y, z);
                this.cameraMain.lookAt(this.camPoint);
                // this.cameraMain.lookAt(0,0,0);
                this.scene.add(this.cameraMain);
                this.rendering();
            }
            rendering() {
                this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                this.renderer.setClearColor(0x000000, 0);
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
                this.renderer.gammaOutput = true;
                this.renderer.gammaFactor = 2.2;
                this.renderer.autoClear = false;
                this.container.appendChild(this.renderer.domElement);
                this.controls = new OrbitControls(this.cameraMain, this.renderer.domElement);
                this.controls.enabled = true;
                this.controls.enableDamping = true;
                this.controls.dampingFactor = 0.02;
                this.controls.enablePan = false;
                this.controls.enableZoom = false;
                this.controls.rotateSpeed = .07;
                this.controls.minDistance = 0;
                this.controls.maxDistance = 1100;
                this.controls.maxPolarAngle = Math.PI / 2 * 115 / 120;
                this.controls.minPolarAngle = 180 / 120;

                this.controls.minAzimuthAngle = -50 / 120;
                this.controls.maxAzimuthAngle = 25 / 120;

                this.controls.target.set(this.camPoint.position.x, this.camPoint.position.y, this.camPoint.position.z);
            }
            addingCube() {
                this.geo = new THREE.BoxBufferGeometry(.01, .01, .01);
                this.mat = material.cube;
                this.camPoint = new THREE.Mesh(this.geo, this.mat);
                this.scene.add(this.camPoint);
                this.camPoint.position.set(0, 130, -270);
            }
            ambientLight(ambientColor) {
                this.ambiLight = new THREE.AmbientLight(0xffffff);
                // this.light= new THREE.HemisphereLight( 0xd1d1d1, 0x080820, 1 );
                this.light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
                this.scene.add(this.light);
                this.scene.add(this.ambiLight);


            }
            animate() {
                requestAnimationFrame(this.animate.bind(this));
                delta = clock.getDelta();
                if (mixer) {
                    mixer.update(delta);
                }
                if (cloudMesh != undefined || cloudMesh != null) {
                    cloudMesh.rotation.y -= .0002;
                }
                spriteAnim(spritStore);
                hologramAnimation(hologramStore);
                hologramLinesAnimation(hologramLines);

                this.controls.update();
                this.renderer.render(this.scene, this.cameraMain);
                // this.renderer.clearDepth();
                //this.renderer.render(this.spriteScene, this.cameraMain);

            }
            render() {
                this.animate();
            }
        }
        function spriteAnim(spriteData) {
            if (spriteData.length != 0) {
                spriteData.forEach(sprites => {
                    sprites.rotation.z -= 0.005;
                });
            }
        }
        function hologramAnimation(hologramData) {
            if (!!hologramData) {
                hologramData.forEach(elemnt => {
                    elemnt.rotation.y -= 0.003;
                });
            }
        }

        function hologramLinesAnimation(hologramLineGroups) {
            const timeDelta = clock.getDelta();

            if (!!hologramLineGroups) {
                hologramLineGroups.forEach((group, gi) => {
                    group.children.forEach((element, ei) => {
                        if (element.position.y < (0 - 0.1)) {
                            element.position.y += (timeDelta * (0.65 * ei));
                            element.opacity -= 0.00035;
                        }
                        else {
                            element.position.y = (-1) / 3;
                            element.rotation.y += (timeDelta * 2);
                            element.rotation.x += (timeDelta * 1.5);
                            element.opacity = 0.5;
                        }

                        if (element.scale.x < 0.7) {
                            const newScale = element.scale.x + 0.00025
                            element.scale.set(newScale, newScale, newScale);
                        }
                        else {
                            element.scale.set(0.5, 0.5, 0.5);
                        }

                    });
                });
            }
        }

        function getHologramLines(meshName) {

            const holoLineGroup = new THREE.Group();

            for (let i = 1; i <= 15; i++) {
                const lineGeometry = new THREE.BufferGeometry();
                const randomCoordTransValue = Math.random() * (0.2 - (-0.05)) - 0.05;

                const points = [];

                const point1 = new THREE.Vector3();
                const direction1 = new THREE.Vector3();
                direction1.x = 0 + randomCoordTransValue;
                direction1.y = -0.15 + randomCoordTransValue;
                direction1.z = 0 + randomCoordTransValue;
                point1.add(direction1);
                points.push(point1.x, point1.y, point1.z);

                const point2 = new THREE.Vector3();
                const direction2 = new THREE.Vector3();
                direction2.x = 0 + randomCoordTransValue;
                direction2.y = 0.15 + randomCoordTransValue;
                direction2.z = 0 + randomCoordTransValue;
                point2.add(direction2);
                points.push(point2.x, point2.y, point2.z);

                const point3 = new THREE.Vector3();
                const direction3 = new THREE.Vector3();
                direction3.x = 0.15 + randomCoordTransValue;
                direction3.y = 0.2 + randomCoordTransValue;
                direction3.z = 0.15 + randomCoordTransValue;
                point3.add(direction3);
                points.push(point3.x, point3.y, point3.z);

                const point4 = new THREE.Vector3();
                const direction4 = new THREE.Vector3();
                direction4.x = 0.15 + randomCoordTransValue;
                direction4.y = Math.random() * (0.5 - 0.2) + 0.2 + randomCoordTransValue;
                direction4.z = 0.15 + randomCoordTransValue;
                point4.add(direction4);
                points.push(point4.x, point4.y, point4.z);

                lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
                let lineMesh = new THREE.Line(lineGeometry, lineMaterial);
                lineMesh.rotation.y = 15 * i;
                lineMesh.name = "Hologram-Line";
                const randomScale = Math.random() * (1 - 0.5) + 0.5;
                lineMesh.scale.set(randomScale, randomScale, randomScale);

                holoLineGroup.add(lineMesh);
            }

            holoLineGroup.name = meshName;

            return holoLineGroup;
        }
        function texLoad(getTex) {
            let _T = new THREE.TextureLoader().load(getTex);
            return _T;
        }
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            init.cameraMain.aspect = init.container.offsetWidth / init.container.offsetHeight;
            init.renderer.setSize(init.container.offsetWidth, init.container.offsetHeight);
            init.cameraMain.updateProjectionMatrix();
        }
        class objLoad {
            constructor() {

            }
            trainLoad(getManager) {
                this.loader = new GLTFLoader(getManager);
                this.loader.load(trainPath, gltf => {
                    if (gltf.animations[0]) {
                        mixer = new THREE.AnimationMixer(gltf.scene);
                        for (let i = 0; i < gltf.animations.length; i++) {
                            action = mixer.clipAction(gltf.animations[i]);
                            action.play();
                        }
                    }
                    this.mesh = gltf.scene;
                    init.scene.add(this.mesh);
                    this.mesh.scale.set(100, 100, 100);
                });
            }
            cityModel(gltfpath) {
                this.loader = new GLTFLoader();
                this.dracoLoader = new DRACOLoader();
                this.dracoLoader.setDecoderPath(URL + 'js/libs/draco/');
                this.loader.setDRACOLoader(this.dracoLoader);
                this.loader.load(URL + gltfpath, gltf => {

                    if (gltf.animations[0]) {
                        mixer = new THREE.AnimationMixer(gltf.scene);
                        for (let i = 0; i < gltf.animations.length; i++) {
                            action = mixer.clipAction(gltf.animations[i]);
                            action.play();
                        }
                    }
                    this.mesh = gltf.scene;
                    gltf.scene.traverse(function (child) {
                        if (child.isMesh) {
                            if (child.name == 'Ground') {
                                child.material = new THREE.MeshBasicMaterial({
                                    map: texLoad(URL + "assets/Ground_trans.png"),
                                    transparent: true,
                                    combine: THREE.MixOperation,
                                    side: THREE.DoubleSide
                                });
                            } else if (child.name.includes("Hologram")) {
                                child.material = new THREE.MeshLambertMaterial({
                                    map: texLoad(URL + "tex_2/lights.png"),
                                    transparent: true,
                                    opacity: .8,
                                    combine: THREE.MixOperation,
                                    side: THREE.DoubleSide
                                });
                                let holoLines = getHologramLines(child.name);
                                holoLines.position.set(child.position.x, child.position.y - 0.2, child.position.z);
                                hologramLines.push(holoLines);
                                hologramStore.push(child);
                            } else if (child.name == "Building-Lights") {
                                child.material = material.bLightsMat;
                            } else if (child.name == "Clouds") {
                                child.material = new THREE.MeshLambertMaterial({
                                    map: texLoad(URL + "assets/Clouds-02.png"),
                                    transparent: true,
                                    opacity: .8,
                                    combine: THREE.MixOperation,
                                    side: THREE.DoubleSide
                                });
                                child.material.map.wrapS = child.material.map.wrapT = THREE.RepeatWrapping;
                                child.material.map.repeat.set(2, 1.5);
                                child.material.needsUpdate = true;
                                child.position.y = 9;
                                child.scale.y = 7;
                                cloudMesh = child;
                            } else if (child.name == "Icon-Data") {
                                child.material = material.dataIconMat;
                                child.name = "data";
                                spritStore.push(child);
                            } else if (child.name == "Icon-DataTwo") {
                                child.material = material.dataTwoIconMat;
                                child.name = "dataTwo";
                                spritStore.push(child);
                            } else if (child.name == "Icon-settings") {
                                child.material = material.settingIconMat;
                                child.name = "settings";
                                spritStore.push(child);
                            } else if (child.name == "Icon-world") {
                                child.material = material.worldIconMat;
                                child.name = "world";
                                spritStore.push(child);
                            } else if (child.name == "Icon-security") {
                                child.material = material.securityIconMat;
                                child.name = "security";
                                spritStore.push(child);
                            }
                            else if (child.name.includes("Text")) {
                                child.material = new THREE.MeshLambertMaterial({
                                    color: 0x001929,
                                    transparent: true,
                                });
                                textData.push(child);
                            }

                            else if (child.name == "Icon-alfanar") {
                                child.material = material.alfanarIconMat;
                                child.name = "alfanar";
                                spritStore.push(child);
                            }
                        }
                    });

                    hologramLines.forEach(hLine => {
                        gltf.scene.add(hLine);
                    });

                    init.scene.add(this.mesh);
                    this.mesh.scale.set(100, 100, 100);

                });
            }
        }
    }
    render() {
        return (
            <div>ThreeApp</div>
        )
    }
}
