from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

texts = [
    "urgent verify your bank account now",
    "claim your free reward by clicking here",
    "normal company security update notice",
    "scheduled maintenance on portal"
]

labels = [1, 1, 0, 0]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, labels)

test_text = ["verify your account immediately"]
prediction = model.predict(vectorizer.transform(test_text))

print("Phishing" if prediction[0] == 1 else "Safe")