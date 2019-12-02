#!/usr/bin/env sh

gcloud functions deploy ui \
  --entry-point=ui \
  --runtime=nodejs10 \
  --trigger-http \
  --region=asia-northeast1
