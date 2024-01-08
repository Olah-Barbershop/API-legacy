# API Documentation

## Important information
I'm not sure if I'll be able to renew the API server, but it's guaranteed to be available *until* **December 25, 2024**

## Domain
- olahbarbershop.codes

## Endpoints
- /services - Our services
  - https://olahbarbershop.codes/services
  - ```json
    {
      "name": "The service name (String)",
      "description": "Description of the service (String)",
      "amount": "The price (Number)"
    }
    ```
- /locations - Our locations
  - https://olahbarbershop.codes/locations
  - ```json
    {
      "address": "The location's address (String)",
      "phoneNumber": "The location's telephone number (String)",
      "mondayToThursday": "Our business hours from Monday to Thursday in military time (String)",
      "friday": "Our business hours on Friday in military time (String)",
      "saturdayToSunday": "Our business hours from Saturday to Sunday in military time (String)"
    }
    ```
- /notifications - App notifications about news and merch
  - https://olahbarbershop.codes/notifications
  - ```json
    {
      "_id": "The notification ID (ObjectID)",
      "type": "The notification type, either 'news' or 'merch' (String)",
      "date": "The date of when the notification was created in YYYY-MM-DD format (String)",
      "description": "The notification body itself (String)"
    }
    ```
