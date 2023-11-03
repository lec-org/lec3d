<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南" aria-hidden="true">#</a> 指南</h1>
<h2 id="lec3d是什么" tabindex="-1"><a class="header-anchor" href="#lec3d是什么" aria-hidden="true">#</a> lec3d是什么</h2>
<p>我们只是要一个 3d 场景，学那么多东西成本可太高了！
所以我们基于 three.js 封装了一个用于快速搭建 3d 场景的库，并且它是不限框架的！</p>
<blockquote>
<p>目前我们在 <code v-pre>Vue</code>，<code v-pre>React</code>，<code v-pre>Svelte</code> 上都有做实践！</p>
</blockquote>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @trickle/lec3d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> lec3d <span class="token keyword">from</span> <span class="token string">"@trickle/lec3d"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> scene<span class="token punctuation">,</span> renderer<span class="token punctuation">,</span> camera<span class="token punctuation">,</span> mountTo<span class="token punctuation">,</span> refresh<span class="token punctuation">,</span> addControls <span class="token punctuation">}</span> <span class="token operator">=</span> lec3d<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  axesHelperConfigs<span class="token operator">:</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">mountTo</span><span class="token punctuation">(</span>yourElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="贡献和维护" tabindex="-1"><a class="header-anchor" href="#贡献和维护" aria-hidden="true">#</a> 贡献和维护</h2>
<p>TODO...</p>
</div></template>


