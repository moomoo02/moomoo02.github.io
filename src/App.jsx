import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Exp from './Exp'
import Projects from './Projects'
import Footer from './Footer'
import SceneInit from './lib/SceneInit'
import Socials from './Socials'

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
    glftLoader.load('/models/shiba/scene.gltf', (gltfScene) => {
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
      <div className="title">Vince Nguyen</div>
      <Exp/>
      {/* <canvas/> */}
      <Projects/>
      {/* <canvas class="bg-white" /> */}
      
      <h1 class="pt-20 pb-20">Meet my friend !!!</h1>
      <canvas class="flex items-center justify-center h-screen" className="canvas" id="myThreeJsCanvas" />
      {/* <Footer style={{width: "{{window.innerWidth}}"}}/> */}
      {/* <p>hi</p> */}
     <h1 class="pt-20 pb-10">Now lets be friends :)</h1>
      <Socials/>
      <h3>Created by Vince Nguyen 2022</h3>
    </div>
    
  );
}

export default App;