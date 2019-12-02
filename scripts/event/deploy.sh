#!/usr/bin/env sh

gcloud functions deploy registerUser \
  --entry-point=registerUser \
  --runtime=nodejs10 \
  --trigger-event=google.pubsub.topic.publish \
  --trigger-resource=register-user-request \
  --region=asia-northeast1
