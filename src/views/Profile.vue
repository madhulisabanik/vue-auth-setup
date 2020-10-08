<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Welcome, <strong>{{currentUser.name}}</strong>!
      </h3>
    </header> 
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p> 
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <p>
      <strong>Phone No:</strong>
      {{currentUser.phone_number}}
    </p>
    <p>
      <strong>Address:</strong>
      {{currentUser.address}}
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'Profile',
    computed: {
      ...mapGetters({
        currentUser: 'auth/currentUser'
      })
    },
    mounted() {
      if (!this.currentUser) {
          this.$router.push('/login');
      }
    }
  };
</script>