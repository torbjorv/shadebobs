#!/bin/sh

ng build --prod
gcloud app deploy . --quiet
 