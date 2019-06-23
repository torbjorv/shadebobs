#!/bin/sh
set -e

ng build --prod --base-href "https://torbjorv.github.io/shadebobs/"
npx angular-cli-ghpages