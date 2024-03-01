import{_ as e,c as n,o as a,a as t}from"./app.c6951d47.js";const _='{"title":"Vue\u7EC4\u4EF6","description":"","frontmatter":{"title":"Vue\u7EC4\u4EF6","tags":["Vue","JS"]},"headers":[{"level":3,"title":"Vue \u7EC4\u4EF6","slug":"vue-\u7EC4\u4EF6"},{"level":3,"title":"\u5B50\u7236\u7EA7\u7EC4\u4EF6","slug":"\u5B50\u7236\u7EA7\u7EC4\u4EF6"},{"level":3,"title":"props \u6570\u636E\u4F20\u9012\u68C0\u6D4B","slug":"props-\u6570\u636E\u4F20\u9012\u68C0\u6D4B"}],"relativePath":"article/Vue\u7EC4\u4EF6.md"}',s={},p=t(`<h3 id="vue-\u7EC4\u4EF6" tabindex="-1">Vue \u7EC4\u4EF6 <a class="header-anchor" href="#vue-\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u662F Vue.js \u6700\u6838\u5FC3\u7684\u529F\u80FD\u4E4B\u4E00,\u7EC4\u4EF6\u53EF\u4EE5\u6269\u5C55 HTML \u5143\u7D20,\u5C01\u88C5\u53EF\u91CD\u7528\u7684\u4EE3\u7801. \u6240\u4EE5\u7684\u7EC4\u4EF6\u90FD\u662F Vue \u7684\u4E00\u4E2A\u5B9E\u4F8B. \u4E00\u4E2A\u5355\u7EC4\u4EF6\u5206\u4E3A\u4E09\u90E8\u5206\uFF1A</p><ul><li><p>template(HTML \u90E8\u5206)</p></li><li><p>script(\u903B\u8F91\u90E8\u5206)</p></li><li><p>style(\u6837\u5F0F\u90E8\u5206)</p></li></ul><p>\u6CE8\u610F\uFF1A 1.template \u91CC\u9762\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u7EC4\u4EF6\uFF1A</p><div class="language-HTML"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      \u6211\u662F\u6839\u7EC4\u4EF6
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>2.style \u7684 scoped \u5C5E\u6027\uFF1A\u6837\u5F0F\u53EA\u5728\u5F53\u524D\u7EC4\u4EF6\u5185\u751F\u6548</p><h3 id="\u5B50\u7236\u7EA7\u7EC4\u4EF6" tabindex="-1">\u5B50\u7236\u7EA7\u7EC4\u4EF6 <a class="header-anchor" href="#\u5B50\u7236\u7EA7\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u987E\u540D\u601D\u4E49,\u4E00\u4E2A\u7EC4\u4EF6\u5305\u542B\u4E86\u53E6\u4E00\u4E2A\u7EC4\u4EF6,\u5C31\u5F62\u6210\u4E86\u5B50\u7236\u7EA7\u7EC4\u4EF6\u7684\u5173\u7CFB. 1.\u5728\u7236\u7EC4\u4EF6\u5BFC\u5165\u5B50\u7EC4\u4EF6\u7684\u65B9\u6CD5\uFF1A</p><ul><li>\u5148\u4E3A\u5B50\u7EC4\u4EF6\u8D77\u540D\u5E76\u5BFC\u5165\u6587\u4EF6\u4F4D\u7F6E</li></ul><div class="language-"><pre><code>import Son from &quot;\u5B50\u7EC4\u4EF6\u6587\u4EF6\u4F4D\u7F6E&quot;
</code></pre></div><ul><li>\u521B\u5EFA components \u5C06\u5B50\u7EC4\u4EF6\u6CE8\u5165</li></ul><div class="language-"><pre><code>{
  Son
}
</code></pre></div><p>2.\u5B50\u7236\u7EA7\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4EA4\u4E92\uFF1A \u7236\u7EC4\u4EF6\u8981\u7ED9\u5B50\u7EC4\u4EF6\u4E0B\u53D1\u6570\u636E,\u5B50\u7EC4\u4EF6\u8981\u544A\u8BC9\u7236\u7EC4\u4EF6\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\u60C5,\u6240\u4EE5\u9700\u8981\u901A\u4FE1.\u4ED6\u4EEC\u4E4B\u95F4\u7684\u901A\u4FE1\u603B\u7ED3\u4E3A props \u5411\u4E0B\u4F20\u9012,\u4E8B\u4EF6(Event)\u5411\u4E0A\u4F20\u9012.\u5373\u662F\u7236\u7EC4\u4EF6\u901A\u8FC7 props \u7ED9\u5B50\u7EC4\u4EF6\u4E0B\u53D1\u6570\u636E,\u5B50\u7EC4\u4EF6\u901A\u8FC7\u4E8B\u4EF6\u7ED9\u7236\u7EC4\u4EF6\u53D1\u9001\u6D88\u606F.</p><ul><li>\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u4E0B\u53D1\u6570\u636E\uFF1A 1.\u7236\u7EC4\u4EF6\u53D1\u9001</li></ul><div class="language-"><pre><code> &lt;Son v-bind:title=&quot;msg&quot;/&gt;
</code></pre></div><p>2.\u5B50\u7EC4\u4EF6\u5F15\u7528(\u5728 data \u540C\u7EA7\u76EE\u5F55\u4E0B\u58F0\u660E props)</p><div class="language-"><pre><code> props:[&quot;title&quot;]
</code></pre></div><h3 id="props-\u6570\u636E\u4F20\u9012\u68C0\u6D4B" tabindex="-1">props \u6570\u636E\u4F20\u9012\u68C0\u6D4B <a class="header-anchor" href="#props-\u6570\u636E\u4F20\u9012\u68C0\u6D4B" aria-hidden="true">#</a></h3><ul><li>\u68C0\u6D4B\u4F20\u5165\u503C\u6570\u636E\u7C7B\u578B</li></ul><div class="language-"><pre><code>props:{
  title:String,(\u5373\u662F\u8BF4\u4F20\u5165\u7684title\u5E94\u8BE5\u4E3AString\u7C7B\u578B)
  num:Number,
}
</code></pre></div><ul><li>\u5F53\u7136\u4F20\u5165\u503C\u53EF\u4EE5\u662F\u591A\u79CD\u6570\u636E\u7C7B\u578B</li></ul><div class="language-"><pre><code>props:{
  title:[String,Number],(\u5373\u662F\u8BF4\u4F20\u5165\u7684title\u53EF\u4EE5\u4E3AString\u7C7B\u578B\u6216\u8005Number\u7C7B\u578B)
  num:Number,
}
</code></pre></div><ul><li>\u6307\u5B9A\u4F20\u5165\u503C\u5FC5\u9009\u9879</li></ul><div class="language-"><pre><code>props:{
  title:{
    type:String,
    required:true
  }
}
</code></pre></div><ul><li>\u6307\u5B9A\u4F20\u5165\u503C\u9ED8\u8BA4\u503C</li></ul><div class="language-"><pre><code>props:{
  num:{
    type:Number,
    default:5
  }
}
</code></pre></div><ul><li>\u4F20\u5165\u503C\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u5BF9\u8C61</li></ul><div class="language-"><pre><code>props:{
  myobj:{
    type:Object,
    default:function(){
      return {
        name:&quot;\u672A\u77E5&quot;,
        age:10
      }
    }
  }
}
</code></pre></div>`,28),l=[p];function o(i,u,r,c,d,g){return a(),n("div",null,l)}var m=e(s,[["render",o]]);export{_ as __pageData,m as default};
