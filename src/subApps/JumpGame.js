import { useState, useRef, useEffect, useCallback } from "react";
import { HomeLink } from "../HomeLink";

export function JumpGame() {
  const [isStart, setStart] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

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
      let obstacleChance = Math.random();

      if (obstacleChance < obstacleReq) {
        obstacleArr.push(createObstacle());
        obstacleReq = 0;
      } else {
        obstacleReq += 0.0002;
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
        if (obstacle.pos[0] < 0) {
          let index = obstacleArr.indexOf(obstacle);
          if (index > -1) {
            obstacleArr.splice(index, 1);
          }
        }
        if (
          playerPos[0] > obstacle.pos[0] &&
          playerPos[0] < obstacle.pos[0] + obstacle.size &&
          playerPos[1] >= obstacle.pos[1] - obstacle.size
        ) {
          while (obstacleArr.length > 0) {
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
        if (playerPos[0] > 0){
          playerPos[0] -= 10;
        }
        break;
      case "d":
        if (playerPos[0] < 950){
          playerPos[0] += 10;
        }
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
    if (!isOver) {
      var obstacle = {
        pos: [1050, 450],
        size: 10 + Math.random() * 40,
        speed: 5 + Math.random() * 5,
      };
      return obstacle;
    }
  }

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      if (!isOver && isStart) {
        setScore((s) => s + 1);
      }
    }, 1000);
    return () => clearInterval(scoreInterval);
  }, [isOver, isStart]);

  useEffect(() => {
    const interval = setInterval(onUpdate, 20);
    return () => clearInterval(interval);
  }, [onUpdate]);
  useEffect(() => {
    const listener = document.addEventListener("keydown", (e) =>
      handleButtonPress(e)
    );
    return () => window.removeEventListener("keydown", listener);
  });
  const canvas = useRef(null);

  return (
    <>
      <HomeLink />
      <div>
        <h2>Jumping Game</h2>
        {isOver ? <h3 style={{ color: "red" }}>Game Over</h3> : null}
        <h4>Score: {score}</h4>
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
              setScore(0);
              setStart(true);
              setIsOver(false);
            }}
          >
            {isOver ? "Restart" : "Start"}
          </button>
        )}
      </div>
      <h2>Controls: </h2>
      <p>W: jump</p>
      <p>A: left</p>
      <p>D: right</p>
    </>
  );
}
