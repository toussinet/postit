<template>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <RouterLink class="btn btn-dark btn-lg text-decoration-none m-2" to="/">&lt; Back</RouterLink>


    <h1 class="text-center">PostIt Datails Page</h1>

    <div class="container text-break overflow-auto lazur-bg">
      
              <hr />

              <div v-if="loading" class="d-flex justify-content-center text-success">
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
              <div v-else>
                <ul class="notes">
                  <li>
                    <div class="rotate-1">
                      <small>{{ storePostit.dateFormat(
                        storePostit.retrivePostIttoShow(storePostit.allPostits, route.params.id).createdAt
                        ) }}</small>
                      <h4 class="text-break">{{ 
                        storePostit.retrivePostIttoShow(storePostit.allPostits, route.params.id).title
                      }}
                      
                    </h4>
                      
                        {{ 
                        
                        storePostit.retrivePostIttoShow(storePostit.allPostits, route.params.id).content[0]
                        
                        }}
                      
                    </div>
                  </li>
                </ul>
              </div>
    </div>
</template>

<script setup>

import { usePostitStore } from '@/stores/postit'
import { useRoute } from 'vue-router'

const storePostit = usePostitStore()
const route = useRoute()
</script>

<style scoped>




ul.notes li,
ul.tag-list li {
  list-style: none;
}

ul.notes li div small {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 10px;
}

div.rotate-1 {
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
}

.lazur-bg {
  background-color: #23c6c8;
  color: #23c6c8;
}

ul.notes li div {
  padding-bottom: 0px;
  text-decoration: none;
  color: #000;
  height: 300px;
  width: 100%;
  padding: 1em;
 
}
</style>
