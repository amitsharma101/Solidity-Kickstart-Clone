# Kickstart Clone on BlockChain

Used Solidity to write the smart contracts and next js to build the frontend.

```
Make sure you have metamask installed in browser to interact with the app
```

```
The smart contracts are deployed to Ropsten Test Net. Please make sure you are on the same network to interact with the app
```

_Web App Live at : http://solidity-kickstart-clone.herokuapp.com/_

```
CampaignFactory deployed at : 0xE00CdBC2807adfe3861C339e5d5aeCE61884ff08
```

## Application Workflow

- Any user can choose to create a campaign. User will have to set a minimum amount expected from the contributors.
- Once created other users can choose to support the creator by contributing wei to the project. The money would be store in the contract.
- Whenever the creator need to make som purchase, they have to craete a purchase request with description and address to the item supplier from whom required material will br brought.
- Creator will have to wait till he gets approval from at 50% of the contributors.
- On done creator can finalize the request and payment would be automatically made to the supplier.
