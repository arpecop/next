#!/bin/bash

echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == "production" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi