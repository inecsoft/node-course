import os
from dotenv import load_dotenv

load_dotenv()

USE_S3 = os.getenv('USE_S3') == 'TRUE'

AWS_STORAGE_BUCKET_NAME = os.getenv("AWS_STORAGE_BUCKET_NAME")
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")

print(USE_S3)
print(AWS_ACCESS_KEY_ID)
print(AWS_SECRET_ACCESS_KEY)
print(AWS_STORAGE_BUCKET_NAME)
print(AWS_REGION)
print(POSTGRES_PORT)
