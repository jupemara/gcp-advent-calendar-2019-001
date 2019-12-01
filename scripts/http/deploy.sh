#!/usr/bin/env sh

gcloud functions deploy registerUserSync \
  --entry-point=registerUserSync \
  --runtime=nodejs10 \
  --trigger-http \
  --region=asia-northeast1
