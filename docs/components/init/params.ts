type InitParams = {
  /** 光照配置 */
  lightConfigs?: {
    // 统一控制所有光照颜色，优先级较低
    color?: number | string;
    // 统一控制所有光照透明度，优先级较低
    colorOpacity?: number;
    // 环境光
    ambientLightColor?: number | string;
    ambientLightColorOpacity?: number;
    // 直射光
    directLightColor?: number | string;
    directLightColorOpacity?: number;
  };
  /** 相机配置 */
  cameraConfigs?: {
    width?: number;
    height?: number;
    position?: {
      x: number;
      y: number;
      z: number;
    };
    lookAt?: {
      x: number;
      y: number;
      z: number;
    };
  };
  /** 辅助坐标系配置 */
  axesHelperConfigs?: {
    // 坐标轴长度
    length?: number;
  };
  /** 渲染器配置 */
  rendererConfigs?: {
    width?: number;
    height?: number;
    backgroundColor?: number | string;
    backgroundColorOpacity?: number;
  };
} | null;
