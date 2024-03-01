import{_ as t,c as e,o,a}from"./app.c6951d47.js";const m='{"title":"Tomcat\u914D\u7F6E\u57DF\u540D\u8BBF\u95EE","description":"","frontmatter":{"title":"Tomcat\u914D\u7F6E\u57DF\u540D\u8BBF\u95EE","tags":["Tomcat"]},"headers":[{"level":3,"title":"Tomcat \u57FA\u672C\u914D\u7F6E","slug":"tomcat-\u57FA\u672C\u914D\u7F6E"}],"relativePath":"article/Tomcat\u7684\u914D\u7F6E\u57DF\u540D\u8BBF\u95EE.md"}',n={},l=a(`<h3 id="tomcat-\u57FA\u672C\u914D\u7F6E" tabindex="-1">Tomcat \u57FA\u672C\u914D\u7F6E <a class="header-anchor" href="#tomcat-\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5728\u6784\u5EFA\u4E00\u4E2A\u7F51\u7AD9\u7684\u65F6\u5019,\u5E38\u5E38\u9009\u62E9 Tomcat \u4F5C\u4E3A\u670D\u52A1\u5668\u7684\u5DE5\u7A0B\u9879\u76EE\u5BB9\u5668.\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5C06\u57DF\u540D\u914D\u7F6E\u5230 Tomcat \u4E0A,\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u57DF\u540D\u76F4\u63A5\u8BBF\u95EE\u6211\u4EEC\u7684\u7F51\u7AD9.</p><p>\u5148\u5C06\u4F60\u7684\u9879\u76EE\u6253\u5305\u4E0A\u4F20\u81F3\u670D\u52A1\u5668.\u7136\u540E\u653E\u7F6E\u5230 Tomcat \u76EE\u5F55\u4E0B\u7684 webapps \u4E0B. <img src="http://wx1.sinaimg.cn/mw690/89296167gy1fvvasnv5rwj211w0hwn05.jpg" alt=""></p><p>\u7136\u540E\u8FDB\u5165 conf \u76EE\u5F55\u4E0B,\u6253\u5F00 server.xml \u8FDB\u884C\u7F16\u8F91. \u914D\u7F6E\u57DF\u540D\u80FD\u76F4\u63A5\u8BBF\u95EE\u9879\u76EE,\u9700\u8981\u5728 server.xml \u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-"><pre><code>&lt;Host name=&quot;www.xieyezi.com&quot;  appBase=&quot;webapps&quot;
    unpackWARs=&quot;true&quot; autoDeploy=&quot;true&quot;&gt;
    &lt;Context docBase=&quot;C:\\Program Files\\apache-tomcat-9.0.7-windows-x64\\apache-tomcat-9.0.7\\webapps\\Xydesign&quot; path=&quot;&quot; reloadable=&quot;true&quot;/&gt;
&lt;!-- SingleSignOn valve, share authentication between web applications
     Documentation at: /docs/config/valve.html --&gt;
&lt;!--
&lt;Valve className=&quot;org.apache.catalina.authenticator.SingleSignOn&quot; /&gt;
--&gt;

&lt;!-- Access log processes all example.
     Documentation at: /docs/config/valve.html
     Note: The pattern used is equivalent to using pattern=&quot;common&quot; --&gt;
&lt;Valve className=&quot;org.apache.catalina.valves.AccessLogValve&quot; directory=&quot;logs&quot;
       prefix=&quot;localhost_access_log&quot; suffix=&quot;.txt&quot;
       pattern=&quot;%h %l %u %t &amp;quot;%r&amp;quot; %s %b&quot; /&gt;

&lt;/Host&gt;
</code></pre></div><ol><li>\u914D\u7F6E\u9879\u76EE\u901A\u8FC7\u57DF\u540D\u8BBF\u95EE</li></ol><div class="language-"><pre><code>&lt;Host name=&quot;www.xieyezi.com&quot;  appBase=&quot;hcode&quot;
          unpackWARs=&quot;true&quot; autoDeploy=&quot;true&quot;&gt;
</code></pre></div><p>\u5C06 Host \u6807\u7B7E\u7684 name \u8BBE\u7F6E\u4E3A\u4F60\u7684\u57DF\u540D,appBase \u8BBE\u7F6E\u4E3A\u4F60\u7684\u9879\u76EE\u7684\u8DEF\u5F84(\u53EF\u4EE5\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u548C\u76F8\u5BF9\u8DEF\u5F84,\u4F60\u53EF\u4EE5\u770B\u89C1\u6211\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u76F8\u5BF9\u8DEF\u5F84). \u914D\u7F6E\u5B8C\u6210\u5373\u53EF\u4FDD\u5B58,\u7136\u540E\u901A\u8FC7 <a href="http://www.xieyezi.com/Xydesign" target="_blank" rel="noopener noreferrer">http://www.xieyezi.com/Xydesign</a> \u8BBF\u95EE.</p><ol start="2"><li>\u914D\u7F6E\u9879\u76EE\u540D\u7F3A\u7701\u8FDB\u884C\u8BBF\u95EE</li></ol><p>\u4E00\u822C\u7684,\u6211\u4EEC\u4E00\u822C\u662F\u76F4\u63A5\u8BBF\u95EE\u57DF\u540D\u5C31\u8FDB\u884C\u8BBF\u95EE.\u800C\u4E0D\u662F\u901A\u8FC7\u5728\u57DF\u540D\u672B\u5C3E\u6DFB\u52A0\u9879\u76EE\u540D\u8FDB\u884C\u8BBF\u95EE.</p><div class="language-"><pre><code>&lt;Context docBase=&quot;hcode&quot; path=&quot;&quot; /&gt;
</code></pre></div><p>\u5176\u4E2D,docBase \u5373\u4E3A\u9879\u76EE\u7684\u7EDD\u5BF9\u8DEF\u5F84,\u6B64\u65F6\u901A\u8FC7 <a href="http://www.xieyezi.com" target="_blank" rel="noopener noreferrer">http://www.xieyezi.com</a> \u5373\u53EF\u8FDB\u884C\u9879\u76EE\u540D\u7F3A\u7701\u7684\u8BBF\u95EE.</p><ol start="3"><li>\u90E8\u7F72\u591A\u4E2A\u9879\u76EE\u5230 Tomcat</li></ol><p>\u5C06\u4F60\u7684\u9879\u76EE\u6253\u5305\u653E\u7F6E\u5230 webapps \u8DEF\u5F84\u4E0B,\u7136\u540E\u5728 server.xml \u7684 Host \u4E0B\u9762\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801:</p><div class="language-"><pre><code>&lt;Context path=&quot;&quot; docBase=&quot;&quot; debug=&quot;0&quot; reloadable=&quot;false&quot;/&gt;
</code></pre></div><p>\u5C06 path \u6807\u7B7E\u8BBE\u7F6E\u4E3A<code>/\u4F60\u7684\u9879\u76EE\u540D</code>,docBase \u8BBE\u7F6E\u4E3A<code>\u4F60\u7684\u9879\u76EE\u6839\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</code>. \u914D\u7F6E\u5B8C\u6210\u5373\u53EF\u4FDD\u5B58,\u7136\u540E\u901A\u8FC7 <a href="http://www.xieyezi.com/%E9%A1%B9%E7%9B%AE%E5%90%8D" target="_blank" rel="noopener noreferrer">http://www.xieyezi.com/\u9879\u76EE\u540D</a> \u8BBF\u95EE.</p><ol start="4"><li>https \u8BBF\u95EE\u914D\u7F6E</li></ol><p>\u5728 server.xml \u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801:</p><div class="language-"><pre><code>&lt;Connector port=&quot;443&quot; protocol=&quot;org.apache.coyote.http11.Http11Protocol&quot;
             maxThreads=&quot;150&quot; SSLEnabled=&quot;true&quot; scheme=&quot;https&quot; secure=&quot;true&quot;
             clientAuth=&quot;false&quot;
              sslProtocol=&quot;TLS&quot;
              keystoreFile=&quot;/home/doc/keys/213972284410468.pfx&quot;
              keystoreType=&quot;PKCS12&quot;
              keystorePass=&quot;213972284410468&quot;         /&gt;
</code></pre></div><p>\u6DFB\u52A0 keystoreFile,keystoreType,keystorePass \u5373\u53EF\u8FDB\u884C https \u8BBF\u95EE.</p><ol start="5"><li>\u81EA\u52A8\u8DF3\u8F6C\u5230 https \u8FDE\u63A5</li></ol><p>\u5982\u679C\u5E0C\u671B\u8F93\u5165 http \u94FE\u63A5\u65F6\u81EA\u52A8\u8DF3\u8F6C\u5230 https,\u9700\u8981\u5728 web.xml \u4E2D\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9:</p><div class="language-"><pre><code>&lt;login-config&gt;
              &lt;!-- Authorization setting for SSL --&gt;
              &lt;auth-method&gt;CLIENT-CERT&lt;/auth-method&gt;
                      &lt;realm-name&gt;Client Cert Users-only Area&lt;/realm-name&gt;
      &lt;/login-config&gt;
      &lt;security-constraint&gt;
              &lt;!-- Authorization setting for SSL --&gt;
              &lt;web-resource-collection &gt;
                      &lt;web-resource-name &gt;SSL&lt;/web-resource-name&gt;
                      &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
              &lt;/web-resource-collection&gt;
              &lt;user-data-constraint&gt;
                      &lt;transport-guarantee&gt;CONFIDENTIAL&lt;/transport-guarantee&gt;
              &lt;/user-data-constraint&gt;
      &lt;/security-constraint&gt;
</code></pre></div><p>\u4EE5\u4E0A\u5185\u5BB9\u4F4D\u7F6E\u5728<code>&lt;/web-app&gt;</code>\u5185,\u6DFB\u52A0\u540E\u8F93\u5165 http \u8BBF\u95EE\u65F6\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230 https \u8FDE\u63A5.</p>`,24),r=[l];function s(c,u,p,i,g,q){return o(),e("div",null,r)}var h=t(n,[["render",s]]);export{m as __pageData,h as default};
