from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.route("/resume")
def resume():
    return render_template("resume.html")


@app.route("/skills")
def skills():
    return render_template("skills.html")


@app.route("/jobs")
def jobs():
    return render_template("jobs.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


if __name__ == "__main__":
    app.run(debug=True)