// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    DateTime: any,
    String: string,
    ID: string,
    Boolean: boolean,
}

export interface Item {
    createdAt: (Scalars['DateTime'] | null)
    description: (Scalars['String'] | null)
    id: Scalars['ID']
    imageUrl: (Scalars['String'] | null)
    title: Scalars['String']
    updatedAt: (Scalars['DateTime'] | null)
    url: (Scalars['String'] | null)
    __typename: 'Item'
}

export interface Mutation {
    createItem: (Item | null)
    deleteItem: (Item | null)
    updateItem: (Item | null)
    __typename: 'Mutation'
}

export interface Query {
    getItems: ((Item | null)[] | null)
    getOneItem: (Item | null)
    __typename: 'Query'
}

export type SortOrder = 'asc' | 'desc'

export interface ItemGenqlSelection{
    createdAt?: boolean | number
    description?: boolean | number
    id?: boolean | number
    imageUrl?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createItem?: (ItemGenqlSelection & { __args: {description?: (Scalars['String'] | null), imageUrl?: (Scalars['String'] | null), title: Scalars['String'], url?: (Scalars['String'] | null)} })
    deleteItem?: (ItemGenqlSelection & { __args: {id: Scalars['ID']} })
    updateItem?: (ItemGenqlSelection & { __args: {description?: (Scalars['String'] | null), id: Scalars['ID'], imageUrl?: (Scalars['String'] | null), title?: (Scalars['String'] | null), url?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    getItems?: (ItemGenqlSelection & { __args?: {sortBy?: (SortOrder | null)} })
    getOneItem?: (ItemGenqlSelection & { __args: {id: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Item_possibleTypes: string[] = ['Item']
    export const isItem = (obj?: { __typename?: any } | null): obj is Item => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItem"')
      return Item_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    

export const enumSortOrder = {
   asc: 'asc' as const,
   desc: 'desc' as const
}
