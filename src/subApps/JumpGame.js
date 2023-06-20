import { useState, useRef, useEffect, useCallback } from "react";
import { HomeLink } from "../HomeLink";

export function JumpGame() {
  const [isStart, setStart] = useState(false);
  const [isOver, setIsOver] = useState(false);

  var isJump = false;
  var touchedGround = true;
  var curJumpDur = 0;
  var obstacleReq = 0;
  const jumpDur = 35;
  const playerPos = [50, 450];
  const obstacleArr = [];

  const onUpdate = useCallback(() => {
    if (canvas.current !== null) {
      if (isJump === true) {
        if (curJumpDur >= jumpDur) {
          curJumpDur = 0;
          isJump = false;
        } else {
          playerPos[1] -= 10;
          curJumpDur += 1;
        }
      } else if (playerPos[1] < 450) {
        playerPos[1] += 10;
      }
      if (playerPos[1] >= 450) {
        touchedGround = true;
      }
      const ctx = canvas.current.getContext("2d");
      ctx.clearRect(0, 0, 1000, 500);
      ctx.fillStyle = "rgba(255, 200, 100, 1)";
      ctx.fillRect(playerPos[0], playerPos[1], 50, 50);
      //console.log("x: " + playerPos[0] + " y: " + playerPos[1]);
      let obstacleChance = Math.random();

      if (obstacleChance < obstacleReq) {
        obstacleArr.push(createObstacle());
        obstacleReq = 0;
      } else {
        obstacleReq += 0.0001;
      }
      ctx.fillStyle = "black";
      obstacleArr.forEach((obstacle) => {
        ctx.fillRect(
          obstacle.pos[0],
          obstacle.pos[1],
          obstacle.size,
          obstacle.size
        );
        obstacle.pos[0] -= obstacle.speed;
        if (
          playerPos[0] > obstacle.pos[0] &&
          playerPos[0] < obstacle.pos[0] + obstacle.size &&
          playerPos[1] >= obstacle.pos[1] - obstacle.size
        ) {
            while(obstacleArr.length > 0){
                obstacleArr.pop();
            }
            setIsOver(true);
        }
      });
    }
  }, []);

  function handleButtonPress(e) {
    switch (e.key) {
      case "a":
        playerPos[0] -= 10;
        break;
      case "d":
        playerPos[0] += 10;
        break;
      case "w":
        if (isJump === false && touchedGround === true) {
          touchedGround = false;
          isJump = true;
        }
        break;
      default:
        break;
    }
  }

  function createObstacle() {
    if (! isOver){
        var obstacle = {
          pos: [1050, 450],
          size: 10+Math.random()*40,
          speed: 5+Math.random()*5,
        };
        return obstacle;
    }
  }

  useEffect(function(){setInterval(onUpdate, 20)},[]);
  useEffect(
    () => document.addEventListener("keydown", (e) => handleButtonPress(e)),
    []
  );
  const canvas = useRef(null);

  return (
    <>
      <HomeLink />
      <div>
        <h2>Jumping Game</h2>
        {isOver ? <h3 style = {{color:"red"}}>Game Over</h3> : null}
        {isStart && !isOver ? (
          <canvas
            ref={canvas}
            width={1000}
            height={500}
            className="jump"
          ></canvas>
        ) : (
          <button
            style={{
              padding: "40px",
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
            onClick={() => {
              setStart(true);
              setIsOver(false);
            }}
          >
            Start
          </button>
        )}
      </div>
      <h2>Controls: </h2>
      <p>w: jump</p>
      <p>a: left</p>
      <p>d: right</p>
    </>
  );
}
