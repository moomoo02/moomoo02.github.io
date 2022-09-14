import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Exp from './Exp'

import SceneInit from './lib/SceneInit';

import './App.css'

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/shiba/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      console.log(loadedModel);

      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.scale.set(10, 10, 10);
      test.scene.add(gltfScene.scene);
    });

    // const animate = () => {
    //   if (loadedModel) {
    //     loadedModel.scene.rotation.x += 0.01;
    //     loadedModel.scene.rotation.y += 0.01;
    //     loadedModel.scene.rotation.z += 0.01;
    //   }
    //   requestAnimationFrame(animate);
    // };
    // animate();
  }, []);

  return (
    <div class="xl container mx-auto">
      <div class="text-6xl">Vince Nguyen</div>
      <Exp/>
      {/* <canvas/> */}
      <canvas style={{right: 1000}} id="myThreeJsCanvas" />
  
      {/* <p>hi</p> */}
    </div>
  );
}

export default App;