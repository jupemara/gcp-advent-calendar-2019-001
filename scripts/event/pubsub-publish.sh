#!/usr/bin/env sh

gcloud pubsub topics publish test-topic --message='Hello Cloud Pub/Sub! Here is my message!'
