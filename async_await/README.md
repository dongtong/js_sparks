### Async Pattern

#### Callback

- Callback方法是通常函数式编程中经常使用到的手段，过多的匿名回调会导致代码难于阅读和维护。

- 过多的嵌套让代码看上去像一个圣诞树。

#### Promise

- 为了解决Callback问题，后台引入了Promise, 让代码组织上更具有语义。

- 仍然通过传递函数，或者传递promise对象来达到函数的级联调用。

- 问题是then的异常抛出，catch有时无法定位是哪个then出现了故障， catch是通用捕捉异常的。

- 同时如果其中一个then抛出异常（或者手动抛出异常），后面的then将不会被执行。

#### async & await

- esnext实现方式

- 通过babel可以降级，运行在特定浏览器中。

- 用同步方式实现异步调用。