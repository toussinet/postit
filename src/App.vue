<template>
  <nav class="navbar navbar-light bg-light grid justify-content-between">
    <div>
      <img src="../src/assets/logoPostit.jpg" alt="logo Postit" />
      Post It
    </div>

    <form class="form-inline d-flex">
      <input
        class="form-control w-2 btn-outline-dark"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <a class="btn btn-outline-dark" type="submit">Search </a>
    </form>
  </nav>
 
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center mb-3">
      <button
        class="navbar-toggler pull-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>

        <span class="navbar-toggler-icon"></span>
      </button>
      <img src="https://i.pinimg.com/564x/ba/37/cd/ba37cd4b809aeff0042598129657d140.jpg" alt="" />

      <a class="navbar-brand" href="#"> Post It</a>

      <div class="navbar-collapse mr-6" id="navbarSupportedContent">
        <form class="form-inline w-75 ml-2 d-flex">
          <input
            class="form-control mr-lg-2 p-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div class="pull-right">
          <RouterLink class="btn btn-primary btn-lg text-decoration-none" to="/add"
            >+ Add PostIt</RouterLink
          >
        </div>
      </div>
    </nav> -->

  <RouterView />
  <div class="container-fluid">
    <footer class="bg-light text-center text-white">
      <div class="container pb-0">
        <section class="">
          <a class="facebook btn btn-primary btn-floating m-1" href="#" role="button">
            <i class="fa fa-facebook"></i>
          </a>

          <a class="twitter btn btn-primary btn-floating m-1" href="#" role="button">
            <i class="fa fa-twitter"></i>
          </a>

          <a class="google btn btn-primary btn-floating m-1" href="#" role="button">
            <i class="fa fa-google"></i>
          </a>

          <a class="instagram btn btn-primary btn-floating m-1" href="#" role="button">
            <i class="fa fa-instagram"></i>
          </a>

          <a class="github btn btn-primary btn-floating m-1" href="" role="button">
            <i class="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div class="text-center p-3" style="border: none; background-color: rgba(0, 0, 0, 0.2)">
        © 2024 Copyright:
        <a class="text-reset fw-bold" href="#">postIt.com</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import apostIt from '@/components/apostIt.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { usePostitStore } from "@/stores/postit";

const storePostit = usePostitStore();

</script>

<style scoped>
img {
  width: 13%;
}

.facebook {
  border: none;
  background-color: #3b5998;
}

.twitter {
  border: none;
  background-color: #55acee;
}

.google {
  border: none;
  background-color: #dd4b39;
}

.instagram {
  border: none;
  background-color: #ac2bac;
}

.github {
  border: none;
  background-color: #333333;
}
</style>
