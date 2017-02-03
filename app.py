from flask import Flask, send_file, jsonify
import docker

app = Flask(__name__)
api = docker.Docker()

@app.route('/')
def index():
    return send_file('templates/index.html')

@app.route('/nodes')
def nodes():
    return jsonify(api.getNodes())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)