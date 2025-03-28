document.addEventListener('DOMContentLoaded', function() {
    const editor = document.querySelector('.editor-content');
    const boldBtn = document.querySelector('.bold');
    const italicBtn = document.querySelector('.italic');
    const underlineBtn = document.querySelector('.underline');
    const strikeBtn = document.querySelector('.line-through');
    const fontSizeSelect = document.querySelector('.font-size');
    
    // Formatting buttons
    boldBtn.addEventListener('click', () => document.execCommand('bold', false, null));
    italicBtn.addEventListener('click', () => document.execCommand('italic', false, null));
    underlineBtn.addEventListener('click', () => document.execCommand('underline', false, null));
    strikeBtn.addEventListener('click', () => document.execCommand('strikeThrough', false, null));
    
    // Font size change
    fontSizeSelect.addEventListener('change', function() {
        document.execCommand('fontSize', false, '7');
        const fontElements = editor.getElementsByTagName('font');
        for (let el of fontElements) {
            if (el.size === '7') {
                el.removeAttribute('size');
                el.style.fontSize = this.value;
            }
        }
    });
    
    // Auto-expand when content exceeds initial height
    editor.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});