type InitCss2dReturns = {
  refresh: () => void;
  mountTo: (element: HTMLElement) => void;
  // 创建 css 2d 对象
  createCss2dObject: (params: CreateCss2dObjectParams) => CSS2DObject;
};

interface CreateCss2dObjectParams {
  // 内容
  content: string | HTMLElement;
  // css 样式属性
  style: Record<string, any>;
  // 是否可被模型遮挡
  occludable: boolean;
}
