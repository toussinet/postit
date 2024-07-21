<template>
   <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
  <RouterLink class="btn btn-dark btn-lg text-decoration-none m-2" to="/">&lt; Back</RouterLink>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div id="ui">
          <form @submit.prevent="onSubmit" method="post" class="form-group">
            <h1 class="text-center">Adding New PostIt</h1>

            <p class="text-center">Please fill in this form to create a new postit.</p>
            <hr />
            <label>Postit Title:</label>
            <input
              v-model="storePostit.createPostTitleInput"
              type="text"
              name=""
              class="form-control"
              placeholder="title"
            />
            <span v-if="storePostit.errors"  :class="[storePostit.inputClass]">
              {{ storePostit.condition}}
            </span>
            <br />
           
            <label>Postit Content:</label>
            <textarea
              rows="4"
              cols="50"
              v-model="storePostit.createPostContentInput"
              type="text"
              name=""
              class="form-control"
              placeholder="content"
            ></textarea>
            <span v-if="storePostit.errorsContent" :class="storePostit.inputContentClass">
              {{ storePostit.conditionContent}}
            </span>
            <br />
            <input
              @click="storePostit.createNewPostit"
              type="submit"
              name="submit"
              value="Create"
              class="btn btn-primary w-100 btn-block btn-lg"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostitStore } from '@/stores/postit'
//  import {ref, watch} from 'vue'
const storePostit = usePostitStore()
// const condition=ref("")
//  watch(storePostit.createPostTitleInput, function(){
//    console.log(storePostit.createPostTitleInput)
//   // while (storePostit.createPostTitleInput.lentg<3)
//   //  condition="Input mus contain al leat two strings"

//   })
</script>
