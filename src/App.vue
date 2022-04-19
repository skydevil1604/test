<template>
  <div id="app">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <OrdersTable :orders="orders" :couriers="couriers" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import OrdersTable from './components/OrdersTable.vue'

export default {
  name: 'App',
  components: {
    OrdersTable
  },
  data: () => ({
    orders: null,
    couriers: null,
    loading: true,
    errored: false
  }),
  mounted() {
    axios
      .get('http://134.209.119.20:8123/orders')
      .then(response => (this.orders = response.data.orders))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    axios
      .get('http://134.209.119.20:8123/couriers')
      .then(response => (this.couriers = response.data.couriers))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
