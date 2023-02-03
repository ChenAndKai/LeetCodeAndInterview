function volunteerDeployment(finalCnt: number[],totalNum: number,edges:number[][],plans:number[][]):number[] {
    /*
    有 n 个比赛场馆（场馆编号从 0 开始），场馆之间的通道分布情况记录于二维数组 edges 中，edges[i]= [x, y] 表示第 i 条通道连接场馆 x 和场馆 y(即两个场馆相邻)。
    初始每个场馆中都有一定人数的志愿者（不同场馆人数可能不同），后续 m 天每天均会根据赛事热度进行志愿者人数调配。调配方案分为如下三种：
        1、将编号为 idx 的场馆内的志愿者人数减半；
        2、将编号为 idx 的场馆相邻的场馆的志愿者人数都加上编号为 idx 的场馆的志愿者人数；
        3、将编号为 idx 的场馆相邻的场馆的志愿者人数都减去编号为 idx 的场馆的志愿者人数。
    所有的调配信息记录于数组 plans 中，plans[i] = [num,idx] 表示第 i 天对编号 idx 的场馆执行了第 num 种调配方案。
    在比赛结束后对调配方案进行复盘时，不慎将第 0 个场馆的最终志愿者人数丢失，只保留了初始所有场馆的志愿者总人数 totalNum,
    以及记录了第 1 ~ n-1 个场馆的最终志愿者人数的一维数组 finalCnt。请你根据现有的信息求出初始每个场馆的志愿者人数，并按场馆编号顺序返回志愿者人数列表
        finalCnt [1,16]
        totalNum 21
        edges    [
                    [0,1],
                    [1,2]
                ]
        plans   [
                    [2,1],
                    [1,0],
                    [3,0]
                ]
                edges：[[0,1],[1,2]]
                    场馆0       场馆1       场馆2       合计
        初始状态       5          7           9         21 （totalNum：21）
    第0天 方案2 场馆1  12          7          16
    第1天 方案1 场馆0  6           7          16
    第2天 方案3 场馆0  6           1          16     （finalCnt：[1,16]）
    plans：[[2,1],[1,0],[3,0]]
    */

    //先拿到每个场馆的相邻场馆
   const map = new Map();
   edges.map(item => {
       const [x,y] = item;
       
        if (map.has(x)) {
            map.get(x).push(y);
        } else {
            map.set(x,[y]);
        }
        if (map.has(y)) {
            map.get(y).push(x);
        } else {
            map.set(y,[x]);
        }
   })

   //遍历plans数组，设置一个变量，反推出初始状态的变量关系
   const arr = new Array(finalCnt.length+1).fill(0).map(item => [0,0]);
   arr[0][1] = 1;
   for(let i = 1;i <= finalCnt.length;i++) {
       arr[i][0] = finalCnt[i-1];
   }
   plans.reverse().map(item => {
       const [number,index] = item;
       if(number == 1) {
            arr[index][0] *= 2;
            arr[index][1] *= 2;
       } else {
            const indexEdges = map.get(index);
            if(!indexEdges) return
            for(let id of indexEdges) {
                if(number == 2) {
                    arr[id][0] -= arr[index][0];
                    arr[id][1] -= arr[index][1];
                } else if(number == 3) {    
                    arr[id][0] += arr[index][0];
                    arr[id][1] += arr[index][1];
                }
            }
       }
   })

   // arr[x]: 一元一次方程中的常数, arr[x][y]: 一元一次方程中的变量个数,由此数组与totalNum列出一元一次方程
   const constant = arr.reduce((total,value) => total+value[0],0);
   const variable = arr.reduce((total,value) => total+value[1],0);
   const finalCntFirst = (totalNum - constant) / variable;
   return arr.map(item => item[0]+item[1]*finalCntFirst)
}

volunteerDeployment([1,16],21,[[0,1],[1,2]],[[2,1],[1,0],[3,0]])