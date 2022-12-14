import json
from sdk_e.client_graphql.index import execute_query
from sdk_e.client_graphql.mutation import createScheduled, dict_input
from sdk_e.client_graphql.client_graphql_exception import ClientGraphqlException
from gql.transport.exceptions import TransportQueryError
import asyncio
import os
from datetime import timezone, datetime, timedelta

def exec_query(item):
    try:
        endpoint = os.getenv('API_PARSERFISCAL_GRAPHQLAPIENDPOINTOUTPUT')
        api_key = os.getenv('API_PARSERFISCAL_GRAPHQLAPIKEYOUTPUT')
        loop = asyncio.get_event_loop()
        response = loop.run_until_complete(
            execute_query(
                createScheduled(), 
                dict_input(item),
                endpoint,
                api_key
            )
        )
        return response 

    except Exception as e:
        raise ClientGraphqlException(str(e.args))

    except TransportQueryError as e:
        raise ClientGraphqlException(str(e.args)) 

def generate_payload(event):
    e = event['arguments']
    lifetime = 30
    return { 
        'email': e['email'], 
        'end': set_end(e['start'],lifetime), 
        'lifetime': lifetime, 
        'mobile': e['mobile'], 
        'name': e['name'], 
        'start': set_start(e['start'])    
    }

def convert_iso_timezone_to_timestamp(iso_str,format="%a %b %d %Y %H:%M:%S %Z%z"):
    iso_extend_str = iso_str.split(" (")
    return datetime.strptime(iso_extend_str[0], format)

def set_end(start_time, lifetime=30):
    iso_extend = convert_iso_timezone_to_timestamp(start_time) + timedelta(minutes=lifetime)
    dt_ts = datetime.fromtimestamp(iso_extend.timestamp(), tz=timezone.utc)
    return int(dt_ts.timestamp())

def set_start(start_time):
    iso_extend = convert_iso_timezone_to_timestamp(start_time)
    dt_ts = datetime.fromtimestamp(iso_extend.timestamp(), tz=timezone.utc)
    return int(dt_ts.timestamp())

def handler(event, context):
    print('event::',event)
    payload = generate_payload(event)
    result =  exec_query(payload)
    print('RESULT::',result)
    return result['createScheduled']