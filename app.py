from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('content.html')

@app.route('/proba')
def proba():
    return render_template('proba.html')


app.run(debug=True)
