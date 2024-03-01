import{_ as a,c as n,o as s,a as t}from"./app.c6951d47.js";const h='{"title":"Vue\u4F7F\u7528axios\u7684get\u548Cpost\u8BF7\u6C42","description":"","frontmatter":{"title":"Vue\u4F7F\u7528axios\u7684get\u548Cpost\u8BF7\u6C42","tags":["Vue","JS"]},"headers":[{"level":3,"title":"\u5B89\u88C5 axios","slug":"\u5B89\u88C5-axios"},{"level":3,"title":"\u5728 vue \u9879\u76EE\u4E2D\u5F15\u5165","slug":"\u5728-vue-\u9879\u76EE\u4E2D\u5F15\u5165"},{"level":3,"title":"\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C get \u8BF7\u6C42","slug":"\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C-get-\u8BF7\u6C42"},{"level":3,"title":"\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C post \u8BF7\u6C42","slug":"\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C-post-\u8BF7\u6C42"}],"relativePath":"article/Vue\u4F7F\u7528axios\u7684get\u548Cpost\u8BF7\u6C42.md"}',p={},e=t(`<h3 id="\u5B89\u88C5-axios" tabindex="-1">\u5B89\u88C5 axios <a class="header-anchor" href="#\u5B89\u88C5-axios" aria-hidden="true">#</a></h3><p><a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank" rel="noopener noreferrer">Axios</a> \u662F\u4E00\u4E2A\u57FA\u4E8E promise \u7684 HTTP \u5E93,\u53EF\u4EE5\u7528\u5728\u6D4F\u89C8\u5668\u548C node.js \u4E2D.</p><ul><li>\u4ECE\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA XMLHttpRequests</li><li>\u4ECE node.js \u521B\u5EFA http \u8BF7\u6C42</li><li>\u652F\u6301 Promise API </li><li>\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94</li><li>\u8F6C\u6362\u8BF7\u6C42\u6570\u636E\u548C\u54CD\u5E94\u6570\u636E</li><li>\u53D6\u6D88\u8BF7\u6C42</li><li>\u81EA\u52A8\u8F6C\u6362 JSON \u6570\u636E</li><li>\u5BA2\u6237\u7AEF\u652F\u6301\u9632\u5FA1 XSRF</li></ul><p>\u6211\u89C9\u5F97\u5728\u81EA\u52A8\u8F6C\u6362 json \u6570\u636E\u8FD9\u4E00\u70B9\u4E0A\u6DF1\u5F97\u6211\u5FC3.haha \u5728 vue.js \u4E2D\u4F7F\u7528\u5B83\u4E4B\u524D\u987B\u5B89\u88C5(\u8FD9\u91CC\u53EA\u4ECB\u7ECD npm \u5B89\u88C5):</p><div class="language-"><pre><code>$ npm install axios
</code></pre></div><h3 id="\u5728-vue-\u9879\u76EE\u4E2D\u5F15\u5165" tabindex="-1">\u5728 vue \u9879\u76EE\u4E2D\u5F15\u5165 <a class="header-anchor" href="#\u5728-vue-\u9879\u76EE\u4E2D\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u5728 vue \u9879\u76EE\u4E2D\u627E\u5230 main.js,\u5148\u5F15\u5165:</p><div class="language-"><pre><code>import axios from &#39;axios&#39;
</code></pre></div><p>\u518D\u5C06\u5176\u7ED1\u5B9A\u5230 vue \u5B9E\u4F8B\u7684\u539F\u578B\u5BF9\u8C61\u4E0A:</p><div class="language-"><pre><code>Vue.prototype.$http = axios
</code></pre></div><h3 id="\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C-get-\u8BF7\u6C42" tabindex="-1">\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C get \u8BF7\u6C42 <a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C-get-\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="language-"><pre><code>created(){
  this.$http.get(&quot;https://zhihu-daily.leanapp.cn/api/v1/last-stories&quot;)
  .then(res =&gt; {
    this.newsData = res.data.STORIES.stories;
    // console.log(res.data.STORIES.stories);
    console.log(this.newsData);
  })
  .catch(error =&gt; {
    console.log(error);
  });
}
</code></pre></div><p>\u5728\u8FD9\u91CC\u8BF7\u6C42\u77E5\u4E4E\u65E5\u62A5\u63A5\u53E3,\u5C06\u63A5\u6536\u7684\u6570\u636E\u5B58\u653E\u5728\u540D\u4E3A newsData \u7684\u6570\u7EC4\u91CC\u9762</p><div class="language-"><pre><code>data () {
 return {
   newsData:[]
 }
},
</code></pre></div><p>\u5E94\u7528\u6570\u636E\u5C55\u793A\u5728\u524D\u7AEF\u9875\u9762</p><div class="language-HTML"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news of newsData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ news.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news.images[0]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C-post-\u8BF7\u6C42" tabindex="-1">\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C post \u8BF7\u6C42 <a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u6267\u884C-post-\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="language-"><pre><code>created(){
  this.$http.post(&quot;https://www.apiopen.top/journalismApi&quot;)
  .then(res =&gt; {
    this.news = res.data;
    console.log(this.news.data.auto);
  })
  .catch(error =&gt; {
    console.log(error);
  })
}
</code></pre></div><p>\u5728\u8FD9\u91CC\u5C06\u63A5\u6536\u7684\u6570\u636E\u8D4B\u503C\u7ED9\u540D\u4E3A news \u7684\u5BF9\u8C61</p><div class="language-"><pre><code>data(){
  return {
    news:&#39;&#39;
  }
},
</code></pre></div><p>\u5E94\u7528\u6570\u636E\u5C55\u793A\u5728\u524D\u7AEF\u9875\u9762</p><div class="language-HTML"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in news.data.auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         {{ item.title }}
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.picInfo[0].url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,22),o=[e];function l(c,u,i,k,r,g){return s(),n("div",null,o)}var v=a(p,[["render",l]]);export{h as __pageData,v as default};
