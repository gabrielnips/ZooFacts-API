# Random

## ZooFacts API Quickstart Guide - Specific Animal

Welcome to the quickstart guide for using the ZooFacts API to retrieve information about a random animal.&#x20;

This guide will help you understand how to use the `/v1/animals/animal/random` endpoint.

### Get Information About a Random Animal



Here's an example request:

{% swagger method="get" path="/{animalName}" baseUrl="https://api.zoofacts.com/v1/animals/animal" summary="Random Animal Request" expanded="false" fullWidth="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="https://api.zoofacts.com/v1/animals/random" %}
```json
{
    "name": "Leopard",
    "averageWeight": {
        "males": "37 - 90 kg",
        "females": "28 - 60 kg"
    },
    "interestingFact": "Leopards are solitary animals and are known for their elusive nature.",
    "image": "http://localhost:4000/animals/leopard/images/undefined",
    "averageLength": {
        "males": "1.9 - 2.9 m",
        "females": "1.5 - 2.3 m"
    },
    "tailLength": {
        "males": "0.6 - 1.1 m",
        "females": "0.6 - 0.9 m"
    },
    "shoulderHeight": {
        "males": "0.6 - 0.75 m",
        "females": "0.5 - 0.6 m"
    },
    "sexualMaturity": {
        "males": "3 years",
        "females": "2 - 3 years"
    },
    "longevity": {
        "wild": "12 - 17 years",
        "captivity": "21 - 23 years"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="https://api.zoofacts.com/v1/animals/rando" %}
```json
{
    "error": "Animal not found"
}
```
{% endswagger-response %}
{% endswagger %}
