!function(){"use strict";angular.module("gcloud",["gcloud.manifest","ui.router","hljs"])}(),function(){"use strict";function e(){return{restrict:"E",replace:!0,templateUrl:"app/components/version-switcher/version-switcher.html"}}angular.module("gcloud").directive("versionSwitcher",e)}(),function(){"use strict";function e(){function e(e,i){return e.filter(function(e){return t(e,i)})}function t(e,t){var i;for(i in t)if(e[i]!==t[i])return!1;return!0}function i(t,i){var n=e(t,i);return n.length?n[0]:null}function n(e){return angular.isArray(e)?e:[e]}return{contains:t,where:e,findWhere:i,arrify:n}}angular.module("gcloud").factory("util",e)}(),function(){"use strict";function e(e,t,i){var n=i("#/docs/{{module}}/{{version}}{{href}}");return{restrict:"A",link:function(i,s,r){function l(){return e.path()}function o(e){return e="#"+e,e===a?void s.addClass("current"):void s.removeClass("current")}var a=n({module:t.params.module||"",version:t.params.version,href:r.sideNavLink}).replace("//","/");s.attr("href",a),i.$watch(l,o)}}}e.$inject=["$location","$state","$interpolate"],angular.module("gcloud").directive("sideNavLink",e)}(),function(){"use strict";function e(e){return{restrict:"E",templateUrl:"app/components/page-header/page-header.html",replace:!0,transclude:!0,scope:{title:"="},link:function(t){t.title=t.title||e.friendlyLang,angular.isArray(t.title)&&(t.title=t.title.join(e.titleDelimiter||" » "))}}}e.$inject=["manifest"],angular.module("gcloud").directive("pageHeader",e)}(),function(){"use strict";function e(e,t,i){return{restrict:"A",templateUrl:"app/components/module-switcher/module-switcher.html",link:function(n){n.modules=t.modules,n.$watch(e,function(){var s=i.findWhere(t.modules,{id:e.module});n.selected=s.name})}}}e.$inject=["$stateParams","manifest","util"],angular.module("gcloud").directive("moduleSwitcher",e)}(),function(){"use strict";function e(e,t){return{restrict:"E",link:function(i,n){function s(){var s=t.makeHtml(n.text()),l=angular.element(s);n.html("").append(l),e(n.contents())(i),r()}var r=i.$on("$includeContentLoaded",s)}}}e.$inject=["$compile","markdownConverter"],angular.module("gcloud").directive("markdown",e)}(),function(){"use strict";function e(e){return{restrict:"E",link:function(t,i){function n(){angular.forEach(s,e.highlightBlock,e),r()}if(!i.hasClass("skip-highlight")){var s=i.children("code");if(s.length)var r=t.$watch(n)}}}}e.$inject=["hljs"],angular.module("gcloud").directive("pre",e)}(),function(){"use strict";function e(e,t){function i(e,t,i){var r=/^\#/.test(i),o=r?n(i):s(i);return l({text:t,href:o})}function n(e){return r({section:e.replace("#","")})}function s(e){return r({guideId:e.replace(/\//g,"").replace("readme.md","")})}function r(e){var i=angular.extend({},t.params,e);return t.href("docs.guides",i)}var l=e('<a href="{{href}}">{{text}}</a>');return new showdown.Converter({extensions:[function(){return[{type:"lang",regex:"\\[([^\\]]+)\\]\\(([\\/|\\#][^)]+)\\)",replace:i}]}]})}e.$inject=["$interpolate","$state"],angular.module("gcloud").factory("markdownConverter",e)}(),function(){"use strict";function e(e,t){return{restrict:"A",templateUrl:"app/components/language-switcher/language-switcher.html",link:function(i){i.langs=e,i.modules=t.modules}}}e.$inject=["langs","manifest"],angular.module("gcloud").directive("languageSwitcher",e)}(),function(){"use strict";function e(){return{restrict:"E",replace:!0,templateUrl:"app/components/dropdown/dropdown.html",transclude:!0,scope:{selected:"="},controller:t,controllerAs:"dropdown",bindToController:!0}}function t(){var e=this;e.isOpen=!1}angular.module("gcloud").directive("dropdown",e)}(),function(){"use strict";function e(e,t){function i(e,t){return e.$watch(t,n)}function n(i){return e(t,s,null,i)}var s=250;return t.yOffset=70,{watch:i,scrollTo:n}}e.$inject=["$timeout","$anchorScroll"],angular.module("gcloud").factory("DeeplinkService",e)}(),function(){"use strict";function e(e,t){var i=function(i,n,s){var r=!!t.findWhere(i.docs.types,{id:n}),l=["#","docs"];if(r){var o=[e.params.version,n];e.params.module&&o.unshift(e.params.module),l=l.concat(o)}else l.push(n);return l=l.join("/"),s&&(l+="?method="+s),l};return{restrict:"A",link:function(e,t,n){var s=n.customType,r=n.method;0===t.html().length&&t.html(r?r:s);var l=i(e,s.replace("[]",""),r);t.addClass("skip-external-link").attr("href",l)}}}e.$inject=["$state","util"],angular.module("gcloud").directive("customType",e)}(),function(){"use strict";function e(e){return{restrict:"A",link:function(t,i,n){function s(){return t.$eval(n.bindHtmlCompile)}function r(n){i.html(n),e(i.contents())(t),l()}var l=t.$watch(s,r)}}}e.$inject=["$compile"],angular.module("gcloud").directive("bindHtmlCompile",e)}(),function(){"use strict";function e(){return{restrict:"E",link:t}}function t(e,t){var i=t.hasClass("skip-external-link");if(!i){var n=t.attr("href"),s=/^http/.test(n);s&&t.attr("target","_blank")}}angular.module("gcloud").directive("a",e)}(),function(){"use strict";function e(e,t,i,n,s,r){function l(e){return e.name}function o(){return i.watch(e,a)}function a(){return t.params&&t.params.method}function c(e,t){return"constructor"===e.type?-1:"constructor"===t.type?1:+(e.name>t.name)||+(e.name===t.name)-1}var u=this;angular.extend(u,n.setAsTrusted(s)),u.methods=s.methods.map(n.setAsTrusted).sort(c),u.libraryTitle=r.libraryTitle||"Google Cloud",u.methodNames=u.methods.map(l),u.showGettingStarted=!1,e.$on("$viewContentLoaded",o)}e.$inject=["$scope","$state","DeeplinkService","DocsService","serviceObject","manifest"],angular.module("gcloud").controller("ServiceCtrl",e)}(),function(){"use strict";function e(e,i){i.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeCtrl",controllerAs:"home",resolve:{latestRelease:t}})}function t(e,t){var i="https://api.github.com/repos/GoogleCloudPlatform/"+t.moduleName+"/releases/latest";return e.get(i).then(function(e){var t=e.data;return{name:t.tag_name,date:new Date(t.published_at),link:t.html_url}}).then(null,angular.noop)}e.$inject=["manifest","$stateProvider"],t.$inject=["$http","manifest"],angular.module("gcloud").config(e)}(),function(){"use strict";function e(e,t,i){var n=this;if(n.contentUrl=[e.content,e.home].join("/"),n.latestRelease=t,e.modules){var s=i.findWhere(e.modules,{id:e.defaultModule});n.module={name:s.id,version:s.versions[0],service:s.defaultService}}}e.$inject=["manifest","latestRelease","util"],angular.module("gcloud").controller("HomeCtrl",e)}(),function(){"use strict";function e(e,t,i,n,s,r,l,o){function a(){return l.watch(e,c)}function c(){var e=t.params&&t.params.section;return e?e.replace(/\-/g,""):null}function u(e){return/^http/.test(e)?i.trustAsResourceUrl(e):n("{{content}}/{{module}}/{{version}}/{{data}}")({content:r.content,module:t.params.module||"",version:t.params.version,data:e})}var d=this;d.title=s.title,d.contents=o.arrify(s.contents).map(u),d.editUrl=s.edit?u(s.edit):null,e.$on("$viewContentLoaded",a)}e.$inject=["$scope","$state","$sce","$interpolate","guideObject","manifest","DeeplinkService","util"],angular.module("gcloud").controller("GuideCtrl",e)}(),function(){"use strict";function e(e,t,i){function n(t){var i=angular.copy(t);return i.isConstructor="constructor"===i.type,i.typeSymbol=s(i.type),i.description&&(i.description=e.trustAsHtml(i.description)),i.examples&&(i.examples=i.examples.map(l)),i.returns&&(i.returns=i.returns.map(r)),i.params&&(i.params=i.params.map(o)),i.overview&&(i.overview=e.trustAsHtml(i.overview)),i}function s(e){var n="#";if(e&&t.methodTypeSymbols){var s=i.findWhere(t.methodTypeSymbols,{type:e});s&&(n=s.symbol)}return n}function r(t){return e.trustAsHtml([t.types.join(", "),t.description].join(""))}function l(t){var i,n;return t.code&&(i=e.trustAsHtml(t.code)),t.caption&&(n=e.trustAsHtml(t.caption)),{code:i,caption:n}}function o(t){var i=t.name.split(".");return i.length>1&&(t.name=i.pop(),t.parent=i.join(".")),t.types=e.trustAsHtml(t.types.join(", ")),t.description=e.trustAsHtml(t.description),t}return{setAsTrusted:n,trust:e.trustAsHtml.bind(e)}}e.$inject=["$sce","manifest","util"],angular.module("gcloud").factory("DocsService",e)}(),function(){"use strict";function e(e,u,d,m){var g,p="\\bv?(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)(?:-[\\da-z-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?\\b",v="(?!master|\\d).*",h="/docs/"+(m.modules?"{module:"+v+"}/":"")+"{version:master|"+p+"}";if(m.versions)g=m.versions[0];else{if(!m.modules)throw new Error('Either "versions" or "modules" must be set.');g=m.modules[0].versions[0]}d.type("nonURIEncoded",{encode:o,decode:o,is:function(){return!0}}),e.state("docs",{url:h,templateUrl:"app/docs/docs.html",controller:"DocsCtrl",controllerAs:"docs","abstract":!0,resolve:{lastBuiltDate:t,toc:i,types:n,versions:l},params:{version:"latest",module:m.defaultModule}}).state("docs.guides",{url:"/guides/:guideId?section",templateUrl:"app/guide/guide.html",controller:"GuideCtrl",controllerAs:"guide",resolve:{guideObject:s}}).state("docs.service",{url:"/{serviceId:nonURIEncoded}?method",templateUrl:"app/service/service.html",controller:"ServiceCtrl",controllerAs:"service",resolve:{serviceObject:r}}),u.when("/docs","/docs/latest"),u.otherwise(function(e,t){var i=t.path(),n="/docs/",s=-1===i.indexOf(n);if(s)return"/";var r,l=i.replace(n,"").split("/");return r=m.modules?a(l,m,e):c(l,m,e),n+r.join("/")})}function t(e,t){var i="https://api.github.com/repos/GoogleCloudPlatform/"+t.moduleName+"/commits?sha=gh-pages&per_page=1";return e({method:"get",url:i,cache:!0}).then(function(e){return e.data[0].commit.committer.date}).then(null,angular.noop)}function i(e,t,i,n){var s=e("{{content}}/{{module}}/{{version}}/toc.json")({content:n.content,module:i.module||n.defaultModule,version:i.version});return t.get(s).then(function(e){return e.data})}function n(e,t,i,n){var s=e("{{content}}/{{module}}/{{version}}/types.json")({content:n.content,module:i.module||n.defaultModule,version:i.version});return t.get(s).then(function(e){return e.data})}function s(e,t,i,n){var s=t.guideId.replace(/\-/g," "),r=i.findWhere(n.guides,{id:s});return r?r:e.reject("Unknown guide: "+s)}function r(e,t,i,n,s,r,l){var o=e.serviceId,a=l.findWhere(r,{id:o});if(!a)return n.reject("Unknown service: "+o);var c=e.module||"",u=t("{{content}}/{{module}}/{{version}}/{{json}}")({content:s.content,version:e.version,json:a.contents,module:c});return i.get(u).then(function(e){var t=e.data;return a.title&&(t.title=a.title),t})}function l(e,t,i,n){if(!e.modules)return e.versions?e.versions:n.reject('"versions" field missing from manifest.json');var s=t.module,r=i.findWhere(e.modules,{id:s});return r?r.versions:n.reject('Unknown module "'+s+'"')}function o(e){return e?e.toString():null}function a(e,t,i){var n=i.get("util").findWhere(t.modules,{id:e[0]});if(!n)return e.unshift(t.defaultModule),e;if("latest"===e[1]||"stable"===e[1])return e[1]=n.versions[0],e;var s=e.shift(),r=n.versions.indexOf(e[0])>-1;if(!r){var l=[s,n.versions[0]],o="guides"===e[0];return o||l.push(s),l.concat(e)}var a=e.shift();return[s,a,n.defaultService]}function c(e,t){if("latest"===e[0]||"stable"===e[0])return e[0]=t.versions[0],e;var i=t.versions.indexOf(e[0])>-1;if(!i)return e.unshift(t.versions[0]),e;var n=e.shift();return[n,t.defaultService||"gcloud"]}e.$inject=["$stateProvider","$urlRouterProvider","$urlMatcherFactoryProvider","manifest"],t.$inject=["$http","manifest"],i.$inject=["$interpolate","$http","$stateParams","manifest"],n.$inject=["$interpolate","$http","$stateParams","manifest"],s.$inject=["$q","$stateParams","util","toc"],r.$inject=["$stateParams","$interpolate","$http","$q","manifest","types","util"],l.$inject=["manifest","$stateParams","util","$q"],angular.module("gcloud").config(e)}(),function(){"use strict";function e(e,t,i,n,s,r,l){function o(t){return e.go(e.current.name,{version:t})}function a(t){return!!(e.params.serviceId||"").match(t)}function c(e){return e.title.toLowerCase().replace(/\s/g,"-")}var u=this;u.libraryTitle=i.libraryTitle||"Google Cloud",u.langs=t,u.lastBuiltDate=r,u.guides=n.guides,u.services=n.services,u.versions=l,u.version=e.params.version,u.overviewFileUrl=null,u.types=s,u.selectedVersion=u.version,u.loadVersion=o,u.getGuideUrl=c,u.isActive=a,n.overview&&(u.overviewFileUrl=[i.content,e.params.module,e.params.version,n.overview].join("/"))}e.$inject=["$state","langs","manifest","toc","types","lastBuiltDate","versions"],angular.module("gcloud").controller("DocsCtrl",e)}(),function(){"use strict";function e(e,t,i,n,s){n.moduleName||(n.moduleName="gcloud-"+n.lang),angular.extend(t,n),t.$on("$stateChangeError",function(){var t=e.params.module||n.defaultModule;!t&&n.modules&&(t=n.modules[0].id);var i;t&&(i=s.findWhere(n.modules,{id:t}));var r=(i?i:n).versions[0],l=(i?i:n).defaultService||"gcloud";e.go("docs.service",{module:t,version:r,serviceId:l})})}e.$inject=["$state","$rootScope","$timeout","manifest","util"],angular.module("gcloud").run(e)}(),function(){"use strict";angular.module("gcloud").constant("hljs",hljs).constant("langs",[{friendly:".NET",key:"dotnet",repo:"google-cloud-dotnet"},{friendly:"Java",key:"java",repo:"gcloud-java"},{friendly:"Node.js",key:"node",repo:"google-cloud-node"},{friendly:"PHP",key:"php",repo:"google-cloud-php"},{friendly:"Python",key:"python",repo:"gcloud-python"},{friendly:"Ruby",key:"ruby",repo:"gcloud-ruby"}])}(),angular.module("gcloud").run(["$templateCache",function(e){e.put("app/docs/docs.html",'<article class="main lang-page" role="main"><header class="page-header fixed" role="banner"><div class="row"><div class="col"><h1 class="logo"><a href="." title="Home"><img src="src/images/logo.svg" alt="Google Cloud Platform"> <span class="gcloud">{{docs.libraryTitle}}</span></a></h1></div><div class="col"><div language-switcher=""></div></div><div class="col visible-lg" ng-if="modules"><div module-switcher=""></div></div></div><div class="header--right"><a ng-href="https://github.com/GoogleCloudPlatform/{{::moduleName}}/issues/new" class="v-btn skip-external-link"><img src="src/images/icon-link-github.svg"> Report an Issue</a></div></header><section ui-view=""></section><nav class="side-nav visible-lg"><version-switcher></version-switcher><ul class="page-sections external-links" ng-if="docs.guides.length"><li><h4 class="list-item--heading">Getting Started</h4></li><li ng-repeat="page in docs.guides"><a side-nav-link="/guides/{{page.id}}">{{page.title}}</a></li></ul><ul class="page-sections" ng-if="docs.services.length"><li><h4 class="list-item--heading">API</h4></li><li ng-repeat="service in docs.services"><a side-nav-link="/{{service.type}}">{{service.title || service.type}}</a><ul class="sub-sections" ng-if="service.nav && docs.isActive(service.type)"><li ng-repeat="page in service.nav"><a side-nav-link="/{{page.type}}">{{page.title || page.type}}</a></li></ul></li></ul><ul class="external-links"><li><a ng-href="https://github.com/GoogleCloudPlatform/{{::moduleName}}" title="Google Cloud on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon"> GitHub</a></li><li><a ng-href="https://github.com/GoogleCloudPlatform/{{::moduleName}}/issues" title="Google Cloud issues on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon"> Issues</a></li><li><a ng-href="http://stackoverflow.com/questions/tagged/{{::moduleName}}" title="Google Cloud on StackOverflow" class="skip-external-link"><img src="src/images/icon-link-stackoverflow.svg" alt="StackOverflow icon"> StackOverflow</a></li><li><a ng-href="{{::package.href}}" ng-attr-title="Google Cloud on {{::package.title}}" class="skip-external-link"><img src="src/images/icon-link-package-manager.svg" ng-attr-alt="{{::package.title}} icon"> {{::package.title}}</a></li></ul></nav></article>'),e.put("app/guide/guide.html",'<page-header title="guide.title"><div class="row row--right" ng-if="guide.editUrl"><div class="col margin-vertical"><a ng-href="{{guide.editUrl}}" class="v-btn" title="Edit on Github"><img src="src/images/icon-link-github.svg"> Edit on GitHub</a></div></div></page-header><version-switcher class="invisible-lg side-nav--meta--top"></version-switcher><article class="content"><markdown ng-repeat="content in guide.contents" ng-include="content"></markdown></article>'),e.put("app/home/home.html",'<header class="page-header" role="banner"><div class="row"><div class="col"><h1 class="logo"><img src="src/images/logo-full.svg" alt="Google Cloud Platform"></h1></div><div class="col"><div language-switcher="" class="language-switcher--home"></div></div></div></header><article role="main" class="main" ng-include="home.contentUrl"></article>'),e.put("app/service/service.html",'<page-header title="service.title"></page-header><version-switcher class="invisible-lg side-nav--meta--top"></version-switcher><article class="content"><div ng-if="::docs.overviewFileUrl"><h3 class="sub-heading toggle" ng-click="service.showGettingStarted = !service.showGettingStarted"><div class="toggler"><span ng-if="!service.showGettingStarted">▹</span> <span ng-if="service.showGettingStarted">▿</span></div><span>Getting Started</span></h3><article ng-if="::docs.overviewFileUrl" ng-show="service.showGettingStarted" ng-include="docs.overviewFileUrl"></article><hr></div><article ng-if="::((!service.overview && service.description) || service.resources.length)" class="description"><h3>{{::service.name}} Overview</h3><div ng-if="service.description" bind-html-compile="service.description"></div><section ng-if="service.resources.length"><h4>More Information</h4><ul class="resource-links"><li ng-repeat="resource in service.resources"><a ng-href="{{resource.link}}">{{resource.title}}</a></li></ul></section><section ng-if="service.examples.length"><h4>Example</h4><div ng-repeat="example in service.examples"><div ng-if="example.caption" bind-html-compile="example.caption"></div><div ng-if="example.code" class="code-block"><pre><code class="hljs {{::markdown}}" bind-html-compile="example.code"></code></pre></div></div></section></article><article ng-repeat="method in service.methods"><div ng-if="method.isConstructor" class="notice">Available methods: <span ng-repeat="method in service.methods"><a ui-sref="docs.service({ method: method.id })">{{method.name}}</a>{{$last ? \'\' : \', \'}}</span></div><h3 id="{{::method.id}}" class="method-heading"><a class="permalink" ui-sref="docs.service({ method: method.id })"><span>{{::method.typeSymbol}}</span> {{::method.name}}</a></h3><div ng-if="::(method.isConstructor && service.overview)" bind-html-compile="service.overview"></div><div bind-html-compile="method.description"></div><section ng-if="method.params.length"><h4>Parameters</h4><table class="table"><tbody><tr ng-repeat="param in method.params" ng-class="{ \'param-optional\': param.optional, \'param-nullable\': param.nullable }"><th scope="row" class="param"><span ng-if="param.parent" class="param-parent"><div>{{::param.parent}}</div>↳</span> {{::param.name}}</th><td class="param-types" bind-html-compile="param.types"></td><td class="param-description" bind-html-compile="param.description"></td></tr></tbody></table></section><section ng-if="method.returns.length"><h4>Returns</h4><p bind-html-compile="method.returns[0]"></p></section><section ng-if="method.examples.length"><h4>Example</h4><div ng-repeat="example in method.examples"><div ng-if="example.caption" bind-html-compile="example.caption"></div><div ng-if="example.code" class="code-block"><pre><code class="hljs {{::markdown}}" bind-html-compile="example.code"></code></pre></div></div></section><section><h4>More Information</h4><ul class="resource-links"><li><a ng-href="https://github.com/GoogleCloudPlatform/{{moduleName}}/blob/{{docs.version}}/{{method.source}}">Source Code</a></li><li ng-repeat="resource in method.resources"><a ng-href="{{resource.link}}">{{resource.title}}</a></li></ul></section></article></article>'),e.put("app/components/dropdown/dropdown.html",'<nav class="dropdown" ng-class="{ open: dropdown.isOpen }"><div class="dropdown-current" ng-click="dropdown.isOpen = !dropdown.isOpen">{{dropdown.selected}}</div><div ng-click="dropdown.isOpen = false"><ul class="menu" ng-transclude=""></ul></div></nav>'),e.put("app/components/language-switcher/language-switcher.html",'<dropdown selected="friendlyLang" class="language-switcher"><li ng-if="docs.guides.length" class="invisible-lg"><h4 class="list-item--heading">Getting Started</h4></li><li ng-repeat="page in docs.guides" class="invisible-lg"><a side-nav-link="/guides/{{page.id}}">{{page.title}}</a></li><li ng-if="docs.services.length" class="invisible-lg"><h4 class="list-item--heading">API</h4></li><li ng-repeat="service in docs.services" class="menu--extra-links-item invisible-lg"><a side-nav-link="/{{service.type}}">{{service.title || service.type}}</a><ul class="sub-sections" ng-if="service.nav"><li ng-repeat="page in service.nav"><a side-nav-link="/{{page.type}}">{{page.title || page.type}}</a></li></ul></li><li class="invisible-lg"><h4 class="list-item--heading">Modules</h4></li><li class="invisible-lg" ng-repeat="module in modules"><a ui-sref="docs.service({ module: module.id, version: module.versions[0], serviceId: module.defaultService })" ng-attr-title="{{::module.name}}">{{::module.name}}</a></li><li class="invisible-lg"><h4 class="list-item--heading">External Resources</h4></li><li class="invisible-lg"><a ng-href="https://github.com/GoogleCloudPlatform/{{::moduleName}}" title="google-cloud on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon" class="menu-icon"> GitHub</a></li><li class="invisible-lg"><a ng-href="https://github.com/GoogleCloudPlatform/{{::moduleName}}/issues" title="google-cloud issues on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon" class="menu-icon"> Issues</a></li><li class="invisible-lg"><a ng-href="http://stackoverflow.com/questions/tagged/{{::moduleName}}" title="google-cloud on StackOverflow" class="skip-external-link"><img src="src/images/icon-link-stackoverflow.svg" alt="StackOverflow icon" class="menu-icon"> StackOverflow</a></li><li class="invisible-lg"><a ng-href="{{::package.href}}" ng-attr-title="Google Cloud on {{::package.title}}" class="skip-external-link"><img src="src/images/icon-link-package-manager.svg" ng-attr-alt="{{::package.title}} icon" class="menu-icon"> {{::package.title}}</a></li><li class="invisible-lg"><h4 class="list-item--heading">Google Cloud Platform Libraries</h4></li><li ng-repeat="lang in langs"><a ng-href="https://googlecloudplatform.github.io/{{::lang.repo}}" ng-attr-title="{{::lang.repo}}" class="skip-external-link"><img ng-src="src/images/icon-lang-{{::lang.key}}.svg" ng-attr-alt="google-cloud-{{::lang.key}}" class="menu-icon"> {{::lang.friendly}}</a></li></dropdown>'),e.put("app/components/module-switcher/module-switcher.html",'<dropdown selected="selected" class="module-switcher"><li ng-repeat="module in modules"><a ui-sref="docs.service({ module: module.id, version: module.versions[0], serviceId: module.defaultService })" ng-attr-title="{{::module.name}}"><span class="module-name">{{::module.name}}</span> <span class="module-version">latest: {{::module.versions[0]}}</span></a></li></dropdown>'),e.put("app/components/page-header/page-header.html",'<header class="docs-header"><div class="row"><div class="col-60 margin-vertical"><h1 class="page-title">{{::title}}</h1></div><div class="col-40" ng-transclude=""></div></div></header>'),e.put("app/components/version-switcher/version-switcher.html",'<div class="side-nav--meta"><div class="row row--sm"><div class="col"><small><em>Browsing Version</em></small> &nbsp;<select ng-model="docs.selectedVersion" ng-options="version for version in docs.versions" ng-change="docs.loadVersion(docs.selectedVersion)"></select><div ng-if="selectedVersion.name === \'master\' && docs.lastBuiltDate"><small><em>Docs last built {{docs.lastBuiltDate | date : longDate}}.</em></small></div></div></div></div>')}]);