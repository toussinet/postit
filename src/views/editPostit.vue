<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <RouterLink class="btn btn-dark btn-lg text-decoration-none m-2" to="/">&lt; Back</RouterLink>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div id="ui">
          <form @submit.prevent="onSubmit" method="post" class="form-group">
            <h1 class="text-center">Edit PostIt Page</h1>

            <p class="text-center">Change these inputs values to edit.</p>
            <hr />

            <!-- <div
              v-if="storePostit.loading"
              class="d-flex justify-content-center text-success"
            >
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            </div> -->
          
            <div>
              <label>Postit Title:</label>
              <input
                v-model="storePostit.post_edit_title_input"
                type="text"
                name=""
                class="form-control"
                placeholder="title"
              />
              <span v-if="storePostit.errorsTitleEdit" :class="[storePostit.inputTitleEditClass]">
              {{ storePostit.conditionTitleEdit}}
            </span>
              <br />
             
              <label>Postit Content:</label>
              <textarea
                rows="4"
                cols="50"
                v-model="storePostit.post_edit_content_input"
                type="text"
                name=""
                class="form-control"
                placeholder="content"
              >
              </textarea>
            
              <span v-if="storePostit.errorsEditContent" :class="storePostit.inputContentEditClass">
              {{storePostit.conditionEditContent}}
            </span>
              <br />
              <input
                @click="storePostit.editPostit(storePostit.postItToEditId)"
                type="submit"
                name="submit"
                value="Update"
                class="btn btn-primary w-100 btn-block btn-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostitStore } from "@/stores/postit";

import { useRoute } from "vue-router";

const storePostit = usePostitStore();
const route = useRoute();
// console.log(route.params.id)

storePostit.post_edit_content_input = storePostit.retrivePostIttoShow(
  storePostit.allPostits,
  route.params.id
).content[0];
storePostit.post_edit_title_input = storePostit.retrivePostIttoShow(
  storePostit.allPostits,
  route.params.id
).title;


storePostit.postItToEditId= route.params.id

// console.log(storePostit.postItToEditId)

// const loading = ref(true)

// const route = useRoute()
// const post_title_input = ref('')
// const post_content_input = ref('')
// const postItId = ref('')
// // watch(post_content_input, function () {
// //   console.log(post_content_input.value)
// // })

// // const retrivePostIt = ref(null)
// fetch(`http://62.72.5.95:1999/notes/${route.params.id}`)
//   .then((res) => res.json())
//   .then(
//     (data) => (
//       (post_title_input.value = data.title),
//       (post_content_input.value = data.content),
//       (postItId.value = data._id),
//       (loading.value = false)
//     )
//   )
//   .catch((err) => {
//         alert(`Error: ${err}`)
//       })

// function editPostit() {
//   const requestOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: post_title_input.value,
//       content: post_content_input.value
//     })
//   }
//   fetch(`http://62.72.5.95:1999/notes/${postItId.value}`, requestOptions)
//     .then(response => {
//       if (response.ok) {
//         alert('Postit Updated successfully')
//       }else{
//       alert('Operation failed')

//       }
//     })
// }
</script>
