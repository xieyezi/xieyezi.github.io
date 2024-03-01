import{_ as n,c as s,o as a,a as e}from"./app.c6951d47.js";const v='{"title":"docker-compose \u90E8\u7F72\u9879\u76EE","description":"","frontmatter":{"title":"docker-compose \u90E8\u7F72\u9879\u76EE","tags":["docker"]},"headers":[{"level":2,"title":"\u8BF4\u5728\u524D\u9762","slug":"\u8BF4\u5728\u524D\u9762"},{"level":2,"title":"\u5F00\u59CB\u52A8\u624B","slug":"\u5F00\u59CB\u52A8\u624B"},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72"},{"level":2,"title":"\u90E8\u7F72\u7684\u67B6\u6784\u56FE","slug":"\u90E8\u7F72\u7684\u67B6\u6784\u56FE"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"article/docker-compose\u90E8\u7F72\u9879\u76EE.md"}',o={},p=e(`<h1 id="docker-compose-\u90E8\u7F72\u9879\u76EE" tabindex="-1">docker-compose \u90E8\u7F72\u9879\u76EE <a class="header-anchor" href="#docker-compose-\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a></h1><h2 id="\u8BF4\u5728\u524D\u9762" tabindex="-1">\u8BF4\u5728\u524D\u9762 <a class="header-anchor" href="#\u8BF4\u5728\u524D\u9762" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u90FD\u77E5\u9053\uFF0Cdocker \u53EF\u4EE5\u5B9E\u73B0\u5F88\u7B80\u4FBF\u7684\u90E8\u7F72\u73AF\u5883\u3002\u73B0\u5728\u6211\u4EEC\u6709\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684\u9879\u76EE\uFF0C\u524D\u7AEF\u57FA\u4E8E Vue \u5F00\u53D1\u3001\u5229\u7528 Webpakc \u6253\u5305\u4E3A dist \u6587\u4EF6\u5939\u3002\u540E\u7AEF\u5219\u662F\u4E00\u4E2A Node.js \u670D\u52A1\uFF0C\u63D0\u4F9B API \u63A5\u53E3\uFF0C\u524D\u7AEF\u548C\u540E\u7AEF\u662F\u5206\u79BB\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u80AF\u5B9A\u662F\u524D\u7AEF\u9879\u76EE\u4E00\u4E2A container,\u540E\u53F0\u9879\u76EE\u4E5F\u662F\u4E00\u4E2A container\u3002\u90A3\u4E48\u5982\u679C\u662F\u5728\u751F\u4EA7\u73AF\u5883\uFF0C\u5C31\u4F1A\u4EA7\u751F\u8DE8\u57DF\u95EE\u9898\u3002\u524D\u7AEF\u7684\u8BF7\u6C42\u8981\u53CD\u5411\u4EE3\u7406\u5230\u540E\u53F0\u3002\u5927\u5BB6\u80AF\u5B9A\u9996\u5148\u60F3\u5230\u7684\u5C31\u662F\u4F7F\u7528<code>Nginx</code>\u8BBE\u7F6E<code>proxy_pass</code>\u3002\u662F\u7684\u6CA1\u6709\u9519\u3002\u90A3\u4E48\u6211\u4EEC\u6709\u4E86\u8FD9\u4E9B\u60F3\u6CD5\u3002\u6211\u4EEC\u5982\u4F55\u901A\u8FC7<code>docker-compose</code>\u6765\u5B9E\u73B0\u5462\uFF1F</p><h2 id="\u5F00\u59CB\u52A8\u624B" tabindex="-1">\u5F00\u59CB\u52A8\u624B <a class="header-anchor" href="#\u5F00\u59CB\u52A8\u624B" aria-hidden="true">#</a></h2><p>\u5176\u5B9E\u6211\u4E5F\u662F\u624D\u5F00\u59CB\u4E86\u89E3 docker \u7684\u3002\u6240\u4EE5\u6709\u5F88\u591A\u4E0D\u660E\u767D\u7684\u5730\u65B9\uFF0C\u4F8B\u5982\u5728 docker \u91CC\u9762\uFF0C\u662F\u901A\u8FC7 image \u751F\u6210\u4E00\u4E2A container,\u90A3\u4E48\u8FD9\u4E2A container\uFF0C\u5C31\u53EF\u4EE5\u5F53\u4F5C\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u7CFB\u7EDF\uFF0C\u8FD9\u4E2A\u7CFB\u7EDF\u4E5F\u5C31\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u7AEF\u53E3\u3002\u90A3\u4E48\u5C31\u50CF\u6211\u4EEC\u521A\u521A\u90A3\u6837\u7684\u9700\u6C42\uFF0C\u5047\u8BBE\u6211\u4EEC\u7684\u524D\u7AEF\u5728<code>container1</code>\u91CC\u9762\u66B4\u9732 80 \u7AEF\u53E3\uFF0C\u540C\u65F6\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684 80 \u7AEF\u53E3\uFF0C\u540E\u7AEF\u5728<code>container2</code>\u91CC\u9762\u66B4\u9732 3000 \u7AEF\u53E3\uFF0C\u540C\u65F6\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684 3000 \u7AEF\u53E3\u3002\u90A3\u6211\u4EEC\u53CD\u5411\u4EE3\u7406\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u662F\u901A\u8FC7\u5BBF\u4E3B\u673A\u6765\u53CD\u5411\u4EE3\u7406\u5462\uFF0C\u8FD8\u662F\u901A\u8FC7 container \u6765\u5B9E\u73B0\u5462\uFF1F\u6211\u5728\u7F51\u4E0A\u67E5\u9605\u5E76\u5B66\u4E60\u4E86\u5F88\u591A\u5176\u4ED6\u5927\u4F6C\u7684\u6587\u7AE0\uFF0C\u8FD8\u6709\u5B98\u7F51\u7684\u6587\u6863\u3002\u53D1\u73B0\u76F4\u63A5\u901A\u8FC7 container \u5C31\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u79CD\u9700\u6C42\u3002\u4E3A\u4EC0\u4E48\u5462\uFF1F\u56E0\u4E3A docker-compose\uFF0C\u4F1A\u5C06\u6240\u6709\u7684 container \u6784\u5EFA\u5728\u540C\u4E00\u7F51\u7EDC\u4E0B\uFF0C\u6211\u4EEC\u8981\u627E\u5176\u4ED6 container\uFF0C\u6211\u4EEC\u53EA\u9700\u901A\u8FC7 docker-compose \u91CC\u9762\u7684<code>service name</code> \u5373\u53EF\u627E\u5230\u3002 \u4E0B\u9762\u5148\u6765\u770B\u770B\u6211\u4EEC\u7684\u76EE\u5F55:</p><div class="language-js"><pre><code>  vueMusic
  \u251C\u2500 <span class="token punctuation">.</span>git
  \u251C\u2500 <span class="token punctuation">.</span>gitignore
  \u251C\u2500 <span class="token constant">LICENSE</span>
  \u251C\u2500 <span class="token constant">README</span><span class="token punctuation">.</span>md
  \u251C\u2500 babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
  \u251C\u2500 dist
  \u251C\u2500 docker<span class="token operator">-</span>compose<span class="token punctuation">.</span>yml
  \u251C\u2500 docs
  \u251C\u2500 nginx<span class="token punctuation">.</span>conf
  \u251C\u2500 <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
  \u251C\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json
  \u251C\u2500 <span class="token keyword">public</span>
  \u251C\u2500 server
  \u251C\u2500 src
  \u2514\u2500 vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
</code></pre></div><p>dist \u662F\u6211\u4EEC\u7684\u524D\u7AEF\u9879\u76EE\u3002server \u662F\u6211\u4EEC\u7684\u540E\u7AEF\u9879\u76EE\u3002 \u4E0B\u9762\u518D\u6765\u770B\u770B\u6211\u4EEC\u7684<code>docker-compose.yml</code>:</p><div class="language-docker"><pre><code>  version: &#39;3&#39;
  services:
  music-web:  #\u524D\u7AEF\u9879\u76EE\u7684service name
      container_name: &#39;music-web-container&#39;  #\u5BB9\u5668\u540D\u79F0
      image: nginx  #\u6307\u5B9A\u955C\u50CF
      restart: always
      ports:
      - 80:80
      volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf  #\u6302\u8F7Dnginx\u914D\u7F6E
      - ./dist:/usr/share/nginx/html/    #\u6302\u8F7D\u9879\u76EE
      depends_on:
      - music-server
  music-server:    #\u540E\u7AEF\u9879\u76EE\u7684service name
      container_name: &#39;music-server-container&#39;
      build: ./server  #\u6839\u636Eserver\u76EE\u5F55\u4E0B\u9762\u7684Dockerfile\u6784\u5EFA\u955C\u50CF
      restart: always
      expose:
      - 3000
</code></pre></div><p>\u53EF\u4EE5\u770B\u89C1\uFF0C\u6211\u4EEC\u901A\u8FC7<code>volumes</code>\u5C5E\u6027\u5C06\u5BBF\u4E3B\u673A\u7684<code>nginx.conf</code>\u6302\u8F7D\u5230\u5BB9\u5668\u5185\u7684 nginx \u914D\u7F6E\u6587\u4EF6\uFF0C\u7528\u6765\u8986\u76D6\u539F\u6709\u7684\u914D\u7F6E\u6587\u4EF6,\u540C\u65F6\u4E5F\u5C06<code>dist</code>\u6302\u8F7D\u5230\u5BB9\u5668\u5185\u3002\u6211\u4EEC\u5C06\u524D\u7AEF\u9879\u76EE\u7684\u5BB9\u5668\u66B4\u9732\u5E76\u6620\u5C04\u7ED9\u5BBF\u4E3B\u673A\u7684 80 \u7AEF\u53E3\uFF0C\u6211\u4EEC\u5C06\u540E\u7AEF\u9879\u76EE\u7684\u5BB9\u5668\u66B4\u9732 3000 \u7AEF\u53E3\u3002\u90A3\u4E48\u6211\u4EEC\u5728\u54EA\u91CC\u5B9E\u73B0\u53CD\u5411\u4EE3\u7406\u8BF7\u6C42\u5462\uFF1F\u8BF7\u770B<code>nginx.conf</code>:</p><div class="language-nginx"><pre><code>  <span class="token comment">#user  nobody;</span>
  <span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
      <span class="token comment">#tcp_nopush     on;</span>
      <span class="token comment">#keepalive_timeout  0;</span>
      <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
      <span class="token comment">#gzip  on;</span>
      <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">gzip_min_length</span>  <span class="token number">5k</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">gzip_buffers</span>     <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>
      <span class="token comment">#gzip_http_version 1.0;</span>
      <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">3</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">listen</span>  <span class="token number">80</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">server_name</span>  www.xieyezi.com</span><span class="token punctuation">;</span>
          <span class="token comment">#\u97F3\u4E50app\u9879\u76EE</span>
          <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>   <span class="token comment">#\u6DFB\u52A0\u5C5E\u6027\u3002</span>
          <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>   <span class="token comment">#\u7AD9\u70B9\u76EE\u5F55</span>
          <span class="token punctuation">}</span>
          <span class="token comment">#\u97F3\u4E50app\u9879\u76EE\u8BBE\u7F6E\u4EE3\u7406\u8F6C\u53D1</span>
          <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">proxy_pass</span>  http://music-server:3000/</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
              <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u4E0A\u9762\u7684<code>proxy_pass http://music-server:3000/;</code>\u3002\u5176\u4E2D<code>music-server</code>\u662F\u6211\u4EEC\u540E\u7AEF\u9879\u76EE\u7684\u670D\u52A1\u540D\uFF0C\u6211\u4EEC\u901A\u8FC7\u670D\u52A1\u540D\u6765\u627E\u5230\u8FD9\u4E2A\u5BB9\u5668\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u53CD\u5411\u4EE3\u7406\u3002</p><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><ol><li>\u5230\u6211\u4EEC\u7684\u670D\u52A1\u5668\uFF0C\u6307\u5B9A\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5229\u7528 git \u62C9\u53D6\u6211\u4EEC\u7684\u9879\u76EE\u3002</li><li>\u8FDB\u5165\u9879\u76EE\u7684\u6839\u76EE\u5F55\uFF0C\u6267\u884C<code>docker-compose up -d</code> \u8FD0\u884C\u670D\u52A1\u3002</li><li>\u6267\u884C<code>docker ps</code>\u5373\u53EF\u770B\u89C1\u6211\u4EEC\u521A\u521A\u542F\u52A8\u7684\u5BB9\u5668\u3002</li></ol><h2 id="\u90E8\u7F72\u7684\u67B6\u6784\u56FE" tabindex="-1">\u90E8\u7F72\u7684\u67B6\u6784\u56FE <a class="header-anchor" href="#\u90E8\u7F72\u7684\u67B6\u6784\u56FE" aria-hidden="true">#</a></h2><blockquote><p>\u8FD9\u91CC\u8FD8\u6709\u6211\u53E6\u5916\u4E00\u4E2A\u9879\u76EE\uFF1Aresume</p></blockquote><p><img src="https://i.loli.net/2019/08/28/O1X4pLvfng9578y.png" alt=""></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5E94\u5F53\u4FDD\u6301\u4E00\u4E2A\u8654\u8BDA\u8C26\u865A\u7684\u6001\u5EA6\u53BB\u5B66\u4E60\u3002\u4E5F\u8BB8\u4F60\u5DF2\u7ECF\u719F\u77E5\u67D0\u4E00\u9886\u57DF\uFF0C\u522B\u4EBA\u5411\u4F60\u8BF7\u6559\u7684\u65F6\u5019\uFF0C\u8BF7\u4E0D\u8981\u9AD8\u9AD8\u5728\u4E0A\u3001\u76EE\u4E2D\u65E0\u4EBA\u3002\u6BCF\u4E2A\u5389\u5BB3\u7684\u5927\u725B\uFF0C\u90FD\u662F\u5C0F\u4EBA\u7269\u6210\u957F\u8D77\u6765\u7684\uFF0C\u8C01\u90FD\u6709\u8FD9\u6837\u4E00\u4E2A\u8FC7\u7A0B\u3002\u6240\u4EE5\uFF0C\u4EBA\u751F\u82E6\u77ED\uFF0C\u8BF7\u4E0E\u4EBA\u4E3A\u5584\u3002</p>`,18),t=[p];function c(i,r,l,k,d,u){return a(),s("div",null,t)}var h=n(o,[["render",c]]);export{v as __pageData,h as default};
