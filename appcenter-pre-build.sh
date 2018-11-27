#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
echo "pre-build"
ENV_WHITELIST=${ENV_WHITELIST:-"^RN"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env
printf "\n.env created with contents:\n"
cat .env

# pastes content of google-service.json file from ENV into blank google-services.json file
GOOGLE_JSON_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json

if [ -e "$GOOGLE_JSON_FILE" ]
then
    echo "Updating Google Json"
    echo "$GOOGLE_JSON" > $GOOGLE_JSON_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_JSON_FILE

    echo "File content:"
    cat $GOOGLE_JSON_FILE
fi
