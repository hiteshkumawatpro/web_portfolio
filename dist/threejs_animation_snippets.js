const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.01 , 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , innerHeight);
document.body.appendChild(renderer.domElement);



const Geometry = new THREE.BoxGeometry(1,1,1);
const Material = new THREE.MeshBasicMaterial({color : 'red'});
const cube = new THREE.Mesh(Geometry ,Material);

gate = true;
function animates(){
      
      if(gate == true){
         cube.position.x += 1;
         if (cube.position.x == 10) {
            gate = false;
         }
      }
      else{   
      cube.position.x -= 1; 
      if (cube.position.x == -10) {
         gate = true;
       }
   }
      renderer.render(scene , camera);
      requestAnimationFrame(animates);
 
}

scene.add(cube);
animates();