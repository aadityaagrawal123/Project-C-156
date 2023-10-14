AFRAME.registerComponent("game-play",{
    schema:{
        elementId: {type:"string", default:"#coin1"}
    },

    update: function () {
        this.isCollided(this.data.elementId)
    },

    init: function () {
        var duration = 150;
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
      },

    startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        var timer = setInterval(countDown, 1000);
    
        function countDown() {
          if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            clearInterval(timer);
            this.gameOver();        
          }
        }
      },

    isCollided: function (elementId) {
        const element = document.querySelector(elementId);
        element.addEventListener("collide", e => {
            if (elementId.includes("#coin")) {
                element.setAttribute("visible", false);
                this.updateScore();
                this.updateTargets();
            }
            else{
            this.gameOver();
            }
        })
    },

    updateTargets: function () {
        const element = document.querySelector("#coins");
        var count = element.getAttribute("text").value;
        let current_target = parseInt(count);
        current_target -= 1;
        element.setAttribute("text",{
          value: current_target,
        });
      },
      updateScore: function () {
        const element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        let current_score = parseInt(count);
        current_score += 5;
        element.setAttribute("text",{
          value: current_score,
        });
      },
      gameOver: function () {
        var diverEl = document.querySelector("#diver-model");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible",true);
        diverEl.setAttribute("dynamic-body",{
          mass:1
        });
      },

})
