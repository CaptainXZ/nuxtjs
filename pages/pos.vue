<!-- design pos page -->
<template>
  <v-app>
    <!-- Main Content -->
    <v-main>
      <v-container class="mt-10">
        <!-- Dashboard Section -->
        <v-row id="dashboard" class="mb-10">
          <v-col cols="12">
            <h2 class="headline">Dashboard</h2>
            <v-card outlined>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-card outlined>
                      <v-card-title>Total Sales</v-card-title>
                      <v-card-text>$10,000</v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-card outlined>
                      <v-card-title>Total Customers</v-card-title>
                      <v-card-text>200</v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-card outlined>
                      <v-card-title>Stock Levels</v-card-title>
                      <v-card-text>150 items</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Inventory Section -->
        <v-row id="inventory" class="mb-10">
          <v-col cols="12">
            <h2 class="headline">Inventory</h2>
            <v-card outlined>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="items"
                  class="elevation-1"
                >
                  <template v-slot:top>
                    <v-toolbar flat>
                      <v-toolbar-title>Inventory Management</v-toolbar-title>
                      <v-divider class="mx-4" inset vertical></v-divider>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="addItem">Add Item</v-btn>
                    </v-toolbar>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Sales Section -->
        <v-row id="sales">
          <v-col cols="12">
            <h2 class="headline">Sales</h2>
            <v-card outlined>
              <v-card-text>
                <p>Sales functionality goes here...</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        <v-divider></v-divider>
        <span>&copy; 2024 POS System. All rights reserved.</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "POSPage",
  data() {
    return {
      headers: [
        { text: "Item Name", value: "name" },
        { text: "Quantity", value: "quantity" },
        { text: "Price", value: "price" },
      ],
      items: [
        { name: "Product 1", quantity: 10, price: "$100" },
        { name: "Product 2", quantity: 5, price: "$200" },
        { name: "Product 3", quantity: 20, price: "$50" },
      ],
    };
  },
  methods: {
    addItem() {
      this.items.push({ name: "New Product", quantity: 0, price: "$0" });
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
