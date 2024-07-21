<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div class="">
    <ul class="notes">
      <li>
        <div class="rotate-1 lazur-bg">
          <small>{{ storePostit.dateFormat(postIt.createdAt) }}</small
          ><br />
          <h4 class="text-break">{{ postIt.title.slice(0, 20) + '...' }}</h4>
          <br />
          <p class="text-break">
            {{ postIt.content[0].slice(0, 50) + '...' }}
          </p>

          <RouterLink
            class="btn btn-success w-5 btn-sm"
            :to="{ name: 'postitEdit', params: { id: postIt._id } }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              class="bi bi-pen"
              viewBox="0 0 16 16"
            >
              <path
                d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"
              />
            </svg>
          </RouterLink>
          <a @click="storePostit.deletePostit(postIt._id)" href="#" class="text-danger btn-lg"
            ><i class="btn btn-lg btn-danger m-2 fa fa-trash-o"></i>
          </a>

          <RouterLink
            class="btn btn-primary active pull-right btn-sm mt-2"
            :to="{ name: 'postitDetail', params: { id: postIt._id } }"
          >
            More
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
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePostitStore } from '@/stores/postit'
const storePostit = usePostitStore()
defineProps(['postIt'])
</script>
<style scoped>
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

body {
  justify-content: center;
}

/* ul.notes li {
  margin-left: 0%;
} */

ul.notes li,
ul.tag-list li {
  list-style: none;
}

ul.notes li small {
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
  color: #ffffff;
}

.red-bg {
  background-color: #ed5565;
  color: #ffffff;
}

.navy-bg {
  background-color: #1ab394;
  color: #ffffff;
}

.yellow-bg {
  background-color: #f8ac59;
  color: #ffffff;
}

ul.notes li div {
  padding-bottom: 0px;
  text-decoration: none;
  color: #000;
  display: block;
  height: 300px;
  width: 85%;
  padding: 1em;
  -moz-box-shadow: 5px 5px 7px #212121;
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
}
</style>
