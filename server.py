from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/myfunction')
def my_function():
    return "Hello from my_function!"


#recieve data from send.js
@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.get_json()
    # Process the data
    print(data)
    return "Data received successfully"

@app.route( '/promptai', methods=['POST'])
def bop():
    data = request.get_json()
    return [data, 'recieved']



if __name__ == '__main__':
    app.run()