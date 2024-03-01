import{_ as s,c as a,o as t,a as p,b as n}from"./app.c6951d47.js";const v='{"title":"Vue3\u5199\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177","description":"","frontmatter":{"title":"Vue3\u5199\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177"},"headers":[{"level":2,"title":"Vue3 \u7B80\u5355\u77E5\u8BC6","slug":"vue3-\u7B80\u5355\u77E5\u8BC6"},{"level":3,"title":"setup","slug":"setup"},{"level":3,"title":"reactive()","slug":"reactive"},{"level":3,"title":"ref","slug":"ref"},{"level":3,"title":"\u5F00\u59CB\u52A8\u624B","slug":"\u5F00\u59CB\u52A8\u624B"},{"level":3,"title":"Docker \u90E8\u7F72","slug":"docker-\u90E8\u7F72"},{"level":3,"title":"\u6548\u679C\u622A\u56FE","slug":"\u6548\u679C\u622A\u56FE"}],"relativePath":"article/Vue3\u5199\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177.md"}',o={},e=p(`<h1 id="vue3-\u5199\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177" tabindex="-1">Vue3 \u5199\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177 <a class="header-anchor" href="#vue3-\u5199\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177" aria-hidden="true">#</a></h1><p><img src="https://user-gold-cdn.xitu.io/2020/2/11/17033c7ed72a61bc?w=1600&amp;h=480&amp;f=png&amp;s=980699" alt=""></p><blockquote><p><a href="http://www.xieyezi.com:9002/" target="_blank" rel="noopener noreferrer">\u7EBF\u4E0A\u5730\u5740</a><br><a href="https://github.com/xieyezi/2019-ncov-vue3-version" target="_blank" rel="noopener noreferrer">git \u5730\u5740</a></p></blockquote><p>\u56E0\u4E3A\u75AB\u60C5\u592A\u8FC7\u4E25\u91CD\uFF0C\u53EA\u80FD\u5446\u5728\u5BB6\uFF0C\u6240\u4EE5\u524D\u51E0\u5929\u7528 <code>React</code>+ <code>Antd</code> \u5199\u4E86\u4E00\u4E2A\u75AB\u60C5\u67E5\u8BE2\u5C0F\u5DE5\u5177\uFF1A<a href="https://juejin.im/post/5e3a4f7ae51d4527066e811b" target="_blank" rel="noopener noreferrer">React \u7248\u672C</a>\uFF0C\u4E5F\u7B97\u4E3A\u75AB\u60C5\u7684\u9632\u63A7\u505A\u4E86\u4E00\u70B9\u70B9\u8D21\u732E\u3002\u8FD9\u4E24\u5929\u5462\uFF0C\u770B\u89C1 Vue3-Alpha \u7248\u672C\u90FD\u51FA\u5230 v3.0.0-alpha.4 \u4E86\uFF0C\u5982\u56FE\uFF1A</p><p><img src="https://user-gold-cdn.xitu.io/2020/2/11/17033c65a4c0e56f?w=1934&amp;h=586&amp;f=png&amp;s=140777" alt=""> \u5728\u8FD9\u4E2A\u7248\u672C\u4E2D\uFF0C\u4E3B\u8981\u7684\u5DE5\u4F5C\u5C31\u53EA\u5269\u4E0B\u5904\u7406\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u4E86\uFF0C\u6240\u4EE5 Vu3 \u771F\u7684\u662F\u6307\u65E5\u53EF\u5F85\u4E86\u3002\u540C\u65F6\u5B98\u65B9\u5462\u5E0C\u671B\u6211\u4EEC\u80FD\u591F\u79EF\u6781\u8BD5\u7528 Vue \u65B0\u7248\u672C\u3002\u4E3A\u4E86\u54CD\u5E94\u53F7\u53EC\uFF08\u53EA\u662F\u56E0\u4E3A\u5728\u5BB6\u592A\u65E0\u804A\u4E86\uFF09\uFF0C\u6240\u4EE5\u6211\u4EEC\u6765\u8BD5\u4E00\u8BD5\u5229\u7528<code>Vue3: Vue-Composition-Api</code> + <code>Typescript</code> \u6765\u91CD\u6784\u6211\u4EEC\u7684\u75AB\u60C5\u67E5\u770B\u5C0F\u5DE5\u5177\u3002</p><h2 id="vue3-\u7B80\u5355\u77E5\u8BC6" tabindex="-1">Vue3 \u7B80\u5355\u77E5\u8BC6 <a class="header-anchor" href="#vue3-\u7B80\u5355\u77E5\u8BC6" aria-hidden="true">#</a></h2><p>\u5F00\u59CB\u52A8\u624B\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u5B66\u4E60\u4E00\u70B9\u76F8\u5173\u77E5\u8BC6\u3002</p><h3 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h3><p><code>setup()</code> \u51FD\u6570\u662F vue3 \u4E2D\uFF0C\u4E13\u95E8\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7684\u65B0\u5C5E\u6027\u3002\u5B83\u4E3A\u6211\u4EEC\u4F7F\u7528 vue3 \u7684 Composition API \u65B0\u7279\u6027\u63D0\u4F9B\u4E86\u7EDF\u4E00\u7684\u5165\u53E3\u3002setup \u51FD\u6570\u4F1A\u5728 <code>beforeCreate \u4E4B\u540E</code>\u3001<code>created</code> \u3002<code>setup()</code> \u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C<code>setup(props,context)</code>\u3002\u5176\u4E2D:</p><ul><li><code>props</code>: \u63A5\u6536 props \u6570\u636E<br> \u5728 props \u4E2D\u5B9A\u4E49\u5F53\u524D\u7EC4\u4EF6\u5141\u8BB8\u5916\u754C\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u540D\u79F0\uFF1A<div class="language-js"><pre><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">propsName</span><span class="token operator">:</span> String
<span class="token punctuation">}</span>
</code></pre></div>\u901A\u8FC7 setup \u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5F62\u53C2\uFF0C\u63A5\u6536 props \u6570\u636E\uFF1A<div class="language-js"><pre><code>  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>p1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div></li><li><code>context</code>: \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u5305\u542B\u4E86\u4E00\u4E9B\u6709\u7528\u7684\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u5728 vue 2.x \u4E2D\u9700\u8981\u901A\u8FC7 this \u624D\u80FD\u8BBF\u95EE\u5230\uFF0C\u5728 vue 3.x \u4E2D\uFF0C\u5B83\u4EEC\u7684\u8BBF\u95EE\u65B9\u5F0F\u5982\u4E0B:<div class="language-js"><pre><code>  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span>attrs
      context<span class="token punctuation">.</span>slots
      context<span class="token punctuation">.</span>parent
      context<span class="token punctuation">.</span>root
      context<span class="token punctuation">.</span>emit
      context<span class="token punctuation">.</span>refs
  <span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="reactive" tabindex="-1"><code>reactive()</code> <a class="header-anchor" href="#reactive" aria-hidden="true">#</a></h3><p><code>reactive()</code> \u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u5BF9\u8C61\u3002 \u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u5B83\u7684\u57FA\u672C\u7528\u6CD5:</p><div class="language-js"><pre><code><span class="token comment">// js\u90E8\u5206</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// \u521B\u5EFA\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
     <span class="token comment">// setup \u51FD\u6570\u4E2D\u5C06\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61 return \u51FA\u53BB\uFF0C\u4F9B template \u4F7F\u7528</span>
    <span class="token keyword">return</span> state <span class="token comment">// \u5FC5\u987Breturn</span>
<span class="token punctuation">}</span>
<span class="token comment">// template\u91CC\u9762\u4F7F\u7528</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5F53\u524D\u7684 count \u503C\u4E3A\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre></div><p>\u6211\u4EEC\u901A\u8FC7 <code>reactive</code>\u5305\u88F9\u7684\u5BF9\u8C61\uFF0Creturn \u4E4B\u540E\uFF0C\u5C31\u76F8\u5F53\u4E8E Vue 2.x \u7684 <code>data()</code> hooks\u3002 \u6211\u4EEC\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\u7B49\u64CD\u4F5C\u3002</p><h3 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h3><p><code>ref()</code> \u51FD\u6570\u7528\u6765\u6839\u636E\u7ED9\u5B9A\u7684\u503C\u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u5BF9\u8C61\uFF0Cref() \u51FD\u6570\u8C03\u7528\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u53EA\u5305\u542B\u4E00\u4E2A .value \u5C5E\u6027\uFF1A</p><div class="language-js"><pre><code>  <span class="token comment">// js\u90E8\u5206</span>
   <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>
   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// \u521B\u5EFA\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61 count\uFF0C\u521D\u59CB\u503C\u4E3A 0</span>
       <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
       <span class="token comment">// \u5982\u679C\u8981\u8BBF\u95EE ref() \u521B\u5EFA\u51FA\u6765\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61\u7684\u503C\uFF0C\u5FC5\u987B\u901A\u8FC7 .value \u5C5E\u6027\u624D\u53EF\u4EE5</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 0</span>
       <span class="token comment">// \u8BA9 count \u7684\u503C +1</span>
       count<span class="token punctuation">.</span>value<span class="token operator">++</span>
       <span class="token comment">// \u518D\u6B21\u6253\u5370 count \u7684\u503C</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 1</span>
       <span class="token keyword">return</span> <span class="token punctuation">{</span>
           count<span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token comment">// template\u91CC\u9762\u4F7F\u7528</span>
   <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><h3 id="\u5F00\u59CB\u52A8\u624B" tabindex="-1">\u5F00\u59CB\u52A8\u624B <a class="header-anchor" href="#\u5F00\u59CB\u52A8\u624B" aria-hidden="true">#</a></h3><h4 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h4><p>\u9996\u5148\u6211\u4EEC\u5229\u7528 <code>Vue Cli</code> \u811A\u624B\u67B6 \u521D\u59CB\u5316\u6211\u4EEC\u7684\u5E94\u7528:</p><p><img src="https://user-gold-cdn.xitu.io/2020/2/11/17033c65803ce2e0?w=1612&amp;h=472&amp;f=jpeg&amp;s=138583" alt=""></p><blockquote><p>\u6CE8\u610F\uFF0CUse class-style component syntax \uFF1F \u8FD9\u4E00\u9879\u6211\u4EEC\u8981\u9009\u62E9\u4E3A no, \u6211\u4EEC\u4E0D\u7528\u88C5\u9970\u5668\u5199\u6CD5\uFF0C\u6211\u4EEC\u8981\u7528 composition api \u7684\u5199\u6CD5</p></blockquote><h4 id="\u642D\u5EFA\u9879\u76EE\u76EE\u5F55" tabindex="-1">\u642D\u5EFA\u9879\u76EE\u76EE\u5F55 <a class="header-anchor" href="#\u642D\u5EFA\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a></h4><p>\u7136\u540E\u5F00\u59CB\u642D\u5EFA\u6211\u4EEC\u7684\u9879\u76EE\u76EE\u5F55\uFF1A</p><div class="language-"><pre><code>  \u251C\u2500\u2500 package-lock.json
  \u251C\u2500\u2500 package.json
  \u251C\u2500\u2500 public
  \u2502\xA0\xA0 \u251C\u2500\u2500 favicon.ico
  \u2502\xA0\xA0 \u2514\u2500\u2500 index.html
  \u251C\u2500\u2500 src
  \u2502\xA0\xA0 \u251C\u2500\u2500 App.vue
  \u2502\xA0\xA0 \u251C\u2500\u2500 assets
  \u2502\xA0\xA0 \u251C\u2500\u2500 components
  \u2502\xA0\xA0 \u251C\u2500\u2500 main.ts
  \u2502\xA0\xA0 \u251C\u2500\u2500 map
  \u2502\xA0\xA0 \u251C\u2500\u2500 pages
  \u2502\xA0\xA0 \u251C\u2500\u2500 plugins
  \u2502\xA0\xA0 \u251C\u2500\u2500 services
  \u2502\xA0\xA0 \u251C\u2500\u2500 shims-vue.d.ts
  \u2502\xA0\xA0 \u2514\u2500\u2500 utils
  \u251C\u2500\u2500 tsconfig.json
  \u251C\u2500\u2500 vue.config.js
  \u251C\u2500\u2500 yarn-error.log
  \u2514\u2500\u2500 yarn.lock
</code></pre></div><p>page \u76EE\u5F55:</p><div class="language-"><pre><code>  \u251C\u2500\u2500 home
  \u2502\xA0\xA0 \u2514\u2500\u2500 Home.vue
  \u251C\u2500\u2500 line
  \u2502\xA0\xA0 \u2514\u2500\u2500 TrendLine.vue
  \u251C\u2500\u2500 map
  \u2502\xA0\xA0 \u2514\u2500\u2500 Map.vue
  \u251C\u2500\u2500 news
  \u2502\xA0\xA0 \u2514\u2500\u2500 News.vue
  \u251C\u2500\u2500 pie
  \u2502\xA0\xA0 \u2514\u2500\u2500 Pie.vue
  \u2514\u2500\u2500 rumor
      \u2514\u2500\u2500 Rumor.vue
</code></pre></div><h4 id="\u5BFC\u5165-vue-composition-api" tabindex="-1">\u5BFC\u5165 Vue-Composition-Api <a class="header-anchor" href="#\u5BFC\u5165-vue-composition-api" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>yarn add @vue<span class="token operator">/</span>composition<span class="token operator">-</span>api  <span class="token comment">//\u6839\u76EE\u5F55\u6267\u884C</span>
<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> VueCompositionApi <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCompositionApi<span class="token punctuation">)</span>
</code></pre></div><h4 id="\u521B\u5EFA\u6839\u7EC4\u4EF6" tabindex="-1">\u521B\u5EFA\u6839\u7EC4\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u6839\u7EC4\u4EF6" aria-hidden="true">#</a></h4><p>\u6211\u4EEC\u5C06 Home \u4F5C\u4E3A\u6839\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5148\u6765\u5B9A\u4E49\u4E00\u4E0B\u8FD9\u4E2A\u7EC4\u4EF6:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createComponent<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/composition-api&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F\u90E8\u5206</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onMounted...&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onUnmounted...&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u901A\u8FC7 <code>createComponent\u51FD\u6570</code> \u7ED3\u5408 TypeScript \u63D0\u4F9B\u7684\u7C7B\u578B\u63A8\u65AD\u6765\u8FDB\u884C\u9879\u76EE\u7684\u5F00\u53D1\u3002</p></blockquote><h4 id="\u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E" tabindex="-1">\u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E <a class="header-anchor" href="#\u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E" aria-hidden="true">#</a></h4><p>\u63A5\u7740\u6211\u4EEC\u5F97\u5B9A\u4E49\u4E00\u4E9B\u54CD\u5E94\u7684\u6570\u636E:</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HomeState</span> <span class="token punctuation">{</span>
  newsList<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  caseList<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5728 setup()\u91CC\u9762</span>
    <span class="token keyword">const</span> <span class="token literal-property property">origin</span><span class="token operator">:</span> HomeState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">newsList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">caseList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span>
</code></pre></div><h4 id="\u5F02\u6B65\u8BF7\u6C42" tabindex="-1">\u5F02\u6B65\u8BF7\u6C42 <a class="header-anchor" href="#\u5F02\u6B65\u8BF7\u6C42" aria-hidden="true">#</a></h4><p>\u63A5\u7740\u6211\u4EEC\u9700\u8981\u53D1\u8D77\u5F02\u6B65\u8BF7\u6C42\u521D\u59CB\u5316\u6570\u636E</p><div class="language-js"><pre><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// methods</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getRumorList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getTrendList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">initData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5728\u751F\u547D\u5468\u671F\u91CC\u9762\u8C03\u7528</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onMounted...&#39;</span><span class="token punctuation">)</span>
      <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">getRumorList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">getTrendList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u7EC4\u4EF6\u7684\u5BFC\u5165\u53CA\u4F7F\u7528" tabindex="-1">\u7EC4\u4EF6\u7684\u5BFC\u5165\u53CA\u4F7F\u7528 <a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u5BFC\u5165\u53CA\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5047\u8BBE\u6211\u4EEC\u8981\u5BFC\u5165 <code>News</code>\u7EC4\u4EF6\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> News <span class="token keyword">from</span> <span class="token string">&#39;@/pages/news/News.vue&#39;</span>
<span class="token comment">// components</span>
<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  News
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token comment">// template \u4E2D\u4F7F\u7528</span>
<span class="token operator">&lt;</span>News <span class="token operator">:</span>newlist<span class="token operator">=</span><span class="token string">&quot;state.newsList&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u7EC4\u4EF6\u5185\u90E8:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/composition-api&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;News&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">newlist</span><span class="token operator">:</span> Array
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="docker-\u90E8\u7F72" tabindex="-1">Docker \u90E8\u7F72 <a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a></h3><div class="language-"><pre><code> # ncov-vue3 Dockerfile

  #\u6307\u5B9Anode\u955C\u50CF\u5BF9\u9879\u76EE\u8FDB\u884C\u4F9D\u8D56\u5B89\u88C5\u548C\u6253\u5305
  FROM node:10.16.0 AS builder
  # \u5C06\u5BB9\u5668\u7684\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u7F6E\u4E3A/app(\u5F53\u524D\u76EE\u5F55\uFF0C\u5982\u679C/app\u4E0D\u5B58\u5728\uFF0CWORKDIR\u4F1A\u521B\u5EFA/app\u6587\u4EF6\u5939)
  WORKDIR /app
  COPY package.json /app/
  RUN npm config set registry &quot;https://registry.npm.taobao.org/&quot; \\
      &amp;&amp; npm install

  COPY . /app
  RUN npm run build

  #\u6307\u5B9Anginx\u914D\u7F6E\u9879\u76EE\uFF0C--from=builder \u6307\u7684\u662F\u4ECE\u4E0A\u4E00\u6B21 build \u7684\u7ED3\u679C\u4E2D\u63D0\u53D6\u4E86\u7F16\u8BD1\u7ED3\u679C(FROM node:alpine as builder)\uFF0C\u5373\u662F\u628A\u521A\u521A\u6253\u5305\u751F\u6210\u7684dist\u653E\u8FDBnginx\u4E2D
  FROM nginx
  COPY --from=builder app/dist /usr/share/nginx/html/
  COPY --from=builder app/nginx.conf /etc/nginx/nginx.conf


  #\u66B4\u9732\u5BB9\u566880\u7AEF\u53E3
  EXPOSE 80
</code></pre></div><p>\u770B\u5230\u8FD9\u91CC\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u57FA\u672C\u4E0A\u4E86\u89E3 Vue3 \u7684\u76F8\u5173\u64CD\u4F5C\u548C\u57FA\u672C\u5165\u95E8\uFF0C\u5927\u5BB6\u4E5F\u64CD\u4F5C\u8D77\u6765\u5427\uFF01</p><h3 id="\u6548\u679C\u622A\u56FE" tabindex="-1">\u6548\u679C\u622A\u56FE <a class="header-anchor" href="#\u6548\u679C\u622A\u56FE" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u8FD8\u662F\u6765\u770B\u770B\u6548\u679C\u622A\u56FE:</p>`,49),c=n("div",{text:"center"},[n("img",{width:"46%",src:"https://user-gold-cdn.xitu.io/2020/2/11/17033c65964b8dbc?w=994&h=1748&f=png&s=919836"}),n("img",{width:"46%",src:"https://user-gold-cdn.xitu.io/2020/2/11/17033c6602a7a046?w=994&h=1748&f=png&s=706856"}),n("img",{width:"46%",src:"https://user-gold-cdn.xitu.io/2020/2/11/17033c65cdcb538d?w=994&h=1748&f=png&s=976594"}),n("img",{width:"46%",src:"https://user-gold-cdn.xitu.io/2020/2/11/17033c65add28a16?w=994&h=1748&f=png&s=1136737"}),n("img",{width:"46%",src:"https://user-gold-cdn.xitu.io/2020/2/11/17033c66b2d23e7a?w=994&h=1748&f=png&s=821550"}),n("img",{width:"46%",src:"https://user-gold-cdn.xitu.io/2020/2/11/17033c66e52c1993?w=994&h=1748&f=png&s=580876"})],-1),u=n("p",null,"\u6700\u540E\uFF0C\u6B66\u6C49\u52A0\u6CB9 \u26FD\uFE0F\uFF01",-1),l=[e,c,u];function r(i,k,d,m,h,g){return t(),a("div",null,l)}var y=s(o,[["render",r]]);export{v as __pageData,y as default};
