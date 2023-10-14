AFRAME.registerComponent("coins", 
{
    init: function () {

      for (var i = 1; i <= 15; i++) {
          //id
          var id = `coin${i}`;

          //position variables     
          const posX = (Math.random() * 28 + -15)
          const posY = (Math.random() * 0.5 + -1)
          const posZ = (Math.random() * 20 + -5)
    
          const position = { x: posX, y: posY, z: posZ };
    
          //call the function
          this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      const coinsmodel = document.querySelector("#coinsmodel");
  
      var coinEl = document.createElement("a-entity");

      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale",{x:1.8, y:1.8, z:1});

      coinEl.setAttribute("gltf-model",
          "./assets/coin/scene.gltf"
      );

      coinEl.setAttribute("animation", {
        property : "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
      });

      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereradius: 1.8,
      });

      coinEl.setAttribute("game-play",{
        elementId: `#${id}`
      });
  
      coinsmodel.appendChild(coinEl);
    }
  });
  
  