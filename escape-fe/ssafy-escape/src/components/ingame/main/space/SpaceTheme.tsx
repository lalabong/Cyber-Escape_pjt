import { Canvas } from "@react-three/fiber"
import RoomModel from "@/components/ingame/elements/space/RoomModel"
import PointerLockControls from "@/components/ingame/PointerLockControls"
import CameraControl from "@/components/ingame/CameraControl"

// 오류 방지를 위한 임시 값들입니다! 수정해서 써 주세요.
const startPosition = { x: 8, y: 8, z: -2 }
const startTargetPosition = { x: 4, y: 3, z: -2 }
const lookAt = { x: -4, y: 2, z: 2 }

const SpaceTheme = ({ isGameStart, setIsModelLoaded }: IngameMainProps) => {
  return (
    <Canvas
      shadows
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight
        position={[1, 1, 5]}
        intensity={1}
        castShadow
        receiveShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <RoomModel onLoaded={setIsModelLoaded} />
      {/* 오류 방지를 위한 임시 값들입니다! 수정해서 써 주세요. */}
      <PointerLockControls
        startPosition={startPosition}
        startTargetPosition={startTargetPosition}
        cameraMovingSpeed={0.03}
        lookAt={lookAt}
        zoom={2.5}
      />
      {isGameStart ? (
        <CameraControl startPosition={startTargetPosition} movingSpeed={0.05} />
      ) : null}
    </Canvas>
  )
}

export default SpaceTheme
