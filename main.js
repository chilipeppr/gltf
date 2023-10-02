// const { Vector3 } = require("./node_modules/babylonjs/babylon");
import { BABYLON } from "./node_modules/babylonjs/babylon.js"

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

/**
 * 
 * @returns BABYLON.Scene
 */
var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    // var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.ArcRotateCamera("camera1", 1, 1.2, 10, BABYLON.Vector3.Zero(), scene, true);

    // This targets the camera to scene origin
    // camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // var camera = new BABYLON.ArcRotateCamera("myArcCam", 1, 1.2, 1000, Vector3.Zero(), scene, true);
    // camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Built-in 'sphere' shape.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);


    return scene;
};

const scene = createScene();

/**
 * 
 */
engine.runRenderLoop(function () {
    scene.render();
}
);
window.addEventListener("resize", function () {
    engine.resize();
}
);