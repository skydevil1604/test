<template>
  <div>
    <h1>ORDERS</h1>
    <table>
      <thead>
       <tr>
          <th
            v-for="col in columns"
            :key="col.name"
            :class="col === sort.column && [ 'sorted-by', `sorted-${sort.reverse ? 'desc' : 'asc'}` ]"
            @click="sortBy(col)"
          >{{ col.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in sortedItems" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.user }}</td>
          <td>{{ order.order_time | moment("hh:mm DD.MM.YYYY") }}</td>
          <td>{{ order.amount }}</td>
          <td>{{ order.courier_id }}</td>
          <td>{{ order.status }}</td>
          <td> ... </td>
        </tr>
      </tbody>
  </table>
  <ul>
    <li v-for="courier in couriers" :key="courier.id">
      {{ courier.id }} {{ courier.name }}
    </li>
  </ul>
  </div>
</template>
<script>
import moment from 'vue-moment'

export default {
  name: 'OrdersTable',
  props: {
    orders: {
      type: Array,
      default: () => ([])
    },
    couriers: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    columns: [
      { name:   'id', title:    'ID', type: 'number' },
      { name: 'user', title: 'User', type: 'string' },
      { name: 'time', title: 'Time', type: 'time' },
      { name: 'amount', title: 'Amount', type: 'number'},
      { name: 'courier_id', title: 'Courier ID', type: 'number'},
      { name: 'status', title: 'Status', type: 'string'},
    ],
    sort: {
      column: null,
      reverse: false,
    },
    sortFuncs: {
      number: (a, b) => a - b,
      string: (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      time: (a, b) => moment(b, 'hh:mm DD.MM.YYYY') - moment(a, 'hh:mm DD.MM.YYYY'),
    },
  }),
  computed: {
    sortedItems() {
      const { orders, sort: { column, reverse } } = this;
      const key = column.name;
      const sort = this.sortFuncs[column.type];

      return sort
        ? [...orders].sort((a, b) => sort(a[key], b[key]) * (reverse ? -1 : 1))
        : orders;
    },

    courierName() {
      return this.orders.find(order => order.courier_id == this.couriers.id)
    }
  },
  methods: {
    sortBy(column) {
      const { sort } = this;
      this.sort = { column, reverse: (sort.column === column) ^ sort.reverse };
    },
  },
  created() {
    this.sortBy(this.columns[0]);
  },
}
</script>


<style scoped>
table {
  width: 100%;
}

th {
    border: 1px solid black;
}

th, td {
  border: 1px solid silver;
  padding: 10px 15px;
}

th {
  cursor: pointer;
  position: relative;
}
th::after {
  position: absolute;
  right: 2px;
  font: 24px bold monospace;
  top: 50%;
  transform: translateY(-50%);
}

th.sorted-by {
  background: #ddd;
}
th.sorted-asc::after { content: "\2191"; }
th.sorted-desc::after { content: "\2193"; }

</style>
