<template>
  <div>
    <ul class='nav nav-tabs'>
      <router-link to='/main/order' tag='li'>
        <a>Order</a>
      </router-link>
      <router-link to='/main/guests' tag='li'>
        <a>Guests</a>
      </router-link>
      <router-link to='/main/taxtip' tag='li'>
        <a>Tax &amp; Tip</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>
