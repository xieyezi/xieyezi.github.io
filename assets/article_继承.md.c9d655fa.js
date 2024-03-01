import{_ as n,c as s,o as a,a as t}from"./app.c6951d47.js";const f='{"title":"1.\u539F\u578B\u94FE\u7EE7\u627F","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u539F\u578B\u94FE\u7EE7\u627F","slug":"_1-\u539F\u578B\u94FE\u7EE7\u627F"},{"level":3,"title":"2.\u501F\u7528\u6784\u9020\u51FD\u6570\uFF08\u7ECF\u5178\u7EE7\u627F\uFF09","slug":"_2-\u501F\u7528\u6784\u9020\u51FD\u6570\uFF08\u7ECF\u5178\u7EE7\u627F\uFF09"},{"level":3,"title":"3.\u7EC4\u5408\u7EE7\u627F","slug":"_3-\u7EC4\u5408\u7EE7\u627F"},{"level":3,"title":"4.\u539F\u578B\u5F0F\u7EE7\u627F","slug":"_4-\u539F\u578B\u5F0F\u7EE7\u627F"},{"level":3,"title":"5. \u5BC4\u751F\u5F0F\u7EE7\u627F","slug":"_5-\u5BC4\u751F\u5F0F\u7EE7\u627F"},{"level":3,"title":"6. \u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F","slug":"_6-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F"}],"relativePath":"article/\u7EE7\u627F.md"}',p={},o=t(`<h3 id="_1-\u539F\u578B\u94FE\u7EE7\u627F" tabindex="-1">1.\u539F\u578B\u94FE\u7EE7\u627F <a class="header-anchor" href="#_1-\u539F\u578B\u94FE\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;xieyezi&quot;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// xieyezi</span>
</code></pre></div><p>\u7F3A\u70B9\uFF1A 1.\u5F15\u7528\u7C7B\u578B\u7684\u5C5E\u6027\u4F1A\u88AB\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;xieyezi&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

child1<span class="token punctuation">.</span>names<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;juefei&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>names<span class="token punctuation">)</span> <span class="token comment">// [&quot;xieyezi&quot;, &quot;juefei&quot;]</span>

<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>names<span class="token punctuation">)</span> <span class="token comment">// [&quot;xieyezi&quot;, &quot;juefei&quot;]</span>
</code></pre></div><p>2.\u5728\u521B\u5EFA Child \u5B9E\u4F8B\u65F6\uFF0C\u4E0D\u80FD\u5411 Parent \u4F20\u53C2</p><h3 id="_2-\u501F\u7528\u6784\u9020\u51FD\u6570\uFF08\u7ECF\u5178\u7EE7\u627F\uFF09" tabindex="-1">2.\u501F\u7528\u6784\u9020\u51FD\u6570\uFF08\u7ECF\u5178\u7EE7\u627F\uFF09 <a class="header-anchor" href="#_2-\u501F\u7528\u6784\u9020\u51FD\u6570\uFF08\u7ECF\u5178\u7EE7\u627F\uFF09" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;xieyezi&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

child1<span class="token punctuation">.</span>names<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;juefei&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>names<span class="token punctuation">)</span> <span class="token comment">// [&quot;xieyezi&quot;, &quot;juefei&quot;]</span>

<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;babad&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>names<span class="token punctuation">)</span> <span class="token comment">// [&quot;xieyezi&quot;]</span>
</code></pre></div><p>\u4F18\u70B9\uFF1A 1.\u907F\u514D\u4E86\u5F15\u7528\u7C7B\u578B\u7684\u5C5E\u6027\u88AB\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\uFF1B 2.\u53EF\u4EE5\u5728 Child \u4E2D\u5411 Parent \u4F20\u53C2\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;xieyezi&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// xieyezi</span>

<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;juefei&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// juefei</span>
</code></pre></div><p>\u7F3A\u70B9\uFF1A \u65B9\u6CD5\u90FD\u5728\u6784\u9020\u51FD\u6570\u4E2D\u5B9A\u4E49\uFF0C\u6BCF\u6B21\u521B\u5EFA\u5B9E\u4F8B\u90FD\u4F1A\u521B\u5EFA\u4E00\u904D\u65B9\u6CD5\u3002</p><h3 id="_3-\u7EC4\u5408\u7EE7\u627F" tabindex="-1">3.\u7EC4\u5408\u7EE7\u627F <a class="header-anchor" href="#_3-\u7EC4\u5408\u7EE7\u627F" aria-hidden="true">#</a></h3><p>\u539F\u578B\u94FE\u7EE7\u627F\u548C\u7EC4\u5408\u7EE7\u627F\u53CC\u5251\u5408\u74A7\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;xieyezi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span>

child1<span class="token punctuation">.</span>colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// xieyezi</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>colors<span class="token punctuation">)</span> <span class="token comment">// [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;, &quot;black&quot;]</span>

<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;juefei&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;24&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// juefei</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 24</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>colors<span class="token punctuation">)</span> <span class="token comment">// [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;]</span>
</code></pre></div><p>\u4F18\u70B9\uFF1A\u878D\u5408\u539F\u578B\u94FE\u7EE7\u627F\u548C\u6784\u9020\u51FD\u6570\u7684\u4F18\u70B9\uFF0C\u662F <code>JavaScript</code> \u4E2D\u6700\u5E38\u7528\u7684\u7EE7\u627F\u6A21\u5F0F\u3002 \u7F3A\u70B9\uFF1AParent \u6784\u9020\u51FD\u6570\u4F1A\u8C03\u7528\u4E24\u6B21</p><h3 id="_4-\u539F\u578B\u5F0F\u7EE7\u627F" tabindex="-1">4.\u539F\u578B\u5F0F\u7EE7\u627F <a class="header-anchor" href="#_4-\u539F\u578B\u5F0F\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;kevin&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;daisy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;kelly&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token function">createObj</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token function">createObj</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

person1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;person1&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// kevin</span>

person1<span class="token punctuation">.</span>firends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;taylor&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span> <span class="token comment">// [&quot;daisy&quot;, &quot;kelly&quot;, &quot;taylor&quot;]</span>
</code></pre></div><p>\u5C31\u662F <code>ES5 Object.create</code> \u7684\u6A21\u62DF\u5B9E\u73B0\uFF0C\u5C06\u4F20\u5165\u7684\u5BF9\u8C61\u4F5C\u4E3A\u521B\u5EFA\u7684\u5BF9\u8C61\u7684\u539F\u578B\u3002</p><p>\u7F3A\u70B9\uFF1A \u5305\u542B\u5F15\u7528\u7C7B\u578B\u7684\u5C5E\u6027\u503C\u59CB\u7EC8\u90FD\u4F1A\u5171\u4EAB\u76F8\u5E94\u7684\u503C\uFF0C\u8FD9\u70B9\u8DDF\u539F\u578B\u94FE\u7EE7\u627F\u4E00\u6837\u3002</p><h3 id="_5-\u5BC4\u751F\u5F0F\u7EE7\u627F" tabindex="-1">5. \u5BC4\u751F\u5F0F\u7EE7\u627F <a class="header-anchor" href="#_5-\u5BC4\u751F\u5F0F\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> clone <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
  clone<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> clone
<span class="token punctuation">}</span>
</code></pre></div><p>\u521B\u5EFA\u4E00\u4E2A\u4EC5\u7528\u4E8E\u5C01\u88C5\u7EE7\u627F\u8FC7\u7A0B\u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u5728\u5185\u90E8\u4EE5\u67D0\u79CD\u5F62\u5F0F\u6765\u505A\u589E\u5F3A\u5BF9\u8C61\uFF0C\u6700\u540E\u8FD4\u56DE\u5BF9\u8C61\u3002</p><p>\u7F3A\u70B9\uFF1A\u8DDF\u501F\u7528\u6784\u9020\u51FD\u6570\u6A21\u5F0F\u4E00\u6837\uFF0C\u6BCF\u6B21\u521B\u5EFA\u5BF9\u8C61\u90FD\u4F1A\u521B\u5EFA\u4E00\u904D\u65B9\u6CD5\u3002</p><h3 id="_6-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F" tabindex="-1">6. \u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F <a class="header-anchor" href="#_6-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// \u4E0A\u9762\u8FD9\u53E5\u7B49\u4EF7\u4E8E \`Child.prototype = Object.create(Parent.prototype)\`</span>
</code></pre></div><p>\u76F8\u6BD4\u4E8E<code>\u7EC4\u5408\u7EE7\u627F</code>,<code>\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F</code>\u8C03\u7528\u4E24\u6B21\u7236\u6784\u9020\u51FD\u6570\u7684\u7F3A\u70B9\u3002</p>`,25),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{f as __pageData,m as default};
