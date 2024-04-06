import{_ as e,p as d,q as a,a1 as n}from"./framework-016e66c7.js";const i={},r=n(`<h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南" aria-hidden="true">#</a> 指南</h1><h2 id="lec3d是什么" tabindex="-1"><a class="header-anchor" href="#lec3d是什么" aria-hidden="true">#</a> lec3d是什么</h2><p>我们只是要一个 3d 场景，学那么多东西成本可太高了！ 所以我们基于 three.js 封装了一个用于快速搭建 3d 场景的库，并且它是不限框架的！</p><blockquote><p>目前我们在 <code>Vue</code>，<code>React</code>，<code>Svelte</code> 上都有做实践！</p></blockquote><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i @trickle/lec3d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import lec3d from &quot;@trickle/lec3d&quot;;
const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({
  axesHelperConfigs: {
    length: 10000,
  },
});

mountTo(yourElement);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="贡献和维护" tabindex="-1"><a class="header-anchor" href="#贡献和维护" aria-hidden="true">#</a> 贡献和维护</h2><p>TODO...</p>`,9),s=[r];function c(l,t){return d(),a("div",null,s)}const h=e(i,[["render",c],["__file","index.html.vue"]]);export{h as default};
