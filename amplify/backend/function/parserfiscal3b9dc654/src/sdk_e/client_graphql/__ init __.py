"""
ioos_pkg_skeleton is not a real package, just a set of best practices examples.
"""

from sdk_e.client_graphql.index import execute_query
from sdk_e.client_graphql.mutation import createBucketObjectPrediccionrojo, dict_input
from sdk_e.client_graphql.client_graphql_exception import ClientGraphqlException

__all__ = [
    "execute_query",
    "createBucketObjectPrediccionrojo",
    "dict_input",
    "ClientGraphqlException"
]