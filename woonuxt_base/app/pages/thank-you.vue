<script setup lang="ts">
// Optional: Logic for fetching order can be added here later
</script>

<template>
  <div class="container my-8">
    <h1 class="mb-8 text-3xl font-semibold text-primary">Thank You</h1>
    <div class="my-8 prose">
      <p>
        Thank you for your order! 🎉 We've received your purchase and it's currently being processed.
        You’ll receive a confirmation email shortly with all the details.
      </p>
      <p>
        If you have any questions regarding your order, feel free to 
        <NuxtLink to="/contact" class="text-primary underline">contact us</NuxtLink>. 
        We're here to help and make sure everything goes smoothly.
      </p>
      <p>
        You can return to the 
        <NuxtLink to="/" class="text-primary underline">homepage</NuxtLink> 
        or continue browsing our 
        <NuxtLink to="/products" class="text-primary underline">products</NuxtLink>.
      </p>
    </div>
  </div>
</template>
