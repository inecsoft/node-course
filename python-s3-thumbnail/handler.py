import boto3
from io import StringIO
from PIL import Image, ImageOps
import os 


s3  = boto3.client('s3')
size  = int(os.environ['THUMBNAIL_SIZE'])

def s3_thumbnail_generator(event, context):
    print(event)
    bucket = event['Records'][0]['s3']['bucket']['name']
    key    = event['Records'][0]['s3']['object']['key']
    #get the image
    image = get_s3_image(bucket, key)
    #resize the image
    thumbnail = image_to_thumbnail(image)
    #get the new filename
    thumbnail_key = new_filename(key)
    # upload the file
    url = upload_to_s3(bucket, thumbnail_key, thumbnail)
    return url

def get_s3_image(bucket, key):
    response = s3.get_object(Bucket=bucket, Key=key)
    imagecontent = response['Body'].read()
    
    file = StringIO(imagecontent)
    img = Image.open(file)
    return img

def image_to_thumbnail(image):
    return ImageOps.fit(image, (size, size), Image.ANTIALIAS)

def new_filename(key):
    key_split = key.rstrip('.', 1)
    return key_split + "_thumbnail.png"

def upload_to_s3(bucket, key, image):
    out_thumbnail = StringIO()
    
    image.save(out_thumbnail, 'PNG')
    out_thumbnail.seek(0)
    response = s3.put_object(
        ACL = 'public-read',
        Body=out_thumbnail,
        Bucket=bucket,
        ContentType='image/png',
        Key=key            
        )
    print(response)
    
    url = '{}/{}/{}'.format(s3.meta.endpoint_url, bucket,key)
    