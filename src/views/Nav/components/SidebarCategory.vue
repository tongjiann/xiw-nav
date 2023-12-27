<script setup lang="ts">
import {useCategoryStore} from "../../../stores/categoryStore.ts";
import {computed, Ref, ref} from "vue";

const props = defineProps<{ category: Category }>()
const categoryStore = useCategoryStore()

const isFocus: Ref<boolean> = ref(computed(() => {
  return categoryStore.getCurrentCategory() === props.category
}))

function updateCurrentCategory() {
  categoryStore.setCurrentCategory(props.category)
}
function jumpToTargetCategory() {

}


</script>

<template>
  <div class="sidebar-category"
       :class="{focus:isFocus}"
       @mouseenter="updateCurrentCategory"
       @click="jumpToTargetCategory"
  >
    {{ category.name }}
  </div>
</template>

<style scoped>
.sidebar-category {
  margin: 20px 0;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #233;
}

.focus {
  background-color: white;
  cursor: pointer;
  opacity: 1;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)
}
</style>

