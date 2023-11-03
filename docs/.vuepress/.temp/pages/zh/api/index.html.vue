<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1>
<h2 id="通用" tabindex="-1"><a class="header-anchor" href="#通用" aria-hidden="true">#</a> 通用</h2>
<h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3>
<p>快速初始化，并返回相机、场景</p>
<p>参数：TODO
返回值：TODO</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> lec3d <span class="token keyword">from</span> <span class="token string">"@trickle/lec3d"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> scene<span class="token punctuation">,</span> renderer<span class="token punctuation">,</span> camera<span class="token punctuation">,</span> mountTo<span class="token punctuation">,</span> refresh<span class="token punctuation">,</span> addControls <span class="token punctuation">}</span> <span class="token operator">=</span> lec3d<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">axesHelperConfigs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h2>
<h3 id="loadgltf" tabindex="-1"><a class="header-anchor" href="#loadgltf" aria-hidden="true">#</a> loadGLTF</h3>
<p>快速导入 GLTF 模型文件, 并做相关</p>
<p>参数: TODO
返回值：TODO</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> lec3d <span class="token keyword">from</span> <span class="token string">"@trickle/lec3d"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> scene <span class="token punctuation">}</span> <span class="token operator">=</span> lec3d<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

lec3d<span class="token punctuation">.</span><span class="token function">loadGLTF</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modelPath</span><span class="token operator">:</span> <span class="token string">"3d_model/scene.gltf"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">"30"</span><span class="token punctuation">,</span> <span class="token comment">// 字符串数字代表角度，即 30 度</span>
      <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">gltf<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


