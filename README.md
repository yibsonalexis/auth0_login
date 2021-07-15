# Auth0 React Native Embedded Login

In this example we are going to create an embedded login using Auth0.
we are going to use the latest React updates making use of the Hooks, in this case `useContext` and `useReducer`

## Screenshot
![image](https://user-images.githubusercontent.com/22086360/125231363-3c585a00-e2a0-11eb-98b8-9cba40a072c0.png)
![image](https://user-images.githubusercontent.com/22086360/125231375-3febe100-e2a0-11eb-8d49-efc5582b6149.png)
![image](https://user-images.githubusercontent.com/22086360/125231387-4417fe80-e2a0-11eb-877f-ea8c09d81c45.png)

### Install

Install dependencies

```bash
yarn
or
npm install
```

### Credentials 

Add your client credentials

Add your native Auth0 client credentials to `src/auth0-credentials.js`, you can find these in your [Auth0 Dashboard](https://manage.auth0.com/#/clients).

Note: Remember to have Password enabled in Aplications > {your_aplication} > advanced settings > Grant Types
![image](https://user-images.githubusercontent.com/22086360/125834123-2ea1de0e-198a-40d0-8c93-6d929ffdf5ea.png)

For more information visit the official [Auth0](https://auth0.com/docs/quickstart/native/react-native/00-login). web site
