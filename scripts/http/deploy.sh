#!/usr/bin/env sh

gcloud functions deploy http \
  --entry-point=http \
  --runtime=nodejs10 \
  --trigger-http \
  --region=asia-northeast1
