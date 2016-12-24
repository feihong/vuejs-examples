<template>
  <div id='app'>
    <ul class='nav nav-tabs'>
      <router-link to='/order' tag='li'>
        <a>Order</a>
      </router-link>
      <router-link to='/guests' tag='li'>
        <a>Guests</a>
      </router-link>
      <router-link to='/taxtip' tag='li'>
        <a>Tax &amp; Tip</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>
