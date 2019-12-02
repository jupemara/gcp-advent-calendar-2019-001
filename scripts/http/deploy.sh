#!/usr/bin/env sh

gcloud functions deploy registerUserRequest \
  --entry-point=registerUserRequest \
  --runtime=nodejs10 \
  --trigger-http \
  --region=asia-northeast1
