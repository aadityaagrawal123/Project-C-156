AFRAME.registerComponent("fish", 
{
    init: function () {

        for (var i=1; i <= 10; i++) {
            var id = `fish${i}`;

          const posX = (Math.random() * 50 + -30)
          const posY = (Math.random() * 0.25 + -0.8)
          const posZ = (Math.random() * 25 + -10)
        
          const position = { x: posX, y: posY, z: posZ };
        
            //call the function
            this.spawnFish(id, position);
        }
    },

    spawnFish : (id, position) => {
        const fishmodel = document.querySelector("#fishmodel");

        var fishEl = document.createElement("a-entity");

        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("scale",{x:0.25, y:1.25, z:1.1});
        fishEl.setAttribute("rotation",{x:0, y:180, z:0});

        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");

        fishEl.setAttribute("animation", {
            property: "position",
            to: "30 -0.25 15",
            loop: "true",
            dur: 21000
          });

          fishEl.setAttribute("static-body", {
            shape: "sphere",
            sphereradius: 1.25,
          });
      
          fishEl.setAttribute("game-play",{
            elementId: `#${id}`
          });
          

        fishEl.setAttribute("animation-mixer",{});
        fishmodel.appendChild(fishEl);
    }
} 
)