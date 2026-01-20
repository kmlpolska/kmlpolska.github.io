// Simple code editor functionality
function runCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const previewFrame = document.getElementById('previewFrame');
    
    if (previewFrame) {
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.open();
        previewDoc.write(htmlCode);
        previewDoc.close();
    }
}

// Run code on page load if there's an editor
document.addEventListener('DOMContentLoaded', () => {
    const codeArea = document.getElementById('htmlCode');
    if (codeArea) {
        // Set initial code if empty
        if (!codeArea.value.trim()) {
            codeArea.value = `<!DOCTYPE html>
<html>
<head>
    <title>Moja strona</title>
</head>
<body>
    <h1>Witaj!</h1>
    <p>Edytuj ten kod.</p>
</body>
</html>`;
        }
        
        // Run initial code
        setTimeout(runCode, 100);
        
        // Auto-run on code change (with debounce)
        let timeout;
        codeArea.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(runCode, 500);
        });
    }
});
