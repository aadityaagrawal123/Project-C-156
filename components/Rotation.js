//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    this.data.speedOfRotation += 0.08;
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: {type:"number", default: 0}    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRotation = this.el.getAttribute("rotation");
      var diver_rotation = this.data.speedOfRotation;

      this.data.speedOfAscent = this.el.getAttribute("position");
      var diver_position = this.data.speedOfAscent;

      if (e.key === "ArrowRight") {
        if (diver_rotation.y > -360) {
          diver_rotation.y -= 0.5;
          this.el.setAttribute("rotation", diver_rotation)
        }

        if (diver_position.x < 25) {
          diver_position.x += 0.05;
          this.el.setAttribute("position", diver_position)
        }
      }

      if (e.key === "ArrowLeft") {
        if (diver_rotation.y < 360) {
          diver_rotation.y += 0.5;
          this.el.setAttribute("rotation", diver_rotation)

          if (diver_position.x > -18) {
            diver_position.x -= 0.05;
            this.el.setAttribute("position", diver_position)
          }
        }
      }
      
      if (e.key === "ArrowUp") {
        if (diver_position.z > -8) {
          diver_position.z -= 0.05;
          this.el.setAttribute("position", diver_position)
        }
      }

      if (e.key === "ArrowDown") {
        if (diver_position.z < 18) {
          diver_position.z += 0.05;
          this.el.setAttribute("position", diver_position)
        }
      }

  });
  }
});






