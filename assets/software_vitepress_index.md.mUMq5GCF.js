import{_ as n,c as a,o as p,ai as e}from"./chunks/framework.BKsRHAHS.js";const h=JSON.parse('{"title":"部署vitepress","description":"","frontmatter":{"title":"部署vitepress","prev":false,"next":false},"headers":[],"relativePath":"software/vitepress/index.md","filePath":"software/vitepress/index.md","lastUpdated":1737625331000}'),i={name:"software/vitepress/index.md"};function l(r,s,t,c,b,u){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="部署vitepress" tabindex="-1">部署vitepress <a class="header-anchor" href="#部署vitepress" aria-label="Permalink to &quot;部署vitepress&quot;">​</a></h1><h2 id="将vitepress部署在gitlab-pages" tabindex="-1">将vitepress部署在gitlab pages <a class="header-anchor" href="#将vitepress部署在gitlab-pages" aria-label="Permalink to &quot;将vitepress部署在gitlab pages&quot;">​</a></h2><p>在vitpress中创建三个文件，然后将viepress整体提交到gitlab，启用gitlab pages和gitlab ci自动构建，每次提交就会自动构建部署。</p><p>要添加的文件如下：</p><p>创建<code>.gitlab-ci.yml</code>，写入。</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Docker image that will be used to build your app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:lts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Functions that should be executed before the build script is run</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">before_script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm add -D vitepress</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed -i &#39;$d&#39; package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed -i &#39;s/}/},/g&#39; package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed -i &#39;$ r ./requirments/add.txt&#39; package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # The folder that contains the files to be exposed at the Page URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # This ensures that only pushes to the default branch will trigger</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # a pages deploy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>创建<code>.gitignore</code>文件，写入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package.json</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>docs/.vitepress/cache/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>创建<code>requirments</code>文件夹，在文件夹中创建<code>add.txt</code>文件，写入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="将vitepress部署在github-pages" tabindex="-1">将vitepress部署在gitHub pages <a class="header-anchor" href="#将vitepress部署在github-pages" aria-label="Permalink to &quot;将vitepress部署在gitHub pages&quot;">​</a></h2><p>新建<code>.github\\workflows</code>两层文件夹，在workflows下新建<code>action.yml</code>文件，写入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>name: Deploy VitePress site to Pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  # 在针对 \`main\` 分支的推送上运行。如果你</span></span>
<span class="line"><span>  # 使用 \`master\` 分支作为默认分支，请将其更改为 \`master\`</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [main]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 允许你从 Actions 选项卡手动运行此工作流程</span></span>
<span class="line"><span>  workflow_dispatch:</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages</span></span>
<span class="line"><span>permissions:</span></span>
<span class="line"><span>  contents: read</span></span>
<span class="line"><span>  pages: write</span></span>
<span class="line"><span>  id-token: write</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span>concurrency:</span></span>
<span class="line"><span>  group: pages</span></span>
<span class="line"><span>  cancel-in-progress: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  # 构建工作</span></span>
<span class="line"><span>  build-and-deploy:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Checkout</span></span>
<span class="line"><span>        uses: actions/checkout@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span>      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释</span></span>
<span class="line"><span>      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释</span></span>
<span class="line"><span>      - name: Setup Node</span></span>
<span class="line"><span>        uses: actions/setup-node@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: \${{ matrix.node-version }}</span></span>
<span class="line"><span>      - name: Setup Vitepress</span></span>
<span class="line"><span>        run: npm add -D vitepress</span></span>
<span class="line"><span>      - name: Config Vitepress package.json</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          sed -i &#39;$d&#39; package.json</span></span>
<span class="line"><span>          sed -i &#39;s/}/},/g&#39; package.json</span></span>
<span class="line"><span>          sed -i &#39;$ r ./.github/workflows/add.txt&#39; package.json</span></span>
<span class="line"><span>      - name: Setup Plugin</span></span>
<span class="line"><span>        run: npm i vitepress-plugin-comment-with-giscus</span></span>
<span class="line"><span>      - name: Build with VitePress</span></span>
<span class="line"><span>        run: npm run docs:build</span></span>
<span class="line"><span>      - name: Upload</span></span>
<span class="line"><span>        uses: JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          token: \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span>          repository-name: 要托管到的静态仓库</span></span>
<span class="line"><span>          branch: main</span></span>
<span class="line"><span>          folder: public</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>在workflow下新建<code>add.txt</code>文件，写入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在<code>https://github.com/settings/personal-access-tokens</code>中为要托管到的静态仓库新建密钥，注意要给密钥相应的权限。</p><p>在<code>https://github.com/上传的项目地址/settings/secrets/actions</code>中创建名为<code>ACCESS_TOKEN</code>的secret，值为前面生成的密钥。</p>`,17)])])}const o=n(i,[["render",l]]);export{h as __pageData,o as default};
