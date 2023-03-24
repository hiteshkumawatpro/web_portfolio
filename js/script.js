// for import use ./  for forward directory
// ../ for backward directory
// import { name }   name should be match with exporting class of that file


import * as THREE from "./three.module.js";
// import { OrbitControls } from "./OrbitControl.js";
// import { FirstPersonControls } from "./FirstPersonControl.js";
//import { FlyControls } from "./FlyControls.js";
// import { TransformControls } from "./TransformControls.js";
 import { gsap } from 'https://cdn.skypack.dev/gsap@3.11.0';
 import { GLTFLoader } from "./GLTFLoader.js";
import { TextGeometry } from "./TextGeometry.js";
import { FontLoader } from "./FontLoader.js";
// import { TTFLoader } from "./TTFLoader.js";
// import { load } from "./opentype.module.js";
// import { RGBELoader } from "./RGBELoader.js";
// import { Fog } from "./three.module.js";
// import { FogExp2 } from "./three.module.js";
import {RenderPass} from "./postprocessing/RenderPass.js";
import {EffectComposer} from "./postprocessing/EffectComposer.js";
import {UnrealBloomPass} from "./postprocessing/UnrealBloomPass.js";


//import { ScrollTrigger } from "https://cdn.skypack.dev/gsap@3.11.0/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(MotionPathPlugin);


 // new RGBELoader().load("images/kloppenheim_02_puresky_1k.hdr" , function(texture){
 // texture.mapping = THREE.EquirectangularReflectionMapping;
 // scene.background = texture;
 // scene.environment = texture;
 // 
 // });
// 


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80 , window.innerWidth / window.innerHeight , 0.01 , 300);
camera.position.z = 3000;
camera.position.y = 5;
camera.position.x = 0;
// 3000
// const container = document.querySelector(".df");

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , innerHeight);
document.body.appendChild(renderer.domElement);


 renderer.toneMapping =THREE.ACESFilmicToneMapping;
 renderer.toneMappingExposure = 1;
 renderer.outputEncoding=  THREE.sRGBEncoding;

const renderScene = new RenderPass(scene , camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth , window.innerHeight) , 1.1 , 1 );

composer.addPass(bloomPass);


// const Geometry = new THREE.BoxGeometry(1,1,1);
// const Material = new THREE.MeshStandardMaterial({color : 'red'});
// const cube = new THREE.Mesh(Geometry ,Material);
// scene.add(cube);


 const ambientlight = new THREE.AmbientLight(0x404046, 1);
 scene.add(ambientlight);

// const Light = new THREE.PointLight(0xffffff , 1 ,10);
// Light.position.set( 0, 1 ,30);
// Light.scale.set(10,10,10);
// scene.add(Light);
 





const progressbar_loading = document.getElementById("progress-bar");
const progressbarcontainer = document.querySelector(".progressbarcontainer");
const website_class = document.querySelector(".website_div");
const video_container = document.querySelector(".video");
const skipcontainer = document.querySelector(".skipcontainer");
const skipbutton = document.querySelector(".skipbutton");

const skills_red = document.getElementById("skills_folder");
const qual_red = document.getElementById("qualification_folder");
const project_red = document.getElementById("project_folder");
const certificate_folder = document.getElementById("certificate_folder");

const thank_folder = document.getElementById("thank_folder");
document.getElementById('home2').addEventListener('click',hometoroom );
const nav_spacebar = document.getElementById("nav_spacebar");



let website_class_visible = false;

function hometoroom(){
      camera.position.set(10 , 0 , 290);
      website_class.style.visibility = "hidden";
      website_class.style.height = "0";
      website_class_visible = false;
      camera.rotation.set(0,1.3 , 0);
      Raycaster_enable = true;
      website_class_visible = false;

}

var is_intro_finished = false;


const loadingManager = new THREE.LoadingManager();
//loadingManager.onStart = function(url , item , total){
//     console.log("started loading"); 
//}

//  onLoad ------ on finish
//   onStart -------- on Start
//    onError ------- failed

loadingManager.onProgress = function(url , loaded , total){
   //   progressbarcontainer.click();
      progressbar_loading.value = loaded/total * 100;
      
}

var isloaded = false;
loadingManager.onLoad = function(){
   progressbarcontainer.style.display = 'none';
      video_container.style.visibility = 'visible';
      video_container.muted = true;
      video_container.play();
     
}










// colors ----------------

// const color3 = new THREE.Color("rgb(255, 0, 0)");
// const color4 = new THREE.Color("rgb(100%, 0%, 0%)");
// 
//  color name - all 140 color names are supported.
// Note the lack of CamelCase in the name
// const color5 = new THREE.Color( 'skyblue' );












// const controls = new OrbitControls(camera , renderer.domElement);
// const FirstPersonControluser = new FirstPersonControls(camera , renderer.domElement);
// const clock = new THREE.Clock();
// FirstPersonControluser.lookSpeed = .1;
// FirstPersonControluser.movementSpeed = 1;

//const FlyControl = new FlyControls(camera , renderer.domElement);



 // const Geometry2 = new THREE.BoxGeometry(3,3,3);
 // const texture1 = new THREE.TextureLoader().load("textures/2.jpg");
 // const texture2 = new THREE.TextureLoader().load("textures/2bumpmap.jpg");
 // const material2 = new THREE.MeshStandardMaterial({map : texture1 , bumpMap : texture2 , bumpScale : .1 , roughness : 0 , metalness : 0});
 // const cube2 = new THREE.Mesh(Geometry2 ,material2);
 // cube2.position.x =  0;
 // cube2.position.z = 3050  ;
 // cube2.position.y =  0;
 // cube2.name = "cubemade_by_user";
 //  scene.add(cube2);
//

// const TransformControlsuser = new TransformControls(camera , renderer.domElement);
// TransformControlsuser.addEventListener('change' , animates2);
// TransformControlsuser.attach(cube2);
// scene.add(TransformControlsuser);




// const gridhelpers  = new THREE.GridHelper(100, 10);
// scene.add(gridhelpers);
// var  q = 0;
// function animates2(){
// 
//        renderer.render(scene , camera);
//        requestAnimationFrame(animates);
//   
//  }


// island and first time ever title ------
 

 let loader = new GLTFLoader(loadingManager);





loader.load( "assets/eloiza_e_ze_newton/scene.gltf", function ( obj ) {
   
      obj.scene.position.set(0 , -100, 200);
      obj.scene.rotation.set(0,Math.PI/2 * 3,0);
     obj.scene.scale.set(.6,.6,.6);
      scene.add( obj.scene );
    
      //castle.castShadow = true
     // castle.receiveShadow = true
  
    //  obj.userData.draggable = true
    //  obj.userData.name = 'CASTLE'
   //  console.log("gegsg");
   //  console.log(obj.scene);
    //  console.log(obj.scene.getObjectByName('Object009'));
    obj.scene.getObjectByName('Object009')

});


const greeting = ["Good Morning", "Good AfterNoon" , "Good Evening" ]

 const fontloader = new FontLoader();

 fontloader.load( 'fonts/Defused_Extended Bold.json', function ( font ) {
      var current = new Date();
     var hour = current.getHours();
      let greet;
      if (hour <= 11 && hour >= 4) {
            greet = greeting[0];
      }
      else if(hour > 11 && hour <= 16){
            greet = greeting[1];
      }
      else{
            greet = greeting[2];
      }
       const first_textgeo = new TextGeometry( greet , {
             font: font,
             size: 2.5,
             height: .1,
             color : 'green',
             
             
       }
        );
      

      const iipe_intro_textgeo = new TextGeometry( 'Welcome to my \n    Portfolio ', {
            font: font,
            size: 2.5,
            height: .1,
            
     
      }
       );


       const iipe2_intro_textgeo = new TextGeometry( ' Hitesh Kumawat \n A SDE Developer', {
            font: font,
            size: 2.5,
            height: .1,
              
      }
       );

       const textMaterial = new THREE.MeshNormalMaterial();
      // const textMaterial = new THREE.MeshStandardMaterial({color : 'red'});

       const first_textMesh = new THREE.Mesh( first_textgeo , textMaterial);
      first_textMesh.position.z = 2500;
      first_textMesh.position.x = -20;
     first_textMesh.position.y = 2;
      scene.add(first_textMesh);

      const iipe_intro_textMesh = new THREE.Mesh( iipe_intro_textgeo , textMaterial);
      iipe_intro_textMesh.position.z = 2000;
      iipe_intro_textMesh.position.x = -20;
	 iipe_intro_textMesh.position.y = 2;
      scene.add(iipe_intro_textMesh);   

      const third_textMesh = new THREE.Mesh( iipe2_intro_textgeo , textMaterial);
      third_textMesh.position.z = 1500;
      third_textMesh.position.x = -20;
	  third_textMesh.position.y = 2;
      scene.add(third_textMesh);
 } ); 




// island and first time ever title ------ end

var Raycaster_enable = false;

window.addEventListener('keypress' , function(keypress){
      console.log(camera.position);
      if (isloaded && keypress.code == "Space") {
            progressbarcontainer.style.display = 'none';

            video_container.style.display = 'none';
          
            if (camera.position.z == 2530  ) {
                  gsap.to( camera.position , {

                        z : "2030",
                        y : 0,
                        x : 0,
                        duration : 1.7,
                        ease: "expo.out",
                  
                  });
                 
                  
            
           }

           else if (camera.position.z == 2030 ) {
            gsap.to( camera.position , {
                  z : "1530",
                  y : 0,
                  x : 0,
                  duration : 1.7,
                  ease: "expo.out",
            
            });
      
            }


            else if (camera.position.z  == 1530) {
                  Raycaster_enable = true;  
                  nav_spacebar.style.visibility = 'hidden';   
                  gsap.to( camera.position , {
                              z :   290,
                              y : 0,
                              x : 10,
            
                              duration : 2,
                              ease: "expo.out",
                      
                        });
                  
            
                  gsap.to( camera.rotation , {
                        delay : .6,
                        y : 1.3,
                        x : 0,
                        z : 0,
                        duration : 1.5,
                        ease: "expo.out",
                     //   onUpdate: function() {
                     //         camera.lookAt( 45, 53,45 );
                     //       //  controls.update();
                     //   }
                  
                        });
            
                 }









          

      };

    
 })

      skipbutton.onclick = function(){
            camera.position.set(240 , -65 , 180);
            website_class.style.visibility = "visible";
            website_class.style.height = "100vh";
            website_class.style.overflow = "visible";
            website_class_visible = true;
            nav_spacebar.style.visibility = 'hidden';
          
      }



  //         RayCasting ------- ( line formation in animate fn )

  const mousePosition = new THREE.Vector2();

  function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
      if (Raycaster_enable) {
	mousePosition.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mousePosition.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      }


}

window.addEventListener( 'pointermove', onPointerMove );






// for click on titles -------

var clickedtile ;

const rayCaster2 = new THREE.Raycaster();
window.addEventListener('click' , function(event){
      if (camera.position.x == 10 && camera.position.y == 0 && camera.position.z == 290) {
            
            rayCaster2.setFromCamera(mousePosition , camera);
            const intersects = rayCaster.intersectObjects(scene.children);
            for ( let i = 0; i < intersects.length; i ++ ) {
                  if(arr.includes(intersects[ i ].object.name)){
                        clickedtile = intersects[i].object.name;
                        
                    gsap.to(camera.position , {
                        duration: 2, 
                       // repeat: 12,
                       // repeatDelay: 3,
                       // yoyo: true,
                       x : -80,
                       y : 0,
                       z : 100,
                        ease: "power1.inOut",
                      
                       
                      });
                      
                      
                      gsap.to(camera.rotation , {
                        y : 4.6,
                        z : 0,
                        duration : 2,
                        ease: "power1.inOut",
                      });
      
      
                      gsap.to(camera.position , {
                        delay : 2,
                        duration: 2, 
                       // repeat: 12,
                       // repeatDelay: 3,
                       // yoyo: true,
                       x : 240,
                       y : -65,
                       z : 180,
                        ease: "power1.inOut",
                      
                       
      
                      });
                      
                   
                  }
            }





      }
  
               

});


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}



const particlegeometry = new THREE.BufferGeometry();
const particleconts = 4000;
const posarr = new Float32Array(particleconts * 3);
for(let i = 0 ; i < particleconts * 3 ; i++){
      posarr[i] = (Math.random() - .5)* 1500;
}
const texture1 = new THREE.TextureLoader().load("images/Glowing-Lens-PNG-Image_clefnr (1).png");
particlegeometry.setAttribute('position' , new THREE.BufferAttribute(posarr , 3));
const Material3 = new THREE.PointsMaterial({size : Math.random()*6  , map : texture1 , transparent : true });
const particleMesh = new THREE.Points(particlegeometry , Material3);
particleMesh.position.z = 2000;
scene.add(particleMesh);





// for hover animations -----------
 
const rayCaster = new THREE.Raycaster();
const arr = ["Object015_Material_#2097633441_0", "Object009_Material_#2097633435_0", "Object010_Material_#2097633440_0", "Object014_Material_#2097633437_0", "Object013_Material_#2097633438_0","Object012_Material_#2097633439_0","Object011_Material_#2097633436_0"];
//                                                   events
  

var should_check_intro = true;


export function animates(){

      if (should_check_intro) {
            if ( Math.floor(video_container.currentTime) == Math.floor(video_container.duration) - 6) {
                  is_intro_finished = true;
                  gsap.to(camera.position , {
                        duration: 1.5, 
                       // repeat: 12,
                       // repeatDelay: 3,
                       // yoyo: true,
                       x : 0,
                       y : 0,
                       z : 2530,
                        ease: "power1.inOut",
                      
                       
                      });
                      
                  video_container.style.display = 'none';
                  
                  skipcontainer.style.visibility = 'visible';
                  nav_spacebar.style.visibility = 'visible';
                  isloaded = true;
                  should_check_intro = false;
            }
           
      }

      if(camera.position.x == 240 && camera.position.y == -65 && camera.position.z == 180 && !website_class_visible){
           //                  Explore 
            console.log(" run ");
           skipcontainer.style.display = 'hidden';
           website_class.style.visibility = "visible";
           website_class.style.height = "100vh";
           website_class.style.zindex = "10";
           website_class_visible = true;


            // explore ----
            if( clickedtile == "Object009_Material_#2097633435_0")
            {
    
            }

            // achievements ---
            if( clickedtile == "Object015_Material_#2097633441_0")
            {
                  qual_red.click();
            }

            // skills
            if( clickedtile == "Object010_Material_#2097633440_0")
            {
                  skills_red.click();
            }
            // projects
            if( clickedtile == "Object014_Material_#2097633437_0")
            {
                  project_red.click();
            }

            if( clickedtile == "Object013_Material_#2097633438_0")
            {
                certificate_folder.click();
            }

            if( clickedtile == "Object012_Material_#2097633439_0")
            {
                  thank_folder.click();
            }

            if( clickedtile == "Object011_Material_#2097633436_0")
            {
                  project_red.click();
            }
      }


            

   //   controls.update();
      // FirstPersonControluser.update(clock.getDelta());
    //  FlyControl.update(clock.getDelta());   
 //   cube.position.x = 9 * Math.sin(q += .01);
 //      cube.rotation.x += .01;
 //      cube.rotation.y += .01;
 //      cube.rotation.z += .01;
 




      // RayCaster - 
      if (Raycaster_enable) {
            rayCaster.setFromCamera(mousePosition , camera);
            const intersects = rayCaster.intersectObjects(scene.children);
            for ( let i = 0; i < intersects.length; i ++ ) {
                  if(arr.includes(intersects[ i ].object.name)){
                    
                        
                   
                       gsap.to( intersects[ i ].object.scale , {
                       x : 1.3,
                       y : 1.3,
                       z : 1.3,
           
                       duration : 1.5,
                       ease: "expo.out",
               
                 });
                 gsap.to( intersects[ i ].object.position , {
                       x : 10,
                       y : -10,
                       z : 19,
           
                       duration : 1.5,
                       ease: "expo.out",
               
                 });
                 gsap.to( intersects[ i ].object.scale , {
                       x : 1,
                       y : 1,
                       z : 1,
           
                       duration : 1.5,
                       ease: "expo.out",
               
                 });
                 gsap.to( intersects[ i ].object.position , {
                       x : 1,
                       y : 1,
                       z : 1,
           
                       duration : 1.5,
                       ease: "expo.out",
               
                 });    
                 
                  }
             
           
           }
      }

      composer.render();
   
    // renderer.render(scene , camera);
       requestAnimationFrame(animates);

 }

 

animates();
