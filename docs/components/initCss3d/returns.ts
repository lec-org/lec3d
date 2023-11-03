type InitCss3dReturns = {
  // 手动刷新
  refresh: () => void;
  // 挂载 canvas 元素
  mountTo: (element: HTMLElement) => void;
  // 创建 css 3d 对象
  createCss3dObject: ({ element }: CreateCss3dObjectParams) => CSS3DObject;
  // 创建 css 3d 精灵
  createCss3dSprite: ({ element }: CreateCss3dObjectParams) => CSS3DSprite;
  // 创建 3d 文字
  createText: ({
    text,
    color,
    fontSize,
    thickness,
    position,
  }: CreateTextParams) => THREE.Mesh<
    TextGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;
};

interface CreateTextParams {
  text: string;
  color?: number | string;
  fontSize?: number;
  thickness?: number;
  position?: {
    x: number;
    y: number;
    z: number;
  };
}
