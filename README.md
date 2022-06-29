# Advanced Sample Hardhat Project

#可升级合约的要求
1.您可以将您的 Solidity 合约与 OpenZeppelin 升级一起使用，无需任何修改，除了它们的构造函数。由于基于代理的可升级性系统的要求，可升级合约中不能使用构造函数，因为在 Solidity 中，构造函数内部的代码或全局变量声明的一部分不是已部署合约的运行时字节码的一部分。此代码仅在部署合约实例时执行一次。因此，逻辑合约构造函数中的代码将永远不会在代理状态的上下文中执行。换句话说，代理完全不知道构造函数的存在。就好像他们没有代理一样。
不过这个问题很容易解决。逻辑合约应将构造函数中的代码移动到常规的“初始化程序”函数，并在代理链接到此逻辑合约时调用此函数。需要特别注意这个初始化函数，使其只能被调用一次，这是一般编程中构造函数的属性之一。
![image](https://user-images.githubusercontent.com/100255425/176335057-13224782-09bf-4ec2-8c48-350c80c39c96.png)
这就是为什么当我们使用 OpenZeppelin Upgrades 创建代理时，您可以提供初始化函数的名称并传递参数。

为了确保initialize函数只能被调用一次，使用了一个简单的修饰符。OpenZeppelin Upgrades 通过可扩展的合约提供此功能：
![image](https://user-images.githubusercontent.com/100255425/176338047-56633978-39b7-4fb7-97c5-2a1320d98d17.png)

2.若可升级的智能合约继承了其他合约，那其他合约也需要遵循可升级智能合约的要求。例：应该这样![image](https://user-images.githubusercontent.com/100255425/176335407-d3bc10d8-870f-4073-9176-39601ab00816.png)
而不能这样![image](https://user-images.githubusercontent.com/100255425/176335463-e644ddd0-d2e1-4973-a9fc-7ff033adabc2.png)

3.![image](https://user-images.githubusercontent.com/100255425/176335622-cc2be27e-7d39-44ef-9199-6c4a8991bf83.png)
![image](https://user-images.githubusercontent.com/100255425/176335731-3b851471-6abd-4075-ae37-1c7dd8ae527a.png)

4.![image](https://user-images.githubusercontent.com/100255425/176335932-1ba33246-d05d-42e0-947d-978d1dbbe866.png)
![image](https://user-images.githubusercontent.com/100255425/176336078-8f69bff6-9fa7-4771-95b0-aab3b6efed27.png)

5.![image](https://user-images.githubusercontent.com/100255425/176336145-5a6ada5c-62c8-4604-ba2c-c5ef56bbd02b.png)

6.![image](https://user-images.githubusercontent.com/100255425/176336237-a7a48bda-4ad1-4a1b-99c5-9b60bfc54167.png)
![image](https://user-images.githubusercontent.com/100255425/176336256-ed68aa30-e276-4ba9-91ae-238d1bfef006.png)
![image](https://user-images.githubusercontent.com/100255425/176336302-cf34aff3-7703-4278-bf02-0ba413e0db98.png)
![image](https://user-images.githubusercontent.com/100255425/176336347-6c24df4b-b471-42c7-8c00-76664fbff841.png)
![image](https://user-images.githubusercontent.com/100255425/176336773-1c5ecb5e-48cb-4156-81b2-89a5067dd7c4.png)
![image](https://user-images.githubusercontent.com/100255425/176336940-1795b49c-3188-4bb5-97b6-9894fa64e0d1.png)

#可升级合约解决的问题
![image](https://user-images.githubusercontent.com/100255425/176338662-11a09281-dfef-40da-a849-0fdda3c1ec01.png)

#可升级合约经常遇到的问题
1.升级时可以更改 Solidity 编译器版本吗？
可以，Solidity 团队保证编译器保留跨版本的存储布局。

2.如何安全使用delegatecall and selfdestruct？
![image](https://user-images.githubusercontent.com/100255425/176340844-eefe3fb5-6b3d-4768-afd9-1eb5d199563c.png)

3.为什么我不能使用immutable变量？
Solidity 0.6.5引入了immutable关键字来声明一个变量，该变量在构造时只能赋值一次，构造后只能读取。它通过在合约创建期间计算其价值并将其价值直接存储到字节码中来做到这一点。

请注意，此行为与可升级合约的工作方式不兼容，原因有两个：
（1）可升级合约没有构造函数，只有初始化器，因此它们不能处理不可变变量。
（2）由于不可变变量值存储在字节码中，它的值将在指向给定合约的所有代理之间共享，而不是在每个代理的存储中共享。



# proxyUpgrade-demo
proxyUpgrade指南：https://learnblockchain.cn/article/4282
多重钱包的签名情况下合约升级指南：https://learnblockchain.cn/article/3103

说明：一旦我们将升级控制权（ProxyAdmin 的所有权）转移到我们的多重签名中，我们就不能再简单地升级我们的合约了。相反，我们需要首先提出一个升级，多重签名的所有者可以审查，一旦审查批准并执行升级合约的提案。

我们将升级控制权（ProxyAdmin 的所有权）转移到我们的多重签名中，我们可以通过Gnosis Safe的apps模块的OpenZeppelin升级合约（需要代理合约，新的实现合约）详细可以参考https://learnblockchain.cn/article/3103的升级合约模块，或者进入https://docs.openzeppelin.com/defender/guide-upgrades创建 Defender Team API 密钥
，然后根据里面的教程进行合约的升级

多重签名下的合约升级示例(Defender)：
![image](https://user-images.githubusercontent.com/100255425/176156264-e9289b1e-5be0-408a-b74c-ab55268714ce.png)
![image](https://user-images.githubusercontent.com/100255425/176156511-335e1bcc-f61c-455d-8a9f-fc7ee344b5f0.png)
![image](https://user-images.githubusercontent.com/100255425/176156574-3f8cd620-cf0f-4852-bb35-fc661003f7c1.png)
![image](https://user-images.githubusercontent.com/100255425/176156614-99220477-d16e-4c06-9245-072ce5349131.png)
![image](https://user-images.githubusercontent.com/100255425/176156654-eeb883c1-3974-4a38-833c-0b97ca0f832b.png)
![image](https://user-images.githubusercontent.com/100255425/176156702-be551cf3-b9e0-4332-bd94-1def473fd359.png)

多重签名下的合约升级示例(Gnosis Safe)：
![image](https://user-images.githubusercontent.com/100255425/176156961-2f4b0092-300f-4ee1-a953-da50b68599d2.png)
![image](https://user-images.githubusercontent.com/100255425/176157001-a4651e8a-e59e-49c0-a6f4-cc59d758b786.png)
![image](https://user-images.githubusercontent.com/100255425/176157051-6c6d122d-6481-4fcb-958e-555b28ab97ea.png)




