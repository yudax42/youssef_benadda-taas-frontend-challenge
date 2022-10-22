<script lang="ts" setup>
import { onBeforeMount } from "vue";
import useWindowPopup from "@/hooks/useWindowPopup";
import useTokenFetcher from "@/hooks/useTokenFetcher";
import type { AuthorizationResult } from "@/types/auth";

const { sendMessage, close } = useWindowPopup();

onBeforeMount(async () => {
  const authorizationResult: AuthorizationResult = await useTokenFetcher();
  console.log("authorizationResult", authorizationResult);
  sendMessage(authorizationResult);
  close();
});
</script>

<template>
  <div>
    <h1>Authorizing...</h1>
  </div>
</template>
