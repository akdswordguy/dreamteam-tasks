from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import MySQLdb

app = Flask(__name__)
CORS(app)  

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'aadi4321'
app.config['MYSQL_DB'] = 'movie_app'

mysql = MySQL(app)


@app.route('/api/create-account', methods=['POST'])
def create_account():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    cursor = mysql.connection.cursor()
    try:
        
        cursor.execute("SELECT id FROM users WHERE username = %s", (username,))
        if cursor.fetchone():
            return jsonify({"error": "Username already exists"}), 400

       
        cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
        mysql.connection.commit()
        return jsonify({"message": "Account created successfully!"}), 201
    except MySQLdb.Error as e:
        return jsonify({"error": f"Database error: {str(e)}"}), 500
    finally:
        cursor.close()


@app.route('/api/sign-in', methods=['POST'])
def sign_in():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    cursor = mysql.connection.cursor()
    try:
       
        cursor.execute("SELECT password FROM users WHERE username = %s", (username,))
        result = cursor.fetchone()
        if not result or result[0] != password:
            return jsonify({'error': 'Invalid username or password'}), 401

        return jsonify({'message': 'Sign-in successful!'}), 200
    except MySQLdb.Error as e:
        return jsonify({'error': f"Database error: {str(e)}"}), 500
    finally:
        cursor.close()




if __name__ == '__main__':
    app.run(debug=True)
