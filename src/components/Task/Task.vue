<template>
  <div>
     <n-date-picker v-model="timestamp" type="date" clearable />
    <div class="bg-red-300 text-xl text-green-200">Hello Amit {{ a }}</div>
    <div>{{ props.title }}</div>
    <div>
      <n-button type="primary" class="bg-yellow-500">Primary</n-button>
    </div>
    <n-space>
      <n-button strong secondary>Default</n-button>
      <n-button strong secondary type="tertiary">Tertiary</n-button>
      <n-button strong secondary type="primary">Primary</n-button>
      <n-button strong secondary type="info" class="bg-yellow-500">Info</n-button>
      <n-button strong secondary type="success">Success</n-button>
      <n-button strong secondary type="warning">Warning</n-button>
      <n-button strong secondary type="error" class="bg-yellow-500">Error</n-button>
      <n-button strong secondary round>Default</n-button>
      <n-button strong secondary round type="primary">Primary</n-button>
      <n-button strong secondary round type="info">Info</n-button>
      <n-button strong secondary round type="success">Success</n-button>
      <n-button strong secondary round type="warning">Warning</n-button>
      <n-button strong secondary round type="error" class="bg-yellow-500">Error</n-button>
      <n-button strong secondary circle>
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="primary">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="info">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="success">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="warning">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="error">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { NSpace } from 'naive-ui';
import { NDatePicker } from 'naive-ui';

const props = defineProps<{
  title?: string
}>()
const a = 10;
const timestamp = 1183135260000;
</script>