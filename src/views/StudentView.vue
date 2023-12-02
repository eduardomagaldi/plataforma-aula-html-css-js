<script>
import Editores from "../components/Editores.vue";

export default {
  components: {
    Editores,
  },

  data() {
    return {
      studentName: "",
      askName: true,
    };
  },

  methods: {
    start($event) {
      $event.preventDefault();
      this.askName = false;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    {{ studentName }} ----
    <Editores :studentName="studentName" />

    <form class="layer" @submit="start" v-if="askName">
      <input
        type="text"
        id="name"
        placeholder="João"
        class="input-name"
        v-model="studentName"
      />

      {{ studentName }}
      <button type="submit" class="button-start">INICIAR</button>
    </form>
  </div>
</template>

<style scoped>
.layer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-name,
.button-start {
  padding: 20px;
  border-radius: 5px 0 0 5px;
  border: none;
  font-size: 30px;
}

.button-start {
  border-radius: 0 5px 5px 0;
  background: rgb(85, 85, 228);
  color: white;
}
</style>
