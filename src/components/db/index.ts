import {
  Amplify,
  API,
  DataStore,
  graphqlOperation,
  Storage as St,
} from 'aws-amplify';

import * as mutations from '../../src/graphql/mutations';
import * as queries from '../../src/graphql/queries';

Amplify.configure({
  aws_project_region: 'eu-west-1',
  aws_cognito_identity_pool_id:
    'eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8',
  aws_cognito_region: 'eu-west-1',

  aws_user_files_s3_bucket: 'eziktok-s3',
  aws_user_files_s3_bucket_region: 'us-east-1',
});

API.configure({
  aws_appsync_graphqlEndpoint:
    process.env.API_URL,
  aws_appsync_region: 'eu-west-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: process.env.API_KEY,
});

/* create a todo */

export { DataStore, API, queries, graphqlOperation, mutations, St };
