import{_ as e,p as n,q as i,a1 as s}from"./framework-016e66c7.js";const d={},l=s(`<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3><blockquote><p>快速初始化，并返回相机、场景、渲染器等对象和添加鼠标控制、获取鼠标点击对象等方法</p></blockquote><p><strong>示例</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import lec3d from &quot;@trickle/lec3d&quot;;
const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({
  axesHelperConfigs: {
    length: 10000,
  },
});

mountTo(yourElement);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数</strong></p><ul><li><code>params</code>: 配置项，所有内容都是可选的，具体定义如下:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type InitParams = {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type InitReturns = {
  // 渲染器
  renderer: Renderer;
  // 相机
  camera: Camera;
  // 场景
  scene: Scene;
  // 挂载函数，用于创建 canvas 绘制 3d 场景
  mountTo: (el: HTMLElement) =&gt; void;
  // 刷新函数，用于特殊场景下的手动刷新，一般情况不会用到
  refresh: () =&gt; void;
  // 添加鼠标控制，可以通过返回的控制对象进一步配置
  addControls: (params: AddControlsParams) =&gt; AddControlsParams;
  // 鼠标点击，返回值的第0个元素即鼠标选中的模型对象
  getClickEventTargets: (
    e: MouseEvent
  ) =&gt; Intersection&lt;Object3D&lt;Object3DEventMap&gt;&gt;[];
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initcss3d" tabindex="-1"><a class="header-anchor" href="#initcss3d" aria-hidden="true">#</a> initCss3d</h3><blockquote><p>创建 css 3d 内容，主要分为 <code>对象</code> 和 <code>精灵</code> 两种：</p><p><code>对象</code>: 能够被鼠标操作缩放，不被模型遮挡，能够通过DOM操作获取</p><p><code>精灵</code>: 不能被鼠标操作缩放，可以被模型遮挡，能够通过射线拾取(可以粗略理解为鼠标点击操作获取)</p></blockquote><p><strong>示例</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p><ul><li><code>initCss3dParams</code>: 配置项，定义如下:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type InitCss3dParams = {
  scene: Scene;
  camera: Camera;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type InitCss3dReturns = {
  // 手动刷新
  refresh: () =&gt; void;
  // 挂载 canvas 元素
  mountTo: (element: HTMLElement) =&gt; void;
  // 创建 css 3d 对象
  createCss3dObject: ({ element }: CreateCss3dObjectParams) =&gt; CSS3DObject;
  // 创建 css 3d 精灵
  createCss3dSprite: ({ element }: CreateCss3dObjectParams) =&gt; CSS3DSprite;
  // 创建 3d 文字
  createText: ({
    text,
    color,
    fontSize,
    thickness,
    position,
  }: CreateTextParams) =&gt; THREE.Mesh&lt;
    TextGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  &gt;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initcss2d" tabindex="-1"><a class="header-anchor" href="#initcss2d" aria-hidden="true">#</a> initCss2d</h3><blockquote><p>创建 css 2d 内容，其特点是：</p><p>不能被鼠标操作缩放，<strong>默认情况下</strong>不被模型遮挡，能够通过DOM操作获取</p><p>但是 lec3d 提供了配置项，能够控制其是否被模型遮挡</p></blockquote><p><strong>示例</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p><ul><li><code>intCss2dParams</code>: 配置项，定义如下:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type InitCss2dParams = {
  scene: Scene;
  camera: Camera;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type InitCss2dReturns = {
  refresh: () =&gt; void;
  mountTo: (element: HTMLElement) =&gt; void;
  // 创建 css 2d 对象
  createCss2dObject: (params: CreateCss2dObjectParams) =&gt; CSS2DObject;
};

interface CreateCss2dObjectParams {
  // 内容
  content: string | HTMLElement;
  // css 样式属性
  style: Record&lt;string, any&gt;;
  // 是否可被模型遮挡
  occludable: boolean;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loadgltf" tabindex="-1"><a class="header-anchor" href="#loadgltf" aria-hidden="true">#</a> loadGLTF</h3><blockquote><p>导入 GLTF 模型文件, 并做相关配置</p></blockquote><p><strong>示例</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import lec3d from &quot;@trickle/lec3d&quot;;
const { scene } = lec3d.init();

lec3d.loadGLTF({
  modelPath: &quot;3d_model/scene.gltf&quot;,
  options: {
    scale: 30,
    position: {
      x: 100,
      y: 100,
    },
    rotation: {
      x: &quot;30&quot;, // 字符串数字代表角度，即 30 度
      z: -0.5,
    },
  },
  callback: (gltf, model) =&gt; {
    scene.add(model);
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数</strong></p><ul><li><code>loadGLTFparams</code>: 配置项，定义如下：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type LoadGLTFParams = {
  // 模型文件路径
  modelPath: string;
  // 模型文件配置
  options?: CommonModelOptions;
  callback?: (gltf: GLTF, model: THREE.Group&lt;THREE.Object3DEventMap&gt;) =&gt; void;
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
  // 如 &#39;30&#39; 代表 30 度， 30 代表 180*30/PI 度
  rotation?: {
    x?: number | string;
    y?: number | string;
    z?: number | string;
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>type LoadGLTFReturns = void;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,37),r=[l];function a(v,c){return n(),i("div",null,r)}const u=e(d,[["render",a],["__file","index.html.vue"]]);export{u as default};
