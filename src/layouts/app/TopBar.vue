<script setup lang="ts">
import PrimeToolbar from 'primevue/toolbar'
</script>
<template>
  <PrimeToolbar class="py-0 px-4 md:px-[3rem] border-0 border-b rounded-none">
    <template #start>
      <div class="logo">
        <router-link to="/">
          <span class="font-bold text-xl text-primary">JW Aide</span>
        </router-link>
      </div>
    </template>

    <template #center>
      <div class="flex gap-2">
        <!-- DASHBOARD -->
        <router-link
          :to="'#'"
          exactActiveClass="border-b border-primary !text-primary"
          class="hidden md:flex py-2"
        >
          <PrimeButton text plain>
            <div class="w-full flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123c.211.107.384.28.491.491c.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0m11-11a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714z"
                />
                <path
                  fill="currentColor"
                  d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.13 1.13 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5m11 8c0-.349 0-.523.038-.666c.104-.388.408-.692.796-.796c.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5z"
                  opacity="0.5"
                />
              </svg>

              <span>{{ $t('labels.dashboard') }}</span>
            </div>
          </PrimeButton>
        </router-link>

        <router-link
          :to="'/inventory/publications'"
          exactActiveClass="border-b border-primary !text-primary"
          class="hidden md:flex py-2"
        >
          <PrimeButton text plain>
            <div class="w-full flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"
                />
                <path
                  fill="currentColor"
                  d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324"
                  opacity="0.5"
                />
              </svg>

              <span>{{ $t('labels.inventory') }}</span>
            </div>
          </PrimeButton>
        </router-link>
      </div>
    </template>
  </PrimeToolbar>
</template>
