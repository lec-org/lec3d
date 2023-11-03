type InitReturns = {
  // 渲染器
  renderer: Renderer;
  // 相机
  camera: Camera;
  // 场景
  scene: Scene;
  // 挂载函数，用于创建 canvas 绘制 3d 场景
  mountTo: (el: HTMLElement) => void;
  // 刷新函数，用于特殊场景下的手动刷新，一般情况不会用到
  refresh: () => void;
  // 添加鼠标控制，可以通过返回的控制对象进一步配置
  addControls: (params: AddControlsParams) => AddControlsParams;
  // 鼠标点击，返回值的第0个元素即鼠标选中的模型对象
  getClickEventTargets: (
    e: MouseEvent
  ) => Intersection<Object3D<Object3DEventMap>>[];
};
