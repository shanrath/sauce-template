"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[593],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Getting started",c={unversionedId:"storybook/getting-started",id:"storybook/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this URL.",source:"@site/docs/storybook/getting-started.md",sourceDirName:"storybook",slug:"/storybook/getting-started",permalink:"/sauce-template/storybook/getting-started",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/docs/storybook/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Dark Mode Feature",permalink:"/sauce-template/styling/dark-mode"}},u=[{value:"UI Categories",id:"ui-categories",children:[],level:2},{value:"Making changes to Storybook",id:"making-changes-to-storybook",children:[],level:2},{value:"Adding a new category",id:"adding-a-new-category",children:[],level:2},{value:"Adding a new UI element",id:"adding-a-new-ui-element",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this ",(0,a.kt)("a",{parentName:"p",href:"https://sauced-components.netlify.app/"},"URL"),"."),(0,a.kt)("p",null,"To run storybook, use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run storybook\n")),(0,a.kt)("h2",{id:"ui-categories"},"UI Categories"),(0,a.kt)("p",null,"Storybook is broken into several categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("b",null,"Button:")," These are the button elements that appear in the project in various forms. They primarily are the Button component in the project but can also be icons."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Cards:")," These are the main container elements in the project. Each item represents a live component in their current form in the project."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Primitives: These are the basic styling of base HTML components.")),(0,a.kt)("li",null,(0,a.kt)("b",null,"Nav:")," This is the main navigation bar for the project. There are two states, when there is no user logged in and when a user is logged in."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Footer:")," This represents the various footers for the project."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Homepage:")," This is the main component for the project homepage and shows the home page in its current form."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Miscellaneous:")," These are components that currently don't fit neatly into the above categories.")),(0,a.kt)("h2",{id:"making-changes-to-storybook"},"Making changes to Storybook"),(0,a.kt)("p",null,"This section details how to make changes to Storybook, mainly creating new categories or UI elements."),(0,a.kt)("h2",{id:"adding-a-new-category"},"Adding a new category"),(0,a.kt)("p",null,"To add a new category, a new file needs to be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"/stories"),". Please follow the naming convention of ",(0,a.kt)("inlineCode",{parentName:"p"},"*Previous File Number + 1*-*Name of Story Capitalized*-stories.js")," when creating a new file. In the file ensure you have this code in the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export default {\n    title: "*Name of category*"\n};\n')),(0,a.kt)("h2",{id:"adding-a-new-ui-element"},"Adding a new UI element"),(0,a.kt)("p",null,"To add a new UI element to to an existing category, add the following code to that category's file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export const *Name of UI Element* = () => (\n    \n);\n")))}d.isMDXComponent=!0}}]);