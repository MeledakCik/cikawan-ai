import requests
import os
from dotenv import load_dotenv

load_dotenv(".env.local")
api_key = os.getenv("GEMINI_API_KEY")

url = f"https://generativelanguage.googleapis.com/v1beta/models?key={api_key}"

response = requests.get(url)
data = response.json()

if "models" in data:
    print("✅ Model yang tersedia untuk akunmu:")
    for m in data["models"]:
        print(f"- {m['name']}")
else:
    print("❌ Error:", data)