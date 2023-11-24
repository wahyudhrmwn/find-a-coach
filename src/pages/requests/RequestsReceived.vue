<template>
  <div>
  <base-dialog :show="!!error" title="An error occured!" @close="handleError">
<p>{{ error }}</p>
</base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Request Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests && !isLoading">
        <request-items
          v-for="req in receivedRequests"
          :key="req.id"
          :id="req.id"
          :coachId="req.coachId"
          :email="req.userEmail"
          :message="req.message"
        ></request-items>
      </ul>
      <h3 v-else>You haven't received any request yet!</h3>
    </base-card>
  </section>
</div>
</template>

<script>
import { handleError } from 'vue';
import RequestItems from '../../components/requests/RequestItems.vue';

export default {
  components: {
    RequestItems,
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    return this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch(error) {
        this.error = error.message || 'Something Failed!'
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
