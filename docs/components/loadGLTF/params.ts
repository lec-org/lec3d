type LoadGLTFParams = {
  // 模型文件路径
  modelPath: string;
  // 模型文件配置
  options?: CommonModelOptions;
  callback?: (gltf: GLTF, model: THREE.Group<THREE.Object3DEventMap>) => void;
};

interface CommonModelOptions {
  // 模型缩放
  scale?: number;
  // 模型的名字
  name?: string;
  // 模型位置

  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  // 模型旋转角度，使用字符串则为角度值，使用数字则为弧度值
  // 如 '30' 代表 30 度， 30 代表 180*30/PI 度
  rotation?: {
    x?: number | string;
    y?: number | string;
    z?: number | string;
  };
}
