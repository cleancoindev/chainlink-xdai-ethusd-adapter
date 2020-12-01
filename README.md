# External Adapter for ETH/USD Feed Chainlink Node

This external adapter was built with Google Cloud Platform in mind.

## Deploying
Compress these files and upload them to GCP as a lambda function.  
Save the endpoint URL and use it as the `feed` parameter for the `fluxmonitor` initiator in your node.  
As this uses the CoinGecko API there is no more setup required.
