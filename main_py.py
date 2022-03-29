# import requests

# url = "https://api.opensea.io/api/v1/collections?asset_owner=0xc3b3928aAee37dCbDd9dD9Bf403Ec7Fe93cf9beD&offset=0&limit=300"

# headers = {"Accept": "application/json"}

# response = requests.request("GET", url, headers=headers)
# my_content =  response.json()
# for contract in my_content:
#     print(contract['owned_asset_count'])
#     print(contract['name'])

# print(my_content[2]['owned_asset_count'])
# print(response.text)

# params ={
#     'collection': 'the-wanderers',
#     'limit': 1
# }

# r = requests.get("https://api.opensea.io/api/v1/assets", params=params)

# print(r.json())

import requests

url = "https://testnets-api.opensea.io/api/v1/assets?owner=0x5a9F1C523BBc63c3e148FAfdcAB9025eC4792e03&order_direction=desc&offset=0&limit=20"

response = requests.request("GET", url)
myjson = response.json()
print(len(myjson['assets']))