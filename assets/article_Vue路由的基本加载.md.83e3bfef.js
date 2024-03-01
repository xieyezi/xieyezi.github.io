import{_ as n,c as a,o as s,a as t}from"./app.c6951d47.js";const _='{"title":"\u8DEF\u7531\u7684\u57FA\u672C\u52A0\u8F7D","description":"","frontmatter":{"title":"\u8DEF\u7531\u7684\u57FA\u672C\u52A0\u8F7D","tags":["Vue","JS"]},"headers":[{"level":3,"title":"Vue Router","slug":"vue-router"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"}],"relativePath":"article/Vue\u8DEF\u7531\u7684\u57FA\u672C\u52A0\u8F7D.md"}',e={},p=t(`<h3 id="vue-router" tabindex="-1">Vue Router <a class="header-anchor" href="#vue-router" aria-hidden="true">#</a></h3><p>Vue Router \u662F Vue.js \u5B98\u65B9\u7684\u8DEF\u7531\u7BA1\u7406\u5668\u3002\u5B83\u548C Vue.js \u7684\u6838\u5FC3\u6DF1\u5EA6\u96C6\u6210\uFF0C\u8BA9\u6784\u5EFA\u5355\u9875\u9762\u5E94\u7528\u53D8\u5F97\u6613\u5982\u53CD\u638C\u3002\u5305\u542B\u7684\u529F\u80FD\u6709\uFF1A</p><ul><li>\u5D4C\u5957\u7684\u8DEF\u7531/\u89C6\u56FE\u8868</li><li>\u6A21\u5757\u5316\u7684\u3001\u57FA\u4E8E\u7EC4\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E</li><li>\u8DEF\u7531\u53C2\u6570\u3001\u67E5\u8BE2\u3001\u901A\u914D\u7B26</li><li>\u57FA\u4E8E Vue.js \u8FC7\u6E21\u7CFB\u7EDF\u7684\u89C6\u56FE\u8FC7\u6E21\u6548\u679C </li><li>\u7EC6\u7C92\u5EA6\u7684\u5BFC\u822A\u63A7\u5236</li><li>\u5E26\u6709\u81EA\u52A8\u6FC0\u6D3B\u7684 CSS class \u7684\u94FE\u63A5</li><li>HTML5 \u5386\u53F2\u6A21\u5F0F\u6216 hash \u6A21\u5F0F\uFF0C\u5728 IE9 \u4E2D\u81EA\u52A8\u964D\u7EA7</li><li>\u81EA\u5B9A\u4E49\u7684\u6EDA\u52A8\u6761\u884C\u4E3A</li></ul><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>1.\u5B89\u88C5</p><div class="language-"><pre><code>npm install vue-router
</code></pre></div><p>2.\u5F15\u7528</p><div class="language-"><pre><code>import VueRouter from &#39;vue-router&#39;
Vue.use(VueRouter)
</code></pre></div><p>3.\u914D\u7F6E\u8DEF\u7531\u6587\u4EF6(\u65B0\u5EFA router \u6587\u4EF6\u5939,\u65B0\u5EFA index.js \u6587\u4EF6)</p><div class="language-"><pre><code>import Vue from &#39;vue&#39;
import VueRouter from &quot;vue-router&quot;
import HelloWorld from &#39;../components/HelloWorld&#39;
import Xie from &#39;../components/xieyezi&#39;

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:&quot;/&quot;,
      component:HelloWorld
    },
    {
      path:&quot;/xieyezi&quot;,
      component:Xie
    }
  ]
})
</code></pre></div><p>4.\u6CE8\u518C\u8DEF\u7531(\u5728 main.js \u4E2D\u6CE8\u518C)</p><div class="language-"><pre><code>new Vue({
  el: &#39;#app&#39;,
  components: { App },
  router,
  template: &#39;&lt;App/&gt;&#39;
})
\u6B64\u5904\u7684router\u5373\u4E3A\u6CE8\u518C\u4E86\u8DEF\u7531
</code></pre></div><p>5.\u8DF3\u8F6C(\u5BFC\u822A)</p><div class="language-HTML"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>urlData.HelloWorld<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>HelloWorld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>urlData.xieyezi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>xieyezi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,14),o=[p];function l(u,c,i,r,k,d){return s(),a("div",null,o)}var m=n(e,[["render",l]]);export{_ as __pageData,m as default};
