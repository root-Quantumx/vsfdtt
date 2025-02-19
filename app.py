from flask import Flask, request 
import smtplib
app = Flask(__name__)
@app.route('/send-email', methods=['POST'])
def send_email():
    sender_email = "mra034337@gmail.com"
    receiver_email = "mra034337@gmail.com"
    password = "eqlr pffs fxex dolu"
    subject = "user press yes"
    message = "user pressed yes check mail"
    email_text = f"Subject: {subject}\n\n{message}"
    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, email_text.encode("utf-8"))
        server.quit()
        return "Email send!", 200
    except Exception as e:
        return str(e), 500
    
if __name__ == "__main__":
    app.run(debug=True)