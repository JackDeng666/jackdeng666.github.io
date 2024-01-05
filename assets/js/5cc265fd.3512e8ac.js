"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[5037],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,u=d["".concat(o,".").concat(g)]||d[g]||m[g]||s;return n?a.createElement(u,p(p({ref:t},c),{},{components:n})):a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<s;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(8957),r=(n(9496),n(9613));const s={id:"dto-validation-and-openapi-doc",sidebar_label:"\u524d\u540e\u7aef\u5171\u7528 DTO \u6821\u9a8c",title:"\u524d\u540e\u7aef\u5171\u7528\u4e00\u5957 DTO \u6821\u9a8c\u548c openapi \u6587\u6863\u7684\u5f15\u5165"},p=void 0,i={unversionedId:"ying-chat/dto-validation-and-openapi-doc",id:"ying-chat/dto-validation-and-openapi-doc",title:"\u524d\u540e\u7aef\u5171\u7528\u4e00\u5957 DTO \u6821\u9a8c\u548c openapi \u6587\u6863\u7684\u5f15\u5165",description:"\u672c\u8282\u6765\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7aef\u5bf9\u524d\u7aef\u4f20\u8f93\u6570\u636e\u7684\u6821\u9a8c\uff0c\u56e0\u4e3a\u6211\u4eec\u662f\u4e00\u4e2a\u524d\u540e\u7aef\u540c\u4e00\u4e2a\u4ed3\u5e93\u7684 monorepo \u9879\u76ee\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u628a DTO \u62bd\u79bb\u5230\u4e00\u4e2a\u5171\u4eab\u5305\u4e2d\u53bb\uff0c\u90a3\u4e48\u524d\u540e\u7aef\u5c31\u76f4\u63a5\u5171\u7528\u4e00\u5957\u68c0\u9a8c\u903b\u8f91\u3002",source:"@site/docs/ying-chat/08-dto-validation-and-openapi-doc.md",sourceDirName:"ying-chat",slug:"/ying-chat/dto-validation-and-openapi-doc",permalink:"/docs/ying-chat/dto-validation-and-openapi-doc",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"dto-validation-and-openapi-doc",sidebar_label:"\u524d\u540e\u7aef\u5171\u7528 DTO \u6821\u9a8c",title:"\u524d\u540e\u7aef\u5171\u7528\u4e00\u5957 DTO \u6821\u9a8c\u548c openapi \u6587\u6863\u7684\u5f15\u5165"},sidebar:"yingChat",previous:{title:"\u5b9e\u73b0\u6ce8\u518c\u63a5\u53e3",permalink:"/docs/ying-chat/register-api"},next:{title:"\u5bf9\u63a5\u6ce8\u518c\u63a5\u53e3",permalink:"/docs/ying-chat/docking-register-api"}},o={},l=[{value:"\u670d\u52a1\u7aef DTO \u6821\u9a8c",id:"\u670d\u52a1\u7aef-dto-\u6821\u9a8c",level:3},{value:"openapi \u6587\u6863",id:"openapi-\u6587\u6863",level:3},{value:"\u81ea\u52a8\u751f\u6210\u6587\u6863",id:"\u81ea\u52a8\u751f\u6210\u6587\u6863",level:3},{value:"\u4e0e\u524d\u7aef\u5171\u4eab DTO",id:"\u4e0e\u524d\u7aef\u5171\u4eab-dto",level:2},{value:"shared \u5305\u51c6\u5907",id:"shared-\u5305\u51c6\u5907",level:3},{value:"\u670d\u52a1\u7aef\u5f15\u5165",id:"\u670d\u52a1\u7aef\u5f15\u5165",level:3},{value:"\u5ba2\u6237\u7aef\u5f15\u5165",id:"\u5ba2\u6237\u7aef\u5f15\u5165",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u6765\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7aef\u5bf9\u524d\u7aef\u4f20\u8f93\u6570\u636e\u7684\u6821\u9a8c\uff0c\u56e0\u4e3a\u6211\u4eec\u662f\u4e00\u4e2a\u524d\u540e\u7aef\u540c\u4e00\u4e2a\u4ed3\u5e93\u7684 monorepo \u9879\u76ee\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u628a DTO \u62bd\u79bb\u5230\u4e00\u4e2a\u5171\u4eab\u5305\u4e2d\u53bb\uff0c\u90a3\u4e48\u524d\u540e\u7aef\u5c31\u76f4\u63a5\u5171\u7528\u4e00\u5957\u68c0\u9a8c\u903b\u8f91\u3002"),(0,r.kt)("h3",{id:"\u670d\u52a1\u7aef-dto-\u6821\u9a8c"},"\u670d\u52a1\u7aef DTO \u6821\u9a8c"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u53bb\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"class-validator")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"class-transformer")," \u5e93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/"',title:'"/"'},"pnpm i class-validator class-transformer -w\n")),(0,r.kt)("p",null,"\u7136\u540e\u4fee\u6539\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.dto.ts")," \u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterDto")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.dto.ts"',title:'"apps/server/src/modules/user/auth.dto.ts"'},"import {\n  IsEmail,\n  IsNotEmpty,\n  Length,\n  Matches,\n  MaxLength,\n  MinLength\n} from 'class-validator'\n\nexport class RegisterDto {\n  @MinLength(6)\n  @MaxLength(20)\n  @IsNotEmpty()\n  username: string\n\n  @IsEmail()\n  @IsNotEmpty()\n  email: string\n\n  @Matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*;',.])/, {\n    message: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`\n  })\n  @IsNotEmpty()\n  password: string\n\n  @Length(6)\n  @IsNotEmpty()\n  code: string\n}\n")),(0,r.kt)("p",null,"\u5728\u5165\u53e3\u6587\u4ef6\u91cc\u7528\u4e00\u4e0b\u5b98\u65b9\u7684\u5168\u5c40\u8fc7\u6ee4\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/main.ts"',title:'"apps/server/src/main.ts"'},"// ...\nimport { Logger, ValidationPipe } from '@nestjs/common'\n// ...\n\nasync function bootstrap() {\n  // ...\n\n  app.useGlobalPipes(\n    new ValidationPipe({\n      whitelist: true, // \u5982\u679c\u8bbe\u7f6e\u4e3atrue, validator\u5c06\u5265\u79bb\u88ab\u9a8c\u8bc1\u5bf9\u8c61\u4e2d\u6ca1\u6709\u4efb\u4f55\u88c5\u9970\u5668\u7684\u4efb\u4f55\u5c5e\u6027\u3002\n      forbidNonWhitelisted: true, // \u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u9a8c\u8bc1\u5668\u5c06\u629b\u51fa\u9519\u8bef\uff0c\u800c\u4e0d\u662f\u5265\u79bb\u975e\u767d\u540d\u5355\u5c5e\u6027\uff0c whitelist \u4e3a true \u624d\u751f\u6548\n      forbidUnknownValues: true // \u8bbe\u7f6e\u4e3atrue\u5c06\u5bfc\u81f4\u672a\u77e5\u5bf9\u8c61\u9a8c\u8bc1\u5931\u8d25\u3002\u503c\u5fc5\u987b\u88abclass-validator\u7684\u88c5\u9970\u5668\u88c5\u9970\n    })\n  )\n\n  await app.listen(apiConf.port)\n\n  // ...\n}\nbootstrap()\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u4e00\u4e0b\u524d\u9762\u7684\u6ce8\u518c\u63a5\u53e3\uff0c\u628a\u503c\u6539\u4e3a\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7909).Z,width:"1175",height:"905"})),(0,r.kt)("h3",{id:"openapi-\u6587\u6863"},"openapi \u6587\u6863"),(0,r.kt)("p",null,"\u63a5\u4e0b\u91cc\u5148\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi")," \u6587\u6863\u5f15\u5165\u4e00\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/openapi/introduction"},"openapi")),(0,r.kt)("p",null,"\u5148\u5b89\u88c5\u4e00\u4e0b\u4f9d\u8d56\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps/server"',title:'"apps/server"'},"pnpm i @nestjs/swagger\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/main.ts"',title:'"apps/server/src/main.ts"'},"// ...\nimport { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'\n\nasync function bootstrap() {\n  // ...\n\n  const config = new DocumentBuilder()\n    .setTitle('ying chat app')\n    .setDescription('a real-time chat app')\n    .setVersion('1.0')\n    .build()\n  const document = SwaggerModule.createDocument(app, config, {\n    ignoreGlobalPrefix: true\n  })\n  SwaggerModule.setup('doc', app, document)\n\n  await app.listen(apiConf.port)\n\n  // ...\n}\nbootstrap()\n")),(0,r.kt)("p",null,"\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthController")," \u52a0\u4e0a\u4e00\u4e9b\u6587\u6863\u63cf\u8ff0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\nimport { ApiTags, ApiOperation } from '@nestjs/swagger'\n\n@ApiTags('auth')\n@Controller('auth')\nexport class AuthController {\n  // ...\n\n  @ApiOperation({\n    summary: 'register'\n  })\n  @Post('register')\n  register(@Body() registerDto: RegisterDto) {\n    return this.authService.register(registerDto)\n  }\n\n  @ApiOperation({\n    summary: 'sendCode',\n    description: 'send email verification code for register'\n  })\n  @Post('sendCode')\n  sendCode(@Body('email') email: string) {\n    return this.authService.sendCode(email)\n  }\n}\n")),(0,r.kt)("p",null,"\u6253\u5f00\u6587\u6863\u94fe\u63a5 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/doc"},"http://localhost:3000/doc")),(0,r.kt)("p",null,"\u6b64\u65f6\u4f1a\u53d1\u73b0\u4e4b\u524d\u5199\u7684\u6ce8\u518c\u63a5\u53e3\uff0c\u663e\u793a\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterDto"),"\uff0c\u4f46\u5e76\u6ca1\u6709\u53c2\u6570\u7c7b\u578b\u7684\u63cf\u8ff0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3280).Z,width:"617",height:"558"})),(0,r.kt)("p",null,"\u52a0\u4e0a\u4e0b\u9762\u7684\u5185\u5bb9\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm dev")," \u91cd\u542f\u6574\u4e2a\u9879\u76ee\uff0c\u5373\u53ef\u81ea\u52a8\u83b7\u53d6 DTO \u7684\u53c2\u6570\u63cf\u8ff0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="apps/server/nest-cli.json"',title:'"apps/server/nest-cli.json"'},'{\n  "$schema": "https://json.schemastore.org/nest-cli",\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "generateOptions": {\n    "spec": false\n  },\n  "compilerOptions": {\n    "deleteOutDir": true,\n    "plugins": ["@nestjs/swagger"] // \u52a0\u4e0a\u8fd9\u53e5\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4031).Z,width:"939",height:"651"})),(0,r.kt)("h3",{id:"\u81ea\u52a8\u751f\u6210\u6587\u6863"},"\u81ea\u52a8\u751f\u6210\u6587\u6863"),(0,r.kt)("p",null,"\u4e00\u822c\u7684 Api \u8bf7\u6c42\u5de5\u5177\u90fd\u5b9e\u73b0\u4e86\u5bf9 openapi \u6587\u6863\u6570\u636e\u7684\u8f6c\u6362\uff0c\u8fd9\u91cc\u6211\u7528\u4e2a\u4eba\u4f7f\u7528 Apipost7 \u4f5c\u4e3a\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9556).Z,width:"286",height:"312"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7644).Z,width:"1201",height:"937"})),(0,r.kt)("p",null,"\u5176\u5b9e\u5c31\u662f\u76f4\u63a5\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/doc-json")," \u5373\u53ef\u81ea\u52a8\u628a\u63a5\u53e3\u90fd\u89e3\u6790\u5230\u6587\u6863\u4e0a\u3002"),(0,r.kt)("h2",{id:"\u4e0e\u524d\u7aef\u5171\u4eab-dto"},"\u4e0e\u524d\u7aef\u5171\u4eab DTO"),(0,r.kt)("h3",{id:"shared-\u5305\u51c6\u5907"},"shared \u5305\u51c6\u5907"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u6587\u4ef6\u5939\uff0c\u518d\u5728\u91cc\u9762\u52a0\u4e0a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"shared")," \u6587\u4ef6\u5939\u3002"),(0,r.kt)("p",null,"\u5f80 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u52a0\u4e0a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),"\uff0c\u8fd9\u6837 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u4e0b\u9762\u6240\u6709\u7684\u5305\u90fd\u4f1a\u7eb3\u5165 pnpm \u7684\u9879\u76ee\u7ba1\u7406\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - 'apps/*'\n  - 'packages/*'\n")),(0,r.kt)("p",null,"\u8fd9\u6837 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u6587\u4ef6\u5939\u6211\u4eec\u7528\u6765\u653e\u4e0a\u53ef\u4ee5\u88ab\u5176\u4ed6\u9879\u76ee\u4f7f\u7528\u7684\u5e93\uff0c\u901a\u8fc7 pnpm \u7684\u7ba1\u7406\u53ef\u4ee5\u81ea\u7531\u5b89\u88c5\u5230\u5176\u4ed6\u5e94\u7528\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shared")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u5b9a\u4e49\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/package.json"',title:'"packages/shared/package.json"'},'{\n  "name": "@ying-chat/shared",\n  "private": true,\n  "version": "0.0.0",\n  "description": "local shared package",\n  "author": "Jack Ying",\n  "license": "MIT"\n}\n')),(0,r.kt)("p",null,"\u518d\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6587\u4ef6\uff0c\u8ba9\u672c\u9879\u76ee\u652f\u6301 ts \u7684\u88c5\u9970\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/tsconfig.json"',title:'"packages/shared/tsconfig.json"'},'{\n  "compilerOptions": {\n    "module": "CommonJS",\n    "target": "ESNext",\n    "moduleResolution": "Node",\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "declaration": true,\n    "sourceMap": true,\n    "rootDir": "./src",\n    "outDir": "./dist/cjs"\n  }\n}\n')),(0,r.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"dto")," \u6587\u4ef6\uff0c\u7136\u540e\u628a server \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.dto.ts")," \u79fb\u52a8\u5230\u8fd9\u91cc\u6765\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/shared/src/dto/auth.dto.ts"',title:'"packages/shared/src/dto/auth.dto.ts"'},"import {\n  IsEmail,\n  IsNotEmpty,\n  Length,\n  Matches,\n  MaxLength,\n  MinLength\n} from 'class-validator'\n\nexport class RegisterDto {\n  @MinLength(6)\n  @MaxLength(20)\n  @IsNotEmpty()\n  username: string\n\n  @IsEmail()\n  @IsNotEmpty()\n  email: string\n\n  @Matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*;',.])/, {\n    message: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`\n  })\n  @IsNotEmpty()\n  password: string\n\n  @Length(6)\n  @IsNotEmpty()\n  code: string\n}\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dto")," \u6587\u4ef6\u5939\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u5bfc\u51fa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/shared/src/dto/index.ts"',title:'"packages/shared/src/dto/index.ts"'},"export * from './auth.dto'\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u5bfc\u51fa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/shared/src/index.ts"',title:'"packages/shared/src/index.ts"'},"export * from './dto'\n")),(0,r.kt)("p",null,"\u518d\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u52a0\u4e0a\u8fd9\u4e24\u53e5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/package.json"',title:'"packages/shared/package.json"'},'{\n  // ...\n  "main": "./dist/cjs/index.js",\n  "scripts": {\n    "build": "rm -rf dist && tsc -b tsconfig.json"\n  }\n}\n')),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u4e0b\u6240\u6709\u9879\u76ee\u7684\u6253\u5305\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "ying-chat",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    // ...\n    "dev": "pnpm --reporter append-only -F ./apps/* dev",\n    "build:pkg": "pnpm --reporter append-only -F ./packages/* build" // \u52a0\u4e0a\n  }\n  // ...\n}\n')),(0,r.kt)("p",null,"\u6700\u540e\u5728\u6839\u76ee\u5f55\u6267\u884c\u4e00\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/"',title:'"/"'},"pnpm build:pkg\n")),(0,r.kt)("p",null,"\u6267\u884c\u5b8c\u540e\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"shared")," \u4e0b\u9762\u591a\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u6587\u4ef6\u5939\uff0c\u5230\u65f6\u4ece\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u5f15\u5165\u7684\u5305\u6587\u4ef6\u5b9e\u9645\u662f\u6253\u5305\u540e\u7684\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u670d\u52a1\u7aef\u5f15\u5165"},"\u670d\u52a1\u7aef\u5f15\u5165"),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u7aef\u76ee\u5f55\u4e0b\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps/server"',title:'"apps/server"'},"pnpm i @ying-chat/shared\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u7aef\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u591a\u4e86\u4e00\u4e2a\u8fd9\u6837\u7684\u4f9d\u8d56\u9879\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},'"@ying-chat/shared": "workspace:^",'),"\uff0c\u8fd9\u8868\u660e\u6b64\u4f9d\u8d56\u9879\u6765\u81ea\u672c\u5730\u7684\u5de5\u4f5c\u533a\u76ee\u5f55\uff0cpnpm \u4f1a\u81ea\u52a8\u5e2e\u6211\u4eec\u627e\u5230\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthController")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthService")," \u539f\u6765\u7684\u5f15\u5165\u7684\u4f9d\u8d56\u6539\u6389\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\nimport { RegisterDto } from '@ying-chat/shared'\n\n// ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\nimport { RegisterDto } from '@ying-chat/shared'\n\n// ...\n")),(0,r.kt)("p",null,"\u539f\u6765\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.dto.ts")," \u5c31\u53ef\u4ee5\u5220\u6389\u4e86\uff0c\u4e0b\u9762\u518d\u81ea\u884c\u53bb\u8c03\u8bd5\u4e00\u4e0b\u770b\u770b\u6709\u6ca1\u6709\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u5ba2\u6237\u7aef\u5f15\u5165"},"\u5ba2\u6237\u7aef\u5f15\u5165"),(0,r.kt)("p",null,"\u5728\u5ba2\u6237\u7aef\u76ee\u5f55\u4e0b\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps/client"',title:'"apps/client"'},"pnpm i @ying-chat/shared\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u7aef\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u591a\u4e86\u4e00\u4e2a\u8fd9\u6837\u7684\u4f9d\u8d56\u9879\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},'"@ying-chat/shared": "workspace:^",'),"\uff0c\u5c31\u8bf4\u660e\u6210\u529f\u4e86\u3002"),(0,r.kt)("p",null,"\u5728\u6ce8\u518c\u9875\u9762\u968f\u4fbf\u5f15\u5165\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterDto"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/pages/account/register.tsx"',title:'"apps/client/src/pages/account/register.tsx"'},"// ...\nimport { RegisterDto } from '@ying-chat/shared'\n\nconsole.log(RegisterDto)\n// ...\n")),(0,r.kt)("p",null,"\u8fd9\u65f6\u5019\u4f1a\u53d1\u73b0\u524d\u7aef\u63a7\u5236\u53f0\u62a5\u4e86\u4e2a\u9519\u8bef ",(0,r.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: The requested module '/@fs/D:/MySourceCode/Projects/MyProject/ying-chat/packages/shared/dist/cjs/index.js?t=1704186767025' does not provide an export named 'RegisterDto'"),"\uff0c\u8fd9\u662f\u56e0\u4e3a shared \u5305\u6587\u4ef6\u53ea\u5bfc\u51fa\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"cjs")," \u89c4\u8303\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u9700\u8981\u518d\u5e26\u51fa\u4e00\u4efd ",(0,r.kt)("inlineCode",{parentName:"p"},"esm")," \u89c4\u8303\u7684\u4ee3\u7801\u624d\u80fd\u5728\u524d\u7aef\u9879\u76ee\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u5e93\u3002"),(0,r.kt)("p",null,"\u56de\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"shared")," \u5305\uff0c\u52a0\u5165\u4ee5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.esm.json")," \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/tsconfig.esm.json"',title:'"packages/shared/tsconfig.esm.json"'},'{\n  "compilerOptions": {\n    "module": "ESNext",\n    "target": "ES2021",\n    "moduleResolution": "Bundler",\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "declaration": true,\n    "sourceMap": true,\n    "rootDir": "./src",\n    "outDir": "./dist/esm"\n  }\n}\n')),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/package.json"',title:'"packages/shared/package.json"'},'{\n  // ...\n  "main": "./dist/cjs/index.js",\n  "module": "./dist/esm/index.js",\n  "scripts": {\n    "build": "rm -rf dist && tsc -b tsconfig.json && tsc -b tsconfig.esm.json"\n  }\n}\n')),(0,r.kt)("p",null,"\u91cd\u65b0\u6253\u5305\u4e00\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/"',title:'"/"'},"pnpm build:pkg\n")),(0,r.kt)("p",null,"\u8fd9\u65f6\u5019\u5ba2\u6237\u7aef\u9879\u76ee\u5c31\u4e0d\u4f1a\u518d\u62a5\u9519\u4e86\uff0c\u5982\u679c ts \u5728\u62a5\u7ea2\uff0c\u91cd\u542f\u4e00\u4e0b vscode \u5373\u53ef\uff0c\u672c\u8282\u5230\u6b64\u7ed3\u675f\u3002"))}m.isMDXComponent=!0},7909:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-5ea25b1b60913380df7b31d2713c0144.png"},9556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-35692d54b1fca8ebbca5879c09725eb1.png"},7644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-e44fddd3dd53ed678a47256a8277d326.png"},3280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-6e312089203b891eb5d1ebd2f99aa647.png"},4031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-b5423a9c3acadd50e5f2a7f080d3bb04.png"}}]);