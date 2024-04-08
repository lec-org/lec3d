import lec3d from '../../../dist/index.js'
import { useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Vector3 } from 'three'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  // 控制物体移动
  // const control = (model: THREE.Object3D) => {

  // }

  useLayoutEffect(() => {
    const {
      scene,
      renderer,
      getClickEventTargets,
      camera,
      mountTo,
      refresh,
      clear,
      unload,
      addControls,
    } = lec3d.init({
      axesHelperConfigs: {
        length: 10000,
      },
      lightConfigs: {
        color: 'orange'
      },
      rendererConfigs: {
        backgroundColor: '#ff3700',
        backgroundColorOpacity: 0.1
      }
    });
    addControls()

    const {
      mountTo: mountCss3dTo,
      createCss3dObject,
      createText,
    } = lec3d.initCss3d({ scene, camera });
    const textMesh = createText({
      text: "HelloWorld",
      options: {
        color: '#ff37000',
        rotation: {
          x: "-30",
        },
      },
    });
    scene.add(textMesh);

    lec3d.loadGLTF({
      modelPath: "easter_island_head/scene.gltf",
      options: {
        scale: 1,
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        animation: {
          index: 1,
        },
      },
    }).then(({ gltf, model }: any) => {
      scene.add(model);
      let isJumping = false
      let accelerationTime = 1

      // TODO: 可是，这个事件怎么卸载呢？
      window.addEventListener('keydown', (e: KeyboardEvent) => {
        camera.lookAt(model.position);
        const key = e.key.toUpperCase()
        const moveSpeed = 2;
        const cameraDirection = new Vector3().subVectors(model.position, camera.position).normalize();
        const moveVector = new Vector3().copy(cameraDirection).multiplyScalar(moveSpeed);
        moveVector.y = 0

        switch (key) {
          case 'ARROWUP':
            break
          case 'ARROWDOWN': {
            moveVector.multiplyScalar(-moveSpeed)
            break
          }
          case 'ARROWLEFT': {
            const tempVector = moveVector.clone()
            moveVector.x = tempVector.z
            moveVector.z = -tempVector.x
            break
          }
          case 'ARROWRIGHT': {
            const tempVector = moveVector.clone()
            moveVector.x = -tempVector.z
            moveVector.z = tempVector.x
            break
          }
          case ' ': {
            if (!isJumping) {
              isJumping = true
              const upId = setInterval(() => {
                if (model.position.y <= 100) {
                  model.position.y += moveSpeed * accelerationTime
                  accelerationTime++
                } else {
                  clearInterval(upId)
                  accelerationTime = 1
                  const downId = setInterval(() => {
                    if (model.position.y > 0) {
                      model.position.y -= moveSpeed * accelerationTime
                      accelerationTime++
                    } else {
                      isJumping = false
                      accelerationTime = 1
                      clearInterval(downId)
                    }
                  }, 16)
                }
              }, 16)
            }
            break
          }
          default:
            console.log('key', key)
        }
        model.position.add(moveVector);
        camera.position.add(moveVector)
        camera.lookAt(model.position);
        // lookAtVector.y = 0
        // 要确保向量的模长超过模型的尺寸，不然模型总是会看向自己的脚下（
        if (!isJumping) {
          const lookAtVector = new Vector3().copy(moveVector).multiplyScalar(1000)
          lookAtVector.y = model.position.y
          model.lookAt(lookAtVector)
        }
      })
    });

    if (containerRef.current) {
      mountTo(containerRef.current)
    }

    return () => {
      unload()
    };
  }, []);


  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div id="three" ref={containerRef}></div>
    </div>
  )
}

export default App

