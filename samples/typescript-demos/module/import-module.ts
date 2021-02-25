
// 导入的简单例子
import * as m from "mod";


// 导入具有给定名称的模块，并为模块本身创建本地绑定。本地绑定被分类为值（表示模块实例）和命名空间（表示类型和命名空间的容器）。
import { x, y, z } from "mod";


// 导入给定模块并为模块的指定导出成员列表创建本地绑定。指定的名称必须各自引用给定模块的导出成员集中的实体。除非使用指定不同本地名称的子句，否则本地绑定具有与它们所代表的实体相同的名称和分类
import { x as a, y as b } from "mod";


// 以下导入声明的方式
import d from "mod";

// 完全等同于导入声明
import { default as d } from "mod";

// 以下导入声明的方式
import "mod";