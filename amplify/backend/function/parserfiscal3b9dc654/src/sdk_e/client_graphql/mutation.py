from gql import gql

def createScheduled():
    query_string = gql("""    
    mutation createScheduled(
        $input: CreateScheduledInput!
    ) {
        createScheduled(input: $input) {
            id   
            email
            mobile
            name
            lifetime
            start
            end 
        }
    }""")
    return query_string    

def dict_input(item):
    return item