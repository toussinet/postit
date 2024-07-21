import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

import { useRouter } from "vue-router";

export const usePostitStore = defineStore("postit", () => {
  const router = useRouter();
  const postIts = ref([]);
  const loading = ref(true);
  const showAddingButton = ref(true);

  const url = "https://post-it.epi-bluelock.bj";
  let limit = 4;
  
  const completed = ref(false);
  const moreLessShow = ref(false);

  const allPostits = ref(null);


  const route = useRoute();
  const post_edit_title_input = ref("");
  const post_edit_content_input = ref("");
  const postItToEditId = ref("");

  const conditionTitleEdit = ref("");
  const errorsTitleEdit = ref(true);
  const inputTitleEditClass = ref("text-danger");


  const conditionEditContent = ref("");
  const errorsEditContent = ref(true);
  const inputContentEditClass = ref("text-danger");


  const createPostTitleInput = ref("");
  const createPostContentInput = ref("");


  const condition = ref("");
  const errors = ref(false);
  const inputClass = ref("text-danger");


  const conditionContent = ref("");
  const errorsContent = ref(false);
  const inputContentClass = ref("text-danger");

  onMounted(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => (allPostits.value = data));
  });
  // console.log(allPostits)
  function apiCall() {
    onMounted(() => {
      fetch(`${url}`)
        .then((res) => res.json())
        .then(
          (data) => (
            (postIts.value = data.notes.slice(0, limit)),
            (loading.value = false)
          )
        );
    });
  }
  apiCall();


  function loadMore() {
    limit += 8;
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        (postIts.value = data.notes.slice(0, limit)), (loading.value = false);

        completed.value = data.notes.length <= limit ? true : false;
        moreLessShow.value = limit > 4 ? true : false;
      });
  }
  function loadLess() {
    limit -= 8;
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        (postIts.value = data.notes.slice(0, limit)), (loading.value = false);
        completed.value = data.notes.length <= limit ? true : false;
      });

    moreLessShow.value = limit > 4 ? true : false;
  }

  function dateFormat(date) {
    date = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return (
      date.toLocaleDateString("en-ZA", options).replace(",", "") +
      ", " +
      date.toLocaleTimeString()
    );
  }

  function deletePostit(postItId) {
    if (confirm("Are you sure, you want to delete this postIt?")) {
      fetch(url+ "/" +postItId, {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      })
        .then(() => {
          alert("Postit deleted successfully");
          location.reload();


        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  ////////////////////////Edit Postit////////////////////////////////////////////



  watch(post_edit_title_input, function () {
    if (post_edit_title_input.value.trim().length < 3) {
      errorsTitleEdit.value = true;
      conditionTitleEdit.value =
        "Title must contain at leat three non empty characters";
      inputTitleEditClass.value = "text-danger";
    } else {
      
      conditionTitleEdit.value = "Title is valid";
      inputTitleEditClass.value = "text-success";
    }
  });


  watch(post_edit_content_input, function () {
    if (post_edit_content_input.value.trim().split(/\s+/).length < 3) {
      errorsEditContent.value = true;
      conditionEditContent.value = "Content must contain at least three words";
      inputContentEditClass.value = "text-danger";
    } else {
      conditionEditContent.value = "Content is valid";
      inputContentEditClass.value = "text-success";
    }
  });


  function editPostit(id) {
    if (
      post_edit_title_input.value.trim().length < 3 ||
      post_edit_content_input.value.trim().split(/\s+/).length < 3
    ) {
      alert("Invalid Title or Content, please check.");
    } else {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: post_edit_title_input.value,
        content: [post_edit_content_input.value],
      }),
    };
    fetch(url+"/"+id, requestOptions).then(
      (response) => {
        if (response.ok) {
          alert("Postit Updated successfully");
          router.push({ path: "/" }).then(() => {
            router.go(0);
          });
        } else {
          alert("Operation failed");
        }
      }
    );
  }
}

  ////////////////////////////create postit////////////////////////////////////////

  watch(createPostTitleInput, function () {
    if (createPostTitleInput.value.trim().length < 3) {
      errors.value = true;
      condition.value = "Title must contain at least three non empty characters";
      inputClass.value = "text-danger";
    } else {
      condition.value = "Title is valid";
      inputClass.value = "text-success";
    }
  });


  watch(createPostContentInput, function () {
    if (createPostContentInput.value.trim().split(/\s+/).length < 3) {
      errorsContent.value = true;
      conditionContent.value = "Content must contain at least three words";
      inputContentClass.value = "text-danger";
    } else {
      conditionContent.value = "Content is valid";
      inputContentClass.value = "text-success";
    }
  });


  function createNewPostit() {
    if (
      createPostTitleInput.value.trim().length < 3 ||
      createPostContentInput.value.trim().split(/\s+/).length < 3
    ) {
      alert("Invalid Title or Content, please check.");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: createPostTitleInput.value,
          content: [createPostContentInput.value],
        }),
      };
      fetch(url, requestOptions)
        .then((response) => {
          if (response.ok) {
            alert("Postit added successfully");
            router.push({ path: "/" }).then(() => {
              router.go(0);
            });
          }
        })
        .catch((error) => {
          alert("There was an error: ", error);
        });
    }
  }

  ///////////////////////////////Details///////////////////////////////////


  function retrivePostIttoShow(allPostits, id) {
    try {
      // console.log(postIts)
      return allPostits.notes.find((t) => t._id == id);
      // return postIts.value.filter((x)=>x._id===id)
    } catch (err) {
      alert("Post It not found");
    }
  }

  return {
    errors,
    postIts,
    loading,
    completed,
    moreLessShow,
    loadMore,
    loadLess,
    dateFormat,
    deletePostit,
    post_edit_title_input,
    post_edit_content_input,
    editPostit,
    createPostTitleInput,
    createPostContentInput,
    createNewPostit,
    retrivePostIttoShow,
    allPostits,
    condition,
    inputClass,
    conditionContent,
    errorsContent,
    inputContentClass,
    conditionTitleEdit,
    errorsTitleEdit,
    inputTitleEditClass,
    conditionEditContent,
    errorsEditContent,
    inputContentEditClass,
  };
});
