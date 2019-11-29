#!/usr/bin/env sh

gcloud functions deploy event \
  --entry-point=event \
  --runtime=nodejs10 \
  --trigger-event=google.pubsub.topic.publish \
  --trigger-resource=test-topic \
  --region=asia-northeast1 \
