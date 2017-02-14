from flask import Flask, send_file, jsonify
import docker

app = Flask(__name__)
api = docker.Docker()

@app.route('/')
def index():
    return send_file('templates/index.html')

@app.route('/workers')
def workers():
    return jsonify(api.getWorkers())

@app.route('/managers')
def managers():
    return jsonify(api.getManagers())

@app.route('/services')
def services():
    return jsonify(api.getServices())

@app.route('/tasks')
def tasks():
    return jsonify(api.getTasks())

@app.route('/tasks/<id>')
def inspectTask(id):
    return jsonify(api.inspectTask(id))

@app.route('/nodes/<id>')
def inspectNode(id):
    return jsonify(api.inspectNode(id))

@app.route('/services/<id>')
def inspectService(id):
    return jsonify(api.inspectService(id))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)