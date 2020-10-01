<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Welcome, <strong>{{currentUser.user.name}}</strong>!
      </h3>
    </header> 
    <p>
      <strong>Id:</strong>
      {{currentUser.user.id}}
    </p> 
    <p>
      <strong>Email:</strong>
      {{currentUser.user.email}}
    </p>
    <p>
      <strong>Phone No:</strong>
      {{currentUser.user.phone_number}}
    </p>
    <p>
      <strong>Address:</strong>
      {{currentUser.user.address}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    mounted() {
      if (!this.currentUser) {
          this.$router.push('/login');
      }
    }
  };
</script>