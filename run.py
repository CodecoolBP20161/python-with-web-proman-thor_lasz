from flask import Flask, render_template, jsonify
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')




@app.route('/start', methods=['GET'])
def get_tasks():
    boards = Boards.select().get()
    return jsonify({'boards': boards})

app.run(debug=True)
