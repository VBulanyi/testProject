<template>
  <table class="table">
    <caption class="table__title">
      {{
        title
      }}
    </caption>
    <thead class="table__head">
      <tr class="table__head-row">
        <th class="table__row-item">Price</th>
        <th class="table__row-item">Ammount</th>
        <th class="table__row-item table__row-item_mobile">Total</th>
      </tr>
    </thead>

    <tbody class="table__body">
      <tr v-for="(row, index) in data" :key="index" class="table__row">
        <td class="table__row-item">{{ row[0] }}</td>
        <td class="table__row-item">{{ row[1] }}</td>
        <td class="table__row-item table__row-item_mobile">
          {{ row[0] * row[1] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Table from '@/components/Table';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      requred: true,
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

.table__title {
  font-size: 1rem;
  background-color: aliceblue;
}

.table__head-row,
.table__row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}

.table__row-item {
  text-align: center;
}

.table__head {
  display: block;
  position: relative;
  background-color: #333;
  color: #fdfdfd;
}

table tbody {
  display: block;
  overflow: auto;
  width: 100%;
  height: calc(100vh - 200px);
}

.table__row:nth-child(even) {
  background-color: #ddd;
}

@media screen and (max-width: 768px) {
  .table__row-item_mobile {
    display: none;
  }

  .table__head-row,
  .table__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
