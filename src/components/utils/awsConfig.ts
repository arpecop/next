import { API, graphqlOperation } from 'aws-amplify';
import { CognitoJwtVerifier } from 'aws-cognito-jwt-verifier';
import jwt_decode from 'jwt-decode';
import { queries } from '../db';

const verify = new CognitoJwtVerifier();

export const verifytoken = async (sub: string) => {
  //fy.checkJwt(token, 'eu-west-1', 'eu-west-1_300BfRxxa');
  //const response = JSON.parse(tok);
  console.log(sub);
  //const decoded = jwt_decode(token);
  const existuser = await API.graphql(
    graphqlOperation(queries.getAd, { id: sub }),
  );
  if (existuser.data.getAd) {
    return '';
  } else {
    throw { message: 'моля оторизирайте се' };
  }

  //return tok;
};
