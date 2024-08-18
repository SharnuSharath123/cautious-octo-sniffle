from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    text = data.get('text', '')
    response = {'processed_text': f'Processed: {text}'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
