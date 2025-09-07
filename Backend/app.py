from flask import Flask

#Initialization of the flask project
app = Flask(__name__)

@app.route("/")
def landing():
    return "Return the screen of the landing page"

#Calculation of the outstanding balance after order has been placed (Account Component also update the NavBar with the value)
#Store all the inputs from the Admin upload in a database and read the values into the React Frontend 
#Send OTP requests before order has been placed
#Send an SMS after the order was successfully placed
#Send an SMS when the order is ready for collection
