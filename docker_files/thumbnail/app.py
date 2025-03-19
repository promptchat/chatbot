from flask import Flask, request, send_file
from pdf2image import convert_from_bytes
import io

app = Flask(__name__)

@app.route('/thumbnail', methods=['POST'])
def generate_thumbnail():
    if 'pdf' not in request.files:
        return "No PDF file uploaded", 400

    pdf = request.files['pdf'].read()  # Read PDF directly into memory

    # Convert first page of PDF to image (no file saving)
    images = convert_from_bytes(pdf, first_page=1, last_page=1, size=(120, None))

    # Save image to memory (BytesIO)
    img_io = io.BytesIO()
    images[0].save(img_io, format='PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8787)