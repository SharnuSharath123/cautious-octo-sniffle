function sendText() {
    const inputText = document.getElementById('inputText').value;

    fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.processed_text;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
