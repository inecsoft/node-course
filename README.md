# node-course
```
npm install -g serverless
```
```
serverless config credentials --provider aws --key xxx --secret xxx --profile serverless-admin
```
### __Create boilerplate__
```
sls create --template aws-python3 --path hello-world-pyhton
``` 
    * .gitignore
    * hadler.py
    * serverless.yml

```
cd hello-world-pyhton
sls deploy -v 
```
### __Issues with credentials__
```
chronyc sources -v
chronyc tracking
```
### __Check for Update interval__
```
sudo systemctl restart chronyd
```

### __Get logs__
```
sls invoke -f hello -l
or 
sls logs -f hello -t
```
### __Update the function__
```
sls deploy -f hello
```
### __Destroy all__
```
sls remove
```