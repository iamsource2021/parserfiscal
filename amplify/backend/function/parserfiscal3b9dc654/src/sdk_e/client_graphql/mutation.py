from gql import gql

def createScheduled():
    query_string = gql("""    
    mutation createScheduled(
        $input: CreateScheduledInput!
    ) {
        createScheduled(input: $input) {
            createdAt
            email
            end
            id
            lifetime
            mobile
            start
            name
            updatedAt   
        }
    }""")
    return query_string    

def dict_input(item):
    return item