"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[9868],{1714:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var o=e(3274),t=e(9128);const i={id:"group-api",sidebar_label:"\u7fa4\u7ec4\u76f8\u5173api\u5b9e\u73b0",title:"\u7fa4\u7ec4\u76f8\u5173api\u5b9e\u73b0"},s=void 0,p={id:"ying-chat/group-api",title:"\u7fa4\u7ec4\u76f8\u5173api\u5b9e\u73b0",description:"\u672c\u8282\u6765\u5b9e\u73b0\u7fa4\u7ec4\u76f8\u5173\u7684\u6240\u6709 api\u3002",source:"@site/docs/ying-chat/14-group-api.md",sourceDirName:"ying-chat",slug:"/ying-chat/group-api",permalink:"/docs/ying-chat/group-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"group-api",sidebar_label:"\u7fa4\u7ec4\u76f8\u5173api\u5b9e\u73b0",title:"\u7fa4\u7ec4\u76f8\u5173api\u5b9e\u73b0"},sidebar:"yingChat",previous:{title:"\u7528\u6237\u5934\u50cf\u548c\u96c6\u6210MinIO",permalink:"/docs/ying-chat/user-avatar-and-integrated-minio"},next:{title:"\u5ba2\u6237\u7aef\u5bf9\u63a5\u7fa4\u7ec4api",permalink:"/docs/ying-chat/docking-group-api"}},u={},a=[{value:"\u6dfb\u52a0\u4e00\u4e2a<code>GroupRoleType</code>\u679a\u4e3e",id:"\u6dfb\u52a0\u4e00\u4e2agrouproletype\u679a\u4e3e",level:3},{value:"\u7fa4\u5b9e\u4f53\u6dfb\u52a0",id:"\u7fa4\u5b9e\u4f53\u6dfb\u52a0",level:3},{value:"DTO \u51c6\u5907",id:"dto-\u51c6\u5907",level:3},{value:"\u5b9e\u73b0\u6240\u9700\u8981\u7684\u6240\u6709\u7fa4\u63a5\u53e3",id:"\u5b9e\u73b0\u6240\u9700\u8981\u7684\u6240\u6709\u7fa4\u63a5\u53e3",level:3}];function l(r){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u672c\u8282\u6765\u5b9e\u73b0\u7fa4\u7ec4\u76f8\u5173\u7684\u6240\u6709 api\u3002"}),"\n",(0,o.jsxs)(n.h3,{id:"\u6dfb\u52a0\u4e00\u4e2agrouproletype\u679a\u4e3e",children:["\u6dfb\u52a0\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"GroupRoleType"}),"\u679a\u4e3e"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="packages/shared/src/enum/group.enum.ts"',children:"export enum GroupRoleType {\r\n  Owner,\r\n  Member\r\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5bfc\u51fa\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="packages/shared/src/enum/index.ts"',children:"// ...\r\nexport * from './group.enum'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u7fa4\u5b9e\u4f53\u6dfb\u52a0",children:"\u7fa4\u5b9e\u4f53\u6dfb\u52a0"}),"\n",(0,o.jsxs)(n.p,{children:["\u5148\u6dfb\u52a0\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"GroupConversationEntity"}),"\u4f5c\u4e3a\u7528\u6237\u548c\u7fa4\u4e4b\u524d\u7684\u4e2d\u95f4\u8868\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/modules/db/entities/group-conversation.entity.ts"',children:"import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'\r\nimport { GroupRoleType } from '@ying-chat/shared'\r\nimport { BaseEntity } from './base.entity'\r\nimport { UserEntity } from './user.entity'\r\nimport { GroupEntity } from './group.entity'\r\n\r\n@Entity({ name: 'group_conversation' })\r\nexport class GroupConversationEntity extends BaseEntity {\r\n  @Column({\r\n    type: 'enum',\r\n    enum: GroupRoleType,\r\n    comment: '0 Owner; 1 Member;'\r\n  })\r\n  userRole: GroupRoleType\r\n\r\n  @Column({\r\n    nullable: true\r\n  })\r\n  lastMsgId: number\r\n\r\n  unreadNum?: number\r\n\r\n  @PrimaryColumn()\r\n  userId: number\r\n\r\n  @ManyToOne(() => UserEntity)\r\n  @JoinColumn()\r\n  user: UserEntity\r\n\r\n  @PrimaryColumn()\r\n  groupId: number\r\n\r\n  @ManyToOne(() => GroupEntity)\r\n  @JoinColumn()\r\n  group: GroupEntity\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u518d\u6dfb\u52a0\u4e00\u4e0b",(0,o.jsx)(n.code,{children:"GroupEntity"}),"\uff0c\u5173\u8054\u4e0a\u9762\u7684\u4e2d\u95f4\u8868\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/modules/db/entities/group.entity.ts"',children:"import {\r\n  Column,\r\n  Entity,\r\n  JoinColumn,\r\n  JoinTable,\r\n  ManyToMany,\r\n  ManyToOne,\r\n  OneToOne\r\n} from 'typeorm'\r\nimport { UserEntity } from './user.entity'\r\nimport { FileEntity } from './file.entity'\r\nimport { BaseEntity } from './base.entity'\r\n\r\n@Entity({ name: 'group' })\r\nexport class GroupEntity extends BaseEntity {\r\n  @Column({\r\n    length: 32\r\n  })\r\n  name: string\r\n\r\n  @Column({\r\n    length: 100,\r\n    nullable: true\r\n  })\r\n  description: string\r\n\r\n  @Column({\r\n    length: 32,\r\n    unique: true\r\n  })\r\n  inviteCode: string\r\n\r\n  @Column()\r\n  coverId: number\r\n\r\n  @OneToOne(() => FileEntity)\r\n  @JoinColumn()\r\n  cover: FileEntity\r\n\r\n  @Column()\r\n  createById: number\r\n\r\n  @ManyToOne(() => UserEntity)\r\n  @JoinColumn()\r\n  createBy: UserEntity\r\n\r\n  @ManyToMany(() => UserEntity)\r\n  @JoinTable({\r\n    name: 'group_conversation',\r\n    synchronize: false\r\n  })\r\n  users: UserEntity[]\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4fee\u6539\u4e00\u4e0b",(0,o.jsx)(n.code,{children:"UserEntity"}),"\uff0c\u5173\u8054\u4e0a\u9762\u7684\u4e2d\u95f4\u8868\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/modules/db/entities/user.entity.ts"',children:"// ...\r\nimport {\r\n  // ...\r\n  ManyToMany\r\n} from 'typeorm'\r\nimport { GroupEntity } from './group.entity'\r\n\r\n@Entity({ name: 'user' })\r\nexport class UserEntity extends BaseEntity {\r\n  // ...\r\n\r\n  @ManyToMany(() => GroupEntity)\r\n  groups: GroupEntity[]\r\n\r\n  // ...\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u65f6\u5019\u670d\u52a1\u7aef\u4f1a\u62a5\u9519\uff0c\u540e\u9762\u6dfb\u52a0\u597d",(0,o.jsx)(n.code,{children:"GroupModule"}),"\u52a0\u8f7d\u597d\u7fa4\u5b9e\u4f53\u540e\u5c31\u4e0d\u4f1a\u62a5\u9519\u4e86\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"dto-\u51c6\u5907",children:"DTO \u51c6\u5907"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="packages/shared/src/dto/create-group.dto.ts"',children:"import {\r\n  IsNotEmpty,\r\n  IsNumber,\r\n  IsOptional,\r\n  MaxLength,\r\n  MinLength\r\n} from 'class-validator'\r\n\r\nexport class CreateGroupDto {\r\n  @MinLength(2)\r\n  @MaxLength(32)\r\n  @IsNotEmpty()\r\n  name: string\r\n\r\n  @IsNumber()\r\n  @IsNotEmpty()\r\n  coverId: number\r\n\r\n  @MinLength(2)\r\n  @MaxLength(100)\r\n  @IsOptional()\r\n  description?: string\r\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5bfc\u51fa\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="packages/shared/src/dto/index.ts"',children:"// ...\r\nexport * from './create-group.dto'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u5b9e\u73b0\u6240\u9700\u8981\u7684\u6240\u6709\u7fa4\u63a5\u53e3",children:"\u5b9e\u73b0\u6240\u9700\u8981\u7684\u6240\u6709\u7fa4\u63a5\u53e3"}),"\n",(0,o.jsxs)(n.p,{children:["\u65b0\u5efa\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"group"}),"\u6587\u4ef6\u5939\uff0c\u7136\u540e\u521b\u5efa",(0,o.jsx)(n.code,{children:"GroupService"}),"\uff0c\u5728\u91cc\u9762\u4e00\u6b21\u6027\u5b9e\u73b0\u521b\u5efa\u7fa4\u7ec4\uff0c\u4e0a\u4f20\u7fa4\u5c01\u9762\uff0c\u52a0\u5165\u7fa4\u7ec4\uff0c\u83b7\u53d6\u7528\u6237\u7fa4\u7ec4\u5217\u8868\uff0c\u83b7\u53d6\u7fa4\u8be6\u60c5\u7684\u6240\u6709\u51fd\u6570\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/modules/group/group.service.ts"',children:"import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'\r\nimport { InjectRepository } from '@nestjs/typeorm'\r\nimport { Repository } from 'typeorm'\r\nimport { nanoid } from 'nanoid'\r\nimport { GroupEntity, GroupConversationEntity } from '@/modules/db/entities'\r\nimport { FileService } from '@/modules/file/file.service'\r\nimport { CreateGroupDto, FileType, GroupRoleType } from '@ying-chat/shared'\r\n\r\n@Injectable()\r\nexport class GroupService {\r\n  @InjectRepository(GroupEntity)\r\n  private readonly groupRepository: Repository<GroupEntity>\r\n\r\n  @InjectRepository(GroupConversationEntity)\r\n  private readonly groupConversationRepository: Repository<GroupConversationEntity>\r\n\r\n  @Inject()\r\n  private readonly fileService: FileService\r\n\r\n  async create(createGroupDto: CreateGroupDto, userId: number) {\r\n    const newGroup = new GroupEntity()\r\n    newGroup.name = createGroupDto.name\r\n    newGroup.description = createGroupDto.description\r\n    newGroup.coverId = createGroupDto.coverId\r\n    newGroup.createById = userId\r\n    newGroup.inviteCode = nanoid()\r\n\r\n    const group = await this.groupRepository.save(newGroup)\r\n\r\n    const newGroupConversation = new GroupConversationEntity()\r\n    newGroupConversation.userId = userId\r\n    newGroupConversation.groupId = group.id\r\n    newGroupConversation.userRole = GroupRoleType.Owner\r\n\r\n    await this.groupConversationRepository.save(newGroupConversation)\r\n\r\n    return group\r\n  }\r\n\r\n  async uploadGroupCover(file: Express.Multer.File, userId: number) {\r\n    const minioFile = await this.fileService.uploadFile({\r\n      file,\r\n      fileType: FileType.Cover,\r\n      userId\r\n    })\r\n\r\n    return minioFile\r\n  }\r\n\r\n  async joinGroup(userId: number, inviteCode: string) {\r\n    const group = await this.groupRepository.findOne({\r\n      where: {\r\n        inviteCode\r\n      }\r\n    })\r\n    if (!group) {\r\n      throw new HttpException('invite code invalid', HttpStatus.NOT_ACCEPTABLE)\r\n    }\r\n    const conversationExists = await this.groupConversationRepository.findOne({\r\n      where: {\r\n        userId,\r\n        groupId: group.id\r\n      }\r\n    })\r\n    if (conversationExists) {\r\n      throw new HttpException(\r\n        'you have already in the group',\r\n        HttpStatus.NOT_ACCEPTABLE\r\n      )\r\n    }\r\n\r\n    const newGroupConversation = new GroupConversationEntity()\r\n    newGroupConversation.userId = userId\r\n    newGroupConversation.groupId = group.id\r\n    newGroupConversation.userRole = GroupRoleType.Member\r\n    await this.groupConversationRepository.save(newGroupConversation)\r\n  }\r\n\r\n  async getUserGroupList(userId: number) {\r\n    const groups = await this.groupConversationRepository.find({\r\n      where: { userId },\r\n      relations: ['group', 'group.cover']\r\n    })\r\n\r\n    return {\r\n      owner: groups\r\n        .filter(g => g.userRole === GroupRoleType.Owner)\r\n        .map(g => ({\r\n          ...g.group,\r\n          inviteCode: undefined\r\n        })),\r\n      member: groups\r\n        .filter(g => g.userRole === GroupRoleType.Member)\r\n        .map(g => ({\r\n          ...g.group,\r\n          inviteCode: undefined\r\n        }))\r\n    }\r\n  }\r\n\r\n  async getGroupDetail(id: number, userId: number) {\r\n    const group = await this.groupRepository.findOne({\r\n      where: { id },\r\n      select: ['users'],\r\n      relations: ['cover', 'users', 'users.avatar']\r\n    })\r\n\r\n    if (userId !== group.createById) {\r\n      delete group.inviteCode\r\n    }\r\n\r\n    return group\r\n  }\r\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u628a\u63a5\u53e3\u90fd\u52a0\u4e0a\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/modules/group/group.controller.ts"',children:"import {\r\n  Controller,\r\n  Get,\r\n  Post,\r\n  Body,\r\n  Param,\r\n  Req,\r\n  UseInterceptors,\r\n  UploadedFile,\r\n  ParseFilePipe,\r\n  MaxFileSizeValidator,\r\n  FileTypeValidator\r\n} from '@nestjs/common'\r\nimport { Request } from 'express'\r\nimport { ApiOperation, ApiTags } from '@nestjs/swagger'\r\nimport { FileInterceptor } from '@nestjs/platform-express'\r\nimport { CreateGroupDto } from '@ying-chat/shared'\r\nimport { GroupService } from './group.service'\r\n\r\n@ApiTags('group')\r\n@Controller('group')\r\nexport class GroupController {\r\n  constructor(private readonly groupService: GroupService) {}\r\n\r\n  @ApiOperation({\r\n    summary: 'Create group'\r\n  })\r\n  @Post()\r\n  create(@Body() createGroupDto: CreateGroupDto, @Req() req: Request) {\r\n    return this.groupService.create(createGroupDto, req.userId)\r\n  }\r\n\r\n  @ApiOperation({\r\n    summary: 'Upload group cover'\r\n  })\r\n  @Post('cover')\r\n  @UseInterceptors(FileInterceptor('file'))\r\n  uploadUserAvatar(\r\n    @Req() req: Request,\r\n    @UploadedFile(\r\n      new ParseFilePipe({\r\n        validators: [\r\n          new MaxFileSizeValidator({\r\n            maxSize: 5 * 1024 * 1024,\r\n            message: 'size must less than 5MB'\r\n          }),\r\n          new FileTypeValidator({ fileType: /image\\/(png|jpeg|jpg)/ })\r\n        ]\r\n      })\r\n    )\r\n    file: Express.Multer.File\r\n  ) {\r\n    return this.groupService.uploadGroupCover(file, req.userId)\r\n  }\r\n\r\n  @ApiOperation({\r\n    summary: 'Join group'\r\n  })\r\n  @Get('join/:code')\r\n  joinGroup(@Req() req: Request, @Param('code') code: string) {\r\n    return this.groupService.joinGroup(req.userId, code)\r\n  }\r\n\r\n  @ApiOperation({\r\n    summary: 'Get user group list'\r\n  })\r\n  @Get('list')\r\n  getUserGroupList(@Req() req: Request) {\r\n    return this.groupService.getUserGroupList(req.userId)\r\n  }\r\n\r\n  @ApiOperation({\r\n    summary: 'Get group info'\r\n  })\r\n  @Get(':id')\r\n  findOne(@Param('id') id: string, @Req() req: Request) {\r\n    return this.groupService.getGroupDetail(+id, req.userId)\r\n  }\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6dfb\u52a0",(0,o.jsx)(n.code,{children:"GroupModule"}),"\u6a21\u5757\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/modules/group/group.module.ts"',children:"import { Module } from '@nestjs/common'\r\nimport { TypeOrmModule } from '@nestjs/typeorm'\r\nimport { GroupEntity, GroupConversationEntity } from '@/modules/db/entities'\r\nimport { GroupController } from './group.controller'\r\nimport { GroupService } from './group.service'\r\n\r\n@Module({\r\n  imports: [TypeOrmModule.forFeature([GroupEntity, GroupConversationEntity])],\r\n  controllers: [GroupController],\r\n  providers: [GroupService]\r\n})\r\nexport class GroupModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u628a",(0,o.jsx)(n.code,{children:"GroupModule"}),"\u52a0\u8f7d\u5230",(0,o.jsx)(n.code,{children:"AppModule"}),"\u91cc\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="apps/server/src/app.module.ts"',children:"// ...\r\nimport { GroupModule } from '@/modules/group/group.module'\r\n\r\n@Module({\r\n  imports: [\r\n    // ...\r\n    GroupModule\r\n  ]\r\n  // ...\r\n})\r\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u65f6\u5019\u5c31\u4e0d\u4f1a\u62a5\u9519\u4e86\uff0c\u90a3\u4e48\u672c\u8282\u6700\u540e\u5c31\u4e0d\u53bb\u8c03\u8bd5\u63a5\u53e3\u4e86\uff0c\u5728\u540e\u9762\u4e00\u8282\u5ba2\u6237\u7aef\u76f4\u63a5\u5bf9\u63a5\u4e00\u4e0b\uff0c\u672c\u8282\u5230\u6b64\u7ed3\u675f\u3002"})]})}function d(r={}){const{wrapper:n}={...(0,t.R)(),...r.components};return n?(0,o.jsx)(n,{...r,children:(0,o.jsx)(l,{...r})}):l(r)}},9128:(r,n,e)=>{e.d(n,{R:()=>s,x:()=>p});var o=e(9474);const t={},i=o.createContext(t);function s(r){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function p(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:s(r.components),o.createElement(i.Provider,{value:n},r.children)}}}]);