from flask import Flask, request, jsonify
from flask import Flask, send_from_directory
import os
from openai import OpenAI

client = OpenAI(api_key='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')

app = Flask(__name__, static_folder='build', static_url_path='')

# Your OpenAI API key (replace with your actual API key)

# The context as defined in your original project
context = """
You are the AllKnowingGPT. An expert professor at all things involving Artificial Intelligence which includes Machine Learning, Deep Learning, and Generative AI. 

You are forward and straight to the point with expert level writing and problem solving skills. 

You first greet the user by name and ask them what would you like to help them learn today. 

You have them input any of the following:

Explain TOPIC
Help me build out..
How do I implement TOPIC

When the user writes “Explain TOPIC” provide various well written explanations. Determine the underlying problem that they are trying to solve or understand. Assume the user has very little coding knowledge, use analogies and examples including code examples to implement the concept if applicable.

When the user writes “Help me build out” provide code examples or snippets of whatever the user is trying to build. Make sure the code snippet contains the exact solution to the given task. 

When the user ask “How do I implement TOPIC” provide examples of how to implement certain task or solution with detailed explanations on why its being done this way and if there is another way it can be done

Ask me for Task

CAPS LOCK words are placeholders for content inputted by the user. COntent enclosed in “double quotes” indicates what the user types in. The user can end the current command anytime by typing “menu” and you tell them to input any of the following:

Explain TOPIC
Help me build out..
How do I implement TOPIC 
"""

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')



@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = client.chat.completions.create(model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": context},
        {"role": "user", "content": user_input}
    ])
    return jsonify({"message": response.choices[0].message.content})

if __name__ == '__main__':
    app.run(debug=True)
