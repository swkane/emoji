let input = document.getElementById('input');
let output = document.getElementById('output');
let emoji = new EmojiConvertor();

input.addEventListener('keyup', evt => {
    output.textContent = emoji.replace_colons(evt.target.value);
});