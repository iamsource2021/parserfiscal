/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ScheduledReturn = {
  __typename: "ScheduledReturn",
  id: string,
  email: string,
  mobile: string,
  name: string,
  lifetime: number,
  start: number,
  end: number,
};

export type CreateScheduledInput = {
  id?: string | null,
  email: string,
  mobile: string,
  name: string,
  lifetime: number,
  start: number,
  end: number,
};

export type ModelScheduledConditionInput = {
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  name?: ModelStringInput | null,
  lifetime?: ModelIntInput | null,
  start?: ModelIntInput | null,
  end?: ModelIntInput | null,
  and?: Array< ModelScheduledConditionInput | null > | null,
  or?: Array< ModelScheduledConditionInput | null > | null,
  not?: ModelScheduledConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Scheduled = {
  __typename: "Scheduled",
  id: string,
  email: string,
  mobile: string,
  name: string,
  lifetime: number,
  start: number,
  end: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScheduledInput = {
  id: string,
  email?: string | null,
  mobile?: string | null,
  name?: string | null,
  lifetime?: number | null,
  start?: number | null,
  end?: number | null,
};

export type DeleteScheduledInput = {
  id: string,
};

export type ModelScheduledFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  name?: ModelStringInput | null,
  lifetime?: ModelIntInput | null,
  start?: ModelIntInput | null,
  end?: ModelIntInput | null,
  and?: Array< ModelScheduledFilterInput | null > | null,
  or?: Array< ModelScheduledFilterInput | null > | null,
  not?: ModelScheduledFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelScheduledConnection = {
  __typename: "ModelScheduledConnection",
  items:  Array<Scheduled | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionScheduledFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  lifetime?: ModelSubscriptionIntInput | null,
  start?: ModelSubscriptionIntInput | null,
  end?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionScheduledFilterInput | null > | null,
  or?: Array< ModelSubscriptionScheduledFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateScheduledCustomMutationVariables = {
  email: string,
  mobile: string,
  name: string,
  start: string,
};

export type CreateScheduledCustomMutation = {
  createScheduledCustom?:  {
    __typename: "ScheduledReturn",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
  } | null,
};

export type CreateScheduledMutationVariables = {
  input: CreateScheduledInput,
  condition?: ModelScheduledConditionInput | null,
};

export type CreateScheduledMutation = {
  createScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScheduledMutationVariables = {
  input: UpdateScheduledInput,
  condition?: ModelScheduledConditionInput | null,
};

export type UpdateScheduledMutation = {
  updateScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScheduledMutationVariables = {
  input: DeleteScheduledInput,
  condition?: ModelScheduledConditionInput | null,
};

export type DeleteScheduledMutation = {
  deleteScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetScheduledQueryVariables = {
  id: string,
};

export type GetScheduledQuery = {
  getScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScheduledsQueryVariables = {
  id?: string | null,
  filter?: ModelScheduledFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListScheduledsQuery = {
  listScheduleds?:  {
    __typename: "ModelScheduledConnection",
    items:  Array< {
      __typename: "Scheduled",
      id: string,
      email: string,
      mobile: string,
      name: string,
      lifetime: number,
      start: number,
      end: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateScheduledSubscriptionVariables = {
  filter?: ModelSubscriptionScheduledFilterInput | null,
};

export type OnCreateScheduledSubscription = {
  onCreateScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScheduledSubscriptionVariables = {
  filter?: ModelSubscriptionScheduledFilterInput | null,
};

export type OnUpdateScheduledSubscription = {
  onUpdateScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScheduledSubscriptionVariables = {
  filter?: ModelSubscriptionScheduledFilterInput | null,
};

export type OnDeleteScheduledSubscription = {
  onDeleteScheduled?:  {
    __typename: "Scheduled",
    id: string,
    email: string,
    mobile: string,
    name: string,
    lifetime: number,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
