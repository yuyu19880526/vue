<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          type="text"
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章内容：</label>
        <validate-input
          tag="textarea"
          type="textarea"
          rows="10"
          :rules="contentRules"
          v-model="contentVal"
          placeholder="请输入文章标题"
        />
      </div>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'

export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const titleVal = ref('')
    const contentVal = ref('')
    const titleRules:RulesProp = [
      { type: 'required', message: '请输入文章标题' }
    ]
    const contentRules:RulesProp = [
      { type: 'required', message: '文章内容不能为空' }
    ]
    const onFormSubmit = (result:boolean):void => {
      const obj = {
        id: new Date().getTime(),
        title: titleVal.value,
        content: contentVal.value,
        createdAt: new Date().toLocaleString(),
        columnId: 1
      }
      if (result) {
        store.commit('createPost', obj)
        router.push('/column-detail/1')
      }
      console.log(1111)
    }
    return {
      titleRules,
      titleVal,
      contentRules,
      contentVal,
      onFormSubmit
    }
  }
})
</script>
