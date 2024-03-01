import{_ as n,c as s,o as a,a as e}from"./app.c6951d47.js";const g='{"title":"docker\u90E8\u7F72vue\u9759\u6001\u9879\u76EE","description":"","frontmatter":{"title":"docker\u90E8\u7F72vue\u9759\u6001\u9879\u76EE","tags":["docker"]},"headers":[{"level":2,"title":"\u8BF4\u5728\u524D\u9762","slug":"\u8BF4\u5728\u524D\u9762"},{"level":2,"title":"\u90E8\u7F72\u6B65\u9AA4","slug":"\u90E8\u7F72\u6B65\u9AA4"}],"relativePath":"article/docker\u90E8\u7F72vue\u9759\u6001\u9879\u76EE.md"}',p={},o=e(`<h2 id="\u8BF4\u5728\u524D\u9762" tabindex="-1">\u8BF4\u5728\u524D\u9762 <a class="header-anchor" href="#\u8BF4\u5728\u524D\u9762" aria-hidden="true">#</a></h2><p>\u6211\u5728\u7F51\u4E0A\u641C\u7D22\u4E86\u5F88\u591A docker \u90E8\u7F72 vue \u9879\u76EE\u7684\u6559\u7A0B\uFF0C\u5176\u4E2D\u5F88\u591A\u7684\u6587\u7AE0\u4E0D\u4E4F\u90FD\u662F\u5148\u5C06 vue \u9879\u76EE\u6267\u884C<code>npm run build</code> \u5728\u672C\u5730\u8FDB\u884C\u6253\u5305\uFF0C\u4F20\u5230\u81EA\u5DF1\u7684\u4ED3\u5E93\u53BB\uFF0C\u7136\u540E\u5230\u670D\u52A1\u5668\u53BB\u62C9\u53D6\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u83B7\u53D6<code>dist</code>\u6587\u4EF6\uFF0C\u518D\u5C06\u8BE5\u6587\u4EF6\u6302\u8F7D\u5230 dockr \u5BB9\u5668\u5185\u3002\u5176\u5B9E\u8FD9\u79CD\u64CD\u4F5C\u5E94\u5F53\u662F\u6709\u7F3A\u9677\u7684\uFF0C\u6211\u4EEC\u5E94\u5F53\u628A\u6253\u5305\u7684\u64CD\u4F5C\u4E5F\u653E\u5230 docker \u7684\u955C\u50CF\u91CC\u9762\u53BB\u64CD\u4F5C\u3002</p><h2 id="\u90E8\u7F72\u6B65\u9AA4" tabindex="-1">\u90E8\u7F72\u6B65\u9AA4 <a class="header-anchor" href="#\u90E8\u7F72\u6B65\u9AA4" aria-hidden="true">#</a></h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u9762\u65B0\u5EFA<code>Dockerfile</code>\u6587\u4EF6:</p><div class="language-docker"><pre><code>  <span class="token comment"># resum Dockerfile</span>

  <span class="token comment">#\u6307\u5B9Anode\u955C\u50CF\u5BF9\u9879\u76EE\u8FDB\u884C\u4F9D\u8D56\u5B89\u88C5\u548C\u6253\u5305</span>
  <span class="token instruction"><span class="token keyword">FROM</span> node:10.16.0 <span class="token keyword">AS</span> builder</span>
  <span class="token comment"># \u5C06\u5BB9\u5668\u7684\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u7F6E\u4E3A/app(\u5F53\u524D\u76EE\u5F55\uFF0C\u5982\u679C/app\u4E0D\u5B58\u5728\uFF0CWORKDIR\u4F1A\u521B\u5EFA/app\u6587\u4EF6\u5939)</span>
  <span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
  <span class="token instruction"><span class="token keyword">COPY</span> package.json /app/</span>
  <span class="token instruction"><span class="token keyword">RUN</span> npm config set registry <span class="token string">&quot;https://registry.npm.taobao.org/&quot;</span> <span class="token operator">\\</span>
      &amp;&amp; npm install</span>

  <span class="token instruction"><span class="token keyword">COPY</span> . /app</span>
  <span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>

  <span class="token comment">#\u6307\u5B9Anginx\u914D\u7F6E\u9879\u76EE\uFF0C--from=builder \u6307\u7684\u662F\u4ECE\u4E0A\u4E00\u6B21 build \u7684\u7ED3\u679C\u4E2D\u63D0\u53D6\u4E86\u7F16\u8BD1\u7ED3\u679C(FROM node:alpine as builder)\uFF0C\u5373\u662F\u628A\u521A\u521A\u6253\u5305\u751F\u6210\u7684dist\u653E\u8FDBnginx\u4E2D</span>
  <span class="token instruction"><span class="token keyword">FROM</span> nginx</span>
  <span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> app/dist /usr/share/nginx/html/</span>
  <span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> app/nginx.conf /etc/nginx/nginx.conf</span>

  <span class="token comment">#\u66B4\u9732\u5BB9\u566880\u7AEF\u53E3</span>
  <span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u8FD9\u91CC\u6211\u5C06\u6253\u5305\u64CD\u4F5C\u4E5F\u653E\u5230<code>Dokcerfile</code>\u91CC\u9762\u8FDB\u884C\u64CD\u4F5C\u4E86\u3002</p><div class="language-"><pre><code>COPY --from=builder app/dist /usr/share/nginx/html/
</code></pre></div><p>\u8BE5\u6761\u547D\u4EE4\u662F\u5C06\u6211\u4EEC\u5728\u955C\u50CF\u91CC\u9762\u6253\u5305\u751F\u6210\u7684<code>dist</code>\u6587\u4EF6\u653E\u8FDB\u5BB9\u5668\u5185<code>nginx</code>\u7684 web \u76EE\u5F55\u4E0B\u9762\u3002</p><div class="language-"><pre><code>COPY --from=builder app/nginx.conf /etc/nginx/
</code></pre></div><p>\u8BE5\u6761\u547D\u4EE4\u662F\u5C06\u6211\u4EEC\u9879\u76EE\u76EE\u5F55\u4E0B\u9762\u7684<code>nginx.conf</code>\u6587\u4EF6\u590D\u5236\u5230\u5BB9\u5668\u5185<code>nginx</code>\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u4E0B\u9762\uFF0C\u4ECE\u800C\u8986\u76D6\u539F\u6709\u7684\u914D\u7F6E\u6587\u4EF6\u3002<br><code>nginx.conf</code>:</p><div class="language-nginx"><pre><code> <span class="token comment">#user  nobody;</span>
 <span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
 <span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
     <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
     <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

     <span class="token comment">#gzip  on;</span>
     <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">gzip_min_length</span>  <span class="token number">5k</span></span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">gzip_buffers</span>     <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>
     <span class="token comment">#gzip_http_version 1.0;</span>
     <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">3</span></span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png</span><span class="token punctuation">;</span>
     <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

     <span class="token comment"># \u8BBE\u7F6E\u7B80\u5386\u9879\u76EE</span>
     <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
         <span class="token directive"><span class="token keyword">listen</span>  <span class="token number">80</span></span><span class="token punctuation">;</span>
         <span class="token directive"><span class="token keyword">server_name</span> www.xieyezi.com</span><span class="token punctuation">;</span>
         <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
             <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>   <span class="token comment">#\u7AD9\u70B9\u76EE\u5F55</span>
             <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>   <span class="token comment">#\u6DFB\u52A0\u5C5E\u6027\u3002</span>
         <span class="token punctuation">}</span>

         <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
             <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre></div><p>\u8FDB\u5165\u81EA\u5DF1\u7684\u670D\u52A1\u5668(\u6211\u7684\u670D\u52A1\u5668\u4E3A ubuntu 18.04)\uFF0C\u5728\u6839\u76EE\u5F55\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A<code>web</code>\u76EE\u5F55\u3002\u63A5\u7740\u8FDB\u5165\u8BE5\u76EE\u5F55\uFF0C\u5229\u7528 git \u62C9\u53D6\u6211\u4EEC\u7684\u9879\u76EE\u4EE3\u7801\u5230\u8BE5\u76EE\u5F55\u3002</p><ol><li>clone \u81EA\u5DF1\u7684\u9879\u76EE: <code>git clone xxxx</code>;</li><li>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u6587\u672C\u6587\u4EF6:<code>.dockerignore</code>:</li></ol><div class="language-"><pre><code> .git
 node_modules
 npm-debug.log
</code></pre></div><p>\u8BE5\u6587\u4EF6\u4F1A\u6392\u9664\u4EE5\u4E0A\u7684\u4E09\u4E2A\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6\uFF0C\u544A\u8BC9 docker \u4E0D\u8981\u5C06\u8FD9\u4E09\u4E2A\u6253\u5305\u5230 image \u6587\u4EF6\u3002<br> 3. \u5236\u4F5C\u955C\u50CF</p><div class="language-"><pre><code>docker image build -t [imageName]:1.0 .
</code></pre></div><p>\u5236\u4F5C\u955C\u50CF\u4E4B\u540E,\u6211\u4EEC\u5373\u53EF\u6839\u636E\u5BB9\u5668\u8FD0\u884C\u6211\u4EEC\u7684\u955C\u50CF:</p><div class="language-"><pre><code>docker run -p 8080:80 -d --name [containerName] [iamgeName]
</code></pre></div><p>\u63A5\u7740\u5728\u63A7\u5236\u53F0\u8F93\u5165<code>docker ps</code>\u547D\u4EE4\u5373\u53EF\u770B\u89C1\u6211\u4EEC\u521A\u521A\u542F\u52A8\u7684\u5BB9\u5668\u4FE1\u606F\u3002 \u63A5\u7740\u8F93\u5165\u57DF\u540D\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u6B63\u5E38\u8FD0\u884C\u3002</p>`,19),t=[o];function c(i,l,r,k,d,u){return a(),s("div",null,t)}var v=n(p,[["render",c]]);export{g as __pageData,v as default};
