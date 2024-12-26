---
title: Posts
layout: default
---
# My Posts
> 也许我会在这上面分享一些我的英语学习的过程🔄:也许是编程的笔记,也许是一些摄影🎧:qaq

好像没有什么好分享的，要不先从日记开始吧
# 这里总结一些编程中遇到的问题(包括考试突击复习啥的笔记)
## 小总结

> 1 oj平台的运行错误     可能是数据范围不够大，比如题目上说的是m<=5000,你写的是吗<=500之类的问题

> 2 函数中参数为数组的时候    如果你在main函数中写了一个可变数组 那么函数的参数在写的时候就不能是固定的 可以把main函数里面的数组弄的大一点改成固定的数组

> 3 一定要把问题想简单点，不要想的太复杂，分太多情况,详见这个[网站](https://acm.creative3605.com/problem/1430) 只用找最大的三个和最小的三个就可以成功处理，还有就是如果只有三个牌的话，直接处理三个牌相乘就好了

> 4 转换 看数据的输入如果输入次数很多且带着双层循环 可以把双层循环转化成不用双层循环 我也不是很清楚 把对于两个数的比较 转化成数值的计算 题目详见[click](https://acm.creative3605.com/problem/1431)源码在C:\Users\我的中文名字\Desktop\c++learning\c++_code(当然只有我看见
>>> 看gpt的引文吧还是🐶
>>> 我的代码通过将问题转化为模值统计，避免了两两比较，仅需对数组进行一次遍历统计模值，然后用组合公式快速计算配对数量，时间复杂度降到O(n) 

>5 动态数组的创建 理解其实 `int a[10]; a[i] == *(a+i)` 所以在这里可以直接当正常的静态数组用

``` cpp
int* A = (int*)malloc(N * sizeof(int));
for (int i = 0; i < N; i++) {
    scanf("%d", &A[i]);
}
```
>6指针和数组的理解
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/225d2adf-74e4-48f0-82e4-9a308f8df664" alt="微信图片_20241225173856" width="350" height="500"></td>
    <td><img src="https://github.com/user-attachments/assets/f6454351-f0c0-48cd-8cac-2fcf8be7b383" alt="微信图片_20241225173837" width="350" height="500"></td>
  </tr>
</table>



## 考试突击复习笔记

## 英语期末复习

### 七选五部分
* was coined 指的是一个词或者短语被创造出来(板球的那个七选五)
* deficiency 是缺乏的意思 名词

### 汉译英的部分
* 孔子是中国历史上著名的思想家，教育家，是儒家学派的创始人
  Confucius was a well-known thinker and educator in Chinese history, and he was the founder of Confucianism.


* 《论语》（The Analects）收录了孔子的思想。它是中国古代文化的经典著作（classic），对后来历代思想家和文学家产生了很大影响。
  

  The Analects is a collection of the thoughts of Confucius .It is a classic of ancient Chinese culture,and it has a great influence on the thinkers and writers of later generation.

* 如今，孔子的学说不仅受到中国人的重视，也越来越得到整个国际社会的关注。

  Nowadays,the teachings of Confucius are not only valued by Chinese people,but also attracting increasing attention from the international community.
  
  //这里 增加的注意 用increaing attention好

* 孝道（ filial piety ）是中国古代社会的基本道德规范（code of ethics ）之一。
  
  Filial piety is one of the basic codes of ethics in ancient Chinese society.

* 一般来说，孝道指子女对父母应尽的义务，主要包括尊敬、关爱及赡养老人。
  Generally speaking,filial piety refers to children's obligations to their parents,mainly including respect,care,and support for the elderly.

* 孝道是中国社会千百年来维系家庭关系的道德准则。它毫无疑问是中华民族的一种传统美德。
 In Chinese society, filial piety has been the moral standard for maintaining family relations for thousands of years. It is undoubtedly a traditional Chinese virtue. 

* 郑和 1371 年出生于云南昆明，他不仅是明朝的外交家（diplomat），也是中国历史上最著名的海上探险家（maritime explorer）。
  Zheng He,born in 1371 in Kunming,Yunnan,was not only a diplomat in the Ming Dynasty but also the most famous maritime explorer in Chinese history.
* 从公元 1405 年起的 28 年间，郑和带领船队七下西洋（the Western Seas），出海的人员共计 10 多万人，访问了 30 多个国家和地区。 
  In the 28 years after 1405 AD,Zheng He led his fleet to make seven voyages to the Western Seas with over 100000 crewmembers in total, and they visited more than 30 countries and regions.
* 郑和下西洋是世界航海（navigation）史上的壮举，加强了明朝和海外各国之间的关系。 
  Zheng He's voyages to the Western Seas were a great achievement in the world's navigation history. They strengthened the relationships between the Ming Dynasty and countries overseas.

* 随着互联网技术的发展，数字化教育使人们得以通过互联网进入虚拟教室，并随时随地学习.
  With the development of Internet technology,digital education enables people to get access to virtual classes through the Internet and learn anytime and anywhere.
* 数字化教育拓展了学习者学习的时间和空间，为终身学习提供了更多的可能性。
   Digital education expands the learner's
time and space for learning, thus providing more possibilities for lifelong learning.
* 中国将坚持教育优先发展，推进教育数字化，建设学习型社会，学习型大国。
  China will continue to give priority to the development of education,promote the digitalization of education, and build a society and country of learning.
  * 中国将坚持教育优先发展，推进教育数字化，建设学习型社会，学习型大国。
  China will continue to give priority to the development of education,promote the digitalization of education, and build a society and country of learning.
* 新中国成立后，中国坚持（persist in）独立自主的和平外交政策，在外交方面取得了巨大成就。截至 2022 年，中国已与 181 个国家建立了外交关系（diplomatic relations）
  Since the founding of the People's Republic of China,China has persisted in its independent foreign policy of peace and made tremendous progress in foreign affairs. By 2022,China has established diplomatic relations with 181 countries.

*  中国始终坚持维护（uphold）世界和平、促进共同发展的外交政策的宗旨，致力于推动构建人类命运共同体。 
 
 China has always been committed  to its foreign policy goals of upholding world peace and promoting common development and is delicated to promoting a goal community of shared future.

* 在和平共处五项原则（the Five Principles of Peaceful Coexistence）的基础上，中国正在为建设和平、繁荣、和谐的世界作出更大的努力。
 
 On the basis of the Five Principles of Peaceful Coexistence ,China is making greater efforts to build a peaceful,prosperous,and harmonious world.

* 太极拳是一种武术，也是一种健身运动，在中国有着悠久的历史。
  Taijiquan is a martial art and a fitness exercise as well . It has a long history in China.

* 太极拳动作缓慢而柔和，适合任何年龄、性别、体型(build) 的人。
  With slow and gentle  movements, Taijiquan is suitable for anyone ,whatever their age, gender, or build.
* 太极拳既可用于防身(self-defense)，又能强身健体，因而深受中国人民和世界人民的喜爱。
  Taijiquan can be used for self-defense as well as building one's body. Therefore ,it has become very popular among people both in China and around the World.
### 短语部分
### 选择题 部分

  * 计算机语言是完成某一任务的指令集
  * 将高级语言编写的源程序转换为机器指令的目标程序的过程称为“编译”
  * 对程序进行编译，要先用C编译系统提供的“预处理器”对程序中的预处理指令进行编译预处理
  *  C程序书写格式自由，一行可以写几个语句，一个语句也可分写在多行上。
  *  计算机能够识别的语言是二进制的语言，即机器语言。
  *  将十进制数 27.84375 转换成其他进制数，错误的是：(选b)应该是33.66
（A） 二进制为：11011.11011
（B） 八进制为：33.33
（C） 四进制为：123.312
（D） 十六进制为：1B.D8
  * 沃斯提出了 算法加数据结构等于程序（注意不是数据）
  * 程序中子模块一般不超过50行这句话是对的
  * 在C语言程序中逗号运算符的优先级最低
  * 当从键盘输入数据的时候，对于整型的变量可以输入实型，3.14--3（对的）
  * char c='\72'表示的是一个字符，这是八进制的格式
  * 逻辑运算符两边运算对象的数据类型:可以是任何类型的数据
  * 下面程序段的功能是计算1000！的末尾含有多少个零。请选择填空。
（提示：只要算出1000！中含有因数5的个数即可）
for(k=0,i=5;i<=1000;i+=5)
   {m=i;      while(【   】){k++;  m=m/5;} }

（A） m%5=0
（B） m=m%5= =0
（C） m%5= =0(对的)
（D） m%5!=0
* 下面程序的功能是求算式xyz+yzz=result(一个大于或者等于500的三位数)中x, y, z的值（其中xyz和yzz分别表示一个三位数），请选择填空。
#include<stdio.h>
main()
{int x,y,z,i,result;
  scanf("%d",&result);
 for(x=1;x<10;x++)
   for(y=1;y<10;y++)
      for(【    】;z<10;z++)
        {i=100*x+10*y+z+100*y+10*z+z;
         if(i==result)  printf(“x=%d,y=%d,z=%d\n”,x,y,z);
         }
 }

（A） z=x
（B） z=1
（C） z=0(对的)
（D） z=y
* 若有说明static int a[3][4]则数组中的各元素可在程序的编译阶段得到初值0
* 统计有多少单词的代码选择题 选c1!= c2==的那个选项
* 如果一个函数没有return语句 则会返回一个不确定的值
* 如果函数的返回类型与函数的定义不相同的话，以函数的定义为准
* 形参不能是常量 因为在函数里面会用 类比数学函数
* 函数的定义不能嵌套 函数的调用可以嵌套
* 函数类型缺省定义的话 就是int型
* 注意奥 这里的&a和&a[0]只是结果是一样的 其实&a是以整个数组为一个单位 如果+1的话直接就到了这个数组的结束地址

```
#include <stdio.h>
#include <string.h>
int main()
{
    int a[5];
    int i;
    for (i = 0; i < 5;i++)
    {
        a[i] = i;
    }
    printf("%d\n", &a);
    printf("%d\n", &a+1);
    

    printf("%d\n", &a[0]);
    printf("%d\n", &a[1]);
    return 0;
}
```
* 用typedef不能增加新类型
* un可以做函数参数 错

# 日记（看心情记日记）

## 12/16
  马上要进行各科的期末考试了，尤其是数学，英语，C语言。
  
  今天写了几套数学往年的试卷，u1s1难度不高，而且考试日期比较晚，所以不用太着急
  
  英语的话的则是，一点都没准备，应该突击训练一下了，尤其是听力，虽然考试的时候听力每次都错的不多，但是还是比较慌，呃呃呃还有写作部分，所以英语应该是这几门里，耗费精力最多的学科了吧。
  
  接下来是C语言，C语言怎么说呢，如果一段时间不进行练习的话，总是会忘，而且感觉有的地方还是没有理解透彻，考试时间也是这三门里面最早的，打算明天把第九章的链表部分好好看看，然后看看书（maybe
  
  哦哦哦.还有今天从图书馆出来看见了好看的晚霞，原来景色真的可以抚慰疲惫的心灵,但是在图书馆找位子还是很痛苦的，看着师哥师姐们努力的考研，越发感觉考研好累，所以还是平时努力一点吧。。。

  <table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e948ff90-f304-450d-bf82-60287b455795" alt="晚霞1" width="400" height="300"></td>
    <td><img src="https://github.com/user-attachments/assets/a54465ff-73db-4fc7-9f3c-14624a4f436f" alt="晚霞2" width="400" height="300"></td>
  </tr>
</table>

## 12/17
  总结一下今天吧，数学怎么说呢，我自信了，其实还是有一点知识点忘记了，今天感觉发现了等价无穷小替换的新大陆（哈哈
  
  英语没有复习
  
  C语言还是忘记的比较多，感觉应该锻炼的是自己的思维，不是记忆代码的能力，但是熟能生巧吧，感觉把链表的内容再打一遍，还是熟练了一点

  再来看一张之前拍的照片吧，调色有没有eva的味儿(😹
<img src="https://github.com/user-attachments/assets/e5e50dfb-b521-4557-a5b4-b536a074260b" alt="傍晚的图书馆" width="400" height="300">

# 12/18
  总结一下今天吧，首先怎么说呢，今天的自习写了两片数学题，然后英语没有复习，政治没有复习，C语言的20号有一个热身赛，做了一会儿C语言的题目，怎么说呢，首先怎么都找不到自

己代码的问题，感觉和答案差不多，但是测试点怎么都过不了qaq，还是先多想吧，看看怎么样的数据结构和题目的输入契合。。今天还是有点摆的，牌打的有点多。

# 12/19
 今天刷了几道编程题目，政治也要提上日程了，英语依旧0，晚上开了一个企业演讲？感觉本科就业也可？。。。走一步看一步吧

 睡了😪

# 12/20
 这是12/21号早上补的。。昨天晚上超级鸡马玩的时间太长了，还有昨天傍晚的训练赛，简直就是屎一样，网站直接崩掉了，虽然崩不崩题目我都不会做，怎么说呢，等着12/25号的C语言考

试结束，就开始学c++，然后数据结构，然后算法基础，好难😢

# 12/21

    这是12/22号早上补的，昨天周六玩的太嗨了，晚上人类一败涂地，睡前小丑牌，然后中午的比赛依旧都不会做

# 12/22

    地球online好吧🌏



  
