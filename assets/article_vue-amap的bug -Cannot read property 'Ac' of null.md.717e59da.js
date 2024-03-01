import{_ as n,c as a,o as s,a as p}from"./app.c6951d47.js";const v=`{"title":"vue-amap\u7684bug -Cannot read property 'Ac' of null","description":"","frontmatter":{"title":"vue-amap\u7684bug -Cannot read property 'Ac' of null","tags":["Vue","JS"]},"headers":[{"level":2,"title":"\u95EE\u9898\u4EA7\u751F\u7684\u573A\u666F","slug":"\u95EE\u9898\u4EA7\u751F\u7684\u573A\u666F"},{"level":2,"title":"\u89E3\u51B3\u529E\u6CD5","slug":"\u89E3\u51B3\u529E\u6CD5"}],"relativePath":"article/vue-amap\u7684bug -Cannot read property 'Ac' of null.md"}`,t={},o=p(`<h2 id="\u95EE\u9898\u4EA7\u751F\u7684\u573A\u666F" tabindex="-1">\u95EE\u9898\u4EA7\u751F\u7684\u573A\u666F <a class="header-anchor" href="#\u95EE\u9898\u4EA7\u751F\u7684\u573A\u666F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u4E86<code>vue-amap</code>\u7EC4\u4EF6\uFF0C\u6211\u5728\u6BCF\u4E2A\u6807\u8BB0\u70B9\u4E0A\u7ED1\u5B9A\u4E86\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5982\u4E0B:</p><div class="language-js"><pre><code><span class="token keyword">let</span> markerAlarm <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">[</span>lon<span class="token punctuation">,</span> lat<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token string">&quot;AMAP_ANIMATION_BOUNCE&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u8BB0\u70B9\u52A8\u753B\u6548\u679C</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;/images/alarm.png&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      self<span class="token punctuation">.</span>markerRefs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      self<span class="token punctuation">.</span>windows <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enterprise_id</span><span class="token operator">:</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>enterprise_id<span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">[</span>lon<span class="token punctuation">,</span> lat<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
        <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">close</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            self<span class="token punctuation">.</span>windows<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> crumbArray <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/move&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u79FB\u52A8\u6267\u6CD5&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u4F01\u4E1A\u8BE6\u60C5&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
      self<span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;enterpriseDetail&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">enterpriseId</span><span class="token operator">:</span> self<span class="token punctuation">.</span>windows<span class="token punctuation">.</span>enterprise_id<span class="token punctuation">,</span>
          <span class="token literal-property property">crumbArray</span><span class="token operator">:</span> crumbArray
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>windows<span class="token punctuation">,</span> <span class="token string">&quot;231423&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u7ED1\u5B9A\u4E86\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u6BCF\u5F53\u70B9\u51FB\u56FE\u6807\u7684\u65F6\u5019\uFF0C\u5C31\u5229\u7528<code>vue-router</code>\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u8DEF\u7531\u4E0B\u9762\u3002 \u6BCF\u6B21\u70B9\u51FB\u4E4B\u540E\uFF0C\u6B63\u5E38\u8DF3\u8F6C\uFF0C\u4F46\u662F\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u62A5\u9519\u5982\u4E0B:</p><div class="language-"><pre><code> Uncaught TypeError: Cannot read property &#39;Ac&#39; of null
</code></pre></div><h2 id="\u89E3\u51B3\u529E\u6CD5" tabindex="-1">\u89E3\u51B3\u529E\u6CD5 <a class="header-anchor" href="#\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a></h2><p>\u7ED9\u5BF9\u5E94\u8DEF\u7531\u6DFB\u52A0<code>keep-alive</code>\u5C5E\u6027\u3002\u4F8B\u5982\u6211\u7684\u5730\u56FE\u7EC4\u4EF6\u540D\u79F0\u4E3A<code>move</code>,\u90A3\u4E48\u5728\u5BF9\u5E94\u7684\u8DEF\u7531\u6587\u4EF6\u5904\u914D\u7F6E\u5982\u4E0B:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/move&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">component</span><span class="token operator">:</span> Move<span class="token punctuation">,</span>
   <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u6807\u8BB0\u5217\u8868\u9875\u9700\u8981\u88AB\u7F13\u5B58</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5728<code>router-view</code>\u5904\u5224\u65AD\u662F\u5426\u6709<code>keep-alive</code>\u5C5E\u6027\u5373\u53EF:</p><div class="language-js"><pre><code> <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;$route.meta.keepAlive&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;!$route.meta.keepAlive&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
</code></pre></div>`,10),e=[o];function r(c,l,u,k,i,d){return s(),a("div",null,e)}var g=n(t,[["render",r]]);export{v as __pageData,g as default};
