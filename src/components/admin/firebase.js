
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import 'firebase/storage'

const settings = {timestampsInSnapshots: true};

const config ={
  "type": "service_account",
  "projectId": "dance-match-d5938",
  "storageBucket": "dance-match-d5938.appspot.com",
  "private_key_id": "5e9042ff370201f7fd81cb021c484bde8f7b6993",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2CqIRF7/5wU6z\nlx7N/UFPlh7HdRQ0dxp4mSK7XsA7ssE3fwlAvZmBtT60FyN+gLwl2c2sKMRNAyEZ\nHcrwuho+0+n62+0G6dkq6a3UpHaPvgC4vB/w/XYR8zll79lP2oG/M4j6QVooH6i3\nA4vWvmzOGW+JBnA8oGR7WfdFHGEBSs+/hezZjR6F1yXiy66p98QD0dz51CBLKwQA\nce2crB0YovrlvHJBWjR11X+yl7QodJIvhl4tb22a+KznSF4O5mcl0znEiRReLSe8\ndPqwH5XtLsGimzuTBeoX9lBToEP4Q6/JR24eckYbtItBPaiSgDO7l8lLt/VVwcRf\nSi+rNDvfAgMBAAECggEANk+Qz5mu2FQwZ0soURuEPzrR/v7yor6AAsfpQU6A+q6X\nj7eSaqLGaBjLVs5qdATzXTWQc5MMEc/jsYseb1iOmPz/Wyz/F+dvt6pVBtJ0Xuk4\nbOUPgIYWEj/m+X8n7feKayF0dflGbR8Y5lUkBNL2Qjz7dj2aAbR2lgieyZswY8JN\nltNxqtAVMZT3cHNK3AmkTB7b/18zJAyqjMqd+QEX91AwpGuwsdDff6Vd/K/1B31p\nFSg3ux7fQ1AmQ02uG+yv0gJsloDVNlznTGTpW1i+npvUNHQJPeYwEadL4kjlw83P\nQJ+UdD+a/N0lqJkE+abN/ydhoeIiOtNVeWbzbaxQiQKBgQDkt/U00KPES7DYe9Lg\nNMRPailkH4IaKfgkOJC/6oftledegdQbGFGBMnQFcW7FBv9aPEf84qduiDvpnyMV\n9gYFapMIMYxt7yTaUyxuaudSXsw0KpzulzeFnF09M2CtcxprnBi6tF+9iWa830ds\nqX1Bj1wBZpCVlUU8l5r2WbAGGQKBgQDLwV3zd4fXs4nyLZvPSO8G/TcByfv/G8zn\nqCCDIDTXGF0X67xwM1L8TVBD30pxU+Y3YuPRSpcMxcWFYQKIuP4vRnH/e0HI30bd\nbgvl6G2+FPzeXcw5YmJHIWcADhWz9QAP4lUK4//wOpRRaD5/5/4+YYD5LhqxKGrg\njb/GjprgtwKBgBU3+8eqk4bifsWWtzmVq6CyeKSRR8ClpB+4H7WuTG3+OjjKUqMw\n3l7eD2Vx4JTm0UnNzd/oJyBaAzTpTpf6+xQFjx5zelO4m/KlRLn5sPwzTz6HtYds\n//mlSAElgxKUWx8gnCq2ESvEU4OyMy4hiz1Jz39RxJgcARBeAEJaj7oBAoGAQWxG\nMW2Y5Y6VZXh1hfoiHbliVyW2zzPq+BsIzXGi5cnB4nNj3xbrt21Pr2tb6MWKrxAG\nnGX52DUMdgYvHR1hKGbTJbg66Deg9mpmUZzu19C/XNr7PxWy/qnf+6mKGG07Zt5C\ndiu9OzJj+zugjcs83GTMV7YRBf83SgDZqfSSEEMCgYAolFeGwyIrqHzWSavAV1ux\ndfeN5gjdnV55DVXfp7pIHiPrdpUmQLTpLgzKjQ00/LOWimkhpNAlXXJrP9lzIfv5\np9IqzbXlxpJp97z/ID4dzb1vKdiMcIOvyVzB05WXx9JGYcsAMfjPo5lXuERSbOiI\nvvqqLTUQsFVgHhzhYDQl9Q==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-s8x0w@dance-match-d5938.iam.gserviceaccount.com",
  "client_id": "113855131200828123634",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s8x0w%40dance-match-d5938.iam.gserviceaccount.com"
}


firebase.initializeApp(config);
const storage = firebase.storage()


firebase.firestore().settings(settings);

export  {
  storage, firebase as default
}