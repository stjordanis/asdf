import{_ as p,r as o,o as r,c as i,a as s,b as a,d as e,w as d,f as c,e as l}from"./app.0314b1df.js";const F={},h=s("h1",{id:"core",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),a(" Core")],-1),u=s("p",null,[a("The core "),s("code",null,"asdf"),a(" command list is rather small, but can facilitate many workflows.")],-1),y=s("h2",{id:"installation-setup",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installation-setup","aria-hidden":"true"},"#"),a(" Installation & Setup")],-1),m=l(`<h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> Exec</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#66D9EF;">exec</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [args...]</span></span>
<span class="line"></span></code></pre></div><p>Executes the command shim for the current version.</p>`,3),f=l(`<h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> Env</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf env </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [util]</span></span>
<span class="line"></span></code></pre></div>`,2),v=l(`<h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> Info</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf info</span></span>
<span class="line"></span></code></pre></div><p>A helper command to print the OS, Shell and <code>asdf</code> debug information. Share this when making a bug report.</p><h2 id="reshim" tabindex="-1"><a class="header-anchor" href="#reshim" aria-hidden="true">#</a> Reshim</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf reshim </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,5),g={href:"https://docs.npmjs.com/cli/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},E=s("code",null,"npm install -g yarn",-1),D=s("code",null,"asdf reshim nodejs <version>",-1),k=s("code",null,"yarn",-1),_=s("code",null,"<version>",-1),x=s("code",null,"nodejs",-1),B=l(`<h2 id="shim-versions" tabindex="-1"><a class="header-anchor" href="#shim-versions" aria-hidden="true">#</a> Shim-versions</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf shim-versions </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Lists the plugins and versions that provide shims for a command.</p>`,3),q={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},$=s("code",null,"node",-1),w=s("code",null,"npm",-1),H={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},O=s("code",null,"asdf-nodejs",-1),M=s("code",null,"shim-versions",-1),R=l(`<div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions node</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions npm</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"></span></code></pre></div><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><p><code>asdf</code> has a built in command to update which relies on Git (our recommended installation method). If you installed using a different method you should follow the steps for that method:</p>`,4),A=s("thead",null,[s("tr",null,[s("th",null,"Method"),s("th",null,"Latest Stable Release"),s("th",null,[a("Latest commit on "),s("code",null,"master")])])],-1),I=s("tr",null,[s("td",null,"asdf (via Git)"),s("td",null,[s("code",null,"asdf update")]),s("td",null,[s("code",null,"asdf update --head")])],-1),S=s("tr",null,[s("td",null,"Homebrew"),s("td",null,[s("code",null,"brew upgrade asdf")]),s("td",null,[s("code",null,"brew upgrade asdf --fetch-HEAD")])],-1),T=s("td",null,"Pacman",-1),U=s("code",null,"PKGBUILD",-1),j=s("br",null,null,-1),C={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},G=s("td",null,null,-1),L=l(`<h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><p>To uninstall <code>asdf</code> follow these steps:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><ol><li>In your <code>~/.bashrc</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/completions/asdf.bash&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><ol><li>In your <code>~/.bash_profile</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/completions/asdf.bash&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details>`,4),N={class:"custom-container details"},P=l(`<summary>Bash &amp; Homebrew</summary><ol><li>In your <code>~/.bashrc</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Z={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},z=l(`<ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div>`,4),V={class:"custom-container details"},K=l(`<summary>Bash &amp; Homebrew (macOS)</summary><p>If using <strong>macOS Catalina or newer</strong>, the default shell has changed to <strong>ZSH</strong>. If you can&#39;t find any config in your <code>~/.bash_profile</code> it may be in a <code>~/.zshrc</code> in which case please follow the ZSH instructions.</p><ol><li>In your <code>~/.bash_profile</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),W={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},Y=l(`<ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div>`,4),J=l(`<details class="custom-container details"><summary>Bash &amp; Pacman</summary><ol><li>In your <code>~/.bashrc</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Git</summary><ol><li>In your <code>~/.config/fish/config.fish</code> remove the lines that source <code>asdf.fish</code>:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>and remove completions with this command:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions/asdf.fish</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Homebrew</summary><ol><li>In your <code>~/.config/fish/config.fish</code> remove the lines that source <code>asdf.fish</code>:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;(brew --prefix asdf)&quot;</span><span style="color:#F8F8F2;">/libexec/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Pacman</summary><ol><li>In your <code>~/.config/fish/config.fish</code> remove the lines that source <code>asdf.fish</code>:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><ol><li>In your <code>~/.config/elvish/rc.elv</code> remove the lines that use the <code>asdf</code> module:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and uninstall the <code>asdf</code> module with this command:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><ol><li>In your <code>~/.config/elvish/rc.elv</code> remove the lines that use the <code>asdf</code> module:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and uninstall the <code>asdf</code> module with this command:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><ol><li>In your <code>~/.config/elvish/rc.elv</code> remove the lines that use the <code>asdf</code> module:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and uninstall the <code>asdf</code> module with this command:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Git</summary><ol><li>In your <code>~/.zshrc</code> remove the lines that source <code>asdf.sh</code> and completions:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"><span style="color:#88846F;"># ...</span></span>
<span class="line"><span style="color:#F8F8F2;">fpath=(\${ASDF_DIR}/completions $fpath)</span></span>
<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit</span></span>
<span class="line"><span style="color:#F8F8F2;">compinit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>OR</strong> the ZSH Framework plugin if used.</p><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Homebrew</summary><ol><li>In your <code>~/.zshrc</code> remove the lines that source <code>asdf.sh</code>:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> brew autoremove</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Pacman</summary><ol><li>In your <code>~/.zshrc</code> remove the lines that source <code>asdf.sh</code>:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">\${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.tool-versions&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdfrc&quot;</span></span>
<span class="line"></span></code></pre></div></details><p>That&#39;s it! 🎉</p>`,11);function Q(X,ss){const t=o("RouterLink"),n=o("ExternalLinkIcon");return r(),i("div",null,[h,u,y,s("p",null,[a("Covered in the "),e(t,{to:"/guide/getting-started.html"},{default:d(()=>[a("Getting Started")]),_:1}),a(" guide.")]),m,c(" TODO: expand on this with example "),f,c(" TODO: expand on this with example "),v,s("p",null,[a("This recreates the shims for the current version of a package. By default, shims are created by plugins during installation of a tool. Some tools like the "),s("a",g,[a("npm CLI"),e(n)]),a(" allow global installation of executables, for example, installing "),s("a",b,[a("Yarn"),e(n)]),a(" via "),E,a(". Since this executable was not installed via the plugin lifecycle, no shim exists for it yet. "),D,a(" will force recalculation of shims for any new executables, like "),k,a(", for "),_,a(" of "),x,a(" .")]),B,s("p",null,[a("As an example, "),s("a",q,[a("Node.js"),e(n)]),a(" ships with two executables, "),$,a(" and "),w,a(". When many versions of the tools are installed with "),s("a",H,[O,e(n)]),a(),M,a(" can return:")]),R,s("table",null,[A,s("tbody",null,[I,S,s("tr",null,[T,s("td",null,[a("Download a new "),U,a(" & rebuild "),j,a(" or use your preferred "),s("a",C,[a("AUR helper"),e(n)])]),G])])]),L,s("details",N,[P,s("p",null,[a("Completions may have been "),s("a",Z,[a("configured as per Homebrew's instructions"),e(n)]),a(" so follow their guide to find out what to remove.")]),z]),s("details",V,[K,s("p",null,[a("Completions may have been "),s("a",W,[a("configured as per Homebrew's instructions"),e(n)]),a(" so follow their guide to find out what to remove.")]),Y]),J])}const ls=p(F,[["render",Q],["__file","core.html.vue"]]);export{ls as default};
