import json
import boto3
import os

bucket_name = os.environ['bucket_name']

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    my_bucket = s3.Bucket(bucket_name)
    for obj in my_bucket.objects.all():
        #print(obj.key)

        # TODO implement
        return {
        'statusCode': 200,
        'body': json.dumps(obj.key)
        }