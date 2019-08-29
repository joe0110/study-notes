## 字符串新增方法
- `includes()` 判断是否找到了参数字符串
- `startsWith()` 判断参数字符串是否在原字符串的头部
- `endsWith()` 判断参数字符串是否在原字符的尾部
- `repeat()` 将原字符串重复`n`次，返回一个新字符串
- `padStart()` 头部补全
- `padEnd()` 尾部补全
- `trimStart()` 消除头部的空格
- `trimEnd()` 消除尾部的空格


## 注意
- `includes()` `startWith()` `endsWith()` 都支持第二个参数，`endsWith()`表示前`n`个字符串，其余两个表示从`n`个位置直到字符串结束
- `repeat()` 参数为小数会取整数
- `padStart` `padEnd` 如果原字符串 >= 最大长度 则字符串补全不生效