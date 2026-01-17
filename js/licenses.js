// 许可证数据
const licenses = [
    {
        id: 'mit',
        name: 'MIT',
        version: '',
        type: 'permissive',
        typeText: '宽松式',
        coreRequirements: '保留版权和许可声明',
        copyleft: '无',
        commercialFriendly: '非常友好',
       适用场景: '简单库、工具，希望被广泛使用的项目（如 jQuery, Node.js）',
        icon: 'icons/mit.svg',
        template: `MIT License
MIT 许可证

Copyright (c) [year] [author]
版权所有 (c) [year] [author]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

现授予任何人免费获得本软件及其相关文档文件（以下简称"软件"）的副本的权利，
在不限制任何权利的情况下处理本软件，包括但不限于使用、复制、修改、合并、出版、
分发、再许可和/或销售本软件的副本，以及允许向其提供本软件的人这样做，
但须遵守以下条件：

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

上述版权声明和本许可声明应包含在本软件的所有副本或实质性部分中。

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

本软件按"原样"提供，不附带任何形式的明示或暗示保证，
包括但不限于适销性、特定用途适用性和非侵权性的保证。
在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，
无论是在合同、侵权或其他方面，由软件或软件的使用或其他交易引起的。`
    },
    {
        id: 'bsd-2-clause',
        name: 'BSD',
        version: '2-Clause',
        type: 'permissive',
        typeText: '宽松式',
        coreRequirements: '保留版权和许可声明',
        copyleft: '无',
        commercialFriendly: '非常友好',
        适用场景: '与 MIT 类似，非常宽松（如 FreeBSD, nginx）',
        icon: 'icons/bsd.svg',
        template: `BSD 2-Clause License
BSD 2-条款许可证

Copyright (c) [year] [author]
All rights reserved.

版权所有 (c) [year] [author]
保留所有权利。

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

以源代码和二进制形式重新分发和使用，无论是否经过修改，
只要满足以下条件，均被允许：

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

1. 以源代码形式重新分发时，必须保留上述版权声明、本条件列表和以下免责声明。
2. 以二进制形式重新分发时，必须在随附的文档和/或其他材料中重现上述版权声明、
   本条件列表和以下免责声明。

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

本软件由版权持有人和贡献者按"原样"提供，
不附带任何形式的明示或暗示保证，
包括但不限于适销性、特定用途适用性和非侵权性的保证。
在任何情况下，版权持有人或贡献者均不对任何直接、间接、附带、特殊、
惩戒性或后果性损害（包括但不限于采购替代商品或服务；
使用损失、数据损失或利润损失；或业务中断）负责，
无论以何种方式引起，基于任何责任理论，
无论是合同责任、严格责任还是侵权责任（包括疏忽或其他），
即使已被告知可能发生此类损害。`
    },
    {
        id: 'bsd-3-clause',
        name: 'BSD',
        version: '3-Clause',
        type: 'permissive',
        typeText: '宽松式',
        coreRequirements: '保留版权和许可声明，并禁止使用作者名字进行推广',
        copyleft: '无',
        commercialFriendly: '非常友好',
        适用场景: '类似 MIT，但更注重保护作者声誉（如 LLVM, Go）',
        icon: 'icons/bsd.svg',
        template: `BSD 3-Clause License
BSD 3-条款许可证

Copyright (c) [year] [author]
All rights reserved.

版权所有 (c) [year] [author]
保留所有权利。

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

以源代码和二进制形式重新分发和使用，无论是否经过修改，
只要满足以下条件，均被允许：

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
3. Neither the name of the [project] nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

1. 以源代码形式重新分发时，必须保留上述版权声明、本条件列表和以下免责声明。
2. 以二进制形式重新分发时，必须在随附的文档和/或其他材料中重现上述版权声明、
   本条件列表和以下免责声明。
3. 未经特定书面许可，不得使用项目名称或贡献者名称来背书或推广源自本软件的产品。

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

本软件由版权持有人和贡献者按"原样"提供，
不附带任何形式的明示或暗示保证，
包括但不限于适销性、特定用途适用性和非侵权性的保证。
在任何情况下，版权持有人或贡献者均不对任何直接、间接、附带、特殊、
惩戒性或后果性损害（包括但不限于采购替代商品或服务；
使用损失、数据损失或利润损失；或业务中断）负责，
无论以何种方式引起，基于任何责任理论，
无论是合同责任、严格责任还是侵权责任（包括疏忽或其他），
即使已被告知可能发生此类损害。`
    },
    {
        id: 'apache-2.0',
        name: 'Apache',
        version: '2.0',
        type: 'permissive',
        typeText: '宽松式',
        coreRequirements: '保留版权、许可声明；修改处需说明；提供明确的专利授权',
        copyleft: '无',
        commercialFriendly: '友好，且有专利保护',
        适用场景: '大型项目、需要明确专利保护的企业级项目（如 Android, Kubernetes）',
        icon: 'icons/apache.svg',
        template: `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/
Apache 许可证
版本 2.0，2004 年 1 月
http://www.apache.org/licenses/

Copyright [year] [author]
版权所有 [year] [author]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

除非适用法律要求或书面同意，否则根据本许可证分发的软件
将按"原样"分发，不附带任何形式的明示或暗示保证或条件。
请参阅许可证以了解特定语言对权限和限制的规定。

根据 Apache 许可证 2.0 版本（以下简称"许可证"）授权；
除非遵守本许可证，否则您不得使用此文件。
您可以在以下网址获取许可证副本：

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    },
    {
        id: 'gpl-2.0',
        name: 'GPL',
        version: '2.0',
        type: 'copyleft',
        typeText: '强 Copyleft',
        coreRequirements: '衍生作品必须开源并使用相同许可证',
        copyleft: '强',
        commercialFriendly: '不友好',
        适用场景: '坚持开源理念，防止代码被闭源商用（如 Linux Kernel, Git）',
        icon: 'icons/gpl.svg',
        template: `GNU GENERAL PUBLIC LICENSE
Version 2, June 1991
GNU 通用公共许可证
版本 2，1991 年 6 月

Copyright (C) 1989, 1991 Free Software Foundation, Inc.
51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA

版权所有 (C) 1989, 1991 自由软件基金会，Inc.
美国马萨诸塞州波士顿市第五大道 51 号，邮编 02110-1301

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

任何人都可以复制和分发此许可文件的完整副本，
但不允许修改。

[Full GPL 2.0 text omitted for brevity - please refer to the official GPL 2.0 license text]
[完整的 GPL 2.0 文本因简洁起见省略 - 请参阅官方 GPL 2.0 许可文本]`
    },
    {
        id: 'gpl-3.0',
        name: 'GPL',
        version: '3.0',
        type: 'copyleft',
        typeText: '强 Copyleft',
        coreRequirements: '在 GPLv2 基础上增加反专利、反数字版权管理（DRM）等条款',
        copyleft: '强',
        commercialFriendly: '不友好',
        适用场景: '在保障开源的同时，关注专利和硬件限制问题（如 GCC）',
        icon: 'icons/gpl.svg',
        template: `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
GNU 通用公共许可证
版本 3，2007 年 6 月 29 日

Copyright (C) 2007 Free Software Foundation, Inc.
https://fsf.org/

版权所有 (C) 2007 自由软件基金会，Inc.
https://fsf.org/

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

任何人都可以复制和分发此许可文件的完整副本，
但不允许修改。

[Full GPL 3.0 text omitted for brevity - please refer to the official GPL 3.0 license text]
[完整的 GPL 3.0 文本因简洁起见省略 - 请参阅官方 GPL 3.0 许可文本]`
    },
    {
        id: 'lgpl-2.1',
        name: 'LGPL',
        version: '2.1',
        type: 'weak-copyleft',
        typeText: '弱 Copyleft',
        coreRequirements: '允许动态链接而不传染；修改库代码必须开源',
        copyleft: '弱（库级）',
        commercialFriendly: '较友好，适合库文件',
        适用场景: '开发库，希望被闭源软件广泛使用（如 GTK+, GNU C Library）',
        icon: 'icons/lgpl.svg',
        template: `GNU LESSER GENERAL PUBLIC LICENSE
Version 2.1, February 1999
GNU 宽通用公共许可证
版本 2.1，1999 年 2 月

Copyright (C) 1991, 1999 Free Software Foundation, Inc.
51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

版权所有 (C) 1991, 1999 自由软件基金会，Inc.
美国马萨诸塞州波士顿市第五大道 51 号，邮编 02110-1301

[Full LGPL 2.1 text omitted for brevity - please refer to the official LGPL 2.1 license text]
[完整的 LGPL 2.1 文本因简洁起见省略 - 请参阅官方 LGPL 2.1 许可文本]`
    },
    {
        id: 'lgpl-3.0',
        name: 'LGPL',
        version: '3.0',
        type: 'weak-copyleft',
        typeText: '弱 Copyleft',
        coreRequirements: '允许动态链接而不传染；修改库代码必须开源',
        copyleft: '弱（库级）',
        commercialFriendly: '较友好，适合库文件',
        适用场景: '开发库，希望被闭源软件广泛使用（如 GTK+, GNU C Library）',
        icon: 'icons/lgpl.svg',
        template: `GNU LESSER GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
GNU 宽通用公共许可证
版本 3，2007 年 6 月 29 日

Copyright (C) 2007 Free Software Foundation, Inc.
https://fsf.org/

版权所有 (C) 2007 自由软件基金会，Inc.
https://fsf.org/

[Full LGPL 3.0 text omitted for brevity - please refer to the official LGPL 3.0 license text]
[完整的 LGPL 3.0 文本因简洁起见省略 - 请参阅官方 LGPL 3.0 许可文本]`
    },
    {
        id: 'agpl-3.0',
        name: 'AGPL',
        version: '3.0',
        type: 'copyleft',
        typeText: '强 Copyleft',
        coreRequirements: '在 GPLv3 基础上，规定即使用于网络服务(SaaS)，也必须开源其代码',
        copyleft: '最强（含网络使用）',
        commercialFriendly: '最不友好',
        适用场景: '云服务/SaaS项目，防止服务提供商闭源使用（如 Grafana, Mastodon）',
        icon: 'icons/agpl.svg',
        template: `GNU AFFERO GENERAL PUBLIC LICENSE
Version 3, 19 November 2007
GNU Affero 通用公共许可证
版本 3，2007 年 11 月 19 日

Copyright (C) 2007 Free Software Foundation, Inc.
https://fsf.org/

版权所有 (C) 2007 自由软件基金会，Inc.
https://fsf.org/

[Full AGPL 3.0 text omitted for brevity - please refer to the official AGPL 3.0 license text]
[完整的 AGPL 3.0 文本因简洁起见省略 - 请参阅官方 AGPL 3.0 许可文本]`
    },
    {
        id: 'mpl-2.0',
        name: 'MPL',
        version: '2.0',
        type: 'weak-copyleft',
        typeText: '弱 Copyleft',
        coreRequirements: '修改过的源文件需保持 MPL；可与其他专有代码结合',
        copyleft: '文件级',
        commercialFriendly: '较友好，平衡性强',
        适用场景: '希望部分代码开源，同时允许项目其他部分闭源（如 Firefox, Thunderbird）',
        icon: 'icons/mpl.svg',
        template: `Mozilla Public License Version 2.0
==================================
Mozilla 公共许可证 2.0 版本
==================================

1. Definitions
--------------

1. 定义
--------------

[Full MPL 2.0 text omitted for brevity - please refer to the official MPL 2.0 license text]
[完整的 MPL 2.0 文本因简洁起见省略 - 请参阅官方 MPL 2.0 许可文本]`
    },
    {
        id: 'epl-1.0',
        name: 'EPL',
        version: '1.0',
        type: 'weak-copyleft',
        typeText: '弱 Copyleft',
        coreRequirements: '修改的模块必须开源；独立模块可用不同许可',
        copyleft: '模块级',
        commercialFriendly: '较友好',
        适用场景: '企业级项目，需要一定保护但不太严格（如 Eclipse IDE, JUnit）',
        icon: 'icons/epl.svg',
        template: `Eclipse Public License - v 1.0
Eclipse 公共许可证 - v 1.0

THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

随附程序根据本Eclipse公共许可证（"协议"）的条款提供。任何使用、复制或分发程序的行为均构成接受方对本协议的接受。

[Full EPL 1.0 text omitted for brevity - please refer to the official EPL 1.0 license text]
[完整的 EPL 1.0 文本因简洁起见省略 - 请参阅官方 EPL 1.0 许可文本]`
    },
    {
        id: 'epl-2.0',
        name: 'EPL',
        version: '2.0',
        type: 'weak-copyleft',
        typeText: '弱 Copyleft',
        coreRequirements: '修改的模块必须开源；独立模块可用不同许可',
        copyleft: '模块级',
        commercialFriendly: '较友好',
        适用场景: '企业级项目，需要一定保护但不太严格（如 Eclipse IDE, JUnit）',
        icon: 'icons/epl.svg',
        template: `Eclipse Public License - v 2.0
Eclipse 公共许可证 - v 2.0

THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

随附程序根据本Eclipse公共许可证（"协议"）的条款提供。任何使用、复制或分发程序的行为均构成接受方对本协议的接受。

[Full EPL 2.0 text omitted for brevity - please refer to the official EPL 2.0 license text]
[完整的 EPL 2.0 文本因简洁起见省略 - 请参阅官方 EPL 2.0 许可文本]`
    },
    {
        id: 'cc0-1.0',
        name: '公共领域',
        version: 'CC0 1.0',
        type: 'public-domain',
        typeText: '公共领域',
        coreRequirements: '完全放弃版权，进入公共域（注意：不授予专利权）',
        copyleft: '无',
        commercialFriendly: '非常友好',
        适用场景: '数据集、文档，希望完全放弃权利（非软件代码首选）',
        icon: 'icons/cc0.svg',
        template: `CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
CC0 1.0 通用（CC0 1.0）公共领域奉献声明

No Copyright
无版权

The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.
将本作品与本声明相关联的人已通过放弃其在全球范围内对本作品的所有版权及其相关权和邻接权（在法律允许的范围内），将本作品奉献给公共领域。

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
您可以复制、修改、分发和表演本作品，甚至用于商业目的，无需任何许可。

https://creativecommons.org/publicdomain/zero/1.0/
https://creativecommons.org/publicdomain/zero/1.0/deed.zh
`
    },
    {
        id: 'unlicense',
        name: '公共领域',
        version: 'Unlicense',
        type: 'public-domain',
        typeText: '公共领域',
        coreRequirements: '极简声明，完全放弃所有权利',
        copyleft: '无',
        commercialFriendly: '非常友好',
        适用场景: '小型工具/示例代码，不希望任何限制',
        icon: 'icons/unlicense.svg',
        template: `This is free and unencumbered software released into the public domain.
本软件是自由且不受限制的，已发布到公共领域。

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

任何人都可以自由复制、修改、发布、使用、编译、销售或分发本软件，
无论是源代码形式还是编译后的二进制形式，用于任何目的，商业或非商业，
并通过任何方式。

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

在承认版权法的司法管辖区，本软件的作者将其对本软件的所有版权权益
奉献给公共领域。我们做出此奉献是为了广大公众的利益，
并损害我们的继承人和继任者的利益。我们打算将此奉献作为一种公开行为，
永久放弃在版权法下对本软件的所有当前和未来权利。

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

本软件按"原样"提供，不附带任何形式的明示或暗示保证，
包括但不限于适销性、特定用途适用性和非侵权性的保证。
在任何情况下，作者均不对任何索赔、损害或其他责任负责，
无论是在合同、侵权或其他方面，由软件或软件的使用或其他交易引起的。

For more information, please refer to <http://unlicense.org/>
更多信息，请参阅 <http://unlicense.org/>`
    },
    {
        id: 'mulanpsl-1.0',
        name: '木兰宽松许可证',
        version: '1.0',
        type: 'permissive',
        typeText: '宽松式',
        coreRequirements: '保留版权和许可声明',
        copyleft: '无',
        commercialFriendly: '非常友好',
        适用场景: '希望被广泛使用的开源项目，尤其是中国开发者项目',
        icon: 'icons/mulanpsl.svg',
        template: `Mulan Permissive Software License, Version 1 (MulanPSL v1)
木兰宽松许可证, 第1版 (MulanPSL v1)

Copyright (c) [year] [author]
版权所有 (c) [year] [author]

Licensed under the Mulan Permissive Software License, Version 1. 
You may obtain a copy of the License at:

    http://license.coscl.org.cn/MulanPSL

根据木兰宽松许可证, 第1版许可。
您可以在以下地址获取许可证副本：

    http://license.coscl.org.cn/MulanPSL

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

除非适用法律要求或书面同意，根据许可证分发的软件按"原样"分发，不附带任何形式的明示或暗示保证或条件。请参阅许可证了解特定语言下的权限和限制。`
    },
    {
        id: 'mulanpsl-2.0',
        name: '木兰宽松许可证',
        version: '2.0',
        type: 'permissive',
        typeText: '宽松式',
        coreRequirements: '保留版权和许可声明',
        copyleft: '无',
        commercialFriendly: '非常友好',
        适用场景: '希望被广泛使用的开源项目，尤其是中国开发者项目',
        icon: 'icons/mulanpsl.svg',
        template: `Mulan Permissive Software License, Version 2 (MulanPSL v2)
木兰宽松许可证, 第2版 (MulanPSL v2)

Copyright (c) [year] [author]
版权所有 (c) [year] [author]

Licensed under the Mulan Permissive Software License, Version 2. 
You may obtain a copy of the License at:

    https://license.coscl.org.cn/MulanPSL2

根据木兰宽松许可证, 第2版许可。
您可以在以下地址获取许可证副本：

    https://license.coscl.org.cn/MulanPSL2

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

除非适用法律要求或书面同意，根据许可证分发的软件按"原样"分发，不附带任何形式的明示或暗示保证或条件。请参阅许可证了解特定语言下的权限和限制。`
    },
    {
        id: 'mulanpubl-1.0',
        name: '木兰公共许可证',
        version: '1.0',
        type: 'copyleft',
        typeText: '强 Copyleft',
        coreRequirements: '衍生作品必须开源并使用相同许可证',
        copyleft: '强',
        commercialFriendly: '不友好',
        适用场景: '坚持开源理念，防止代码被闭源商用的中国开发者项目',
        icon: 'icons/mulanpubl.svg',
        template: `Mulan Public License, Version 1 (MulanPubL v1)
木兰公共许可证, 第1版 (MulanPubL v1)

Copyright (c) [year] [author]
版权所有 (c) [year] [author]

Licensed under the Mulan Public License, Version 1. 
You may obtain a copy of the License at:

    http://license.coscl.org.cn/MulanPubL

根据木兰公共许可证, 第1版许可。
您可以在以下地址获取许可证副本：

    http://license.coscl.org.cn/MulanPubL

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

除非适用法律要求或书面同意，根据许可证分发的软件按"原样"分发，不附带任何形式的明示或暗示保证或条件。请参阅许可证了解特定语言下的权限和限制。`
    },
    {
        id: 'mulanpubl-2.0',
        name: '木兰公共许可证',
        version: '2.0',
        type: 'copyleft',
        typeText: '强 Copyleft',
        coreRequirements: '衍生作品必须开源并使用相同许可证',
        copyleft: '强',
        commercialFriendly: '不友好',
        适用场景: '坚持开源理念，防止代码被闭源商用的中国开发者项目',
        icon: 'icons/mulanpubl.svg',
        template: `Mulan Public License, Version 2 (MulanPubL v2)
木兰公共许可证, 第2版 (MulanPubL v2)

Copyright (c) [year] [author]
版权所有 (c) [year] [author]

Licensed under the Mulan Public License, Version 2. 
You may obtain a copy of the License at:

    https://license.coscl.org.cn/MulanPubL2

根据木兰公共许可证, 第2版许可。
您可以在以下地址获取许可证副本：

    https://license.coscl.org.cn/MulanPubL2

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

除非适用法律要求或书面同意，根据许可证分发的软件按"原样"分发，不附带任何形式的明示或暗示保证或条件。请参阅许可证了解特定语言下的权限和限制。`
    }
];

// 知识共享许可证
const ccLicenses = [
    {
        id: 'cc-by',
        name: '知识共享',
        version: 'CC BY',
        type: 'permissive',
        typeText: '署名',
        coreRequirements: '只需署名原作者，使用最自由',
        copyleft: '无',
        commercialFriendly: '允许商业使用',
        适用场景: '允许商业使用，允许修改',
        icon: 'icons/cc-by.svg',
        template: `Creative Commons Attribution 4.0 International License
知识共享 署名 4.0 国际许可协议

This work is licensed under a Creative Commons Attribution 4.0 International License.
本作品采用 知识共享署名 4.0 国际许可协议 进行许可。

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material for any purpose, even commercially

您可以自由地：
- 分享 — 在任何媒介以任何形式复制、发行本作品
- 修改 — 对作品进行修改、转换或以本作品为基础进行创作

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

惟须遵守下列条件：
- 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式进行署名，但是不得以任何方式暗示许可人为您或您的使用背书。

https://creativecommons.org/licenses/by/4.0/
https://creativecommons.org/licenses/by/4.0/deed.zh
`
    },
    {
        id: 'cc-by-nc',
        name: '知识共享',
        version: 'CC BY-NC',
        type: 'permissive',
        typeText: '署名-非商业性使用',
        coreRequirements: '署名，且不允许用于商业目的',
        copyleft: '无',
        commercialFriendly: '禁止商业使用',
        适用场景: '禁止商业使用，允许修改',
        icon: 'icons/cc-by-nc.svg',
        template: `Creative Commons Attribution-NonCommercial 4.0 International License
知识共享 署名-非商业性使用 4.0 国际许可协议

This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
本作品采用 知识共享署名-非商业性使用 4.0 国际许可协议 进行许可。

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

您可以自由地：
- 分享 — 在任何媒介以任何形式复制、发行本作品
- 修改 — 对作品进行修改、转换或以本作品为基础进行创作

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.

惟须遵守下列条件：
- 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式进行署名，但是不得以任何方式暗示许可人为您或您的使用背书。
- 非商业性使用 — 您不得将本作品用于商业目的。

https://creativecommons.org/licenses/by-nc/4.0/
https://creativecommons.org/licenses/by-nc/4.0/deed.zh
`
    },
    {
        id: 'cc-by-nd',
        name: '知识共享',
        version: 'CC BY-ND',
        type: 'permissive',
        typeText: '署名-禁止演绎',
        coreRequirements: '署名，且不允许修改，仅可原样分发',
        copyleft: '无',
        commercialFriendly: '允许商业使用',
        适用场景: '允许商业使用，禁止修改',
        icon: 'icons/cc-by-nd.svg',
        template: `Creative Commons Attribution-NoDerivatives 4.0 International License
知识共享 署名-禁止演绎 4.0 国际许可协议

This work is licensed under a Creative Commons Attribution-NoDerivatives 4.0 International License.
本作品采用 知识共享署名-禁止演绎 4.0 国际许可协议 进行许可。

You are free to:
- Share — copy and redistribute the material in any medium or format

您可以自由地：
- 分享 — 在任何媒介以任何形式复制、发行本作品

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NoDerivatives — If you remix, transform, or build upon the material, you may not distribute the modified material.

惟须遵守下列条件：
- 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式进行署名，但是不得以任何方式暗示许可人为您或您的使用背书。
- 禁止演绎 — 您不得对本作品进行修改、转换或基于本作品进行创作。

https://creativecommons.org/licenses/by-nd/4.0/
https://creativecommons.org/licenses/by-nd/4.0/deed.zh
`
    },
    {
        id: 'cc-by-sa',
        name: '知识共享',
        version: 'CC BY-SA',
        type: 'copyleft',
        typeText: '署名-相同方式共享',
        coreRequirements: '署名，且衍生作品需使用相同许可证',
        copyleft: '相同方式共享',
        commercialFriendly: '允许商业使用',
        适用场景: '允许商业使用，允许修改',
        icon: 'icons/cc-by-sa.svg',
        template: `Creative Commons Attribution-ShareAlike 4.0 International License
知识共享 署名-相同方式共享 4.0 国际许可协议

This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
本作品采用 知识共享署名-相同方式共享 4.0 国际许可协议 进行许可。

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material for any purpose, even commercially

您可以自由地：
- 分享 — 在任何媒介以任何形式复制、发行本作品
- 修改 — 对作品进行修改、转换或以本作品为基础进行创作

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

惟须遵守下列条件：
- 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式进行署名，但是不得以任何方式暗示许可人为您或您的使用背书。
- 相同方式共享 — 如果您再混合、转换或者以本作品为基础进行创作，您必须依据与本作品相同的许可协议来分发您贡献的作品。

https://creativecommons.org/licenses/by-sa/4.0/
https://creativecommons.org/licenses/by-sa/4.0/deed.zh
`
    },
    {
        id: 'cc-by-nc-sa',
        name: '知识共享',
        version: 'CC BY-NC-SA',
        type: 'copyleft',
        typeText: '署名-非商业性使用-相同方式共享',
        coreRequirements: '署名，且不允许商业使用，衍生作品需相同方式共享',
        copyleft: '相同方式共享',
        commercialFriendly: '禁止商业使用',
        适用场景: '禁止商业使用，允许修改',
        icon: 'icons/cc-by-nc-sa.svg',
        template: `Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
知识共享 署名-非商业性使用-相同方式共享 4.0 国际许可协议

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
本作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议 进行许可。

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

您可以自由地：
- 分享 — 在任何媒介以任何形式复制、发行本作品
- 修改 — 对作品进行修改、转换或以本作品为基础进行创作

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

惟须遵守下列条件：
- 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式进行署名，但是不得以任何方式暗示许可人为您或您的使用背书。
- 非商业性使用 — 您不得将本作品用于商业目的。
- 相同方式共享 — 如果您再混合、转换或者以本作品为基础进行创作，您必须依据与本作品相同的许可协议来分发您贡献的作品。

https://creativecommons.org/licenses/by-nc-sa/4.0/
https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh
`
    },
    {
        id: 'cc-by-nc-nd',
        name: '知识共享',
        version: 'CC BY-NC-ND',
        type: 'permissive',
        typeText: '署名-非商业性使用-禁止演绎',
        coreRequirements: '署名，且不允许商业使用和修改',
        copyleft: '无',
        commercialFriendly: '禁止商业使用',
        适用场景: '限制最严格，仅允许原样下载和分享',
        icon: 'icons/cc-by-nc-nd.svg',
        template: `Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
知识共享 署名-非商业性使用-禁止演绎 4.0 国际许可协议

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
本作品采用 知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议 进行许可。

You are free to:
- Share — copy and redistribute the material in any medium or format

您可以自由地：
- 分享 — 在任何媒介以任何形式复制、发行本作品

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
- NoDerivatives — If you remix, transform, or build upon the material, you may not distribute the modified material.

惟须遵守下列条件：
- 署名 — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式进行署名，但是不得以任何方式暗示许可人为您或您的使用背书。
- 非商业性使用 — 您不得将本作品用于商业目的。
- 禁止演绎 — 您不得对本作品进行修改、转换或基于本作品进行创作。

https://creativecommons.org/licenses/by-nc-nd/4.0/
https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh
`
    }
];
