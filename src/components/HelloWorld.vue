<template>
  <div class="hello">
  <table border="1" align="center">
    <tr>
      <th>物品名称</th>
      <th>售价</th>
      <th>数量</th>
      <th>操作</th>
    </tr>
    <tr v-for="(g, index) in goods">
      <td>{{g.name}}</td>
      <td>{{g.price}}</td>
      <td align="center">
        <label>
          <button id="add" @click="add(index)">+</button>
          <input id="price" :value="g.count" width="20px">
          <button id="del" @click="del(index)">-</button>
        </label>
      </td>
      <td>
        <button @click="rowDel(index)">移除</button>
      </td>
    </tr>
    <tr>
      <td><button @click="rowAdd">添加</button></td>
    </tr>
  </table>
    <br/>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      goods:[
        {name:'《C++》', price: 100, count: 0},
        {name:'《钢铁是怎样练成的》', price: 78, count: 0}
      ]
    }
  },
  methods:{
    add: function (index) {
      this.goods[index].count++;
    },
    del: function (index) {
      var tmp = this.goods[index];
      if(tmp.count>0)
        this.goods[index].count--;
    },
    rowDel: function (index) {
     this.goods.splice(index, 1)
    },
    rowAdd: function(){
      this.goods.push({
        name: "",
        price: 0,
        count: 0
      })
    },
    submit: function () {
      var str = "";
      var total = 0;
      for (let i=0; i<this.goods.length; i++){
        str += JSON.stringify(this.goods[i], null, 4);
        total += (this.goods[i].count * this.goods[i].price);
        str += "\n\n";
      }
      window.alert("总价：" + total +  "￥\n\n" + str);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
