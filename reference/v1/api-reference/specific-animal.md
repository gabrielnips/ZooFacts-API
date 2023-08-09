# Specific Animal

## ZooFacts API Quickstart Guide - Specific Animal

Welcome to the quickstart guide for using the ZooFacts API to retrieve information about a specific animal.&#x20;

This guide will help you understand how to use the `/v1/animals/animal/{animalName}` endpoint.

### Get Information About a Specific Animal

To get information about a specific animal, you'll need to provide its name as a parameter in the endpoint URL.

&#x20;Replace `{animalName}` with the actual name of the animal you're interested in.



Here's an example request to get information about a lion:

{% swagger method="get" path="/{animalName}" baseUrl="https://api.zoofacts.com/v1/animals/animal" summary="Specific Animal Request" expanded="false" fullWidth="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="animalName" required="true" %}
Example: lion
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="https://api.zoofacts.com/v1/animals/lion" %}
```json
{
    "name": "Lion",
    "averageWeight": {
        "males": "190 kg",
        "females": "130 kg"
    },
    "interestingFact": "Lions are excellent swimmers and can swim up to 5 miles.",
    "image": "Random Image",
    "averageLength": {
        "males": "2.45 - 3.07 m",
        "females": "2.20 – 2.75 m"
    },
    "tailLength": {
        "males": "90 - 105 cm",
        "females": "70 - 100 cm"
    },
    "shoulderHeight": {
        "males": "1.20 m",
        "females": "1.07 m"
    },
    "sexualMaturity": {
        "males": "3 - 4 years",
        "females": "3 - 4 years"
    },
    "longevity": {
        "wild": "up to 14 years",
        "captivity": "up to 26 years"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="https://api.zoofacts.com/v1/animals/lio" %}
```json
{
    "error": "Animal not found"
}
```
{% endswagger-response %}
{% endswagger %}
