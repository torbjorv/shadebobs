#!/bin/sh
set -e

ng build --prod
gcloud app deploy . --quiet
 