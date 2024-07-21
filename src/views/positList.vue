<template>
   <div  class="text-center m-3">
    <RouterLink class="btn btn-dark btn-lg text-decoration-none" to="/POST/notes"
      >+ Add New PostIt</RouterLink
    >
  </div>

  <div v-if="storePostit.loading" class="d-flex justify-content-center text-success">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
  <div v-else class="container">
    <div class="row">
      <div
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
        v-for="postit in storePostit.postIts"
        :key="postit._id"
      >
        <apostIt :post-it="postit" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="mt-5">
        <button
          v-show="storePostit.moreLessShow"
          @click="storePostit.loadLess"
          type="button"
          class="btn btn-dark btn-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Load Less
        </button>
      </div>
      <div class="m-5">
        <button
          v-show="!storePostit.completed"
          @click="storePostit.loadMore"
          type="button"
          class="btn btn-dark btn-lg"
        >
          Load More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import apostIt from '@/components/apostIt.vue'
import { usePostitStore } from '@/stores/postit'

const storePostit = usePostitStore()
// console.log(storePostit.postIts)
</script>

<style scoped>
.loading {
  width: 50%;
}

img {
  width: 5%;
}

.postit_content {
  border: solid 1px gray;
}

.postit_title {
  border: solid 1px gray;
}

div {
  text-align: center;
}

.apostit {
  width: 22%;
  border: solid 2px gray;
  border-radius: 10px;
  margin-left: 2%;
  box-shadow: 2px 3px 14px -4px #382238;
}

.apostit:hover {
  transition: 2s;
  box-shadow: 5px 5px 10px 0px #382238;
}
</style>
