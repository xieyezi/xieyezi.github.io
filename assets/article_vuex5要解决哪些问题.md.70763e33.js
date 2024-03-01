import{_ as n,c as s,o as a,a as t}from"./app.c6951d47.js";const g='{"title":"vuex4\u90FDbeta\u4E86\uFF0Cvuex5\u8FD8\u4F1A\u8FDC\u5417\uFF1F","description":"","frontmatter":{"title":"vuex4\u90FDbeta\u4E86\uFF0Cvuex5\u8FD8\u4F1A\u8FDC\u5417\uFF1F"},"headers":[{"level":3,"title":"vuex4 + vue3 \u7684\u57FA\u672C\u4F7F\u7528","slug":"vuex4-vue3-\u7684\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"\u6DFB\u52A0 modules","slug":"\u6DFB\u52A0-modules"},{"level":3,"title":"\u7ED3\u5408 typescript","slug":"\u7ED3\u5408-typescript"},{"level":3,"title":"vuex5 \u65B0\u7279\u6027","slug":"vuex5-\u65B0\u7279\u6027"},{"level":3,"title":"\u5B9E\u73B0\u6211\u4EEC\u81EA\u5DF1\u7684\u72B6\u6001\u7BA1\u7406","slug":"\u5B9E\u73B0\u6211\u4EEC\u81EA\u5DF1\u7684\u72B6\u6001\u7BA1\u7406"},{"level":3,"title":"\u8BF4\u5230\u6700\u540E","slug":"\u8BF4\u5230\u6700\u540E"}],"relativePath":"article/vuex5\u8981\u89E3\u51B3\u54EA\u4E9B\u95EE\u9898.md"}',o={},p=t(`<h1 id="vuex4-\u90FD-beta-\u4E86\uFF0Cvuex5-\u8FD8\u4F1A\u8FDC\u5417\uFF1F" tabindex="-1">vuex4 \u90FD beta \u4E86\uFF0Cvuex5 \u8FD8\u4F1A\u8FDC\u5417\uFF1F <a class="header-anchor" href="#vuex4-\u90FD-beta-\u4E86\uFF0Cvuex5-\u8FD8\u4F1A\u8FDC\u5417\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://i.loli.net/2021/01/21/6Ifoi2GAzyqudYO.png" alt=""></p><p>\u968F\u7740<code>vue3</code>\u7684\u51FA\u73B0\uFF0C<code>vue</code>\u793E\u533A\u7684\u5176\u4ED6\u6838\u5FC3\u5305\u90FD\u8FDB\u884C\u4E86\u5BF9\u4E8E<code>vue3</code>\u7684\u5347\u7EA7\u652F\u6301\uFF0C\u4F8B\u5982<code>vue-router</code>\u3001<code>vuex</code>\u7B49\u3002\u90A3\u4E48<code>vuex</code>\u6709\u4E86\u54EA\u4E9B\u53D8\u5316\u5462\uFF1F\u4ECA\u5929\u6211\u4EEC\u4E00\u8D77\u6765\u804A\u804A<code>vuex</code>\u3002</p><p>\u6211\u4EEC\u77E5\u9053<code>vue3</code>\u6BD4\u8F83\u6838\u5FC3\u7684\u4E24\u4E2A\u5347\u7EA7\u70B9:<code>composition-api</code>\u548C \u66F4\u597D\u7684 <code>typescript</code> \u652F\u6301\u3002<code>vuex4</code>\u5462\uFF1F <code>vuex4</code> \u66F4\u65B0\u4E86\u8FD9\u4E9B\u4E1C\u897F\uFF1A</p><ul><li>\u5BF9\u4E8E<code>vue3</code> \u7684\u652F\u6301</li><li>\u65B0\u7684\u5B89\u88C5\u65B9\u5F0F</li><li>\u7A0D\u5FAE\u597D\u4E00\u70B9\u7684 <code>typescript</code> \u652F\u6301</li><li>\u76F4\u63A5\u5728<code>vuex</code>\u91CC\u9762\u96C6\u6210<code>Logger</code>\u63D2\u4EF6</li></ul><p>\u6211\u4EEC\u5148\u4E00\u8D77\u6765\u4F53\u9A8C\u4E00\u4E0B<code>vuex4</code>\u5427\u3002</p><h3 id="vuex4-vue3-\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">vuex4 + vue3 \u7684\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#vuex4-vue3-\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u8BD5\u7740\u6765\u521B\u5EFA\u4E00\u4E2A <code>vue3</code> + <code>vuex4</code> \u7684\u9879\u76EE\uFF1A</p><blockquote><p>\u8FD9\u91CC\u4F7F\u7528 <code>vite</code> \u7684\u65B9\u5F0F\u6765\u521B\u5EFA</p></blockquote><div class="language-"><pre><code>yarn create @vitejs/app
cd my-vite-app
yarn
yarn vuex@next
</code></pre></div><p>\u6211\u4EEC\u5F97\u5230\u5982\u4E0B\u76EE\u5F55:</p><div class="language-"><pre><code>\u279C
.src
\u251C\u2500\u2500 App.vue
\u251C\u2500\u2500 assets
\u2502   \u2514\u2500\u2500 logo.png
\u251C\u2500\u2500 components
\u2502   \u2514\u2500\u2500 HelloWorld.vue
\u2514\u2500\u2500 main.ts
</code></pre></div><p>\u6211\u4EEC\u6765\u4F7F\u7528\u4E00\u4E0B<code>vuex4</code>: \u5728<code>src</code>\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>store</code>\u76EE\u5F55\uFF0C\u5728<code>store</code>\u4E0B\u9762\u65B0\u5EFA <code>index.ts</code></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&quot;../config&quot;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  strict<span class="token operator">:</span> config<span class="token punctuation">.</span>isDev<span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> config<span class="token punctuation">.</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre></div><p>vuex4 \u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86 <code>createStore</code>\u65B9\u6CD5\uFF0C\u901A\u8FC7\u8BE5\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A<code>store</code>\uFF0C\u5E76\u5C06\u5176\u66B4\u9732\u51FA\u53BB\uFF0C\u5728<code>main.ts</code>\u91CC\u9762\u5F15\u7528\u5B83\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u91CC\u548C <code>vue2</code> \u53D8\u5F97\u6709\u4E9B\u4E0D\u4E00\u6837\u4E86\uFF0C<code>vue3</code>\u90FD\u662F\u901A\u8FC7<code>app.use</code>\u5C06<code>store</code>\u6CE8\u5165\u3002</p><h3 id="\u6DFB\u52A0-modules" tabindex="-1">\u6DFB\u52A0 modules <a class="header-anchor" href="#\u6DFB\u52A0-modules" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u6765\u8BF4\u6211\u4EEC\u4E0D\u7ECF\u5E38\u76F4\u63A5\u5728\u6839<code>state</code>\u521B\u5EFA\u53D8\u91CF\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019\u6211\u4EEC\u60F3\u5230\u4E86<code>module</code>\u7684\u65B9\u5F0F\uFF0C\u5728<code>store</code>\u76EE\u5F55\u4E0B\u9762\u521B\u5EFA<code>modules</code>\u76EE\u5F55,\u5728 modules \u76EE\u5F55\u4E0B\u9762\u521B\u5EFA<code>home</code> \u548C <code>about</code> \u4E24\u4E2A\u76EE\u5F55\uFF0C\u5206\u522B\u521B\u5EFA<code>state</code>\u5E76\u5BFC\u51FA:</p><div class="language-ts"><pre><code><span class="token comment">// store/modules/home.index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HomeState</span> <span class="token punctuation">{</span>
  homeInfo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> state<span class="token operator">:</span> HomeState <span class="token operator">=</span> <span class="token punctuation">{</span>
  homeInfo<span class="token operator">:</span> <span class="token string">&quot;info from home state model&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// store/modules/about.index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AboutState</span> <span class="token punctuation">{</span>
  aboutInfo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> state<span class="token operator">:</span> AboutState <span class="token operator">=</span> <span class="token punctuation">{</span>
  aboutInfo<span class="token operator">:</span> <span class="token string">&quot;info from about state model&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u5728<code>modules</code>\u76EE\u5F55\u4E0B\u9762\u518D\u521B\u5EFA\u4E00\u4E2A<code>index.ts</code>,\u5C06\u8FD9\u4E9B<code>module</code>\u4E00\u8D77\u5408\u5E76\u5BFC\u51FA:</p><div class="language-ts"><pre><code><span class="token comment">// store/modules/index.ts</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">&quot;./home&quot;</span>
<span class="token keyword">import</span> about <span class="token keyword">from</span> <span class="token string">&quot;./about&quot;</span>

<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span>
  home<span class="token punctuation">,</span>
  about
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;modules&quot;</span><span class="token punctuation">,</span> modules<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> modules
</code></pre></div><p>\u63A5\u7740<code>vuex4</code>\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86 <code>useStore</code> \u65B9\u6CD5\u6765\u83B7\u53D6<code>state</code>\u3002</p><blockquote><p>\u672C\u7BC7\u6587\u7AE0\u4E3B\u8981\u57FA\u4E8E<code>composition-api</code>\uFF0C\u6240\u4EE5\u6682\u4E0D\u4ECB\u7ECD<code>mapState</code>\u3001<code>mapGetters</code>\u3001<code>mapActions</code>\u7B49\u7684\u7528\u6CD5</p></blockquote><p>\u6211\u4EEC\u8BD5\u7740\u6765\u7528\u4E00\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">&quot;Vue logo&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;../assets/logo.png&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> homeInfo <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span>defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;../components/HelloWorld.vue&#39;</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./example.module.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> homeInfo <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>home<span class="token punctuation">.</span>homeInfo<span class="token punctuation">)</span>

		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			homeInfo
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u914D\u7F6E<code>vuex4+ vue3</code> \u7684\u57FA\u672C\u4F7F\u7528.\u5047\u8BBE\u73B0\u5728\u9700\u8981\u5728<code>home.vue</code>\u53D6\u5F88\u591A\u4E2A state \u91CC\u9762\u7684\u6570\u636E\u5462\uFF1F\u90A3\u4E48\u5C31\u4F1A\u53D8\u6210\u8FD9\u6837\u7684\uFF1A</p><div class="language-ts"><pre><code><span class="token operator">...</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> homeInfo <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>home<span class="token punctuation">.</span>homeInfo<span class="token punctuation">)</span>
<span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>home<span class="token punctuation">.</span>value1<span class="token punctuation">)</span>
<span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>home<span class="token punctuation">.</span>value2<span class="token punctuation">)</span>
<span class="token keyword">const</span> value3 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>home<span class="token punctuation">.</span>value3<span class="token punctuation">)</span>
<span class="token operator">...</span>
</code></pre></div><p>\u8C8C\u4F3C\u91CD\u590D\u4EE3\u7801\u5F88\u591A\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F\u6211\u4EEC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E2A<code>hooks</code>\u6765\u4EE3\u66FF\u8FD9\u4E9B\u91CD\u590D\u64CD\u4F5C:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useVuexValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>moduleName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> storeKeys<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> values<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> moduleNames <span class="token operator">=</span> moduleName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useCurry</span><span class="token punctuation">(</span>moduleNames<span class="token punctuation">)</span>
  storeKeys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>storeKey<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">[</span>storeKey<span class="token punctuation">]</span><span class="token punctuation">)</span>
    values<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> values
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useCurry</span> <span class="token operator">=</span> <span class="token punctuation">(</span>moduleNames<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> state <span class="token operator">=</span> store<span class="token punctuation">.</span>state
  moduleNames<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> state<span class="token punctuation">[</span>moduleName<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> state
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useVuexValue
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u53D6<code>state</code>\u53D8\u91CF\u7684\u65B9\u6CD5\u5C31\u53D8\u6210\u4E86:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useVuexValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../hooks&#39;</span>

<span class="token operator">...</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>homeInfo<span class="token punctuation">,</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useVuexValue</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;homeInfo&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        value1<span class="token punctuation">,</span>
        value2<span class="token punctuation">,</span>
        homeInfo
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre></div><p>\u5047\u5982<code>home module</code> \u4E0B\u9762\u8FD8\u6709<code>detail</code>\u3001<code>list</code> \u7B49\u7B49\u5B50<code>module</code>\uFF0C\u90A3\u6211\u4EEC\u53D6\u6570\u636E\u7684\u65B9\u5F0F\u5C31\u5E94\u8BE5\u662F:</p><div class="language-ts"><pre><code><span class="token operator">...</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useVuexValue</span><span class="token punctuation">(</span><span class="token string">&#39;home/detail&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        value1<span class="token punctuation">,</span>
        value2
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre></div><p>\u662F\u4E0D\u662F\u770B\u4E0A\u53BB\u6709\u70B9\u773C\u719F\uFF0C\u5BF9\u7684\u5C31\u662F\u7C7B\u4F3C\u4E8E<code>mapState</code>\u7684\u65B9\u5F0F\uFF0C\u4E0D\u8FC7\u662F\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u65B9\u5F0F\uFF0C\u540C\u6837\u7684\u601D\u8DEF\uFF0C\u53EF\u4EE5\u5C01\u88C5\u6211\u4EEC\u81EA\u5DF1\u7684<code>mutation</code>\u3001<code>action</code>\u7B49\u3002</p><p>\u53EF\u80FD\u4F60\u9605\u8BFB\u7684\u65F6\u5019\u6CE8\u610F\u5230\u4E86\uFF0C\u5728\u5B9A\u4E49\u6BCF\u4E2A<code>module</code>\u65F6\uFF0C\u6211\u4EEC\u90FD\u58F0\u660E\u4E86<code>interface</code>\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053\u8FD9\u662F<code>typescript</code>\u7684\u7C7B\u578B\u5B9A\u4E49\u3002\u4F46\u662F\u6211\u4EEC\u7528\u5230\u4E86\u5417\uFF1A</p><p><img src="https://i.loli.net/2021/01/20/LrfTeGqZw8AmiDV.jpg" alt=""></p><p>\u770B\u5230\u8FD9\u4E2A<code>any</code>\u5C31\u77E5\u9053\uFF0C\u54B1\u4EEC\u538B\u6839\u6CA1\u6CD5\u901A\u8FC7<code>typrscript</code> \u6765\u667A\u80FD\u5316\u63D0\u793A\u54B1\u4EEC\u7684<code>state</code>\uFF0C\u90A3\u6709\u6CA1\u6709\u65B9\u6CD5\u5462\uFF1F\u6839\u636E\u4E0A\u9762 \u{1F446} \u622A\u56FE\u53EF\u77E5 <code>(property) Store&lt;any&gt;.state: any</code>\uFF0C<code>vuex4</code>\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A<code>Store&lt;any&gt;.state.any</code>\uFF0C\u6211\u4EEC\u60F3\u529E\u6CD5\u628A\u8FD9\u4E24\u4E2A<code>any</code>\u53D8\u6210<code>typescript</code>\u7C7B\u578B\u5C31\u884C\u4E86\u3002</p><h3 id="\u7ED3\u5408-typescript" tabindex="-1">\u7ED3\u5408 typescript <a class="header-anchor" href="#\u7ED3\u5408-typescript" aria-hidden="true">#</a></h3><p>\u6309\u7167\u5B98\u65B9\u7684\u6559\u7A0B\uFF0C\u54B1\u4EEC\u53EF\u4EE5\u628A<code>typecript</code> \u548C <code>vuex4</code>\u7ED3\u5408\u8D77\u6765\uFF0C\u9996\u5148\u6765\u6539\u9020\u4E00\u4E0B<code>store/index.ts</code>:</p><div class="language-ts"><pre><code><span class="token comment">// store/index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> createLogger<span class="token punctuation">,</span> Store<span class="token punctuation">,</span> useStore <span class="token keyword">as</span> baseUseStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> modules <span class="token keyword">from</span> <span class="token string">&quot;./modules&quot;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&quot;../config&quot;</span>

<span class="token keyword">interface</span> <span class="token class-name">StateType</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>StateType<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>StateType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules<span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  strict<span class="token operator">:</span> config<span class="token punctuation">.</span>isDev<span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> config<span class="token punctuation">.</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">baseUseStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre></div><p>\u901A\u8FC7<code>export const key: InjectionKey&lt;Store&lt;StateType&gt;&gt; = Symbol()</code> \uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u54B1\u4EEC\u7684<code>stroe</code>\u6DFB\u52A0\u7C7B\u578B\u5B9A\u4E49.\u5BF9\u4E8E\u8FD9\u4E2A <code>StateType</code> \uFF0C\u54B1\u4EEC\u5F97\u60F3\u529E\u6CD5\u5C06<code>modules</code> \u4E0B\u9762\u7684<code>home</code>\u3001<code>about</code>\u7684\u7C7B\u578B\u5B9A\u4E49\u90FD\u7ED9\u56CA\u62EC\u8FDB\u6765\uFF0C\u4F46\u662F\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u7684<code>module</code> \u4E00\u822C\u6765\u8BF4\u90FD\u6BD4\u8F83\u591A\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u76F4\u63A5\u5728<code>index.ts</code>\u5B9A\u4E49<code>StateType</code>\u3002\u6211\u4EEC\u5E94\u8BE5\u628A<code>StateType</code>\u7684\u5B9A\u4E49\u62BD\u51FA\u6765\uFF0C\u4F5C\u4E3A<code>types</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728 src \u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A<code>types</code> \u76EE\u5F55\uFF0C\u7136\u540E\u65B0\u5EFA\u4E00\u4E2A<code>index.ts</code>:</p><div class="language-ts"><pre><code><span class="token comment">// types/index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HomeState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../store/modules/home&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AboutState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../store/modules/about&quot;</span>

<span class="token keyword">type</span> <span class="token class-name">VuexModuleType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span> HomeState
  about<span class="token operator">:</span> AboutState
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">StateType</span> <span class="token operator">=</span> VuexModuleType
</code></pre></div><p>\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u628A\u5404\u4E2A<code>module</code>\u7684\u7C7B\u578B\u6587\u4EF6\u90FD\u5BFC\u8FDB\u6765\u4E86\uFF0C\u7136\u540E\u4E00\u8D77\u5408\u5E76\u5BFC\u51FA\uFF0C\u5728<code>store/index.ts</code>\u4E0B\u9762\uFF0C\u6211\u4EEC\u5C31\u80FD\u53D6\u5230\u8FD9\u91CC\u7684<code>StateType</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StateType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span>
<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>StateType<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>StateType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	modules<span class="token punctuation">,</span>
	mutations<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	strict<span class="token operator">:</span> config<span class="token punctuation">.</span>isDev<span class="token punctuation">,</span>
	plugins<span class="token operator">:</span> config<span class="token punctuation">.</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">...</span><span class="token punctuation">.</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5728<code>src</code>\u4E0B\u9762\u65B0\u5EFA\u4E00\u4E2A<code>vuex.d.ts</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentCustomProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StateType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;@vue/runtime-core&quot;</span> <span class="token punctuation">{</span>
  <span class="token comment">// provide typings for \`this.$store\`</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>StateType<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\u5C31\u5269\u6700\u540E\u4E00\u6B65\u4E86\uFF0C\u6211\u4EEC\u5728<code>main.ts</code>\u91CC\u9762\u62FF\u5230<code>store</code>\u66B4\u9732\u51FA\u6765\u7684<code>key</code>:</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> store<span class="token punctuation">,</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u518D\u6765\u8BD5\u4E00\u8BD5\u5462\uFF1F</p><p><img src="https://i.loli.net/2021/01/20/9ReaYW43xIoJ6mk.png" alt=""></p><p>\u6211\u4EEC\u6210\u529F\u4E86\uFF0C\u73B0\u5728\u6211\u4EEC\u7684<code>state</code>\u90FD\u80FD\u667A\u80FD\u63D0\u793A\u4E86\u3002\u8C8C\u4F3C\u5F88\u5B8C\u7F8E\u4E86\uFF0C\u5BF9\u5417\uFF1F\u4F46\u662F\u4E8B\u5B9E\u4E0A\uFF0C\u5F53\u6211\u4EEC\u5728\u4E00\u4E2A<code>module</code>\u4E0B\u9762\u8FD8\u6709\u5B50<code>module</code>\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u5C31\u4E0D\u53EF\u884C\u4E86\uFF0C\u4F8B\u5982\u6211\u4EEC\u5728<code>modules/home</code>\u4E0B\u9762\u518D\u589E\u52A0\u4E00\u4E2A\u5B50<code>module</code>: <code>list</code></p><div class="language-ts"><pre><code><span class="token comment">// store/modules/home/list/index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HomeListState</span> <span class="token punctuation">{</span>
  homeList<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> state<span class="token operator">:</span> HomeListState <span class="token operator">=</span> <span class="token punctuation">{</span>
  homeList<span class="token operator">:</span> <span class="token string">&quot;list form home list state model&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5728<code>home/index.ts</code>\u5BFC\u5165:</p><div class="language-ts"><pre><code><span class="token comment">// moudles/home/index.ts</span>
<span class="token keyword">import</span> list <span class="token keyword">from</span> <span class="token string">&quot;./list&quot;</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  modules<span class="token operator">:</span> <span class="token punctuation">{</span>
    list
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u800C\u6211\u4EEC\u4F7F\u7528\u7684\u65F6\u5019\u5374\u51FA\u73B0\u4E86\u95EE\u9898\uFF1A</p><p><img src="https://i.loli.net/2021/01/20/93JAxs2mgDzp7Ud.png" alt=""></p><p>\u6709\u7684\u540C\u5B66\u8BF4\uFF0C\u4F60\u5F97\u628A<code>list</code>\u7684\u7C7B\u578B\u5B9A\u4E49(<code>HomeListState</code>) \u52A0\u5230<code>HomeState</code>\u91CC\u9762\u554A\uFF0C\u6211\u4EEC\u6765\u8BD5\u4E00\u8BD5\uFF1A</p><p><img src="https://i.loli.net/2021/01/20/P1rZsJubAkMN8Op.png" alt=""></p><p>\u7136\u800C\u7ED3\u679C\u5E76\u4E0D\u50CF\u60F3\u8C61\u4E4B\u4E2D\u90A3\u4E48\u597D\u3002\u751A\u81F3<code>vuex</code>\u7684\u5B98\u65B9\u4ED3\u5E93\u4E5F\u6709\u7C7B\u4F3C\u7684\u95EE\u9898\uFF1A<a href="https://github.com/vuejs/vuex/issues/1833" target="_blank" rel="noopener noreferrer">how to use modules in vuex4.0</a></p><p>\u90A3\u4E3A\u4EC0\u4E48\u4F1A\u5BFC\u81F4\u8FD9\u79CD\u7ED3\u679C\u5462\uFF1F\u662F\u56E0\u4E3A\u5BF9\u4E8E<code>\u7236module</code>\u6765\u8BF4\uFF0C<code>\u5B50module</code>\u7684\u7C7B\u578B\u662F<code>dynamic</code>\u7684\uFF0C<code>dynamic</code>\u7684\u610F\u601D\u662F\u8BF4\uFF0C\u52A8\u6001\u7684\u3001\u4E0D\u786E\u5B9A\u7684\u3002\u90A3\u6211\u4EEC\u5982\u4F55\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u76EE\u524D\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u6709\u5C06<code>\u5B50module</code>\u7EDF\u4E00\u63D0\u81F3<code>\u6839module</code>\uFF0C\u610F\u601D\u5C31\u662F\u4E0D\u8981\u5728<code>module</code>\u91CC\u9762\u5D4C\u5957<code>module</code>\u3002\u53EA\u80FD\u8BF4\uFF0C\u8FD9\u592A\u9057\u61BE\u4E86\u3002\u9664\u6B64\u4E4B\u5916\uFF0C<code>InjectionKey&lt;Store&lt;StateType&gt;&gt; = Symbol()</code>\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u7ED9\u4EBA\u7684\u7B2C\u4E00\u76F4\u89C9\uFF0C\u5C31\u662F\u6709\u4E00\u79CD\u5F3A\u884C\u9002\u914D<code>typescript</code>\u7684\u4E0D\u9002\u611F\u3002\u57FA\u4E8E\u4E0A\u9762\u8FD9\u4E9B\u539F\u56E0\uFF0C<code>vuex5</code>\u4F1A\u5B8C\u5168\u91CD\u5199\uFF0C\u4EE5\u83B7\u5F97\u5B8C\u6574\u7684<code>typescript</code>\u652F\u6301\u3002</p><h3 id="vuex5-\u65B0\u7279\u6027" tabindex="-1">vuex5 \u65B0\u7279\u6027 <a class="header-anchor" href="#vuex5-\u65B0\u7279\u6027" aria-hidden="true">#</a></h3><p>\u4ECE\u6700\u65B0\u4E00\u6B21<a href="https://www.youtube.com/watch?v=ajGglyQQD0k&amp;ab_channel=VuejsAmsterdam" target="_blank" rel="noopener noreferrer">Vue.js Global Online Conference</a> \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u867D\u7136<code>vuex4</code>\u8FD8\u5904\u4E8E<code>beta\u9636\u6BB5</code>\uFF0C\u53EF\u662F<code>vuex5</code>\u5DF2\u7ECF\u63D0\u4E0A\u4E86\u65E5\u7A0B\u3002\u6839\u636E <code>vuex</code> \u6838\u5FC3\u8D21\u732E\u8005\uFF1A<a href="https://github.com/kiaking" target="_blank" rel="noopener noreferrer">Kia King</a> \u6240\u8BF4\uFF0Cvuex5 \u5C06\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A</p><ul><li>\u540C\u65F6\u652F\u6301 <code>Option API</code> \u548C <code>Composition API</code></li><li>\u5B8C\u6574\u7684<code>TypeScript</code>\u652F\u6301</li><li>\u820D\u5F03<code>Mutations</code>\uFF0C\u53EA\u6709<code>Actions</code></li><li>\u820D\u5F03<code>nested modules</code>\uFF0C\u66FF\u6362\u6210 <code>Compose</code></li><li>\u81EA\u52A8<code>Code splitting</code></li></ul><p>\u6211\u4EEC\u6765\u770B\u770B vuex5 \u7684\u53D8\u5316\u5427\u3002</p><h4 id="option-api" tabindex="-1">Option API <a class="header-anchor" href="#option-api" aria-hidden="true">#</a></h4><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u5982\u4F55\u5B9A\u4E49\u4E00\u4E2A\u57FA\u4E8E<code>option api</code>\u7684<code>store</code></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">const</span> countStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;couter&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u9996\u5148\uFF0C\u521B\u5EFA<code>store</code>\u7684\u65B9\u5F0F\u53D8\u4E86\uFF0C\u7531<code>createStore</code>\u53D8\u6210<code>defineStore</code>\uFF0C\u5176\u4E2D\u4F1A\u5305\u62EC\u4E00\u4E2A<code>name</code> \u4F5C\u4E3A<code>identify</code>\u3002 \u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u4E00\u4E9B<code>state</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">const</span> countStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;couter&quot;</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u521B\u5EFA\u4E00\u4E2A<code>getters</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">const</span> countStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;couter&quot;</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">double</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5F53\u7136\u8FD8\u6709 actions:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">const</span> countStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;couter&quot;</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">double</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>store</code>\u521B\u5EFA\u597D\u4E86\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B\u5982\u4F55\u4F7F\u7528\u5B83\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createVuex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> countStore <span class="token keyword">from</span> <span class="token string">&quot;./countStore&quot;</span>

<span class="token keyword">const</span> vuex <span class="token operator">=</span> <span class="token function">createVuex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> Vuex<span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>countStore<span class="token punctuation">)</span>

<span class="token comment">// counter.count -&gt; 1</span>
<span class="token comment">// counter.double -&gt; 2</span>
<span class="token comment">// counter.increment() -&gt; Increment</span>
<span class="token comment">// counter.count -&gt; 2</span>
<span class="token comment">// counter.double -&gt; 4</span>
</code></pre></div><p>\u901A\u8FC7\u4EE5\u4E0A\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6240\u6709\u7684<code>state\u53D8\u91CF</code>\u90FD\u4F1A\u83B7\u5F97\u5B8C\u6574\u7684<code>typescript</code>\u7C7B\u578B\u5B9A\u4E49\uFF0C\u4F60\u4E0D\u9700\u8981\u81EA\u5DF1\u5B9A\u4E49\u7C7B\u4F3C<code>\u6CDB\u578B</code> \u548C <code>interface</code> \uFF0C\u4F60\u5C31\u80FD\u83B7\u5F97\u4ED6\u4EEC\u7684\u7C7B\u578B\u5B9A\u4E49\u3002\u521A\u521A\u6211\u4EEC\u5728<code>vuex4</code>\u91CC\u9762\u9047\u5230\u7684\u95EE\u9898\uFF0C\u5168\u90E8\u90FD\u89E3\u51B3\u4E86\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B\u600E\u4E48\u5728<code>vue</code>\u91CC\u9762\u4F7F\u7528<code>vuex5</code>,\u9996\u5148\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5728<code>main.ts</code>\u91CC\u9762\u5BFC\u5165\u5B83\uFF0C\u5E76\u5C06\u5176\u6CE8\u5165\u5230<code>app</code>\u91CC\u9762:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createVuex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./app.vue&quot;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vuex <span class="token operator">=</span> <span class="token function">createVuex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuex<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u63A5\u7740\u5728\u6211\u4EEC\u60F3\u8981\u4F7F\u7528\u7684\u5730\u65B9\uFF1A</p><div class="language-ts"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count <span class="token keyword">is</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> couter<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>double <span class="token keyword">is</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> couter<span class="token punctuation">.</span>double <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;counter.increment&quot;</span><span class="token operator">&gt;</span>
          Increment
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span>defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> counterStore <span class="token keyword">from</span> <span class="token string">&#39;./counterStore&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            counter<span class="token operator">:</span> counterStore
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p><code>vuex5</code>\u63D0\u4F9B\u4E86<code>mapStore</code>\u7684\u94A9\u5B50\u6765\u83B7\u53D6<code>state</code>\u3002\u5728\u8FD9\u91CC<code>mapStore</code>\u5176\u5B9E\u662F<code>this.$vuex.store(counterStore)</code>\u7684\u8BED\u6CD5\u7CD6\u3002</p><p>\u795E\u5947\u7684\u5730\u65B9\u6765\u4E86\uFF1A</p><p><img src="https://i.loli.net/2021/01/20/3mKoBNG1PHYCuFy.png" alt=""></p><p>\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF0C<code>store</code>\u7684\u5B9A\u4E49\u548C<code>vue</code>\u7EC4\u4EF6\u7684\u5B9A\u4E49 \u51E0\u4E4E\u957F\u5F97\u4E00\u6A21\u4E00\u6837\u3002\u8FD9\u6837\u505A\u6709\u4EC0\u4E48\u597D\u5904\u5462\uFF1F\u8FD9\u6837\u505A\uFF0C\u6211\u4EEC\u5C31\u80FD\u5F88\u65B9\u4FBF\u7684\u5C06<code>vue\u7EC4\u4EF6</code>\u7684\u903B\u8F91\u642C\u5230<code>vuex</code>\u91CC\u9762\u3002\u540C\u65F6\u4E5F\u80FD\u4FDD\u8BC1\u5F00\u53D1\u7684\u65F6\u5019\uFF0C<code>\u7EC4\u4EF6</code>\u548C<code>vuex</code>\u7684\u903B\u8F91\u4FDD\u6301\u9AD8\u5EA6\u4E00\u81F4\u6027\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B\u770B<code>composition-api</code>\u3002</p><h4 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>

<span class="token keyword">const</span> counterSore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&quot;counter&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">,</span>
    double<span class="token punctuation">,</span>
    increment
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F60\u662F\u4E0D\u662F\u53C8\u89C9\u5F97\u6709\u70B9\u773C\u719F\uFF0C\u8FD9\u73A9\u610F\u957F\u5F97\u548C\u73B0\u5728<code>vue3-composition-api</code>\u7EC4\u4EF6\u7684\u5B9A\u4E49\u65B9\u5F0F\u51E0\u4E4E\u4E00\u6A21\u4E00\u6837\u3002\u8FD9\u91CC\u4E5F\u662F\u7528\u4E86<code>defineStore</code>\u6765\u5B9A\u4E49\u4E00\u4E2A<code>Store</code>\uFF0C\u548C<code>option-api</code> \u4E0D\u4E00\u6837\u7684\u662F\uFF0C\u8FD9\u91CC\u7528\u4E86\u4E00\u4E2A<code>callback</code>\u800C\u975E\u4E00\u4E2A<code>Object</code>\u3002\u5728\u8FD9\u4E2A<code>callback Function</code> \u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5230<code>vue reactivity</code>\u6240\u5305\u542B\u7684\u6240\u6709\u7279\u6027\u3002\u540C\u65F6\u6211\u4EEC\u4E5F\u4E0D\u9700\u8981\u9884\u5148\u53BB\u5B9A\u4E49<code>state</code>\u3001<code>getters</code>\u3001<code>actions</code>\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u53EA\u662F\u5229\u7528<code>ref</code>\u521B\u5EFA\u4E86\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5229\u7528<code>computed</code>\u521B\u5EFA\u4E86\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\u7684\u53D8\u91CF\uFF0C\u540C\u65F6\u4E5F\u53EA\u662F\u5B9A\u4E49\u4E00\u4E2A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684<code>increment</code> \u51FD\u6570\u53BB\u53D8\u66F4<code>count</code>\u3002</p><p>\u57FA\u4E8E\u8FD9\u6837\u7684\u673A\u5236\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528<code>vue3</code>\u91CC\u9762\u7684\u6240\u6709\u5176\u4ED6\u7279\u6027\uFF0C\u7C7B\u4F3C<code>reactive</code>\u3001<code>watch</code>\u7B49\u7B49\u3002\u76F8\u5F53\u4E8E\u8FD9\u5B8C\u5168\u53D6\u51B3\u4E8E\u6211\u4EEC\u7684\u81EA\u7531\u7EC4\u5408\uFF0C\u5C06<code>hooks</code>\u7684\u601D\u60F3\u653E\u5927\u5230\u6700\u5927\u5316\u3002\u540C\u65F6\u8FD9\u6837\u7684\u65B9\u5F0F\uFF0C\u5BF9\u4E8E<code>typescript</code>\u6765\u8BF4\uFF0C\u6240\u6709\u7684\u4E1C\u897F\u90FD\u80FD\u83B7\u5F97\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\uFF0C\u7EC8\u4E8E\u5B8C\u6574\u5730\u652F\u6301<code>typescript</code>\u4E86\uFF01\uFF01</p><p>\u63A5\u7740\u8FD8\u662F\u6765\u770B\u770B\u5982\u4F55\u5728<code>vue\u7EC4\u4EF6</code>\u4E2D\u4F7F\u7528:</p><div class="language-ts"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count <span class="token keyword">is</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> couter<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>double <span class="token keyword">is</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> couter<span class="token punctuation">.</span>double <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;counter.increment&quot;</span><span class="token operator">&gt;</span>
          Increment
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span>defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> counterStore <span class="token keyword">from</span> <span class="token string">&#39;./counterStore&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span>counterStore<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            counter
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u4E00\u5207\u90FD\u770B\u4E0A\u53BB\u90A3\u4E48\u5B8C\u7F8E\u3002\u4F46\u662F\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C<code>vuex5</code>\u91CC\u9762\u6CA1\u6709<code>modules</code>\uFF0C\u600E\u4E48\u529E\uFF1F</p><h4 id="store-composition" tabindex="-1">Store Composition <a class="header-anchor" href="#store-composition" aria-hidden="true">#</a></h4><p>\u7531\u4E8E\u6CA1\u6709\u4E86<code>modules</code>\uFF0C<code>vuex5</code>\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86<code>Store Compostion</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">const</span> greatStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;great&quot;</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      info<span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728\u53E6\u5916\u7684<code>store</code>\u91CC\u9762\u5982\u4F55\u83B7\u53D6\u5462\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> greatStore <span class="token keyword">from</span> <span class="token string">&quot;./greatStore&quot;</span>

<span class="token keyword">const</span> counterSore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&quot;counter&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> use <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> great <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span>greatStore<span class="token punctuation">)</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> countWithGreate <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>great<span class="token punctuation">.</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">,</span>
    double<span class="token punctuation">,</span>
    increment
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>vuex5</code>\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86<code>use</code>\u51FD\u6570\u6765\u83B7\u53D6\u5176\u4ED6<code>state</code>\u3002\u53EA\u80FD\u8BF4\uFF0C\u7B80\u76F4\u592A\u5B8C\u7F8E\u4E86\uFF0C\u901A\u8FC7<code>Compose</code>\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4EFB\u4F55<code>store</code>\u91CC\u9762\u7EC4\u5408\u5176\u4ED6<code>store</code>\uFF0C\u4ECE\u800C\u8FBE\u5230\u6211\u4EEC\u81EA\u5DF1\u60F3\u8981\u7684\u6548\u679C\u3002</p><h3 id="\u5B9E\u73B0\u6211\u4EEC\u81EA\u5DF1\u7684\u72B6\u6001\u7BA1\u7406" tabindex="-1">\u5B9E\u73B0\u6211\u4EEC\u81EA\u5DF1\u7684\u72B6\u6001\u7BA1\u7406 <a class="header-anchor" href="#\u5B9E\u73B0\u6211\u4EEC\u81EA\u5DF1\u7684\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u4E0A\u8FF0<code>vuex5</code>\u7684\u65B0\u7684\u7279\u6027\uFF0C\u6211\u4EEC\u53D1\u73B0\uFF0C\u5176\u5B9E<code>vuex5</code>\u662F\u5F88\u597D\u7684\u5229\u7528\u4E86<code>composition-api</code>\u7684\u601D\u8DEF\uFF0C\u7ED3\u5408<code>vue3 reactivity</code>\u7684\u7279\u6027\uFF0C\u8FBE\u5230\u4E86\u8FD9\u6837\u7684\u6548\u679C\u3002\u57FA\u4E8E\u8FD9\u79CD\u601D\u8DEF\uFF0C\u5176\u5B9E\u6211\u4EEC\u5B8C\u5168\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u72B6\u6001\u7BA1\u7406\u8036\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F\u5C31\u50CF<code>hooks</code>\u51FA\u6765\u4E4B\u540E\uFF0C\u5F88\u591A<code>react</code> \u5F00\u53D1\u8005\uFF0C\u90FD\u653E\u5F03\u4E86<code>redux</code>\uFF0C\u76F4\u63A5\u5728\u9879\u76EE\u91CC\u9762\u7ED3\u5408<code>useReducer</code>\u5B9E\u73B0\u72B6\u6001\u7BA1\u7406\u3002\u90A3\u5728<code>vue3</code>\u91CC\u9762\uFF0C\u6211\u4EEC\u662F\u4E0D\u662F\u4E5F\u53EF\u4EE5\u5462\uFF1F\u6211\u4EEC\u4E00\u8D77\u6765\u8BD5\u4E00\u8BD5\u5427\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u6211\u4EEC\u7ED3\u5408<code>reactive</code>\u6765\u5B9A\u4E49\u6211\u4EEC\u7684<code>state</code>:</p><div class="language-ts"><pre><code><span class="token comment">// custom_store/info/state.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">infoState</span> <span class="token punctuation">{</span>
  info<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> state<span class="token operator">:</span> infoState <span class="token operator">=</span> <span class="token punctuation">{</span>
  info<span class="token operator">:</span> <span class="token string">&quot;info from info state model&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u597D\u4E86\u521B\u5EFA\u5B8C\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002\u5982\u679C\u6211\u53EA\u8BF4\u5230\u8FD9\uFF0C\u4F60\u53EF\u80FD\u4F1A\u987A\u7740\u7F51\u7EBF\u8FC7\u6765\u9524\u6211\uFF0C\u522B\u7740\u6025\u554A\uFF0C\u6211\u4EEC\u4E00\u6B65\u4E00\u6B65\u6765\u3002 \u4E0A\u9762\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A<code>state</code>\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7528\u5230\u4E86<code>reactive</code>\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u5229\u7528<code>vue3-reactivity</code>\u7684\u673A\u5236\u6765\u4FDD\u8BC1\u54B1\u4EEC\u521B\u5EFA\u7684<code>state</code>\u53D8\u91CF\u662F\u53EF\u54CD\u5E94\u5F0F\u7684\u3002\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u53EA\u662F\u5B9A\u4E49\u4E86<code>state</code>\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u5B9A\u4E49\u4E00\u4E9B\u6539\u53D8<code>state</code>\u7684\u65B9\u6CD5\uFF0C\u5373<code>action</code>:</p><div class="language-ts"><pre><code><span class="token comment">// custom_store/info/action.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> infoState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./state&quot;</span>

<span class="token keyword">function</span> <span class="token function">chageInfo</span><span class="token punctuation">(</span>state<span class="token operator">:</span> infoState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>info <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createAction</span><span class="token punctuation">(</span>state<span class="token operator">:</span> infoState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    chageInfo<span class="token operator">:</span> <span class="token function">chageInfo</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u597D\u4E86\u73B0\u5728\u6539\u53D8<code>state</code>\u7684<code>action</code>\u4E5F\u6709\u4E86\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u628A\u4ED6\u4EEC\u7EC4\u5408\u8D77\u6765\uFF0C\u8BA9\u5B83\u4EEC\u770B\u4E0A\u53BB\u66F4\u50CF<code>vuex</code>\u4E00\u70B9:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">readonly</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./action&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./state&quot;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">createAction</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    state<span class="token operator">:</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
    action<span class="token operator">:</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u662F\u4E0D\u662F\u6709\u90A3\u5473\u4E86\u3002\u8FD9\u91CC\u4E3A\u4EC0\u4E48\u8981\u5229\u7528<code>readonly</code>\u5462\uFF1F\u662F\u56E0\u4E3A\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539<code>state</code>\u7684\u53D8\u91CF\uFF0C\u53EA\u901A\u8FC7<code>action</code>\u53BB\u6539\u53D8<code>state</code>\u7684\u503C\uFF0C\u589E\u52A0<code>readonly</code>\uFF0C\u6211\u4EEC\u5C31\u5B8C\u7F8E\u7684\u5B9E\u73B0\u4E86\u8FD9\u4E00\u70B9\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5728<code>vue\u7EC4\u4EF6</code>\u4E2D\u4F7F\u7528\u4E00\u4E0B:</p><div class="language-ts"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">&quot;Vue logo&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;../assets/logo.png&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> info <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;changeInfo&quot;</span><span class="token operator">&gt;</span>
			Click to change Info
		<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span>defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../custom_store/info&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>info<span class="token punctuation">)</span>

		<span class="token keyword">function</span> <span class="token function">changeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			store<span class="token punctuation">.</span>action<span class="token punctuation">.</span><span class="token function">chageInfo</span><span class="token punctuation">(</span><span class="token string">&#39;hhh&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			info<span class="token punctuation">,</span>
			changeInfo
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u662F\u4E0D\u662F\u5B8C\u5168\u548C<code>vuex5</code>\u7684\u4F7F\u7528\u65B9\u5F0F\u4E00\u6A21\u4E00\u6837\uFF0C\u800C\u4E14\u4E0D\u77E5\u9053\u4F60\u6CE8\u610F\u5230\u6CA1\u6709\uFF0C\u6211\u4EEC\u5B8C\u7F8E\u7684\u5B9E\u73B0\u4E86\u5BF9<code>typescript</code>\u7684\u652F\u6301\uFF0C\u6240\u6709\u7684\u7C7B\u578B\u90FD\u4F1A\u88AB\u81EA\u52A8\u63A8\u65AD\uFF1A</p><p><img src="https://i.loli.net/2021/01/21/NjDyC8XH5hZPYVO.png" alt=""></p><p>\u8FD8\u6709\uFF0C\u5176\u5B9E\u6211\u4EEC\u4E5F\u540C\u65F6\u5B9E\u73B0\u4E86<code>store compose</code>\uFF0C\u6211\u4EEC\u53EA\u9700\u5728\u4EFB\u610F\u60F3\u8981\u7684<code>store</code>\u91CC\u9762\uFF0C\u5BFC\u5165\u5176\u4ED6\u4EFB\u610F\u7684<code>store</code>\u5373\u53EF\u3002\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u5176\u4ED6\u7684<code>vue3</code>\u7684\u94A9\u5B50\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u81EA\u7531\u7EC4\u5408\u3002\u5269\u4E0B\u7684\u4E1C\u897F\uFF0C\u7559\u7ED9\u5C0F\u4F19\u4F34\u4EEC\u81EA\u5DF1\u63A2\u7D22\u54AF\u3002</p><h3 id="\u8BF4\u5230\u6700\u540E" tabindex="-1">\u8BF4\u5230\u6700\u540E <a class="header-anchor" href="#\u8BF4\u5230\u6700\u540E" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u8BF4\uFF0C<code>react hooks</code> \u548C <code>vue3 composition-api</code>\u7684\u51FA\u73B0\u3002\u6781\u5927\u7684\u53D8\u9769\u4E86\u6211\u4EEC\u7F16\u7A0B\u7684\u601D\u7EF4\u65B9\u5F0F\uFF0C\u901A\u8FC7\u63A2\u8BA8<code>vuex</code>\u7684\u4ECA\u751F\u540E\u4E16\uFF0C\u6211\u4EEC\u80FD\u591F\u5F88\u6E05\u6670\u5230\u8BA4\u8BC6\u5230<code>\u51FD\u6570\u5F0F\u7F16\u7A0B</code>\u7684\u4F18\u70B9\u548C\u524D\u7AEF\u7684\u53D1\u5C55\u65B9\u5411\u3002\u8FD9\u65E0\u7591\u662F\u6700\u8FD1\u4E00\u5E74\uFF0C\u524D\u7AEF\u6700\u5927\u7684\u8FDB\u6B65\uFF0C\u7ED3\u5408<code>typescript</code>\uFF0C\u4ECE\u7F16\u7A0B\u601D\u60F3\u4E0A\uFF0C\u63A8\u52A8\u4E86\u524D\u7AEF\u7684\u53D1\u5C55\u3002\u8BDD\u4E0D\u7528\u591A\u8BF4\uFF0C\u5404\u4F4D\u5C0F\u4F19\u4F34\u8D76\u7D27\u64CD\u4F5C\u8D77\u6765\u5427\u3002</p><p>\u53E6\u5916\uFF0C\u5982\u679C\u60F3\u67E5\u770B\u6587\u7AE0\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u8BF7\u70B9\u51FB\u8FD9\u91CC\uFF1A<a href="https://github.com/xieyezi/vue-vite-template/tree/vuex-modules" target="_blank" rel="noopener noreferrer">vue-vite-template</a>.</p><h4 id="\u9898\u5916\u8BDD" tabindex="-1">\u9898\u5916\u8BDD <a class="header-anchor" href="#\u9898\u5916\u8BDD" aria-hidden="true">#</a></h4><p>\u540C\u65F6\u4E5F\u6253\u4E2A\u5C0F\u5E7F\u544A\u3002\u6700\u8FD1\u5199\u4E86\u4E00\u4E2A\u5C0F\u73A9\u610F\uFF1A<a href="https://github.com/xieyezi/monia-cli" target="_blank" rel="noopener noreferrer">monia-cli</a></p><ul><li><p><strong>\u4EC0\u4E48\u662F monia-cli?</strong></p><p>\u8FD9\u662F\u4E00\u6B3E\u540C\u65F6\u652F\u6301<code>vue2</code>\u3001<code>vue3</code>\u3001<code>react</code>\u3001<code>flutter</code>\u7684\u9879\u76EE\u811A\u624B\u67B6\u3002</p></li><li><p><strong>monia-cli \u80FD\u505A\u4EC0\u4E48?</strong></p><p>1\u3001\u6BCF\u6B21\u65B0\u5EFA\u9879\u76EE\uFF0C\u6211\u4EEC\u9700\u8981\u82B1\u5927\u91CF\u7684\u65F6\u95F4\u53BB\u65B0\u5EFA\u4E00\u4E9B\u91CD\u590D\u7684\u4EE3\u7801\u6587\u4EF6\uFF0C\u4F8B\u5982<code>request</code>,<code>config</code>\u7B49\u7B49\uFF0C<code>\u201C\u4E0D\u4F1A\u5077\u61D2\u7684\u7A0B\u5E8F\u5458\u4E0D\u662F\u597D\u7A0B\u5E8F\u5458\u201D\u3002\u5229\u7528</code>monia\`\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u7701\u6389\u8FD9\u4E9B\u91CD\u590D\u7684\u5DE5\u4F5C\u3002</p><p>2\u3001<code>monia</code>\u6240\u63D0\u4F9B\u7684<code>template</code>\u90FD\u662F\u76EE\u524D\u6700\u65B0\u7684\uFF0C\u6700\u5168\u7684\u9879\u76EE<code>template</code>\u3002\u5176\u4E2D<code>vue3</code>\u7684<code>template</code>, <code>monia</code> \u91C7\u7528\u4E86\u6700\u65B0\u7684<code>vue + vite + typescript</code>\u7684\u9879\u76EE\u7EC4\u7EC7\u65B9\u5F0F\u3002<code>flutter</code>\u7684<code>template</code>\uFF0C\u4F1A\u5E2E\u4F60\u7701\u6389\u5F88\u591A\u91CD\u590D\u7684\u5DE5\u4F5C\uFF0C\u5305\u62EC<code>comon componts</code>,<code>comon utils</code>\u7B49\u7B49\u3002</p><p>3\u3001<code>monia</code>\u672C\u8EAB\u8FD8\u652F\u6301\u9519\u8BEF\u63D0\u793A\uFF0C\u547D\u4EE4\u8054\u60F3\u7B49\u529F\u80FD\u3002</p><p>4\u3001\u4F7F\u7528\u793A\u4F8B\uFF1A<code>monia create test_flutter_app</code></p></li></ul>`,121),e=[p];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var y=n(o,[["render",c]]);export{g as __pageData,y as default};
