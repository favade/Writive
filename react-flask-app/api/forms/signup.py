from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, Email

class SignupForm(FlaskForm):
    username = StringField('Username', validators= [InputRequired(), Length(min = 4, max = 15)])
    password = PasswordField('Password', validators= [InputRequired(), Length(min = 8, max = 80)]  )
    submit = SubmitField('Signup')