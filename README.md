# Advanced Sample Hardhat Project

# proxyUpgrade-demo
proxyUpgrade指南：https://learnblockchain.cn/article/4282
多重钱包的签名情况下合约升级指南：https://learnblockchain.cn/article/3103

说明：一旦我们将升级控制权（ProxyAdmin 的所有权）转移到我们的多重签名中，我们就不能再简单地升级我们的合约了。相反，我们需要首先提出一个升级，多重签名的所有者可以审查，一旦审查批准并执行升级合约的提案。

我们将升级控制权（ProxyAdmin 的所有权）转移到我们的多重签名中，我们可以通过Gnosis Safe的apps模块的OpenZeppelin升级合约（需要代理合约，新的实现合约）详细可以参考https://learnblockchain.cn/article/3103的升级合约模块，或者进入https://docs.openzeppelin.com/defender/guide-upgrades创建 Defender Team API 密钥
，然后根据里面的教程进行合约的升级

多重签名下的合约升级示例：
![image](https://user-images.githubusercontent.com/100255425/176156264-e9289b1e-5be0-408a-b74c-ab55268714ce.png)

