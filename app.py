from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Sainath@160103",
    database="portfolio_db"
)

@app.route('/')
def home():
    return render_template('contact.html')

@app.route('/submit', methods=['POST'])
def submit():

    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']

    cursor = db.cursor()

    sql = """
    INSERT INTO contacts
    (name,email,subject,message)
    VALUES (%s,%s,%s,%s)
    """

    values = (name,email,subject,message)

    cursor.execute(sql, values)
    db.commit()

    return "Message Sent Successfully!"

if __name__ == '__main__':
    app.run(debug=True)