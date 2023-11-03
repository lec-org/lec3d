<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1>
<h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3>
<blockquote>
<p>快速初始化，并返回相机、场景、渲染器等对象和添加鼠标控制、获取鼠标点击对象等方法</p>
</blockquote>
<p><strong>示例</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> lec3d <span class="token keyword">from</span> <span class="token string">"@trickle/lec3d"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> scene<span class="token punctuation">,</span> renderer<span class="token punctuation">,</span> camera<span class="token punctuation">,</span> mountTo<span class="token punctuation">,</span> refresh<span class="token punctuation">,</span> addControls <span class="token punctuation">}</span> <span class="token operator">=</span> lec3d<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  axesHelperConfigs<span class="token operator">:</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">mountTo</span><span class="token punctuation">(</span>yourElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数</strong></p>
<ul>
<li><code v-pre>params</code>: 配置项，所有内容都是可选的，具体定义如下:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InitParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 光照配置 */</span>
  lightConfigs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 统一控制所有光照颜色，优先级较低</span>
    color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">// 统一控制所有光照透明度，优先级较低</span>
    colorOpacity<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token comment">// 环境光</span>
    ambientLightColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    ambientLightColorOpacity<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token comment">// 直射光</span>
    directLightColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    directLightColorOpacity<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 相机配置 */</span>
  cameraConfigs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    position<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    lookAt<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 辅助坐标系配置 */</span>
  axesHelperConfigs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 坐标轴长度</span>
    length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 渲染器配置 */</span>
  rendererConfigs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    backgroundColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    backgroundColorOpacity<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InitReturns</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渲染器</span>
  renderer<span class="token operator">:</span> Renderer<span class="token punctuation">;</span>
  <span class="token comment">// 相机</span>
  camera<span class="token operator">:</span> Camera<span class="token punctuation">;</span>
  <span class="token comment">// 场景</span>
  scene<span class="token operator">:</span> Scene<span class="token punctuation">;</span>
  <span class="token comment">// 挂载函数，用于创建 canvas 绘制 3d 场景</span>
  <span class="token function-variable function">mountTo</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// 刷新函数，用于特殊场景下的手动刷新，一般情况不会用到</span>
  <span class="token function-variable function">refresh</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// 添加鼠标控制，可以通过返回的控制对象进一步配置</span>
  <span class="token function-variable function">addControls</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> AddControlsParams<span class="token punctuation">)</span> <span class="token operator">=></span> AddControlsParams<span class="token punctuation">;</span>
  <span class="token comment">// 鼠标点击，返回值的第0个元素即鼠标选中的模型对象</span>
  <span class="token function-variable function">getClickEventTargets</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    e<span class="token operator">:</span> MouseEvent
  <span class="token punctuation">)</span> <span class="token operator">=></span> Intersection<span class="token operator">&lt;</span>Object3D<span class="token operator">&lt;</span>Object3DEventMap<span class="token operator">>></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initcss3d" tabindex="-1"><a class="header-anchor" href="#initcss3d" aria-hidden="true">#</a> initCss3d</h3>
<blockquote>
<p>创建 css 3d 内容，主要分为 <code v-pre>对象</code> 和 <code v-pre>精灵</code> 两种：</p>
<p><code v-pre>对象</code>: 能够被鼠标操作缩放，不被模型遮挡，能够通过DOM操作获取</p>
<p><code v-pre>精灵</code>: 不能被鼠标操作缩放，可以被模型遮挡，能够通过射线拾取(可以粗略理解为鼠标点击操作获取)</p>
</blockquote>
<p><strong>示例</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p>
<ul>
<li><code v-pre>initCss3dParams</code>: 配置项，定义如下:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InitCss3dParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  scene<span class="token operator">:</span> Scene<span class="token punctuation">;</span>
  camera<span class="token operator">:</span> Camera<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InitCss3dReturns</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 手动刷新</span>
  <span class="token function-variable function">refresh</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// 挂载 canvas 元素</span>
  <span class="token function-variable function">mountTo</span><span class="token operator">:</span> <span class="token punctuation">(</span>element<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// 创建 css 3d 对象</span>
  <span class="token function-variable function">createCss3dObject</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> element <span class="token punctuation">}</span><span class="token operator">:</span> CreateCss3dObjectParams<span class="token punctuation">)</span> <span class="token operator">=></span> CSS3DObject<span class="token punctuation">;</span>
  <span class="token comment">// 创建 css 3d 精灵</span>
  <span class="token function-variable function">createCss3dSprite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> element <span class="token punctuation">}</span><span class="token operator">:</span> CreateCss3dObjectParams<span class="token punctuation">)</span> <span class="token operator">=></span> CSS3DSprite<span class="token punctuation">;</span>
  <span class="token comment">// 创建 3d 文字</span>
  <span class="token function-variable function">createText</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    text<span class="token punctuation">,</span>
    color<span class="token punctuation">,</span>
    fontSize<span class="token punctuation">,</span>
    thickness<span class="token punctuation">,</span>
    position<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> CreateTextParams<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">THREE</span><span class="token punctuation">.</span>Mesh<span class="token operator">&lt;</span>
    TextGeometry<span class="token punctuation">,</span>
    <span class="token constant">THREE</span><span class="token punctuation">.</span>MeshBasicMaterial<span class="token punctuation">,</span>
    <span class="token constant">THREE</span><span class="token punctuation">.</span>Object3DEventMap
  <span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">CreateTextParams</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  fontSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  thickness<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  position<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initcss2d" tabindex="-1"><a class="header-anchor" href="#initcss2d" aria-hidden="true">#</a> initCss2d</h3>
<blockquote>
<p>创建 css 2d 内容，其特点是：</p>
<p>不能被鼠标操作缩放，<strong>默认情况下</strong>不被模型遮挡，能够通过DOM操作获取</p>
<p>但是 lec3d 提供了配置项，能够控制其是否被模型遮挡</p>
</blockquote>
<p><strong>示例</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p>
<ul>
<li><code v-pre>intCss2dParams</code>: 配置项，定义如下:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InitCss2dParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  scene<span class="token operator">:</span> Scene<span class="token punctuation">;</span>
  camera<span class="token operator">:</span> Camera<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InitCss2dReturns</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">refresh</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function-variable function">mountTo</span><span class="token operator">:</span> <span class="token punctuation">(</span>element<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// 创建 css 2d 对象</span>
  <span class="token function-variable function">createCss2dObject</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> CreateCss2dObjectParams<span class="token punctuation">)</span> <span class="token operator">=></span> CSS2DObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">CreateCss2dObjectParams</span> <span class="token punctuation">{</span>
  <span class="token comment">// 内容</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
  <span class="token comment">// css 样式属性</span>
  style<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token comment">// 是否可被模型遮挡</span>
  occludable<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loadgltf" tabindex="-1"><a class="header-anchor" href="#loadgltf" aria-hidden="true">#</a> loadGLTF</h3>
<blockquote>
<p>导入 GLTF 模型文件, 并做相关配置</p>
</blockquote>
<p><strong>示例</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> lec3d <span class="token keyword">from</span> <span class="token string">"@trickle/lec3d"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> scene <span class="token punctuation">}</span> <span class="token operator">=</span> lec3d<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

lec3d<span class="token punctuation">.</span><span class="token function">loadGLTF</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modelPath<span class="token operator">:</span> <span class="token string">"3d_model/scene.gltf"</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    scale<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    position<span class="token operator">:</span> <span class="token punctuation">{</span>
      x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    rotation<span class="token operator">:</span> <span class="token punctuation">{</span>
      x<span class="token operator">:</span> <span class="token string">"30"</span><span class="token punctuation">,</span> <span class="token comment">// 字符串数字代表角度，即 30 度</span>
      z<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>gltf<span class="token punctuation">,</span> model<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数</strong></p>
<ul>
<li><code v-pre>loadGLTFparams</code>: 配置项，定义如下：</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LoadGLTFParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 模型文件路径</span>
  modelPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 模型文件配置</span>
  options<span class="token operator">?</span><span class="token operator">:</span> CommonModelOptions<span class="token punctuation">;</span>
  callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>gltf<span class="token operator">:</span> <span class="token constant">GLTF</span><span class="token punctuation">,</span> model<span class="token operator">:</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>Group<span class="token operator">&lt;</span><span class="token constant">THREE</span><span class="token punctuation">.</span>Object3DEventMap<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">CommonModelOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// 模型缩放</span>
  scale<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">// 模型的名字</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 模型位置</span>
  position<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    x<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 模型旋转角度，使用字符串则为角度值，使用数字则为弧度值</span>
  <span class="token comment">// 如 '30' 代表 30 度， 30 代表 180*30/PI 度</span>
  rotation<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    x<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LoadGLTFReturns</span> <span class="token operator">=</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


