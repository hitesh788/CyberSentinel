import json
from datetime import datetime

data = [
    {
        "title": "Fake UPI phishing links circulating",
        "source": "Python Demo Feed",
        "severity": "High",
        "sector": "Banking",
        "attackType": "Phishing",
        "description": "UPI users targeted through fake reward and KYC links.",
        "location": "India",
        "date": str(datetime.now())
    },
    {
        "title": "Botnet traffic observed on exposed endpoints",
        "source": "Python Demo Feed",
        "severity": "Medium",
        "sector": "Telecom",
        "attackType": "Botnet",
        "description": "Suspicious traffic pattern indicates automated botnet scanning.",
        "location": "India",
        "date": str(datetime.now())
    }
]

with open("sample_feed.json", "w") as f:
    json.dump(data, f, indent=2)

print("Sample cyber feed generated.")