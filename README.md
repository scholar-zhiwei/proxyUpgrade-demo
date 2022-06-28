# Advanced Sample Hardhat Project

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




