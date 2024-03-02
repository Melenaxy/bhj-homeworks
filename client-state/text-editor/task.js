let editor = document.getElementById('editor');
let storedValue = localStorage.editor;

if (storedValue) {
    editor.value = storedValue;
};

editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
});

