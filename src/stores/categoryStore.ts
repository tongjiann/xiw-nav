import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    const currentCategory = ref()
    const getCurrentCategory = ((): Category => {
        return currentCategory.value;
    })
    const setCurrentCategory = ((category: Category): void => {
        currentCategory.value = category

    })
    return {
        setCurrentCategory,
        getCurrentCategory,

    }
})
