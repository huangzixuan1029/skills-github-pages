---
title: md笔记
layout: post-list

---

<div class="post-categories">
  <div class="card category-card">
    <h2>编程笔记</h2>
    <p>这里是我分享编程学习过程中的笔记和心得。(暂不支持图片)</p>
    模板积累

#### 位运算

![image-20250901180857917](笔记.assets/image-20250901180857917.png)

a^a=0;

a^0=a;

```
//交换操作
a=a^b;
b=a^b;
a=a^b;
这样就可以不引入变量的情况下 就进行zhi

```





## gcd lcm

gcd 可以直接使用函数 __ gcd()，c++17可以直接gcd(),lcm()

~~~
int gcd(int a,int b)
{
	if(!b) return a;
	return gcd(b,a%b)
}
~~~



## 并查集

格式

```
初始化
vector<int>arr(10);
for(int i=1;i<10;i++)
{
	arr[i]=i;//让自己是自己的老大，进行初始化
}
```



```c++
查找 (路径压缩版本)
int find(int x)
{
    if(x==arr[x])
    {
        return x;
    }
    else
    {
        return arr[x]=find(arr[x]);//往上面进行刨根
    }
}
```



```
合并
​示例说明：
假设 fa[2] = 2 和 fa[3] = 3，调用 merge(2, 3)：
你的代码：fa[3] = 2，此时 3 的父节点正确指向 2。
继续调用 merge(1, 3)：
find(1) 返回 1，find(3) 返回 2（因为 3 的根是 2）。
你的代码：fa[3] = 1，导致 3 的父节点为 1，但根节点 2 的父仍为 2。此时 2 和 1 未被合并，集合分裂。

void merge(int x,int y)
{
	int xx=find(x);
	int yy=find(y);
	if(xx!=yy)
	{
		arr[yy]=xx;//看上面的示例说明，看为什么不能写arr[y]=xx;
	}
	else
	{
		return ;
	}
	
	
}
```

## 选择排序

几种常见排序时间 空间复杂度的总结

![image-20250912193444025](笔记.assets/image-20250912193444025.png)

```
int arr[10];
for(int i=0;i<9;i++)
{
	for(int j=i+1;j<10;j++)
	{
		int temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
}
```

需要注意的点是可以直接交换结构体数组

```
if(arr[i].id>arr[j].id)
                    {
                        // 在排序循环中使用临时结构体交换
                        Node temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
```

## 冒泡排序

```
int arr[10];
for(int i=0;i<10-1;i++)
{
	for(int j=0;j<10-1-i;j++)
	{
		int temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
}
```

## 归并排序(利用了外排序 )

还可以进行代码的改写 完成归并排序的同时完成小和的求解

在一个数组中，每一个数左边比它小的数累加起来，就叫做这个数组的小和。

```
package com.hue.demo;

public class guiBIng {
    public static void main(String[] args) {

        int[] testArr={4,3,1,2,5};
        process(0,testArr.length-1,testArr);
        for (int i = 0; i < testArr.length; i++) {
            System.out.println(testArr[i]);
        }
    }
    public static void process(int l,int r,int[] arr){
        if(l>=r){
            return ;
        }
        //int mid=(r-l)>>1;//0-5 duiying 3
        //这里中间索引的计算有问题 不能只算左右之间的距离 因为是索引 所以还要加上左边的数字
        int mid=l+((r-l)>>1);
        process(l,mid,arr);
        process(mid+1,r,arr);
        merge(l,r,mid,arr);
    }

    public static void merge(int l,int r,int m,int[] arr){
        int[] temp=new int[r-l+1];//这里还要加1 因为操作的是索引
        int p1=l;
        int count=0;
        int p2=m+1;
        //两边都还有元素的时候
        while(p1<=m&&p2<=r){
            temp[count++]=(arr[p1]<=arr[p2]?arr[p1++]:arr[p2++]);
        }
        //右边元素用完的时候
        while(p2>r&&p1<=m){
            temp[count++]=arr[p1++];
        }
        //左边元素用完的time
        while(p1>m&&p2<=r){
            temp[count++]=arr[p2++];
        }
        //要进行数组的替换啊
        for (int i = 0; i < temp.length; i++) {
            arr[l+i]=temp[i];
        }
    }
}

```

## 快速排序

这里是优化后的快速排序 利用了荷兰国旗问题的三向切分 加上递归进行切分

```
package com.hue.demo;

public class lianxi {
    public static void main(String[] args) {
        int[] arr={1,4,3,5,6,4,5};
        QuickSort(arr,0,arr.length-1);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
    public static void QuickSort(int[] arr,int l,int r){
        if(l>=r)return ;
        int[] p=partition(arr,l,r);
        QuickSort(arr,l,p[0]-1);
        QuickSort(arr,p[1]+1,r);
    }
    public static void swap(int a,int b,int[] arr){
        int temp=arr[a];
        arr[a]=arr[b];
        arr[b]=temp;

    }
    public static int[] partition(int[] arr,int l,int r){
        int less=l-1;
        int more=r;
        int cur=l;

        while(cur<more){
            if(arr[cur]<arr[r]){
                swap(++less,cur,arr);
                cur++;
            }
            else if(arr[cur]==arr[r]){
                cur++;
            }
            else{
                swap(--more,cur,arr);

            }
        }
        swap(r,more,arr);
        return new int[]{less+1,more};//这里不能写int[2] 注意这里返回的是中间等于的两边的部分
    }
}

```



## 邻接矩阵和邻接表

```
int enemy[N][N];

enemy[a][b]=1;
enemy[b][a] = 1;

```

注意使用的情况，具有传递性的比如朋友的朋友就是朋友可以使用<span style="font-weight:bold;">并查集</span>(<span style="font-weight:bold;">有向传递</span>)放到一个集合中去，然而双向的关系，我的敌人是你，你的敌人也就是我，适合用于标记双向关系(<span style="font-weight:bold;">无向且不传递</span>)	

![image-20250417233140643](笔记.assets/image-20250417233140643.png)

![image-20250417233159120](笔记.assets/image-20250417233159120.png)

注意区分邻接矩阵和邻接表 

邻接矩阵是二维数组 

邻接表是类似这种每一个节点 使用前导数组 存储相接的边

![image-20250417233337546](笔记.assets/image-20250417233337546.png)

## 小顶堆和大顶堆(特殊的完全二叉树)

分别是向上和向下调整

```
//up函数（以小根堆为例子
int heap[N];//只是一个例子了 需要注意的点很多，例如索引从哪里开始
//这个是从1索引开始的例子,因为有1的时候1/2=0，所以要特殊讨论1
void up(int x)
{
if(x==1) return;

else
{
	if(heap[x]<heap[x/2])
	{
		swap(heap[x],heap[x/2]);
		up(x/2);
	}
}
	return ;

}
//或者使用循环来构建up函数
void up(int x)
{
    while(x>1&&heap[x]<heap[x/2])//这里可以这么理解为什么要大于1，因为是up函数，最上面的不用主动进行交换
    {
        swap(heap[x], heap[x / 2]);
        x /= 2;
    }
}
//建堆

for(int i=0;i<n;i++)
{
	int a;
	cin>>a;
	arr[i]=a;
	up(i);
}
```

```
public static void diguiHeapfiy(int[] arr,int index,int size){
        int left=index*2+1;
        if(left>=size) return ;
        int bigger=left+1<size&&arr[left]>arr[left+1]?left:left+1;
        bigger=arr[bigger]>arr[index]?bigger:index;
        if(bigger==index)return ;

        swap(arr,bigger,index);
        diguiHeapfiy(arr,bigger,size);
    }
```



## 范围for循环（可以直接访问，不需要解引用）

```
for(auto &it:num)//这里的num是容器的名字
{
	cout<<it<<endl;//这里可以直接输出不用解引用
}
```



> 总结对比
> 特性	范围 for 循环	迭代器循环
> 语法	简洁，直接访问元素	复杂，需要显式操作迭代器
> 可读性	高	较低
> 适用场景	简单遍历任务	需要修改容器结构的任务
> 性能	与迭代器循环相同	与范围 for 循环相同
> 修改容器	不支持	支持

##  批量化初始化数组成一个很大的数(memset 在cstring里)

```
memset(arr,0x3f,sizeof(arr));//操作的是每一位，又因为数组是连续的，所以连续四个0x3f也就是0x3f3f3f3f
if(arr[final]==0x3f3f3f3f)
{
cout<<'-1';
}
```

```cpp
memset(arr, 0, sizeof arr);这是都初始化成0的代码
```

```
#include<bits/stdc++.h>//这是利用metset进行重置的例子
using namespace std;
const int N = 10;
struct Node{
    int t, d, l;
}plane[N];
int n=0;
bool st[N];
bool dfs(int x,int time_current)
{
    if(x==n)
        return true;
    for (int i = 0; i < n;i++)
    {
        if(!st[i]&&plane[i].t+plane[i].d>=time_current)
        {
            st[i] = true;
            if(dfs(x + 1, max(time_current,plane[i].t) + plane[i].l))
            {
                return true;
            }
            st[i] = false;
        }
        
    }

    return false;
}
int main()
{
    int T;
    cin >> T;
    int t, d, l;
    while(T--)
    {
        memset(st, 0, sizeof st);       // 重置访问数组
        memset(plane, 0, sizeof plane); // 清空飞机数据
        cin >> n;
        for (int i = 0; i < n;i++)
        {
            cin >> t >> d >> l;
            plane[i] = {t, d, l};
        }
        if(dfs(0,0))
            cout << "YES" << endl;
        else
            cout << "NO" << endl;
    }
    return 0;
}
```



## dfs深度搜索

容易错的点 dfs(x++)这里是后增 不要这么写 只写x+1,因为无论是x++还是++x都会实际上改变x的值，只有x+1是实际上给函数传递一个x+1数值的值，而不是实际上修改x

还要注意的是，退出的条件是写(x>n)还是(x==n)要具体分析，看输入是从0开始还是从1开始

### 问题积累

#### 连通块问题

写出方向向量，将联通的点进行标记，标记成不联通的标志，这样通过在主函数中进行遍历每一个可以代表联通块儿的点就行，并计数++；	

~~~
int dir_x[] = {0,-1,0,1};
int dir_y[] = {1,0,-1,0};
void dfs(int x,int y)
{
    if(cell[x][y]=='0'||x<1||y<1||x>hang||y>lie)
        return;
    cell[x][y] = '0';
    for (int i = 0; i < 4;i++)
    {
        dfs(x + dir_x[i], y + dir_y[i]);
    }
}
~~~





### 典型题目

这里值得注意的是重复标记的问题 不能使用bool类型的数据进行标记 因为同一个位置如果要重复标记 如果进行回溯操作 可能清空了之前的标记 所以用数字计数进行标记 如果==0就表示可以选择 如果不 ==0就表示不能进行选择了 已经别标记了

还有比较新的点是dfs枚举二维的数据的时候，不是地图之类的问题 可以使用先列后行 

```
if(y==m+1)
    {
        dfs(x + 1, 1);
        return;
    }
    if(x==n+1)
    {
        max_num = max(max_num, mx);
        return;
    }
```

也就是如果列超过之后 hang++如果行超过之后 就是遍历完了

```
#include<bits/stdc++.h>
using namespace std;
const int N = 10;

int dir_x[] = {1,1,0,-1,-1,-1,0,1};
int dir_y[] = {0,1,1,1,0,-1,-1,-1};
int st[N][N];
int n, m;
int num[N][N];
int max_num = 0;
int mx = 0;
void dfs(int x,int y)
{
    //这里学到了要从行列来遍历
    if(y==m+1)
    {
        dfs(x + 1, 1);
        return;
    }
    if(x==n+1)
    {
        max_num = max(max_num, mx);
        return;
    }
    //不选
    dfs(x, y + 1);
    //选
    if(st[x][y]==0)
    {
        mx+=num[x][y];
        st[x][y]++;
        for (int i = 0; i < 8;i++)
        {
            int xx = dir_x[i] + x;
            int yy = dir_y[i] + y;
            if(xx<1||yy<1||xx>n||yy>m)
                continue;
            st[xx][yy]++;
        }
        dfs(x, y + 1);
        st[x][y]--;
        for (int i = 0; i < 8; i++)
        {
            int xx = dir_x[i] + x;
            int yy = dir_y[i] + y;
            if (xx < 1 || yy < 1 || xx > n || yy > m)
                continue;
            st[xx][yy]--;
        }
        
        mx -= num[x][y];
    }
}
int main()
{
    int t;
    cin >> t;
    while(t--)
    {
       
        cin >> n >> m;
        max_num = 0;
        mx = 0;
        memset(num, 0, sizeof num);
        memset(st, 0, sizeof st);
        for (int i = 1; i <= n;i++)
        {
            for (int j = 1; j <= m;j++)
            {
                cin >> num[i][j];
            }
        }
        dfs(1, 1);
        cout << max_num << endl;
    }

    return 0;
}
```



>
>
>从 1∼n1∼n 这 nn 个整数中随机选取任意多个，输出所有可能的选择方案。
>
>#### 输入格式
>
>输入一个整数 nn。
>
>#### 输出格式
>
>每行输出一种方案。
>
>同一行内的数必须升序排列，相邻两个数用恰好 11 个空格隔开。
>
>对于没有选任何数的方案，输出空行。
>
>本题有自定义校验器（SPJ），各行（不同方案）之间的顺序任意。 

 	剪枝：如果当前已选的数的个数 `currentSelection` 加上剩下的可选数 `n - start + 1` 小于 `k`，说明无法选出足够的数，直接返回。

~~~
#include<iostream>
using namespace std;
const int N=21;
int st[N];
int n;
void dfs(int x)
{
	if(x>n)
	{
		for(int i=1;i<=n;i++)
		{
			if(st[i]==1) cout<<i<<' '; 
		}
		cout<<endl;
		return ;
	}//设置出口
	//选
	st[x]=1;
	dfs(x+1);
	st[x]=0; 
	//不选   顺序是先调用下一个函数之后，再进行回溯
	st[x]=2;
	dfs(x+1);
	st[x]=0; 
}
int main()
{
	
	cin>>n;
	dfs(1);
	return 0;
}
~~~



~~~
#include<iostream>//这个是用排列组合的类似
#include<cmath>
using namespace std;
int n;
int r;
const int N = 20;
int count = 0;
int arr[N];
int sel[N];
bool sushu(int x)
{
    if(x==1)
        return true;
    if(x<=2)
    {
        return false;
    }
    for (int i = 2; i<=x/i*1.; i++)//这里可以这么写
    {
        if (x % i == 0)
            return false;
    }
    return true;
}
void dfs(int x,int start)
{
	if(x-1+r-start+1<n)//也就是x-1是当前已经选的数,加上还能选的数字，如果小于要选的n个数字，就说明选不出来了
	{
	return;
	}
    if(x>n)
    {
        int sum = 0;
        for (int i = 1; i <= n;i++)
        {
            sum += sel[i];
        }
        if(sushu(sum))
        {
            count++;
        }
        return;
    }
    for (int i = start; i <= r;i++)
    {
        sel[x] = arr[i];
        dfs(x + 1, i + 1);
    }
}

int main()
{
    
    cin >> r >> n;
    for (int i = 1; i <= r;i++)
    {
        cin >> arr[i];
    }
    dfs(1, 1);
    cout << count;
    return 0;
}
~~~

- **适用场景**：DFS通常用于解决**路径搜索**（如迷宫、跳跃问题）、**排列组合**（如全排列、子集）、**连通性检测**（如图的连通块）等问题。
- **关键特征**：需要遍历所有可能的路径或状态，且允许深度优先探索。

优化策略是 记忆化剪枝 以及提前终止不可能的路径

//洛谷 P1135 奇怪的电梯 用到了记忆化剪枝

```
#include<bits/stdc++.h>
using namespace std;
int level,final,n;
const int N=250;
int res[N];
int fl_infor[N];
void dfs(int step,int cnt)
{
	//ÏÂ
	res[step]=cnt;
	if(step-fl_infor[step]>0&&cnt+1<res[step-fl_infor[step]]){
		dfs(step-fl_infor[step],cnt+1);
	}
	//ÉÏ
	if(step+fl_infor[step]<=n&&cnt+1<res[step+fl_infor[step]]){
		dfs(step+fl_infor[step],cnt+1);
	} 
	 
}
int main()
{
	cin>>n>>level>>final;
	
	memset(res,0x3f,sizeof(res));
	for(int i=1;i<=n;i++)
	{
		cin>>fl_infor[i];
	}
	dfs(level,0);
	if(res[final]==0x3f3f3f3f)
	cout<<-1;
	else 
	cout<<res[final];
	return 0;
}
```

``` 
#include <bits/stdc++.h>
using namespace std;
const int N = 11;
int n, k;
int g[N][N]; // 初始化输入的矩阵
int dx[] = {-1, -1, 0, 1, 1, 1, 0, -1};
int dy[] = {0, 1, 1, 1, 0, -1, -1, -1}; // y总视频有介绍为什么这么排
string path;                            // 答案
bool st[N][N];                          // 标注是否走过
int edge[N][N][N][N];                   // edge[x1][y1][x2][y2]表示从(x1,y1)走到(x2,y2)
bool dfs(int a, int b)
{
    // 每个格子恰好都经过一次（仅一次）
    if (a == n - 1 && b == n - 1)
        return path.size() == n * n - 1; // 到终点并正好走的步数够
    st[a][b] = true;
    for (int i = 0; i < 8; i++)
    {
        int x = a + dx[i], y = b + dy[i];
        if (x < 0 || x >= n || y < 0 || y >= n)
            continue; // 越界
        if (st[x][y])
            continue; // 已访问过
        if (g[x][y] != (g[a][b] + 1) % k)
            continue; // 012,下一个数是上一个数+1循环
        //(i%2)斜着走;(a,b)->(x,y)或者(x,y)->(a,b)已经走过为true
        if (i % 2 && (edge[a][y][x][b] || edge[x][b][a][y]))
            continue; // 交叉路径
        edge[a][b][x][y] = true;
        path += i + '0'; // 加入结果的字符串中
        if (dfs(x, y))
            return true;
        path.pop_back(); // 恢复现场
        edge[a][b][x][y] = false;
    }
    st[a][b] = false;
    return false;
}
int main()
{
    cin >> n >> k;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> g[i][j];
    if (!dfs(0, 0))
        cout << -1 << endl;
    else
        cout << path << endl;
    return 0;
}
```

这里使用了返回值是bool类型的dfs代码，这样的好处是不用像传统的dfs一样找到答案之后，还要继续搜索，而是找到答案之后直接结束，找到一个答案，这个答案通常来说就是最优解

~~~
bool dfs(当前状态, 路径/选择, ...) {
    // 终止条件
    if (满足条件) {
        return true; // 找到解，提前终止
    }
    if (越界/不合法状态) {
        return false; // 剪枝
    }

    // 处理当前节点（例如标记已访问）
    ...

    // 递归遍历所有相邻/子状态
    for (所有可能的子状态) {
        if (dfs(子状态, ...)) { // 如果子状态能找到解
            return true; // 向上传递结果，提前终止
        }
    }

    // 恢复状态（例如回溯，取消标记）
    ...

    // 所有子状态均无解 :遍历了所有的子状态 都不行 向上传递此路开始的所有子状态都不行 
    return false;
}
~~~



## bfs

### 使用bfs来解决迷宫问题(可以是最短路径)

> 先写方向向量
>
> 定义结构体，用来存此时的横纵坐标
>
> 不能重复访问，所以要写标记数组（这一步一定要写，否则会爆内存）
>
> 接下来就是写dfs函数，函数的参数选择是：必选横纵坐标，如果是最短路径的问题可以传一个cnt进去
>
> 在dfs函数里面首先把开始的坐标放到队列中，（注意每次放到的队列的时候，直接把它标记了）
>
> 进行循环，循环的条件是队列非空

~~~
#include<iostream>
#include<queue>
using namespace std;

const int N = 110;
int arr_x[] = {0, -1, 0, 1};
int arr_y[] = {1, 0, -1, 0};
struct Node{
    int a;
    int b;
};

queue<Node> ans;
int hang, lie;
char map[N][N];
bool flag = false;
bool visited[N][N];

void bfs(int x,int y)
{
    ans.push({x, y});
    visited[x][y] = true;
    while(!ans.empty())//非空
    {
        Node current = ans.front();
        ans.pop();//这里注意
        if(current.a==hang&&current.b==lie)
        {
            flag = true;
            return;
        }
        for (int i = 0; i < 4;i++)
        {
            int next_x = current.a + arr_x[i];
            int next_y = current.b + arr_y[i];
            if(next_x>=1&&next_y>=1&&map[next_x][next_y]!='#'&&visited[next_x][next_y]==false&&next_x<=hang&&next_y<=lie)
            {
                ans.push({next_x, next_y});
                visited[next_x][next_y] = true;
            }
        }
    }
}    
int main()
{
    
    cin >> hang >> lie;
    for (int i = 1; i <= hang;i++)
    {
        for (int j = 1; j <= lie;j++)
        {
            cin >> map[i][j];
        }
    }
    bfs(1, 1);
    if(flag)
        cout << "Yes";
    else
        cout << "No";
    return 0;
}
~~~

~~~
#include <iostream>
#include <queue>
#include <cstring>   // 用于 memset
#include <algorithm> // 用于 std::min
using namespace std;

struct Node
{
    int x, y;
    int time = 0;
};

const int N = 110;

int hang, lie;
int map[N][N];
int dist[N][N]; // 记录到达每个点的最小时间
int arr_x[] = {0, -1, 0, 1};
int arr_y[] = {1, 0, -1, 0};

void bfs(int x, int y)
{
    queue<Node> q;
    q.push({x, y, map[x][y]});
    dist[x][y] = map[x][y]; // 起点的初始时间

    while (!q.empty())
    {
        Node cur = q.front();
        q.pop();

        // 到达终点
        if (cur.x == hang && cur.y == lie)
        {
            continue; // 已经找到一条路径，继续寻找更优路径
        }

        // 遍历四个方向
        for (int i = 0; i < 4; i++)
        {
            int next_x = cur.x + arr_x[i];
            int next_y = cur.y + arr_y[i];

            // 检查边界
            if (next_x >= 1 && next_x <= hang && next_y >= 1 && next_y <= lie)
            {
                int new_time = cur.time + map[next_x][next_y];

                // 如果新路径更优，则更新
                if (new_time < dist[next_x][next_y])
                {
                    dist[next_x][next_y] = new_time;
                    q.push({next_x, next_y, new_time});
                }
            }
        }
    }
}

int main()
{
    while (cin >> hang >> lie)
    {
        // 初始化地图
        for (int i = 1; i <= hang; i++)
        {
            for (int j = 1; j <= lie; j++)
            {
                cin >> map[i][j];
            }
        }

        // 初始化 dist 数组
        memset(dist, 0x3f, sizeof(dist)); // 初始化为一个较大的值
        
        // 调用 BFS
        bfs(1, 1);

        // 输出结果
        cout << dist[hang][lie] << endl;
    }
    return 0;
}
~~~

## 双指针

### 可以用来处理区间和的问题:

思路：使用left和right都定义在0索引的位置上，然后在left不变的基础上，right++,一直到sum>target，然后left++,加到sum>target不成立（可能小于可能等于）

类似这样:

~~~
int n=temp.size();
    int left = 0;
    int sum = 0;
    vector<pair<int, int>> result;
    for (int right = 0; right < n;right++)
    {
        sum += temp[right];
        while(sum>target)
        {
            sum -= temp[left++];
        }
        if(sum==target)
        {
            result.emplace_back(left, right);
        }
    }
~~~

还有带一点贪心的问题，就具体分析了



<span style="font-weight:bold; text-emphasis:filled red; vertical-align:sub; font-size:1.1em; color:#99004C;">不知道怎么总结就先贴一段代码吧(以后题做多了再回来总结)</span>

~~~
#include<bits/stdc++.h>
using namespace std;
void find_min(vector<int>&temp,int n)
{
    int left = 0;
    int right = n - 1;
    while(left<n-1&&temp[left]<=temp[left+1])
    {
        left++;
    }

    if(left==n-1)
    {
        cout << 0 << endl;
        return;
    }
    while(right>0&&temp[right]>=temp[right-1])
    {
        right--;
    }
    int min_num = min(n - 1 - left, right);//这一步是关键，用来处理边界情况，同时可以优化代码，这里的n-1-left是后面还有多少个元素（不包含当前的元素）可以直接记忆
    int i = 0;
    int j = right;
    while(i<=left&&j<n)
    {
        if(temp[i]<=temp[j])
        {
            min_num = min(min_num, j - 1 - i);
            i++;
        }
        else
            j++;
    }
    cout << min_num << endl;
    return;
}
int main()
{
    int t;
    while(cin>>t)
    {
        vector<int> temp;
        for (int i = 0; i < t;i++)
        {
            int j;
            cin >> j;
            temp.push_back(j);
        }
        find_min(temp, t);
    }
    return 0;
}
~~~



## dp

![image-20250407201426735](笔记.assets/image-20250407201426735.png)

01背包状态转移方程：

```
f[i][j]=max(f[i-1][j],f[i-1][j-w[i]]+v[i]);
```

完全背包状态转移方程:

```
f[i][j]=max(f[i-1][j],f[i][j-w[i]]+v[i]);
```



### 背包dp(01)(完全背包也在这一块儿)

模板 

~~~
//f[i]表示结果 w[i]表示所需的容量 v[i]表示价值 
//共有n个选择 s表示总容量
for (int i = 1; i <= n; i++)
    {
        for (int j = s; j >= w[i]; j--)//这里的j>=w[i],已经判断只有可以放进去才会进行
        {
            f[j] = max(f[j], f[j - w[i]] + v[i]); // 01背包基本模板
        }
    }
~~~

![image-20250407203315885](笔记.assets/image-20250407203315885.png)

? 关于逆序的理解//卧槽图片不小心删了 qaq <span style="font-weight:bold; color:#FF0000;">( https://www.acwing.com/solution/content/9074/)//这个是别人总结的</span>

一句话来说就是通过特定的顺序使f[j]和f[j-w[i]]恰好是上一行的结果

![](笔记.assets/15.png)



![](笔记.assets/dp逆序总结.png)

正序的话 dp[j]的更新可能会覆盖dp[j-weigtht[i]]的值，导致重复选择一个数字

![](笔记.assets/wr.png)

![](笔记.assets/dp空间复杂度.png)

### 区间dp

通常为 **O(n³)**（三层循环），适用于n ≤ 200的情况



这是石子合并问题的代码

```
#include<bits/stdc++.h>
using namespace std;
const int N = 110;

int front_sum[N];
int dp[N][N];
int main()
{
    int n;
    cin >> n;
    memset(front_sum, 0, sizeof front_sum);
    for (int i = 1; i <= n;i++)
    {
        cin >> front_sum[i];
        front_sum[i] += front_sum[i - 1];
    }

    for (int len = 2; len <= n;len++)
    {
        for (int i = 1; i + len - 1 <= n;i++)
        {
            int j = i + len - 1;
            dp[i][j] = 1e9;
            for (int k = i; k < j;k++)
            {
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j] + front_sum[j] - front_sum[i-1]);
            }
        }
    }
    cout << dp[1][n] << endl;
    return 0;
}
```

涂色的代码 不理解为什么按照两端点的颜色是不是相同来判断 状态转移方程

```
#include<bits/stdc++.h>
using namespace std;
const int N = 55;
int main()
{
    string a;
    cin >> a;
    int dp[N][N];
    int num = a.size();
    for (int i = 0; i < num;i++)
    {
        dp[i][i] = 1;//因为要求单个区间涂色是1了
    }
    for (int len = 2; len <= a.size() ;len++)
    {
        for (int i = 0; i + len - 1<num;i++)
        {
            int j = i + len - 1;
            dp[i][j] = 1e9;
            if (a[i] == a[j])
                dp[i][j] = min(dp[i + 1][j], dp[i][j - 1]);
            else
            {
                for (int k = i; k < j; k++)
                {
                    dp[i][j] = min(dp[i][j], dp[k + 1][j] + dp[i][k]);
                }
            }
            
        }
    }
    cout << dp[0][num - 1] << endl;
    return 0;
}
```



### 线性dp

```
#include<bits/stdc++.h>
using namespace std;
const int N = 1e5 + 10;
int dp[N][16];
int get_first(int x)
{
    int res;
    while(x)
    {
        res = x % 10;
        x /= 10;
    }
    return res;
}
int get_final(int x)
{
    return x % 10;
}

int main()
{
    int n;
    cin >> n;
    vector<int> ji(n + 1);
    for (int i = 1; i <= n; i++)
    {
        cin >> ji[i];
    }
    memset(dp, 0x3f3f3f3f, sizeof dp);
    for (int i = 0; i < 10; i++)
    {
        dp[0][i] = 0;
    }
    
    for(int i = 1; i <= n; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            dp[i][j] = dp[i - 1][j] + 1;
        }
        int final = get_final(ji[i]);
        int first = get_first(ji[i]);
        dp[i][final]=min(dp[i-1][first],dp[i][final]);
    }
    int ans = 0x3f3f3f3f;
    for (int i = 0; i < 10; i++)
    {
        ans = min(ans, dp[n][i]);
    }
    cout << ans << endl;
    return 0;
}
```



优化成一维的情况

```
#include<bits/stdc++.h>
using namespace std;
const int N = 1e6+ 10;
int dp[N];
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    int n;
    cin >> n;
    int a[N];
    int b[N];
    
    for (int i = 1; i <= n;i++)
    {
        cin >> a[i];
    }
    for (int i = 1; i <= n; i++)
    {
        cin >> b[i];
    }
    for (int i = 1; i <= n;i++)
    {
        int prev = dp[0];
        for (int j = 1; j <= n;j++)
        {
            int temp = dp[j];
            dp[j] = max(dp[j], dp[j - 1]);
            if(a[i]==b[j])
            {
                dp[j] = max(dp[j], prev+1);
            }
            prev = temp;
        }
    }
    cout << dp[n] << endl;
    return 0;
}
```



## 窗块滑动解决区间内最值问题

注意点：这里存的是索引,先处理范围问题，再维持单调性，(出)——（入）——（存）



~~~
void solve(vector<int> temp, int k)
{
    int n = temp.size();
    deque<int> temp_min;
    deque<int> temp_max;
    for (int i = 0; i < n; i++)
    {
        // 出(先处理范围，再维持单调)
        while (!temp_max.empty() && i - k + 1 > temp_max.front())
            temp_max.pop_front();
        while (!temp_min.empty() && i - k + 1 > temp_min.front())
            temp_min.pop_front();

        while (!temp_min.empty() && temp[temp_min.back()] > temp[i])
            temp_min.pop_back();
        while (!temp_max.empty() && temp[temp_max.back()] < temp[i])
            temp_max.pop_back();

        // 入
        temp_min.push_back(i);
        temp_max.push_back(i);
        // 存
        if (i >= k - 1)
        {
            max_num.push_back(temp[temp_max.front()]);
            min_num.push_back(temp[temp_min.front()]);
        }
    }
}
~~~

##  高精度

### 高精度✖️低精度模板

~~~
void mul(vector<int>&a,int b)
{
    int t = 0;
    for (int i = 0;i<a.size();i++)
    {
        t += a[i]*b;
        a[i] = t % 10;
        t /= 10;
    }
    while (t) // 处理剩余进位（可能有多位）
    {
        a.push_back(t % 10);
        t /= 10;
    }
}
~~~

### 高精度➕低精度

~~~
void add(vector<int>& a, int b) {
    int t = b; // 初始进位是b（相当于把b加到最低位）
    for (int i = 0; i < a.size(); i++) {
        t += a[i];      // 当前位 + 进位
        a[i] = t % 10;  // 当前位结果
        t /= 10;        // 新的进位
    }
    while (t) {         // 处理剩余进位（可能有多位）
        a.push_back(t % 10);
        t /= 10;
    }
}
~~~



### 高精度✖️高精度的模板

~~~
vector<int> mul(vector<int> &A, vector<int> &B)
{
    //先创建C保存A和B按位相乘的结果，可以先不管进位
    vector<int> C(A.size() + B.size());

    for (int i = 0; i < A.size(); i++)
        for (int j = 0; j < B.size(); j++)
            C[i + j] += A[i] * B[j];

    //可能有多个进位，对于超过C大小的进位来说需要把t%10的结果放进去
    for (int i = 0, t = 0; i < C.size() || t; i++)
    {
        t += C[i];
        if (i >= C.size()) C.push_back(t % 10);//这一步可以去掉 因为不会超过两个数组的大小和
        else C[i] = t % 10;

        t /= 10;
    }

    //去除前导0
    while (C.size() > 1 && C.back() == 0) C.pop_back();

    return C;
}
~~~

或者(进行计算的同时进行进位操作)

~~~
vector<int> mul(vector<int>& a, vector<int>& b) {
    vector<int> c(a.size() + b.size(), 0);  // 结果数组，初始化为0（最多a位数+b位数）
    
    for (int i = 0; i < a.size(); i++) {
        int t = 0;  // 每轮乘法的进位
        for (int j = 0; j < b.size(); j++) {
            // 逐位相乘并累加到对应位置
            t += a[i] * b[j] + c[i + j];
            c[i + j] = t % 10;  // 当前位结果
            t /= 10;            // 进位
        }
        // 处理剩余进位（可能有多位）
        if (t) {
            c[i + b.size()] += t;
        }
    }
    
    // 去除前导零（如果结果实际位数小于预分配空间）
    while (c.size() > 1 && c.back() == 0) {
        c.pop_back();
    }
    
    return c;
}
~~~

### 高精度➕高精度模板

~~~
vector<int> add(vector<int>& A, vector<int>& B) {
    vector<int> C;  // 存储结果
    int t = 0;      // 进位

    for (int i = 0; i < A.size() || i < B.size(); i++) {
        if (i < A.size()) t += A[i];  // 如果A还有位，加上A[i]
        if (i < B.size()) t += B[i];  // 如果B还有位，加上B[i]
        C.push_back(t % 10);          // 当前位结果
        t /= 10;                      // 计算进位
    }

    if (t) C.push_back(t);  // 处理最高位可能的进位

    return C;
}
~~~



## 前缀和

```
#include <iostream>
using namespace std;

const int MAXN = 1e5 + 10; // 假设最大 n 是 1e5
int arr[MAXN]; // 全局变量默认初始化为 0

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cin>>arr[i];
        arr[i]+=arr[i - 1]; // 计算前缀和
    }
    // 使用示例：查询区间 [l, r] 的和 = arr[r] - arr[l - 1]
    return 0;
}
```

## 区间调度问题

![image-20250422151638363](笔记.assets/image-20250422151638363.png)

```
#include<bits/stdc++.h>
using namespace std;
struct timel{
    int kaishi;
    int jieshu;
};
int trans(string a)
{
    int hh = (a[0]-'0') * 10 + (a[1]-'0');
    int min = (a[3] - '0') * 10 + (a[4] - '0');
    int ss = (a[6] - '0') * 10 + (a[7] - '0');
    return hh * 3600 + min * 60 + ss;
}
bool cmp(timel a,timel b)
{
    return a.kaishi < b.kaishi;
}
int main()
{
    ios::sync_with_stdio(false);
cin.tie(nullptr);

    int n;
    cin >> n;
    vector<timel> jilu(n);
    priority_queue<int, vector<int>, greater<int>>res;
    for (int i = 0; i < n;i++)
    {
        string a, b;
        cin >> a >> b;
        jilu[i].kaishi = trans(a);
        jilu[i].jieshu = trans(b);
    }
    sort(jilu.begin(), jilu.end(), cmp);
    for(auto it:jilu)
    {
        if(!res.empty()&&it.kaishi>res.top())//这里必须是大于
        {
            res.pop();
        }
       
            res.push(it.jieshu);
        
    }
    cout << res.size()<<endl;
    return 0;
}
```



# 语法



## map

### 插入元素的方法

```
struct Node
{
	int a,;
	int b;
}
map<int,Node> mp;
mp[45]={12,23};//或者是mp[45]=Node{12,23};
```

当 id(int) 不存在时，自动创建一个新键值对。
当 id(int) 已存在时，覆盖原有的 node 数据。

### 对于键值对的理解

> <span style="font-weight:bold; color:#CC0000;">这里键相当于代替，包括数据类型的替换，所以可以这样写</span>

``` \#include<bits/stdc++.h>
using namespace std;

int main()

{

  map<int, vector<int>> mp;

  mp[45] = {12, 56};

  cout << mp[45][0] << endl;//这里键相当于代替，包括数据类型的替换，所以可以这样写

  return 0;

}
```

```
unordered_map<string,bool> subs;
    for (int i = 0; i < N;i++)
    {
        string user;
        cin>>user;
        subs[user] = true;
    }
```



## vector

犯过的错误：vector<int>arr(1000);进行初始化之后才开始push_back；

> 错误分析

1. > 容器初始化污染数据（核心逻辑错误）

> vector<int> arr(1000); // 初始化1000个0
> arr.push_back(zuida);   // 添加的数据在1000个0之后
> 结果：arr的实际内容是 [0,0,...1000个0..., zuida1, zuida2...]
> 排序后最大值的0会干扰结果，例如输入短字符串时，最大值会被0覆盖



注意的是ji.end()返回指的是最后面一个元素的还往后一个，所以erase(ji.end-1)；才是删除掉最后一个元素.

注意erase函数的参数是it（也就是迭代器）

next(it)指的是下一个迭代器

## sort

 <span style="font-weight:bold;">在 C++ 的 sort 函数中，区间范围是 左闭右开（即 [begin, end)），因此当你的数组从 下标 1 开始存储数据 时，若要对 arr[1] 到 arr[num] 的所有元素排序，需要：</span>

sort(arr + 1, arr + num + 1, cmp);

## string(注意没找到是string::npos)

### sscanf

用于解析字符串

```
sscanf(a.c_str(), "%d and %d are siblings", &x,&y);
```

注意如果是在c++中，需要将string类型的数据进行C语言化，也就是a.c_str()这一个步骤

### find()

注意find函数的返回值即可

如果没有找到的话返回size_t类型的string::npos(size_t取决于编译器有32位，64位)

如果找到，返回子字符串或字符在字符串中首次出现的位置索引（从 0 开始）。4

> find不是一种方法 当作函数来用 find(jilu.begin(), jilu.end(), what you want to find)

### erase

string& erase(size_t pos = 0, size_t len = npos);  // 删除从 pos 开始的 len 个字符

例如 b.erase(idx, 1);

值得注意的是：

* erase之后.size会变的
* erase之后看索引和值的变换 删了中间的字符之后 会进行平移

## list

注意erase()删除之后的返回值是删除元素的后面一位，如果删除的是最后一位元素，返回的是end().



## pair

理解：pair实际上可以理解为一个结构体，里面存了两个变量，可以用来直接存两个数据，也可以用来进行映射使用

注意insert和emplace_back的区别，前面是可以插入任意位置（但是效率可能较低），后者只能进行尾插（例如vector）中的。

## algorithm

* reverse(a.begin(),a.end());
* floor向下取整 ceil向上取整 一般用于浮点型 不要用于整型 整型的向下取整是自动的 向上取整可以写成是a/b==(a+b-1)/b;

## deque

* pop_back() push_back() pop_front() push_front()

## priorty_queue(是容器适配器，依赖底层容器)还有容器适配器的概念

![image-20250422152257592](笔记.assets/image-20250422152257592.png)

注意容器适配器不能使用迭代器 只保留了一些接口例如top(),back() 而不是访问每一个元素



继续讲优先队列 其实就是大顶堆（默认）此时不需要写底层容器

​						小顶堆 需要写底层容器 所以要这样写

priority_queue<int,vector<int>,greater<int>> 



e.g. 

```
struct CompareAge {
    bool operator()(const Person& a, const Person& b) {
        return a.age > b.age; // 小顶堆：年龄小的在前
    }
};
```

```
priority_queue<Person, vector<Person>, CompareAge> minHeap;//这里的函数直接写jiu
```



![image-20250422224713477](笔记.assets/image-20250422224713477.png)

# 注意事项(有关于异或运算的点)

* 在定义结构体的时候一定要注意初始化，否则在一些题目中会过不qv(总之手动进行初始化是最好的)

* 注意 pow返回的是浮点型数，如果pow(2,n)n>30的时候会有精度损失,结果会出问题

* ```
  #include<iostream>
  
  using namespace std;
  int main()
  {
      int a = 5;
      int b = 3;
      cout << (a ^ b);//注意优先级问题 如果是cout<<a^b 会被解析成(cout<<a)^b
      return 0;
  }
  ```

* unordered_set可以用来进行高效查找 使用于不用顺序的数据

  ------

  就像这里一样如果res没有进行初始化可能会出问题

  ```
  #include <iostream>
  using namespace std;
  const int N = 5100;
  struct Node
  {
      int start;
      int end;
      int res;
  } jilu[N];
  void solve()
  {
      int n;
      cin >> n;
      
      for (int i = 1; i <= n; i++)
      {
          cin >> jilu[i].start >> jilu[i].end;
          //加上这一句 就可以了（最好是这样做，应该是编译器的问题）
          jilu[i].res=0;
      }
      int now_time = 0;
      for (int i = 1; i <= n; i++)
      {
          if (jilu[i].start > now_time)
          {
              now_time = jilu[i].start;
              jilu[i].res = now_time;
          }
          else
          {
              if (now_time + 1 <= jilu[i].end)
              {
                  now_time++;
                  jilu[i].res = now_time;
              }
          }
      }
      for (int i = 1; i <= n; i++)
      {
          cout << jilu[i].res << ' ';
      }
      cout << endl;
  }
  int main()
  {
      int t;
      cin >> t;
      while (t--)
      {
          solve();
      }
      return 0;
  }
  ```

  

# 一些具体的经典题目

## 最长对称字串

``` 
#include <iostream>
#include <string>
using namespace std;

int expandAroundCenter(const string &s, int left, int right) {
    while (left >= 0 && right < s.size() && s[left] == s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

int main() {
    string s;
    getline(cin, s);
    int max_len = 0;
    int n = s.size();
    for (int i = 0; i < n; i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int current_max = max(len1, len2);
        if (current_max > max_len) {
            max_len = current_max;
        }
    }
    cout << max_len << endl;
    return 0;
}
```

## 排座位

```
#include<iostream>

using namespace std;
const int N = 110;
int fa[N];
int enemy[N][N];
int find(int x)
{
    if(x==fa[x])
        return x;
    else
        return fa[x] = find(fa[x]);
}
void merge(int x,int y)
{
    int xx = find(x);
    int yy = find(y);
    if(xx!=yy)
    {
        fa[yy] = xx;
        return;
    }
    return;
}
int main()
{
    int n,m,k;
    cin >> n >> m >> k;
    for (int i = 1; i <= n;i++)
    {
        fa[i] = i;
    }
    for (int i = 0; i < m;i++)
    {
        int a, b;
        cin >> a >> b;
        int c;
        cin >> c;
        if(c==1)
        {
            merge(a, b);
        }
        else{
            enemy[a][b]=1;
            enemy[b][a] = 1;
        }
    }
    //下面进行查询
    for (int i = 0; i < k;i++)
    {
        int a, b;
        cin >> a >> b;
        if(find(a)==find(b))
        {
            if(enemy[a][b])
            {
                cout << "Ok but..." << endl;
            }
            else{
                cout << "No problem" << endl;
            }
        }
        else{
            if(enemy[a][b])
            {
                cout << "No way" << endl;
            }
            else{
                cout << "Ok" << endl;
            }
        }
    }
        return 0;
}
```

## 背包问题

可以使用二维动态规划 也可以使用一维动态规划，使用二维动态规划的时候内层循环不要求从小到大还是从大到小，使用一维动态循环的时候是要求只能从大到小的避免重复修改dp[j]的值



# 数据结构

## 树

可以由递归序得到二叉树的先序遍历 中序遍历 后序遍历得到

分别是一个节点的第一次遍历就打印，第二次到这个节点，第三次到这个节点

```
先序遍历的非递归写法 利用栈 打印->右进栈->左进栈
后序遍历的非递归写法 利用栈 打印->左进栈->右进栈 大致 然后把信息放在栈里 最后倒序输出
中序遍历的非递归写法 利用栈 压栈左头 处理完再看右节点 处理右节点的左头 保证相对顺序
```

先序遍历就是深度优先遍历

宽度遍历用队列 如果想要得到层的最大宽度 可以用map进队列的时候 已经记录了当前层数



几种遍历的代码

```
package com.hue.demo;

import com.sun.source.tree.Tree;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

// 手动构建二叉树的类
public class erchahshu {
    public static void main(String[] args) {
        // 手动创建节点
        TreeNode root = new TreeNode(1);  // 根节点

        // 第二层
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);

        // 第三层
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        // 打印根节点的值（验证树结构）
        System.out.println("二叉树生成成功！");
        System.out.println("根节点值: " + root.val);
        System.out.println("左子树根节点值: " + root.left.val);
        System.out.println("右子树根节点值: " + root.right.val);
    }
    //前序遍历
    public static void prePrint(TreeNode node){
        if (node==null)return ;
        System.out.println(node.val);
        prePrint(node.left);
        prePrint(node.right);

    }
    //非递归写法 前序遍历
    public static void NonprePrint(TreeNode node){
        if(node==null) return ;
        Stack<TreeNode> stack=new Stack<>();
        stack.push(node);
        while(!stack.empty()){
            TreeNode pop = stack.pop();
            System.out.println(pop.val);
            if(pop.right!=null) {
                stack.push(pop.right);
            }
            if(pop.left!=null){
                stack.push(pop.left);
            }
        }

    }
    //中序遍历
    public static void midPrint(TreeNode node){
        if (node==null) return ;
        midPrint(node.left);
        System.out.println(node.val);
        midPrint(node.right);
    }
    //非递归写法 中序遍历
    public static void NonmidPrint(TreeNode root){
        if(root==null) return ;
        Stack<TreeNode> stack=new Stack<>();
        TreeNode curr=root;

        while (curr!=null||!stack.empty())
        {
            //这样写不对 可能curr.left是空节点
//            while(curr!=null){
//                stack.push(curr.left);
//                curr=curr.left;
//            }
            while(curr!=null){
                stack.push(curr);
                curr=curr.left;
            }
            TreeNode pop = stack.pop();
            curr=pop;
            System.out.println(curr.val);
            curr=curr.right;
        }
    }



    //后序遍历
    public static void lastPrint(TreeNode node){
        if(node==null) return ;
        lastPrint(node.left);
        lastPrint(node.right);
        System.out.println(node.val);

    }
    //非递归写法 后序遍历
    public static void NonlastPrint(TreeNode root){
        if(root==null) return ;
        Stack<TreeNode>res=new Stack<>();
        Stack<TreeNode>temp=new Stack<>();
        temp.push(root);
        while(!temp.empty()){
            TreeNode pop = temp.pop();
            res.push(pop);
            if(pop.left!=null){
                temp.push(pop.left);
            }
            if(pop.right!=null){
                temp.push(pop.right);
            }

        }
        while(!res.empty()){
            System.out.println(res.pop().val);
        }
    }
    //层序遍历
    public static void widhPrint(TreeNode root){
        if(root==null) return ;
        Queue<TreeNode> queue=new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            //左
            TreeNode curr = queue.poll();
            System.out.println(curr.val);
            if(curr.left!=null){
                queue.add(curr.left);
            }
            if(curr.right!=null){
                queue.add(curr.right);
            }
        }
    }
}

```


  </div>




 

</div>


