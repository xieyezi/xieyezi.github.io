import{_ as n,c as s,o as a,a as t}from"./app.c6951d47.js";const y='{"title":"\u4E00\u4E9B\u8BED\u6CD5\u5757","description":"","frontmatter":"title \u4E00\u4E9B\u8BED\u6CD5\u5757","headers":[{"level":2,"title":"\u9632\u6296\u51FD\u6570","slug":"\u9632\u6296\u51FD\u6570"},{"level":2,"title":"\u8282\u6D41\u51FD\u6570","slug":"\u8282\u6D41\u51FD\u6570"},{"level":2,"title":"\u7EC4\u5408\u5F0F\u7EE7\u627F","slug":"\u7EC4\u5408\u5F0F\u7EE7\u627F"},{"level":2,"title":"\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F","slug":"\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F"},{"level":2,"title":"\u5B9E\u73B0New\u64CD\u4F5C\u7B26","slug":"\u5B9E\u73B0new\u64CD\u4F5C\u7B26"},{"level":2,"title":"\u5B9E\u73B0instance of","slug":"\u5B9E\u73B0instance-of"},{"level":2,"title":"\u6590\u6CE2\u90A3\u5951\u6570\u5217","slug":"\u6590\u6CE2\u90A3\u5951\u6570\u5217"}],"relativePath":"article/\u4E00\u4E9B\u8BED\u6CD5\u5757.md"}',p={},o=t(`<h1 id="\u4E00\u4E9B\u8BED\u6CD5\u5757" tabindex="-1">\u4E00\u4E9B\u8BED\u6CD5\u5757 <a class="header-anchor" href="#\u4E00\u4E9B\u8BED\u6CD5\u5757" aria-hidden="true">#</a></h1><h2 id="\u9632\u6296\u51FD\u6570" tabindex="-1">\u9632\u6296\u51FD\u6570 <a class="header-anchor" href="#\u9632\u6296\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&quot;use-strict&quot;</span>
<span class="token comment">/**
 * \u81EA\u5DF1\u5B9E\u73B0\u9632\u6296\u51FD\u6570
 */</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token comment">//\u5982\u679C\u7528\u6237\u518D\u6B21\u8F93\u5165\uFF0C\u5219\u628A\u524D\u4E00\u4E2A setTimeout clear \u6389</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span> <span class="token comment">// \u7136\u540E\u53C8\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 setTimeout, \u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u8F93\u5165\u5B57\u7B26\u540E\u7684 delay \u95F4\u9694\u5185\u5982\u679C\u8FD8\u6709\u5B57\u7B26\u8F93\u5165\u7684\u8BDD\uFF0C\u5C31\u4E0D\u4F1A\u6267\u884C fnnc \u51FD\u6570</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8282\u6D41\u51FD\u6570" tabindex="-1">\u8282\u6D41\u51FD\u6570 <a class="header-anchor" href="#\u8282\u6D41\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&quot;use-strict&quot;</span>
<span class="token comment">/**
 * \u81EA\u5DF1\u5B9E\u73B0\u8282\u6D41\u51FD\u6570
 */</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> canRun <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canRun<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token comment">//\u5728\u51FD\u6570\u5F00\u5934\u5224\u65AD\u6807\u5FD7\u662F\u5426\u4E3A true\uFF0C\u4E0D\u4E3A true \u5219\u4E2D\u65AD\u51FD\u6570</span>
    <span class="token punctuation">}</span>
    canRun <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//\u5C06canRun \u8BBE\u7F6E\u4E3A false\uFF0C\u9632\u6B62\u6267\u884C\u4E4B\u524D\u518D\u88AB\u6267\u884C</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      canRun <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// \u6267\u884C\u5B8C\u4E8B\u4EF6\uFF08\u6BD4\u5982\u8C03\u7528\u5B8C\u63A5\u53E3\uFF09\u4E4B\u540E\uFF0C\u91CD\u65B0\u5C06\u8FD9\u4E2A\u6807\u5FD7\u8BBE\u7F6E\u4E3A true\u3002\u5F53\u5B9A\u65F6\u5668\u6CA1\u6709\u6267\u884C\u7684\u65F6\u5019\u6807\u8BB0\u6C38\u8FDC\u662Ffalse\uFF0C\u5728\u5F00\u5934\u88ABreturn\u6389</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7EC4\u5408\u5F0F\u7EE7\u627F" tabindex="-1">\u7EC4\u5408\u5F0F\u7EE7\u627F <a class="header-anchor" href="#\u7EC4\u5408\u5F0F\u7EE7\u627F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&quot;use-strict&quot;</span>
<span class="token comment">/***
 * \u7EC4\u5408\u5F0F\u7EE7\u627F
 * \u901A\u8FC7call\u7EE7\u627FParent\u7684\u5C5E\u6027\uFF0C\u5E76\u4F20\u5165\u53C2\u6570
 * \u5C06Child\u7684\u539F\u578B\u5BF9\u8C61\u6307\u5411Parent\u7684\u5B9E\u4F8B\uFF0C\u4ECE\u800C\u7EE7\u627FParent\u7684\u51FD\u6570
 */</span>
<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value
<span class="token punctuation">}</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u7EE7\u627FParentd\u7684\u5C5E\u6027</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//test</span>
<span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;Child&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">&quot;Parent&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child <span class="token keyword">instanceof</span> <span class="token class-name">Parent</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

child<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
parent<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F" tabindex="-1">\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F <a class="header-anchor" href="#\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&quot;use-strict&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/***
 * \u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F
 * \u901A\u8FC7call\u7EE7\u627FParent\u7684\u5C5E\u6027\uFF0C\u5E76\u4F20\u5165\u53C2\u6570
 * \u901A\u8FC7Object.create()\u7EE7\u627FParent\u7684\u51FD\u6570
 */</span>
<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u7EE7\u627FParentd\u7684\u5C5E\u6027</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  constructor <span class="token punctuation">{</span>
    value Child<span class="token punctuation">,</span>
    writable <span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable <span class="token boolean">true</span><span class="token punctuation">,</span>
    enumerable <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//test</span>
<span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;Child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">&quot;Parent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child <span class="token keyword">instanceof</span> <span class="token class-name">Parent</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

child<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
parent<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5B9E\u73B0new\u64CD\u4F5C\u7B26" tabindex="-1">\u5B9E\u73B0<code>New</code>\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#\u5B9E\u73B0new\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&quot;use-strict&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u81EA\u5DF1\u5B9E\u73B0New\u64CD\u4F5C\u7B26
 */</span>
<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">Cons<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Cons</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">Cons</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">?</span> res  obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//test</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> suyechun <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;syc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
suyechun<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5B9E\u73B0instance-of" tabindex="-1">\u5B9E\u73B0<code>instance of</code> <a class="header-anchor" href="#\u5B9E\u73B0instance-of" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&quot;use-strict&quot;</span>
<span class="token comment">/**
 * \u81EA\u5DF1\u5B9E\u73B0instanceof
 * \u5B9E\u73B0\u539F\u7406\u4E3A\u5229\u7528\u539F\u578B\u94FE
 * typeof\u53EA\u80FD\u5224\u65AD\u539F\u59CB\u7C7B\u578B\uFF08\u9664\u4E86null\u4F1A\u8F93\u51FAobject\uFF09,\u5F15\u7528\u7C7B\u578B\u90FD\u4F1A\u8F93\u51FAobject
 * instanceof \u53EA\u80FD\u5224\u65AD\u5BF9\u8C61
 * \u8FD8\u6709\u4E00\u79CD\u5224\u65AD\u65B9\u6CD5\uFF0CObject.prototype.toString.call();\u4F1A\u8F93\u51FA&quot;[object \u7C7B\u578B\u503C]&quot;
 */</span>
<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> rightProto <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype
  <span class="token keyword">let</span> leftValue <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftValue <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftValue <span class="token operator">===</span> rightProto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    leftValue <span class="token operator">=</span> leftValue<span class="token punctuation">.</span>__proto__
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//test</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> value
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
<span class="token keyword">const</span> suyechun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;syc&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myInstanceof</span><span class="token punctuation">(</span>suyechun<span class="token punctuation">,</span> Person<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1">\u6590\u6CE2\u90A3\u5951\u6570\u5217 <a class="header-anchor" href="#\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>prev<span class="token punctuation">,</span> curr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> curr
    <span class="token punctuation">;</span><span class="token punctuation">[</span>prev<span class="token punctuation">,</span> curr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>curr<span class="token punctuation">,</span> prev <span class="token operator">+</span> curr<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token keyword">break</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,15),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
