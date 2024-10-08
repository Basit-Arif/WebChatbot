from flask import Flask, render_template, request, jsonify
from src.data_generation import answer_query,initialize_qa



# app = Flask(__name__)
app = Flask(__name__)
chain = initialize_qa()

@app.route("/")
def index():
    return render_template("chatbot.html") 

@app.route("/chatbot", methods=["POST"])
def chatbot():
    if request.method == "POST":
        message = request.json.get('message')
        print(f"User Message: {message}")
        
        # Process the message and create a reply using the already initialized chain
        reply = answer_query(chain, message)
        
        return jsonify({'reply': reply["result"]})  # Send a JSON response with the reply
    else:
        return jsonify({'error': 'Invalid method, POST required'}), 405

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002, debug=True)