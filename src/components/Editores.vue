<script setup>
import { ref, onMounted } from "vue";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

defineProps({
  studentName: {
    type: String,
  },
});

onMounted(() => {
  let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: document.getElementById("editor"),
    doc: "aaaaaa",
  });
});
</script>

<template>
  <div>
    <span>Aluno: {{ studentName }}</span>
    editor:
    <div id="editor"></div>
  </div>
</template>
