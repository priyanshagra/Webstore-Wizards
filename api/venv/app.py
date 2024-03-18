from flask import Flask, request, jsonify
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
import string
import re
from flask_cors import CORS

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

app = Flask(__name__)
CORS(app)

# Data preprocessing
def preprocess_text(text):
    # Convert to lowercase
    text = text.lower()
    # Remove punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))
    # Remove numbers
    text = re.sub(r'\d+', '', text)
    # Tokenization
    tokens = word_tokenize(text)
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words]
    # Lemmatization
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return ' '.join(tokens)

# Load data
reviews = [("This product is fantastic", "positive"),
           ("I wouldn't recommend this product", "negative"),
           ("Average product, nothing special", "neutral"),
           ("Great value for money", "positive"),
           ("Worst experience ever", "negative")]

# Preprocess data
processed_reviews = [(preprocess_text(review), sentiment) for review, sentiment in reviews]

# Create features and labels
X = [review for review, _ in processed_reviews]
y = [sentiment for _, sentiment in processed_reviews]

# Feature extraction using TF-IDF
vectorizer = TfidfVectorizer(max_features=1000)
X = vectorizer.fit_transform(X).toarray()

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train SVM classifier
svm_classifier = SVC(kernel='linear')
svm_classifier.fit(X_train, y_train)

# Evaluate model
y_pred = svm_classifier.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", accuracy)

# Flask route for sentiment analysis
@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    comment = data["comment"]
    processed_comment = preprocess_text(comment)
    comment_vectorized = vectorizer.transform([processed_comment]).toarray()
    sentiment = svm_classifier.predict(comment_vectorized)[0]
    return jsonify({"sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)
